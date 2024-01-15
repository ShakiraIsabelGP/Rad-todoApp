(ns com.app.components.datomic
  (:require
    [com.fulcrologic.rad.database-adapters.datomic :as datomic]
    [mount.core :refer [defstate]]
    [datomic.api :as d]
    [com.app.model :refer [all-attributes]]
    [com.app.components.config :refer [config]]))

(defstate ^{:on-reload :noop} datomic-connections
          :start
          (datomic/start-databases all-attributes config))
