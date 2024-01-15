(ns com.app.ui
  (:require
    #?@(:cljs [[com.fulcrologic.semantic-ui.modules.dropdown.ui-dropdown :refer [ui-dropdown]]
               [com.fulcrologic.semantic-ui.modules.dropdown.ui-dropdown-menu :refer [ui-dropdown-menu]]
               [com.fulcrologic.semantic-ui.modules.dropdown.ui-dropdown-item :refer [ui-dropdown-item]]])
    #?(:clj  [com.fulcrologic.fulcro.dom-server :as dom :refer [div]]
       :cljs [com.fulcrologic.fulcro.dom :as dom :refer [div label input]])
    [com.fulcrologic.rad.form :as form]
    [com.app.ui.todo-forms :refer [TodoList TodoForm]]
    [com.fulcrologic.fulcro.routing.dynamic-routing :refer [defrouter]]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.rad.routing :as rroute]))


(defrouter MainRouter [this props]
  {:router-targets [TodoList TodoForm]
   :initial-route  [TodoList {}]})

(def ui-main-router (comp/factory MainRouter))
(defsc Root [this {:keys [router]}]
  {
   :query [{:router (comp/get-query MainRouter)}]
   :initial-state {:router {}}}
  (div :.ui.container.segment {:style {:marginTop "2em"}}

       #?(:cljs
          (comp/fragment
            (ui-dropdown {:text "Todo"}
                         (ui-dropdown-menu {}
                                           (ui-dropdown-item {:onClick (fn [] (rroute/route-to! this TodoList {}))} "View all")
                                           (ui-dropdown-item {:onClick (fn [] (form/create! this TodoForm))} "New")))))

       (ui-main-router router)))

(def ui-root (comp/factory Root))


