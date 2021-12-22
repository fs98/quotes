(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{38:function(e,t,n){"use strict";var r=n(37),s=n(35),c=n(40),a=n(36),o=n.n(a),u=n(0);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useReducer)(i,{status:t?"pending":null,data:null,error:null}),a=Object(c.a)(n,2),p=a[0],d=a[1],l=Object(u.useCallback)(function(){var t=Object(s.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,d({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:l},p)}},39:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return b}));var r=n(37),s=n(35),c=n(36),a=n.n(c),o="https://quotes-fae8a-default-rtdb.europe-west1.firebasedatabase.app/";function u(){return i.apply(this,arguments)}function i(){return(i=Object(s.a)(a.a.mark((function e(){var t,n,s,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(c in s=[],n)u=Object(r.a)({id:c},n[c]),s.push(u);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(a.a.mark((function e(t){var n,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not fetch quote.");case 8:return c=Object(r.a)({id:t},s),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(a.a.mark((function e(t){var n,s,c,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not get comments.");case 8:for(u in c=[],s)i=Object(r.a)({id:u},s[u]),c.push(i);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},50:function(e,t,n){e.exports={item:"QuoteItem_item__VnTgE"}},51:function(e,t,n){e.exports={list:"QuoteList_list__1whWT",sorting:"QuoteList_sorting__3pYtt"}},52:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__sjuu4"}},55:function(e,t,n){"use strict";n.r(t);var r=n(49),s=n(0),c=n(2),a=n(8),o=n(50),u=n.n(o),i=n(1),p=function(e){return Object(i.jsxs)("li",{className:u.a.item,children:[Object(i.jsxs)("figure",{children:[Object(i.jsx)("blockquote",{children:Object(i.jsx)("p",{children:e.text})}),Object(i.jsx)("figcaption",{children:e.author})]}),Object(i.jsx)(a.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},d=n(51),l=n.n(d),f=function(e){var t,n,r=Object(c.h)(),a=Object(c.i)(),o="asc"===new URLSearchParams(a.search).get("sort"),u=(t=e.quotes,n=o,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(i.jsxs)(s.Fragment,{children:[Object(i.jsx)("div",{className:l.a.sorting,children:Object(i.jsxs)("button",{onClick:function(){r.push({pathname:a.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(i.jsx)("ul",{className:l.a.list,children:u.map((function(e){return Object(i.jsx)(p,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=n(38),j=n(39),b=n(14),m=n(52),x=n.n(m),O=function(){return Object(i.jsxs)("div",{className:x.a.noquotes,children:[Object(i.jsx)("p",{children:"No quotes found!"}),Object(i.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})};t.default=function(){var e=Object(h.a)(j.d,!0),t=e.sendRequest,n=e.status,s=e.data,c=e.error;return Object(r.useEffect)((function(){t()}),[t]),"pending"===n?Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(b.a,{})}):c?Object(i.jsx)("div",{className:"centered focused",children:c}):"completed"!==n||s&&0!==s.length?Object(i.jsx)(f,{quotes:s}):Object(i.jsx)(O,{})}}}]);
//# sourceMappingURL=5.d38dd8ea.chunk.js.map