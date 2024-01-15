(ns development
  (:require
    [clojure.tools.namespace.repl :as tools-ns :refer [disable-reload! refresh clear set-refresh-dirs]]
    [com.app.components.datomic :refer [datomic-connections]]
    [com.app.components.ring-middleware]
    [com.app.components.server]
    [com.app.model.seed :as seed]
    [com.fulcrologic.rad.ids :refer [new-uuid]]
    [mount.core :as mount]
    [taoensso.timbre :as log]
    [datomic.api :as d]
    [com.fulcrologic.rad.type-support.date-time :as dt]))

(set-refresh-dirs "src/datomic" "src/dev" "src/shared")


(defn seed! []
      (let [connection (:main datomic-connections)]
           (when connection
                 (log/info "SEEDING data.")
                 @(d/transact connection [(seed/new-priority (new-uuid 1000) "High")
                                          (seed/new-priority (new-uuid 1002) "Medium")
                                          (seed/new-priority (new-uuid 1003) "Low")]))))

(defn start []
      (mount/start-with-args {:config "config/defaults.edn"})
(seed!)
      :ok)

(defn stop
      "Stop the server."
      []
      (mount/stop))

(def go start)

(defn restart
      "Stop, refresh, and restart the server."
      []
      (stop)
      (refresh :after 'development/start))

(def reset #'restart)
