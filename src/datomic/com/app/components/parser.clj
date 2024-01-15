(ns com.app.components.parser
  (:require
    [com.app.components.auto-resolvers :refer [automatic-resolvers]]
    [com.app.components.config :refer [config]]
    [com.app.components.datomic :refer [datomic-connections]]
    [com.app.components.delete-middleware :as delete]
    [com.app.components.save-middleware :as save]
    [com.app.model :refer [all-attributes]]
    [com.fulcrologic.rad.attributes :as attr]
    [com.fulcrologic.rad.database-adapters.datomic :as datomic]
    [com.fulcrologic.rad.form :as form]
    [com.fulcrologic.rad.pathom :as pathom]
    [mount.core :refer [defstate]]
    [com.wsscode.pathom.core :as p]
    [com.fulcrologic.rad.type-support.date-time :as dt]
    [com.wsscode.pathom.connect :as pc]
    [com.app.model.todo :as todo]
    ))

(pc/defresolver index-explorer [{::pc/keys [indexes]} _]
                {::pc/input  #{:com.wsscode.pathom.viz.index-explorer/id}
                 ::pc/output [:com.wsscode.pathom.viz.index-explorer/index]}
                {:com.wsscode.pathom.viz.index-explorer/index
                 (p/transduce-maps
                   (remove (comp #{::pc/resolve ::pc/mutate} key))
                   indexes)})

(defstate parser
          :start
          (pathom/new-parser config
                             [(attr/pathom-plugin all-attributes)
                              (form/pathom-plugin save/middleware delete/middleware)
                              (datomic/pathom-plugin (fn [env] {:production (:main datomic-connections)}))

                              {::p/wrap-parser
                               (fn transform-parser-out-plugin-external [parser]
                                   (fn transform-parser-out-plugin-internal [env tx]
                                       (dt/with-timezone "America/Los_Angeles"
                                                         (if (and (map? env) (seq tx))
                                                           (parser env tx)
                                                           {}))))}]
                             [automatic-resolvers
                              form/resolvers
                              todo/resolvers
                              index-explorer]))