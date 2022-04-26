"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3150],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9007:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Introduction",description:"A summary of the most common actions in Moodle tracker.",tags:["Processes","Quality Assurance","Core development","Git","Tracker"]},l=void 0,c={unversionedId:"development/tracker",id:"development/tracker",title:"Introduction",description:"A summary of the most common actions in Moodle tracker.",source:"@site/general/development/tracker.md",sourceDirName:"development",slug:"/development/tracker",permalink:"/devdocs/general/development/tracker",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/tracker.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Quality Assurance",permalink:"/devdocs/general/tags/quality-assurance"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Git",permalink:"/devdocs/general/tags/git"},{label:"Tracker",permalink:"/devdocs/general/tags/tracker"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1650987624,formattedLastUpdatedAt:"26/04/2022",frontMatter:{title:"Introduction",description:"A summary of the most common actions in Moodle tracker.",tags:["Processes","Quality Assurance","Core development","Git","Tracker"]},sidebar:"process",previous:{title:"QA testing",permalink:"/devdocs/general/development/process/testing/qa"},next:{title:"Tips & tricks",permalink:"/devdocs/general/development/tracker/tips/"}},p={},d=[{value:"Creating a tracker account",id:"creating-a-tracker-account",level:2},{value:"Searching for an issue",id:"searching-for-an-issue",level:2},{value:"Reporting an issue",id:"reporting-an-issue",level:2},{value:"Receiving email notification of issue updates",id:"receiving-email-notification-of-issue-updates",level:2},{value:"Helping determine development priorities",id:"helping-determine-development-priorities",level:2},{value:"What makes a good tracker issue?",id:"what-makes-a-good-tracker-issue",level:2},{value:"What can I do if a problem remains?",id:"what-can-i-do-if-a-problem-remains",level:2},{value:"See also",id:"see-also",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/"},"Moodle Tracker")," is our database for recording and managing all Moodle development issues: bugs (problems with the software), improvements and feature requests."),(0,o.kt)("h2",{id:"creating-a-tracker-account"},"Creating a tracker account"),(0,o.kt)("p",null,"You don't need an account to browse and search for issues in the tracker. However, to add a comment or create a new issue, you'll need to create a tracker account and then login."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your tracker account is different to your Moodle.org account."))),(0,o.kt)("h2",{id:"searching-for-an-issue"},"Searching for an issue"),(0,o.kt)("p",null,"Before creating a new issue, please try searching to check whether it has been reported previously."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter a phrase, such as an error message in the 'Quick Search' box at the top right of the page."),(0,o.kt)("li",{parentName:"ol"},"If the search returns lots of results, click the 'Updated' column heading so that the most recent issues are displayed first."),(0,o.kt)("li",{parentName:"ol"},"To refine your search, select 'Moodle' as the project and perhaps add Component as another criteria and enter one or more. You can also click the Updated column heading to show most recently updated issues at the top of the search results.")),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"./tracker/tips"},"Tracker tips"),"."),(0,o.kt)("h2",{id:"reporting-an-issue"},"Reporting an issue"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"First check whether the issue has already been reported by searching (see above).")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you find an issue which appears to relate to your issue, feel free to add a comment providing further information."),(0,o.kt)("li",{parentName:"ul"},"Otherwise, please report the issue by clicking the 'Create Issue' link at the top right of the page.")),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you see a message that you can not create an issue unless you vote for or watch an existing open issue, search a tracker for ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20MDL%20AND%20resolution%20%3D%20Unresolved"},"Unresolved issues"),', select one that is interesting to you and click either "Watch" or "Vote" link. This is a protection against spam and also encourages reporters to search tracker first.'))),(0,o.kt)("p",null,"Language string problems can be corrected using ",(0,o.kt)("a",{parentName:"p",href:"http://docs.moodle.org/en/AMOS"},"AMOS"),". In non-English languages, the relevant language pack needs to be edited. For English string changes, edit the ",(0,o.kt)("a",{parentName:"p",href:"http://docs.moodle.org/en/AMOS#Suggesting_improvements_to_English_language_strings"},"en_fix")," language pack."),(0,o.kt)("p",null,"For new Moodle issues..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select 'Moodle' as the project and an appropriate issue type then click the 'Create' button."),(0,o.kt)("li",{parentName:"ol"},"Complete the form, making sure you include FULL STEPS that developers should take to reproduce the problem, as well as information about WHAT YOU EXPECTED and WHAT ACTUALLY HAPPENS for you. It's a good idea to check whether you can reproduce the bug on ",(0,o.kt)("a",{parentName:"li",href:"https://sandbox.moodledemo.net/"},"https://sandbox.moodledemo.net/")," and if so, you can write in the bug report 'Bug reproduced on sandbox.moodledemo.net'."),(0,o.kt)("li",{parentName:"ol"},"Click the 'Create' button.")),(0,o.kt)("h2",{id:"receiving-email-notification-of-issue-updates"},"Receiving email notification of issue updates"),(0,o.kt)("p",null,"To receive email notification of updates to any issue, you can add yourself as a watcher."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the 'Watch' link on the right of the issue page.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you report an issue, you will automatically receive email notification of updates, so there is no need to add yourself as a watcher."))),(0,o.kt)("h2",{id:"helping-determine-development-priorities"},"Helping determine development priorities"),(0,o.kt)("p",null,"You can help determine Moodle development priorities by voting for issues that you'd most like to see fixed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the 'Vote' link on the right of the issue page.")),(0,o.kt)("h2",{id:"what-makes-a-good-tracker-issue"},"What makes a good tracker issue?"),(0,o.kt)("p",null,"When you create a tracker issue, you are effectively asking someone to change Moodle for you. The easier you can make it for that someone to understand your problem, the more likely it is they will be able to fix it. Here are some things that can help:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Give step-by-step instructions, so someone else can follow along on their Moodle site and see exactly what you are talking about:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"include full steps to reproduce the problem, starting with login as (student/teacher etc)..."),(0,o.kt)("li",{parentName:"ul"},"include what you expected to happen."),(0,o.kt)("li",{parentName:"ul"},"include what actually happens for you."))),(0,o.kt)("li",{parentName:"ul"},"If there is an error message (can you turn on ",(0,o.kt)("a",{parentName:"li",href:"http://docs.moodle.org/en/Debugging"},"Debugging"),"?) copy and paste the full text of the error message."),(0,o.kt)("li",{parentName:"ul"},"Clearly separate fact from speculation in what you write."),(0,o.kt)("li",{parentName:"ul"},"A picture can be worth a thousand words. Consider taking a screen-grab of the problem."),(0,o.kt)("li",{parentName:"ul"},"One report one bug / feature request per issue."),(0,o.kt)("li",{parentName:"ul"},"Remember to search to see if the issue you are reporting is already there. If it is, vote or comment instead.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Here are good examples of bug reports: ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-5688"},"MDL-5688"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-33532"},"MDL-33532"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-34440"},"MDL-34440"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-33514"},"MDL-33514"),", ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-34475"},"MDL-34475")," - notice how quickly all of these got fixed!"))),(0,o.kt)("h2",{id:"what-can-i-do-if-a-problem-remains"},"What can I do if a problem remains?"),(0,o.kt)("p",null,"If you find that a bug is still affecting a stable version of Moodle, despite the tracker issue being closed as fixed, please do as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new issue for the bug"),(0,o.kt)("li",{parentName:"ol"},"Go back to the closed issue, then in the More menu select 'Link'. Enter the number of the issue you've just created and a comment. This will generate an email notification to all watchers, so they know to watch, vote or comment on the new issue from then on.")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./tracker/tips"},"Tracker tips")),(0,o.kt)("li",{parentName:"ul"},"",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/New_feature_ideas"},"New feature ideas"),"")))}m.isMDXComponent=!0}}]);