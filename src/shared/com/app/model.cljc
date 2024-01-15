(ns com.app.model
  (:require
    [com.app.model.todo :as todo]
    [com.app.model.priority :as priority ]
    [com.fulcrologic.rad.attributes :as attr]))

(def all-attributes (vec (concat
                           priority/attributes
                           todo/attributes)))

(def all-attribute-validator (attr/make-attribute-validator all-attributes))
