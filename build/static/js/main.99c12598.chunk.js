(window.SAFE_jsonpFunction=window.SAFE_jsonpFunction||[]).push([[0],{1233:function(n,e){},1270:function(n,e){},1315:function(n,e,t){"use strict";t.r(e);t(622),t(637);var o=t(1),r=t.n(o),i=t(40),a=t.n(i),c=(t(287),t(845),t(611)),s=t(612),l=t(619),u=t(613),f=t(620),d=t(195),g=function(n){function e(n){var t;Object(c.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this,n))).state={};var o=n.configuration;return d.Manager.create(o).then(function(n){return t.setState({manager:n})}).catch(function(n){return t.setState({error:n})}),t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.state,e=n.manager,t=n.error;return d.MessagingCanvas.defaultProps.predefinedMessage=!1,e?r.a.createElement("div",null,r.a.createElement("div",null," Ol\xe1, meu site "),r.a.createElement(d.ContextProvider,{manager:e},r.a.createElement(d.RootContainer,null))):(t&&console.error("Failed to initialize Flex Web Chat",t),null)}}]),e}(r.a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}a.a.render(r.a.createElement(g,{configuration:window.appConfig}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/assets/service-worker.js");v?(function(n){fetch(n).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):h(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):h(n)})}}()},621:function(n,e,t){n.exports=t(1315)},845:function(n,e,t){}},[[621,2,1]]]);
//# sourceMappingURL=main.99c12598.chunk.js.map