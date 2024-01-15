
shadow.cljs.devtools.client.env.module_loaded('main');

try { com.app.client.init(); } catch (e) { console.error("An error occurred when calling (com.app.client/init)"); throw(e); }