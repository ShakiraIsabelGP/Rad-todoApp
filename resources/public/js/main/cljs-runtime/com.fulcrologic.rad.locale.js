goog.provide('com.fulcrologic.rad.locale');
/**
 * The current locale. In CLJ this will be a Locale object. In CLJS this will be a locale string like en-US.
 */
com.fulcrologic.rad.locale._STAR_current_locale_STAR_ = "en-US";
com.fulcrologic.rad.locale.current_locale = (function com$fulcrologic$rad$locale$current_locale(){
return com.fulcrologic.rad.locale._STAR_current_locale_STAR_;
});
/**
 * Set the locale of the application to the given locale code, e.g. `en-US`.
 */
com.fulcrologic.rad.locale.set_locale_BANG_ = (function com$fulcrologic$rad$locale$set_locale_BANG_(code){
return (com.fulcrologic.rad.locale._STAR_current_locale_STAR_ = code);
});

//# sourceMappingURL=com.fulcrologic.rad.locale.js.map
