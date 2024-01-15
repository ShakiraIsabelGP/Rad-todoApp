(ns com.app.model.priority
  (:require
  [com.fulcrologic.rad.attributes :refer [defattr]]
  [com.fulcrologic.rad.attributes-options :as ao]
  [com.fulcrologic.fulcro.components :refer [defsc]]
  #?(:clj [com.app.components.database-queries :as queries])
  [com.fulcrologic.rad.report-options :as ro]))

(defsc Priority [_ _]
  {:query [:priority/id :priority/label]
   :ident :priority/id})

(defattr id :priority/id :uuid
         {ao/identity? true
          ao/schema    :production})

(defattr label :priority/label :string
         {ao/required?      true
          ao/identities     #{:priority/id}
          ro/column-heading "Priority"
          ao/schema         :production})

(defattr all-priorities :priority/all-priorities :ref
         {ao/target     :priority/id
          ao/pc-output  [{:priority/all-priorities [:priority/id]}]
          ao/pc-resolve (fn [{:keys [query-params] :as env} _]
                          #?(:clj
                             {:priority/all-priorities (queries/get-all-priorities env query-params)}))})

(def attributes [id label all-priorities])

