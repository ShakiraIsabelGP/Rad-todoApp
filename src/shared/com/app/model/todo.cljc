(ns com.app.model.todo
  (:require
    [com.fulcrologic.rad.attributes :refer [defattr]]
    [com.fulcrologic.rad.attributes-options :as ao]
    [com.wsscode.pathom.connect :as pc]
    [com.fulcrologic.rad.type-support.date-time :as datetime]
    [com.fulcrologic.rad.form :as form]
    [taoensso.timbre :as log]
    [com.fulcrologic.rad.report-options :as ro]
    #?@(:clj
        [[com.wsscode.pathom.connect :as pc :refer [defmutation]]
         [com.app.components.database-queries :as queries]]
        :cljs
        [[com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]])))

(defattr id :todo/id :uuid
         {ao/identity? true
          ao/schema    :production})

(defattr description :todo/description :string
         {ao/identities #{:todo/id}
          ao/schema     :production})

(defattr priority :todo/priority :ref
         {ao/target      :priority/id
          ao/cardinality :one
          ao/identities  #{:todo/id}
          ao/schema      :production})

(defattr date :todo/date :instant
         {::form/field-style           :date-at-noon
          ::datetime/default-time-zone "America/Bogota"
          ao/identities                #{:todo/id}
          ao/schema                    :production})

(defattr status :todo/status :boolean
         {ao/identities #{:todo/id}
          ro/column-heading   "Completed?"
          ao/schema     :production})

(defattr all-todos :todo/all-todos :ref
         {ao/target    :todo/id
          ::pc/output  [{:todo/all-todos [:todo/id]}]
          ::pc/resolve (fn [{:keys [query-params] :as env} _]
                         #?(:clj
                            {:todo/all-todos (queries/get-all-todos env (log/spy :info query-params))}))})

#?(:clj
   (pc/defresolver todo-priority-resolver [{:keys [parser] :as env} {:todo/keys [id]}]
                   {::pc/input  #{:todo/id}
                    ::pc/output [:todo/id :priority/label]}
                   (let [result (parser env [{[:todo/id id] [{:todo/priority [:priority/id :priority/label]}]}])]
                     (get-in (log/spy :info result) [[:todo/id id] :todo/priority]))))

#?(:clj
   (defmutation update-todo-status [env {id   :id status :status}]
                {::pc/params #{:todo/id}
                 ::pc/output [:todo/id]}
                (form/save-form* env {::form/id        id
                                      ::form/master-pk :todo/id
                                      ::form/delta     {[:todo/id id] {:todo/status {:before (not status) :after (boolean status)}}}})))

#?(:cljs
   (defmutation update-todo-status [{id :id status :status}]
                (action [{:keys [state]}]
                        (swap! state assoc-in [:todo/id id :todo/status] status))
                (remote [_] true)))


(def attributes [id description date priority status all-todos])

#?(:clj
   (def resolvers [todo-priority-resolver update-todo-status]))


