(ns com.app.model.seed
  (:require
    [com.fulcrologic.rad.type-support.decimal :as math]
    [com.fulcrologic.rad.report :as report]
    [com.fulcrologic.rad.ids :refer [new-uuid]]
    [com.fulcrologic.rad.attributes :as attr]))


(defn new-priority
  "Seed helper. Uses label for tempid purposes."
  [id label & {:as extras}]
  (merge
    {:db/id          label
     :priority/id    id
     :priority/label label}
    extras))


(defn new-todo
      "Seed helper. Uses street at db/id for tempid purposes."
      [id description & {:as extras}]
      (merge
        {:db/id      description
         :todo/id    id
         :todo/description  description}
        extras))