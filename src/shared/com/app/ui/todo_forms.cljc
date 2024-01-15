(ns com.app.ui.todo-forms
  (:require
    [com.app.model.todo :as todo]
    [com.app.model.priority :as priority]
    [com.fulcrologic.rad.picker-options :as picker-options]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.rad.form :as form]
    [com.fulcrologic.rad.form-options :as fo]
    [com.fulcrologic.rad.report :as report]
    [com.fulcrologic.rad.type-support.date-time :as datetime]
    [com.fulcrologic.rad.report-options :as ro]
    #?(:cljs [com.fulcrologic.fulcro.dom :as dom ])))

(defsc PriorityQuery [_ _]
  {:query [:priority/id :priority/label]
   :ident :priority/id})

(form/defsc-form TodoForm [this props]
                 {fo/id            todo/id
                  fo/attributes    [todo/description todo/priority todo/date]
                  fo/default-values {:todo/date (datetime/now)}
                  fo/route-prefix  "todo"
                  fo/title         "Todo Form"
                  fo/field-styles  {:todo/priority :pick-one}
                  fo/field-options {:todo/priority
                                    {::picker-options/query-key :priority/all-priorities
                                     ::picker-options/query-component PriorityQuery
                                     ::picker-options/options-xform
                                     (fn [_ options]
                                       (mapv (fn [{:priority/keys [id label]}]
                                                 {:text (str label) :value [:priority/id id]})
                                                 (sort-by :priority/label options)))}}
                  fo/cancel-route    ["todos"]})

(report/defsc-report TodoList [this props]
                     {ro/title               "Todo list"
                      ro/source-attribute    :todo/all-todos
                      ro/row-pk              todo/id
                      ro/columns             [todo/description todo/date priority/label todo/status]
                      ro/column-formatters  {:todo/status (fn [this status {:keys [todo/id]}]
                                               (dom/input {:type           "checkbox"
                                                           :defaultChecked status
                                                           :onChange #(comp/transact! this [(todo/update-todo-status {:id id :status (not status) } )])}))}
                      ro/form-links          {todo/description TodoForm}
                      ro/row-actions         [{:label "Delete"
                                               :action (fn [report-instance {:todo/keys [id]}] (form/delete! report-instance :todo/id id))}]
                      ro/run-on-mount?       true
                      ro/route               "todos"})