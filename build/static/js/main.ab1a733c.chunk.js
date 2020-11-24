(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,o){},37:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(1),a=o.n(i),s=o(20),l=o.n(s),r=o(12),c=o(16),u=o(4),d=(o(29),o(8)),p=o(2);function h(){var e=Object(p.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var v=o.p+"static/media/interview.944262d2.svg",j=function(e){var t=e.handleHeaderProfile,o=e.type,i=e.name,a=e.spanValue;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"input-group my-5",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-sm",children:a})}),Object(n.jsx)("input",{type:o,name:i,onChange:t,className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0})]})})},b=function(e){var t=e.handleChristianStatus;return Object(n.jsxs)("div",{className:"input-group mb-5",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-sm",children:"Born Again ?"})}),Object(n.jsxs)("select",{id:"inputState",defaultValue:"",onChange:t,className:"form-control",style:{background:"transparent"},children:[Object(n.jsx)("option",{disabled:!0}),Object(n.jsx)("option",{value:"christian",children:"Yes, I am"}),Object(n.jsx)("option",{value:"not-a-christian",children:"Not yet"}),Object(n.jsx)("option",{value:"not-a-christian",children:"Not sure"})]})]})},f=function(){return Object(i.useEffect)((function(){window.scrollTo(0,document.body.scrollHeight)})),Object(n.jsx)(n.Fragment,{})},m=function(e){var t=e.handleUserProfile,o=e.handleProfileSubmit,a=Object(i.useState)(),s=Object(u.a)(a,2),l=s[0],r=s[1],c=function(e){return t(e)};return Object(n.jsxs)("div",{className:"form",children:[Object(n.jsx)(j,{handleHeaderProfile:c,type:"text",name:"fName",spanValue:"User Name"}),Object(n.jsx)(b,{handleChristianStatus:function(e){var t=e.target.value;r("christian"===t?"christian":"not-a-christian"===t?"not-a-christian":"")}}),"christian"===l?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(j,{handleHeaderProfile:c,type:"number",name:"christAge",spanValue:"How Long"}),Object(n.jsx)(d.b,{to:"/assessment",children:Object(n.jsx)("button",{className:"btn btn-warning text-light mb-5",onClick:function(){return o(l)},children:"CONTINUE"})})]}):"not-a-christian"===l?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{}),Object(n.jsx)("p",{className:"lead text-secondary mb-5",children:"Do you want to be Born Again ?"})]}):null]})},y=function(e){var t=e.handleUserProfile,o=e.handleProfileSubmit;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container-fluid",id:"header",children:[Object(n.jsxs)("div",{className:"row py-5",style:{height:"auto"},children:[Object(n.jsx)("div",{className:"col-lg-2"}),Object(n.jsxs)("div",{className:"col-lg-8 my-auto py-auto",children:[Object(n.jsxs)("h5",{children:["\u201cLet us search out and examine our ways\u2026\u201d ",Object(n.jsx)("br",{})," Lamentations 3:40 "]}),Object(n.jsx)("img",{src:v,alt:"headerImage"}),Object(n.jsx)("hr",{className:"m-0"}),Object(n.jsx)("h1",{className:"display-4 my-2",children:"Answer questions to check the level of your spiritual life and maturity"}),Object(n.jsx)("hr",{className:"m-0"})]}),Object(n.jsx)("div",{className:"col-lg-2"})]}),Object(n.jsxs)("div",{className:"row",style:{background:"#fff"},children:[Object(n.jsx)("div",{className:"col-lg-2"}),Object(n.jsx)("div",{className:"col-lg-8 m-auto",children:Object(n.jsx)(m,{handleUserProfile:t,handleProfileSubmit:o})}),Object(n.jsx)("div",{className:"col-lg-2"})]})]})})},g=o(23),O=[{question:"Have you received the Holy Spirit",options:[{option:"Yes",value:"B1"},{option:"No",value:"D1"}]},{question:"How often do you attend sunday services",options:[{option:"Atleast every week",value:"B2"},{option:"Atleast every month",value:"C2"},{option:"Once in a while",value:"D2"}]},{question:"How often do you attend weekly services",options:[{option:"Atleast Regularly",value:"A3"},{option:"Not so consistent",value:"B3"},{option:"Once in a while",value:"C3"},{option:"Never",value:"D3"}]},{question:"Are you a participant or graduate of any discipleship school",options:[{option:"Yes",value:"B4"},{option:"No",value:"D4"}]},{question:"Reading of christian books per year",options:[{option:"More than 20 books",value:"A5"},{option:"10 to 20 books",value:"B5"},{option:"5 to 10 books",value:"C5"},{option:"less than 5 books",value:"D5"}]},{question:"Are you serving in any unit in your church",options:[{option:"Yes",value:"B6"},{option:"No",value:"D6"}]},{question:"Peronal Bible Reading & Study",options:[{option:"Atleast Daily",value:"A7"},{option:"Atleast once a week",value:"B7"},{option:"Once in a while",value:"C7"},{option:"Never",value:"D7"}]},{question:"Your fasting life",options:[{option:"I fast voluntarily",value:"B8"},{option:"Only when my church calls for it",value:"C8"},{option:"I don't fast",value:"D8"}]},{question:"Do you meditate on the word of God you've read or heard",options:[{option:"Yes",value:"B9"},{option:"No",value:"D9"}]},{question:"If you were challenged by an unbeliever to defend your Faith as a Christian, how will you perform on a scale of 1 to 10",options:[{option:"8 - 10",value:"A10"},{option:"5 - 7",value:"B10"},{option:"2 - 4",value:"C10"},{option:"less than 1",value:"D10"}]},{question:"Personal Evangelism",options:[{option:"I evangelise regularly",value:"B11"},{option:"Only when my church organises one",value:"C11"},{option:"I don't evangelise",value:"D11"}]},{question:"Apart from prayer, fasting and bible reading, do you have any other personal spiritual discipline",options:[{option:"Yes",value:"B12"},{option:"No",value:"D12"}]},{question:"Personal Prayer Life",options:[{option:"Atleast Daily",value:"A13"},{option:"Atleast weekly",value:"B13"},{option:"Once in a while",value:"C13"},{option:"Never",value:"D13"}]},{question:"Have you identified God's specific call upon your life",options:[{option:"Identified",value:"B14"},{option:"Still praying to identify it",value:"C14"},{option:"Unidentified",value:"D14"}]},{question:"After listening to a message or sermon, Do you cross-check what you've heard with the Bible",options:[{option:"I do for almost every message",value:"B15"},{option:"I do, except for that of my Pastor",value:"C15"},{option:"I don't",value:"D15"}]},{question:"Personal Devotion",options:[{option:"Almost Everyday",value:"A16"},{option:"Atleast weekly",value:"B16"},{option:"Once in a while",value:"C16"},{option:"Almost Never",value:"D16"}]},{question:"In your school, place of work or family, how would you rate your spiritual influence on others",options:[{option:"very influential",value:"A17"},{option:"influential",value:"B17"},{option:"a bit influential",value:"C17"},{option:"uninfluential",value:"D17"}]},{question:"Family Devotion",options:[{option:"I participate",value:"B18"},{option:"My family doesn't have one",value:"C18"},{option:"My family has but i don't participate",value:"D18"}]},{question:"Do you have the habit of jotting",options:[{option:"I jot always during personal study/meditation and from other ministrations",value:"A19"},{option:"I only jot from the ministration of others",value:"B19"},{option:"I jot only words I receive while studying",value:"C19"},{option:"I don't jot",value:"D19"}]},{question:"When you pray, how well do you pray for others including your family, country and other people",options:[{option:"Very well",value:"A20"},{option:"Not Very well",value:"B20"},{option:"I pray for myself alone",value:"C20"},{option:"I don't pray",value:"D20"}]},{question:"How well will you say you apply the word of God in your life",options:[{option:"Srongly",value:"B21"},{option:"Partially",value:"C21"},{option:"Never",value:"D21"}]},{question:"When talking with friends, how well do you share the word of God with them",options:[{option:"Frequently",value:"B22"},{option:"Occasionally",value:"C22"},{option:"Never",value:"D22"}]},{question:"How well do you visit fellow brethren",options:[{option:"I love visiting",value:"B23"},{option:"I visit only when asked to",value:"C23"},{option:"I don't visit",value:"D23"}]},{question:"Do you have a specific ministry in the body of Christ",options:[{option:"I have",value:"B24"},{option:"I don't have",value:"D24"}]},{question:"How well do you yield to the instructions of the Holy Spirit",options:[{option:"I yield Regularly",value:"B25"},{option:"I yield only when it's comfortable",value:"C25"},{option:"I don't yield",value:"D25"}]},{question:"How well do you give to others in need",options:[{option:"I am a regular giver",value:"B26"},{option:"I give only when what I have is more than enough",value:"C26"},{option:"I don't give",value:"D26"}]},{question:"Do you participate in other fellowship programmes (like vigil, campus fellowship, house fellowhip, youth/men/women meetings)",options:[{option:"Regular",value:"B27"},{option:"Average",value:"C27"},{option:"Absentee",value:"D27"}]},{question:"Are you satisfied with your current knowledge of God",options:[{option:"Very Satisfied",value:"B28"},{option:"Need a little more",value:"C28"},{option:"Need much more",value:"D28"}]},{question:"On a scale of 1 to 10 If people around you were asked to rate your life as a believer, how will rate",options:[{option:"8 - 10",value:"A29"},{option:"5 - 7",value:"B29"},{option:"2 - 4",value:"C29"},{option:"less than 1",value:"D29"}]},{question:"Rate your spiritual life in percentage",options:[{option:"76 - 100",value:"A30"},{option:"60 - 75",value:"B30"},{option:"41 - 50",value:"C30"},{option:"0 - 40",value:"D30"}]}],x=function(e){var t=e.questOption;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("option",{value:t.value,children:t.option})})},w=function(e){var t=e.handleGradeTotal,o=e.questData,i=e.index;e.newStyle;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)("div",{className:"input-group mb-5",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-sm",style:{width:"90px"},children:"Question ".concat(i+1)})}),Object(n.jsxs)("select",{id:"inputState",defaultValue:"default",onChange:t,className:"form-control",children:[Object(n.jsx)("option",{disabled:!0,value:"default",children:o.question}),o.options.map((function(e,t){return Object(n.jsx)(x,{questOption:e},t)}))]})]})},i)})},N=function(e){var t=e.submitGrade,o=e.completed,a=Object(i.useState)([]),s=Object(u.a)(a,2),l=s[0],r=s[1],c=Object(i.useState)(!1),p=Object(u.a)(c,2),h=p[0],v=p[1],j=function(e){v(!1);var t=e.target.value;r((function(e){return[].concat(Object(g.a)(e.filter((function(e){return!(e.slice(1)===t.slice(1))}))),[t])}))};return Object(n.jsxs)("div",{className:"container",id:"assessment-page",children:[Object(n.jsx)("h1",{className:"lead mt-5",children:"Please answer the following questions"}),Object(n.jsxs)("p",{className:"text-muted",children:[" ",l.length," out of 30 questions answered "]}),Object(n.jsx)("div",{className:"form row mt-5",children:O.map((function(e,t){return Object(n.jsx)(w,{handleGradeTotal:j,questData:e,index:t},t)}))}),Object(n.jsxs)("p",{className:"mb-4 text-muted",children:[" ",l.length," out of 30 questions answered "]}),h?Object(n.jsx)("p",{className:"text-danger lead m-0 mb-4 p-0",children:"To submit, You have to answer all the 30 questions above"}):null,Object(n.jsx)(d.b,{to:30===l.length?"./display-score":"./assessment",children:Object(n.jsx)("button",{className:"btn btn-warning text-light mb-5",onClick:function(){t(l),v(!o)},children:"FINISH"})})]})},D=o.p+"static/media/S1.be43f7f7.svg",q=o.p+"static/media/P1.07d157f2.svg",C=o.p+"static/media/I2.d9bed4ab.svg",A=o.p+"static/media/W1.8f75d046.svg",k=o.p+"static/media/D1.b4ee8ac6.svg",B=o(22),I=o.n(B),S=function(e){var t=e.userProfile,o=e.finalScore,a=Math.round(o/71*100),s=Object(i.useState)(),l=Object(u.a)(s,2),r=l[0],c=l[1],p=Object(i.useState)(),h=Object(u.a)(p,2),v=h[0],j=h[1],b=Object(i.useState)(),f=Object(u.a)(b,2),m=f[0],y=f[1];return Object(i.useEffect)((function(){a>=75?(c("text-success"),j("Matured Adult/Father"),y(D)):a<75&&a>=60?(c("text-primary"),j("Young Adult/Teacher"),y(q)):a<60&&a>=50?(c("text-info"),j("Teenager"),y(C)):a<50&&a>=40?(c("text-warning"),j("Young Child"),y(A)):a<40&&(c("text-danger"),j("Baby"),y(k))}),[a]),Object(n.jsx)(n.Fragment,{children:void 0===o?Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)("p",{className:"lead mt-5 pt-5",children:"Please go to the homepage to answer the necessary questions to view this page properly"}),Object(n.jsx)(d.b,{to:"./",children:"Click here to go to the Homepage"})]}):Object(n.jsxs)("div",{className:"container pt-5 px-5 mt-3",id:"display-page",children:[Object(n.jsx)("img",{src:m,alt:"bible"}),Object(n.jsxs)("div",{className:"row text-dark",style:{backgroundColor:"#fff"},children:[Object(n.jsx)("div",{className:"col-md-2"}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("h1",{className:"display-4 pt-5",children:["You're Done! ",t.fName," ",Object(n.jsx)("br",{})," your score is ",Object(n.jsxs)("span",{className:r,children:[Object(n.jsx)(I.a,{start:0,end:a,duration:3,delay:1}),"% "]}),Object(n.jsx)("br",{})," you are a ",Object(n.jsx)("span",{className:r,children:v})]})}),Object(n.jsx)("div",{className:"col-md-2"})]})]})})};var P=function(){var e=Object(i.useState)({fName:"",christAge:""}),t=Object(u.a)(e,2),o=t[0],a=t[1],s=Object(i.useState)(),l=Object(u.a)(s,2),v=l[0],j=l[1],b=Object(i.useState)(),f=Object(u.a)(b,2),m=f[0],g=f[1];return Object(n.jsxs)(d.a,{children:[Object(n.jsx)(h,{}),Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{exact:!0,path:"/",children:Object(n.jsx)(y,{handleProfileSubmit:function(e){e?console.log("Assessment Page",o):console.log("Will you like to become a Christian?")},handleUserProfile:function(e){var t=e.target,o=t.name,n=t.value;a((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(r.a)({},o,n))}))}})}),Object(n.jsx)(p.a,{path:"/assessment",children:Object(n.jsx)(N,{completed:m,submitGrade:function(e){j(0),30===e.length?(g(!0),e.forEach((function(e){e.includes("A")?j((function(e){return e+3})):e.includes("B")?j((function(e){return e+2})):e.includes("C")?j((function(e){return e+1})):e.includes("D")&&j((function(e){return e+0}))}))):g(!1)}})}),Object(n.jsx)(p.a,{path:"/display-score",children:Object(n.jsx)(S,{userProfile:o,finalScore:v})})]})]})},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,38)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;o(e),n(e),i(e),a(e),s(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),G()}},[[37,1,2]]]);
//# sourceMappingURL=main.ab1a733c.chunk.js.map