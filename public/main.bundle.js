!function(e){function t(t){for(var n,l,i=t[0],o=t[1],s=t[2],p=0,u=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&u.push(r[l][0]),r[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(m&&m(t);u.length;)u.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},c=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var m=o;c.push([27,1]),a()}({15:function(e){e.exports=JSON.parse('{"a":[{"description":"A collection of data structures written in TypeScript.","name":"data-structures","url":"https://github.com/deepconcern/data-structures","topics":["typescript","library"]},{"description":null,"name":"deepconcern.github.io","url":"https://github.com/deepconcern/deepconcern.github.io","topics":[]},{"description":"A game discovery website","name":"game-discovery","url":"https://github.com/deepconcern/game-discovery","topics":["application","typescript","react","graphql","apollo"]},{"description":"An Android app that fetches movies from themoviedb.org and displays their information.","name":"popularmovies","url":"https://github.com/deepconcern/popularmovies","topics":[]},{"description":null,"name":"sudoku-python","url":"https://github.com/deepconcern/sudoku-python","topics":[]},{"description":"A weather app that fetches information from openweathermap.org and displays it.","name":"sunshine","url":"https://github.com/deepconcern/sunshine","topics":[]},{"description":null,"name":"the-clone-wars","url":"https://github.com/deepconcern/the-clone-wars","topics":[]},{"description":"A boilerplate for creating TypeScript and React apps. ","name":"ts-react-boilerplate","url":"https://github.com/deepconcern/ts-react-boilerplate","topics":[]},{"description":"A portfolio containing applications I made as a part of my Udacity Nanodegree.","name":"udacityportfolio","url":"https://github.com/deepconcern/udacityportfolio","topics":[]},{"description":"A test project that fetches weather reports based on location.","name":"weatherproject","url":"https://github.com/deepconcern/weatherproject","topics":[]},{"description":null,"name":"westcoast","url":"https://github.com/deepconcern/westcoast","topics":[]}]}')},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a(6),i=a(5),o=a(15),s=Object(n.createContext)([]),m=function(e){var t=e.topicFilter,a=Object(n.useContext)(s).filter((function(e){return e.topics.includes(t)}));return 0===a.length?r.a.createElement("p",null,"No repositories... yet!"):r.a.createElement("dl",null,a.map((function(e){return r.a.createElement(n.Fragment,{key:e.name},r.a.createElement("dt",null,r.a.createElement("a",{href:e.url},e.name)),r.a.createElement("dd",null,e.description))})))},p=function(e){var t=e.children,a=new Date;return r.a.createElement(n.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.b,{className:"navbar-item",to:"/"},r.a.createElement("img",{src:"/assets/deepconcern-logo.png",width:"196",height:"28"}))),r.a.createElement("div",{className:"navbar-start"},r.a.createElement(l.b,{className:"navbar-item",to:"/apps"},"Apps"),r.a.createElement(l.b,{className:"navbar-item",to:"/games"},"Games"),r.a.createElement(l.b,{className:"navbar-item",to:"/libraries"},"Libraries")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{className:"navbar-item",href:"https://github.com/deepconcern"},"GitHub"),r.a.createElement("a",{className:"navbar-item",href:"https://www.linkedin.com/in/wyatt-barnes-47766823"},"LinkedIn")))),r.a.createElement("main",null,t),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},"© ",a.getFullYear()," by Wyatt Barnes")))},u=function(){return r.a.createElement(p,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Apps"),r.a.createElement("div",{className:"box content"},r.a.createElement(m,{topicFilter:"application"})))))},d=function(){return r.a.createElement(p,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Games"),r.a.createElement("div",{className:"box content"},r.a.createElement(m,{topicFilter:"game"})))))},h=function(){return r.a.createElement(p,null,r.a.createElement("section",{className:"section has-text-centered"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"media"},r.a.createElement("figure",{className:"media-left image is-128x128"},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/975ece315c6839130cf7ede11ecd4e9c.jpg?s=128"})),r.a.createElement("div",{className:"media-right content"},r.a.createElement("h2",{className:"title"},"DeepConcern"),r.a.createElement("p",{className:"subtitle"},"(a.k.a. Wyatt Barnes)"),r.a.createElement("p",null,"Developer, game enthusiast, third descriptor"))))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("div",{className:"box content"},r.a.createElement("h3",{className:"title"},"Interests"),r.a.createElement("ul",null,r.a.createElement("li",null,"JavaScript + TypeScript"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"GraphQL"),r.a.createElement("li",null,"Web development"),r.a.createElement("li",null,"Video Games"),r.a.createElement("li",null,"Japan")))),r.a.createElement("div",{className:"column is-one-quarter"},r.a.createElement("div",{className:"box content"},r.a.createElement("h3",{className:"title"},"Favorie foods/drinks"),r.a.createElement("ul",null,r.a.createElement("li",null,"Pizza"),r.a.createElement("li",null,"Ramen"),r.a.createElement("li",null,"Mugi-cha"),r.a.createElement("li",null,"Hoji-cha"),r.a.createElement("li",null,"Flat white"),r.a.createElement("li",null,"Curry-pan")))))))},E=function(){return r.a.createElement(p,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Libraries"),r.a.createElement("div",{className:"box content"},r.a.createElement(m,{topicFilter:"library"})))))},b=function(){return r.a.createElement(s.Provider,{value:o.a},r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(i.a,{exact:!0,path:"/apps"},r.a.createElement(u,null)),r.a.createElement(i.a,{exact:!0,path:"/games"},r.a.createElement(d,null)),r.a.createElement(i.a,{exact:!0,path:"/libraries"},r.a.createElement(E,null)))))};Object(c.render)(r.a.createElement(b,null),document.getElementById("app"))}});
//# sourceMappingURL=main.bundle.js.map