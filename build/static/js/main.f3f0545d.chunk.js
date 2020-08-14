(this["webpackJsonpgitrepos-tracker"]=this["webpackJsonpgitrepos-tracker"]||[]).push([[0],{35:function(e,t,a){e.exports=a(74)},46:function(e,t,a){},52:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),l=a.n(c),o=(a(40),a(5)),s=Object(n.createContext)({repos:[],setRepos:function(e){}}),i=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(s.Provider,{value:{repos:l,setRepos:i}},t)},u=(a(20),a(8)),m=a(2),p=a(15),E=a.n(p),d=a(34),f=a(31),v=a(3),b=a(9),h=(a(46),function(e){var t=e.repo;return r.a.createElement(u.b,{to:{pathname:"/repos/".concat(t.full_name)},className:"repo-item-link"},r.a.createElement("article",{className:"repo-item"},r.a.createElement("img",{src:t.owner.avatar_url,alt:t.full_name}),r.a.createElement("div",{className:"repo-item-content"},r.a.createElement("h1",null,t.owner.login),r.a.createElement("p",null,t.name,r.a.createElement("span",null,t.stargazers_count?r.a.createElement(v.g,{color:"#E94F37",size:16}):r.a.createElement(v.f,{size:16})," ",t.stargazers_count))),r.a.createElement("div",{className:"repo-item-issues"},r.a.createElement(b.a,{size:24}),r.a.createElement("p",null,t.open_issues," issues"))))}),g=(a(52),[{name:"GitHub",url:"https://github.com/phcarvalho",Icon:v.c},{name:"LinkedIn",url:"https://www.linkedin.com/in/ph-carvalho/",Icon:v.d},{name:"Twitter",url:"https://twitter.com/phcarvalhodev",Icon:v.h}]);var O=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Made by Paulo Carvalho"),r.a.createElement("div",{className:"social-container"},g.map((function(e){return r.a.createElement("a",{href:e.url,key:e.name,target:"blank"},r.a.createElement(e.Icon,{size:18}))}))))},j=a(33),N=a.n(j).a.create({baseURL:"https://api.github.com"});a(69);var k=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(s),i=l.repos,u=l.setRepos;function m(){return(m=Object(f.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c(""),!i.find((function(e){return e.full_name===a}))){e.next=7;break}alert("This repository has been added already!"),e.next=11;break;case 7:return e.next=9,N.get("/repos/".concat(a));case 9:n=e.sent,u([].concat(Object(d.a)(i),[n.data]));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"page-landing",className:"container"},r.a.createElement("header",null,r.a.createElement("div",{className:"page-header-title"},r.a.createElement(v.c,{size:64,color:"#393E41"}),r.a.createElement("h1",null,"GitRepos Tracker")),r.a.createElement("form",{id:"search-repo",onSubmit:function(e){return function(e){return m.apply(this,arguments)}(e)}},r.a.createElement("input",{type:"text",id:"repo",placeholder:"username/reponame",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{type:"submit"},r.a.createElement(v.e,{color:"#fff",size:30})))),r.a.createElement("main",null,i?i.map((function(e){return r.a.createElement(h,{key:e.full_name,repo:e})})):r.a.createElement("h1",null,"No repos found :(")),r.a.createElement(O,null))},y=(a(70),function(e){var t=e.issue;return r.a.createElement("a",{href:t.repository_url,className:"issue-item-link"},r.a.createElement("article",{className:"issue-item"},r.a.createElement("div",{className:"issue-title"},r.a.createElement(b.b,{size:18}),r.a.createElement("p",null,t.title)),r.a.createElement("div",{className:"issue-label-container"},t.labels.map((function(e){return r.a.createElement("div",{key:e.id,className:"issue-label",style:{background:"#".concat(e.color)}},e.name)})))))}),w=(a(71),function(e){var t=e.currentPage,a=e.lastPage,c=e.handlePageChange,l=Object(n.useState)([t]),s=Object(o.a)(l,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){var e=[],n=t-2,r=t+2;if(r<=a&&n>=1)for(var c=t-2;c<=r;c++)e.push(c);else if(n<1)for(var l=1;l<=5;l++)e.push(l);else if(r>a)for(var o=a-4;o<=a;o++)e.push(o);else for(var s=1;s<=r;s++)e.push(s);u(e)}),[t]),r.a.createElement("div",{className:"pagination-container"},r.a.createElement("button",{className:"arrow-left",disabled:1===t,onClick:function(){return c(t-1)}},r.a.createElement("div",null,r.a.createElement(v.a,{size:12}))),i.map((function(e){return r.a.createElement("button",{key:e,disabled:e===t,style:{background:t===e?"#26947e":"#eee",color:t===e?"#eee":"#393E41"},onClick:function(){return c(e)}},e)})),r.a.createElement("button",{className:"arrow-right",disabled:t===a,onClick:function(){return c(t+1)}},r.a.createElement("div",null,r.a.createElement(v.b,{size:12}))))}),z=(a(72),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(o.a)(l,2),p=i[0],E=i[1],d=Object(n.useState)(1),f=Object(o.a)(d,2),h=f[0],g=f[1],j=Object(n.useState)(0),k=Object(o.a)(j,2),z=k[0],_=k[1],x=Object(n.useState)([]),S=Object(o.a)(x,2),C=S[0],P=S[1],I=Object(n.useState)(),R=Object(o.a)(I,2),F=R[0],T=R[1],G=Object(n.useContext)(s).repos,L=Object(m.f)(),J=L.owner,M=L.name;return Object(n.useEffect)((function(){if(G){var e=G.find((function(e){return e.name===M}));if(e)return T(e),void E(!1)}N.get("/repos/".concat(J,"/").concat(M)).then((function(e){var t=e.data;T(t)})).catch((function(){c(!0)})),E(!1)}),[]),Object(n.useEffect)((function(){F&&N.get("/repos/".concat(F.full_name,"/issues?page=").concat(h,"&?sort=created&?state=open")).then((function(e){if(0===z){var t=e.headers.link.split(",").pop().split(";")[0],a=t.substring(t.indexOf("page=")+5),n=Number(a.substring(0,a.indexOf("&")));_(n)}var r=e.data;P(r)}))}),[F,h]),r.a.createElement("div",{id:"page-repo",className:"container"},r.a.createElement("header",null,r.a.createElement("div",{className:"repo-navigation"},r.a.createElement(u.b,{to:"/"},r.a.createElement(v.a,{size:16})),r.a.createElement(u.b,{to:"/"},"GitRepos Tracker")),a?r.a.createElement("div",{className:"repo-secondary-content"},r.a.createElement("h1",null,"We couldn't find ",r.a.createElement("span",null,"".concat(J,"/").concat(M))," repository :(")):r.a.createElement(r.a.Fragment,null,p?r.a.createElement("div",{className:"repo-secondary-content"},r.a.createElement("h1",null,"Loading...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"repo-title"},r.a.createElement("img",{src:null===F||void 0===F?void 0:F.owner.avatar_url,alt:null===F||void 0===F?void 0:F.full_name}),r.a.createElement("h1",null,null===F||void 0===F?void 0:F.full_name)),r.a.createElement("p",{id:"repo-description"},null===F||void 0===F?void 0:F.description),r.a.createElement("div",{className:"repo-details"},r.a.createElement("div",{className:"repo-issues"},r.a.createElement(b.a,{size:20}),r.a.createElement("p",null,null===F||void 0===F?void 0:F.open_issues," issues")),r.a.createElement("div",{className:"repo-stars"},r.a.createElement(v.g,{size:20,color:"#E94F37"}),r.a.createElement("p",null,null===F||void 0===F?void 0:F.stargazers_count)))))),r.a.createElement("main",null,C.map((function(e){return r.a.createElement(y,{key:e.id,issue:e})}))),0!==z&&r.a.createElement(w,{currentPage:h,lastPage:z,handlePageChange:function(e){g(e)}}),r.a.createElement(O,null))});var _=function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:k}),r.a.createElement(m.a,{path:"/repos/:owner/:name",component:z})))};a(73);var x=function(){return r.a.createElement(i,null,r.a.createElement(_,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f3f0545d.chunk.js.map