(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(9),i=a.n(c),o=(a(17),a(7)),l=a.n(o),s=a(10),u=a(0),m=a(1),h=a(5),d=a(2),w=a(4),y=(a(19),a(20),a(21),a(22),a(11)),p=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={data:null,cityInput:"",weather:[]},a.cityInputOnChangeHandler=function(e){a.setState({cityInput:e.target.value})},a.submitButtonHandler=Object(s.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/weatherAPI/".concat(a.state.cityInput));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:console.log(n.hourly.data),a.setState({weather:n.hourly.data});case 10:case"end":return e.stop()}},e)})),a.getIcon=function(e){switch(console.log(e," test"),e){case"cloudy":return r.a.createElement("i",{className:"wi wi-cloudy"});case"rain":return r.a.createElement("i",{className:"wi wi-rain"});case"partly-cloudy-day":return r.a.createElement("i",{className:"wi wi-day-cloudy"});case"partly-cloudy-night":return r.a.createElement("i",{className:"wi wi-night-cloudy"});case"clear-day":return r.a.createElement("i",{className:"wi wi-day-sunny"});case"clear-night":return r.a.createElement("i",{className:"wi wi-night-clear"});default:return null}},a}return Object(w.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.weather.map(function(t){var a=y.a.fromSeconds(t.time).toFormat("h a");return r.a.createElement("div",{className:"weatherCard"},r.a.createElement("h1",null,a),r.a.createElement("h2",null,t.summary),e.getIcon(t.icon),r.a.createElement("h3",null,"Chance of rain: ",Math.round(100*t.precipProbability)+"%"))});return r.a.createElement("div",{className:"appContainer"},r.a.createElement("h1",{className:"title"},"Enter City Only Below"),r.a.createElement("input",{onChange:this.cityInputOnChangeHandler}),r.a.createElement("button",{onClick:this.submitButtonHandler},"Request Weather"),r.a.createElement("div",{className:"weatherInfoDiv"},t))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.03fce343.chunk.js.map