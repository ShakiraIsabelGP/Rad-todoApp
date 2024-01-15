(ns com.app.components.database-queries
  (:require
    [com.fulcrologic.rad.database-adapters.datomic :as datomic]
    [com.fulcrologic.rad.database-adapters.datomic-options :as do]
    [datomic.api :as d]
    [taoensso.timbre :as log]
    [taoensso.encore :as enc]))

(defn- env->db [env]
       (some-> env (get-in [do/databases :production]) (deref)))

(defn get-all-todos
      [env query-params]
      (if-let [db (env->db env)]
              (let [ids (d/q '[:find ?uuid
                               :where
                               [?dbid :todo/id ?uuid]] db)]
                   (mapv (fn [[id]] {:todo/id id}) ids))
              (log/error "No database connection available")))

(defn get-all-priorities
  [env query-params]
  (if-let [db (some-> (get-in env [::datomic/databases :production]) deref)]
    (let [ids (d/q '[:find [?id ...]
                     :where
                     [?e :priority/label]
                     [?e :priority/id ?id]] db)]
      (mapv (fn [id] {:priority/id id}) ids))
    (log/error "No database atom for production schema!")))
