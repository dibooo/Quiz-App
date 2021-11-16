(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{107:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(9),s=c.n(n),r=(c(75),c(45)),i=c.n(r),o=c(57),l=c(14),u=c(58),j=c.n(u),d=c(35),b=c(8),h=(c(96),c(97),c(3)),v=function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(d.b,{to:"/",className:"title",children:"Intuitive Quiz Hub"}),Object(h.jsx)("hr",{className:"divider"})]})},O=c(145),g=c(146),m=c(143),f=function(e){var t=e.children;return Object(h.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:4,backgroundColor:"orangered",textAlign:"center",color:"white",textTransform:"capitalize"},children:t})},x=[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}],p=(c(107),c.p+"static/media/quiz.afa68be9.svg"),y=function(e){var t=e.name,c=e.setName,n=e.fetchQuestions,s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(a.useState)(""),j=Object(l.a)(u,2),d=j[0],v=j[1],y=Object(a.useState)(!1),S=Object(l.a)(y,2),N=S[0],z=S[1],Q=Object(b.f)();return Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"settings",children:[Object(h.jsx)("span",{style:{fontSize:30},children:"Quiz Settings"}),Object(h.jsxs)("div",{className:"settings__select",children:[N&&Object(h.jsx)(f,{children:"Please Fill all the feilds"}),Object(h.jsx)(O.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(h.jsx)(O.a,{select:!0,label:"Select Category",value:i,onChange:function(e){return o(e.target.value)},variant:"outlined",style:{marginBottom:30},children:x.map((function(e){return Object(h.jsx)(g.a,{value:e.value,children:e.category},e.category)}))}),Object(h.jsxs)(O.a,{select:!0,label:"Select Difficulty",value:d,onChange:function(e){return v(e.target.value)},variant:"outlined",style:{marginBottom:30},children:[Object(h.jsx)(g.a,{value:"easy",children:"Easy"},"Easy"),Object(h.jsx)(g.a,{value:"medium",children:"Medium"},"Medium"),Object(h.jsx)(g.a,{value:"hard",children:"Hard"},"Hard")]}),Object(h.jsx)(m.a,{variant:"contained",color:"primary",size:"large",onClick:function(){i&&d&&t?(z(!1),n(i,d),Q.push("/quiz")):z(!0)},children:"Start Quiz"})]})]}),Object(h.jsx)("img",{src:p,className:"banner",alt:"quiz app"})]})},S=c(64),N=c(144),z=(c(109),function(e){var t=e.currQues,c=e.setCurrQues,n=e.questions,s=e.options,r=e.correct,i=e.setScore,o=e.score,u=e.setQuestions,j=Object(a.useState)(),d=Object(l.a)(j,2),v=d[0],O=d[1],g=Object(a.useState)(!1),x=Object(l.a)(g,2),p=x[0],y=x[1],S=Object(b.f)(),N=function(e){return v===e&&v===r?"select":v===e&&v!==r?"wrong":e===r?"select":void 0};return Object(h.jsxs)("div",{className:"question",children:[Object(h.jsxs)("h1",{children:["Question ",t+1," :"]}),Object(h.jsxs)("div",{className:"singleQuestion",children:[Object(h.jsx)("h2",{children:n[t].question}),Object(h.jsxs)("div",{className:"options",children:[p&&Object(h.jsx)(f,{children:p}),s&&s.map((function(e){return Object(h.jsx)("button",{className:"singleOption  ".concat(v&&N(e)),onClick:function(){return function(e){O(e),e===r&&i(o+1),y(!1)}(e)},disabled:v,children:e},e)}))]}),Object(h.jsxs)("div",{className:"controls",children:[Object(h.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{width:185},href:"/",onClick:function(){return c(0),void u()},children:"Quit"}),Object(h.jsx)(m.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?S.push("/result"):v?(c(t+1),O()):y("Please select an option first")},children:t>20?"Submit":"Next Question"})]})]})]})}),Q=(c(110),function(e){var t,c=e.name,n=e.questions,s=e.score,r=e.setScore,i=e.setQuestions,o=Object(a.useState)(),u=Object(l.a)(o,2),j=u[0],d=u[1],b=Object(a.useState)(0),v=Object(l.a)(b,2),O=v[0],g=v[1];Object(a.useEffect)((function(){var e,t;d(n&&m([null===(e=n[O])||void 0===e?void 0:e.correct_answer].concat(Object(S.a)(null===(t=n[O])||void 0===t?void 0:t.incorrect_answers))))}),[O,n]),console.log(n);var m=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(h.jsxs)("div",{className:"quiz",children:[Object(h.jsxs)("span",{className:"subtitle",children:["Welcome, ",c]}),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"quizInfo",children:[Object(h.jsx)("span",{children:n[O].category}),Object(h.jsxs)("span",{children:["Score : ",s]})]}),Object(h.jsx)(z,{currQues:O,setCurrQues:g,questions:n,options:j,correct:null===(t=n[O])||void 0===t?void 0:t.correct_answer,score:s,setScore:r,setQuestions:i})]}):Object(h.jsx)(N.a,{style:{margin:100},color:"inherit",size:150,thickness:1})]})}),q=(c(111),function(e){var t=e.name,c=e.score,n=Object(b.f)();return Object(a.useEffect)((function(){t||n.push("/")}),[t,n]),Object(h.jsxs)("div",{className:"result",children:[Object(h.jsxs)("span",{className:"title",children:["Final Score : ",c]}),Object(h.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},href:"/",children:"Go to homepage"})]})}),C=c.p+"static/media/ques1.fe1684c8.png";var w=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(l.a)(s,2),u=r[0],O=r[1],g=Object(a.useState)(0),m=Object(l.a)(g,2),f=m[0],x=m[1],p=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c,a,s,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",c=r.length>1&&void 0!==r[1]?r[1]:"",e.next=4,j.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t)).concat(c&&"&difficulty=".concat(c),"&type=multiple"));case 4:a=e.sent,s=a.data,n(s.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(d.a,{children:Object(h.jsxs)("div",{className:"app",style:{backgroundImage:"url(".concat(C,")")},children:[Object(h.jsx)(v,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,children:Object(h.jsx)(y,{name:u,setName:O,fetchQuestions:p})}),Object(h.jsx)(b.a,{path:"/quiz",children:Object(h.jsx)(Q,{name:u,questions:c,score:f,setScore:x,setQuestions:n})}),Object(h.jsx)(b.a,{path:"/result",children:Object(h.jsx)(q,{name:u,score:f})})]})]})})};s.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))},75:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.b2880f0f.chunk.js.map