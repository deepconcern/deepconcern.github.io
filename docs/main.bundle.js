!function(e){function t(t){for(var r,c,i=t[0],o=t[1],s=t[2],m=0,p=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);p.length;)p.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={0:0},l=[];function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=o;l.push([35,1]),a()}({13:function(e,t){},35:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(15),c=a(6),i=a(5),o=a(21),s=Object(r.createContext)({error:null,fetchRepositories:function(){},loading:!1,repositories:null});function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){E(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={error:null,isFetching:!1,hasFetched:!1,repositories:null},b=function(e,t){switch(t.type){case"FETCH_INITIATED":return f(f({},e),{},{isFetching:!0});case"FETCH_SUCCEEDED":return f(f({},e),{},{isFetching:!1,hasFetched:!0,repositories:t.data});case"FETCH_FAILED":return f(f({},e),{},{error:t.data,isFetching:!1,hasFetched:!1})}},h=new o.a({auth:"d1cd029544fe1edb5712cb456473bc8101569431"}),v=n.a.memo((function(e){var t=e.children,a=u(Object(r.useReducer)(b,d),2),l=a[0],c=l.error,i=l.isFetching,o=l.hasFetched,m=l.repositories,p=a[1],f={error:c,fetchRepositories:Object(r.useCallback)((function(){i||o||(p({type:"FETCH_INITIATED",data:null}),h.repos.listForUser({username:"deepconcern",type:"owner"}).then((function(e){var t=e.data;return Promise.all(t.map((function(e){return h.repos.getAllTopics({repo:e.name,owner:"deepconcern"}).then((function(t){var a=t.data;return{description:e.description,name:e.name,url:e.url,topics:a.names}}))}))).then((function(e){p({type:"FETCH_SUCCEEDED",data:e})}))})).catch((function(e){p({type:"FETCH_FAILED",data:Error(e)})})))}),[i,o]),loading:i,repositories:m};return n.a.createElement(s.Provider,{value:f},t)})),y=(a(13),function(e){var t=e.topicFilter,a=function(){var e=Object(r.useContext)(s),t=e.error,a=e.fetchRepositories,n=e.loading,l=e.repositories;return Object(r.useEffect)((function(){a()}),[]),{error:t,loading:n,repositories:l}}(),l=a.error,c=a.loading,i=a.repositories;if(l)return console.error(l),n.a.createElement("p",null,"Error loading repositories");if(c)return n.a.createElement("p",null,"Loading repositories...");if(i){var o=i.filter((function(e){return e.topics.includes(t)}));return 0===o.length?n.a.createElement("p",null,"No repositories... yet!"):n.a.createElement("dl",null,o.map((function(e){return n.a.createElement(r.Fragment,{key:e.name},n.a.createElement("dt",null,n.a.createElement("a",{href:e.url},e.name)),n.a.createElement("dd",null,e.description))})))}return n.a.createElement("p",null,"No repositories... yet!")}),g=function(e){var t=e.children,a=new Date;return n.a.createElement(r.Fragment,null,n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(c.b,{className:"navbar-item",to:"/"},n.a.createElement("img",{src:"/assets/deepconcern-logo.png",width:"196",height:"28"}))),n.a.createElement("div",{className:"navbar-start"},n.a.createElement(c.b,{className:"navbar-item",to:"/apps"},"Apps"),n.a.createElement(c.b,{className:"navbar-item",to:"/games"},"Games"),n.a.createElement(c.b,{className:"navbar-item",to:"/libraries"},"Libraries")),n.a.createElement("div",{className:"navbar-end"},n.a.createElement("a",{className:"navbar-item",href:"https://github.com/deepconcern"},"GitHub"),n.a.createElement("a",{className:"navbar-item",href:"https://www.linkedin.com/in/wyatt-barnes-47766823"},"LinkedIn")))),n.a.createElement("main",null,t),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"content has-text-centered"},"© ",a.getFullYear()," by Wyatt Barnes")))},N=function(){return n.a.createElement(g,null,n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Apps"),n.a.createElement("div",{className:"box content"},n.a.createElement(y,{topicFilter:"application"})))))},O=function(){return n.a.createElement(g,null,n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Games"),n.a.createElement("div",{className:"box content"},n.a.createElement(y,{topicFilter:"game"})))))},w=function(){return n.a.createElement(g,null,n.a.createElement("section",{className:"section has-text-centered"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"media"},n.a.createElement("figure",{className:"media-left image is-128x128"},n.a.createElement("img",{src:"https://www.gravatar.com/avatar/975ece315c6839130cf7ede11ecd4e9c.jpg?s=128"})),n.a.createElement("div",{className:"media-right content"},n.a.createElement("h2",{className:"title"},"DeepConcern"),n.a.createElement("p",{className:"subtitle"},"(a.k.a. Wyatt Barnes)"),n.a.createElement("p",null,"Developer, game enthusiast, third descriptor"))))),n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"columns is-centered"},n.a.createElement("div",{className:"column is-one-quarter"},n.a.createElement("div",{className:"box content"},n.a.createElement("h3",{className:"title"},"Interests"),n.a.createElement("ul",null,n.a.createElement("li",null,"JavaScript + TypeScript"),n.a.createElement("li",null,"React"),n.a.createElement("li",null,"GraphQL"),n.a.createElement("li",null,"Web development"),n.a.createElement("li",null,"Video Games"),n.a.createElement("li",null,"Japan")))),n.a.createElement("div",{className:"column is-one-quarter"},n.a.createElement("div",{className:"box content"},n.a.createElement("h3",{className:"title"},"Favorie foods/drinks"),n.a.createElement("ul",null,n.a.createElement("li",null,"Pizza"),n.a.createElement("li",null,"Ramen"),n.a.createElement("li",null,"Mugi-cha"),n.a.createElement("li",null,"Hoji-cha"),n.a.createElement("li",null,"Flat white"),n.a.createElement("li",null,"Curry-pan")))))))},j=function(){return n.a.createElement(g,null,n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Libraries"),n.a.createElement("div",{className:"box content"},n.a.createElement(y,{topicFilter:"library"})))))},F=function(){return n.a.createElement(v,null,n.a.createElement(c.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(w,null)),n.a.createElement(i.a,{exact:!0,path:"/apps"},n.a.createElement(N,null)),n.a.createElement(i.a,{exact:!0,path:"/games"},n.a.createElement(O,null)),n.a.createElement(i.a,{exact:!0,path:"/libraries"},n.a.createElement(j,null)))))};Object(l.render)(n.a.createElement(F,null),document.getElementById("app"))}});
//# sourceMappingURL=main.bundle.js.map