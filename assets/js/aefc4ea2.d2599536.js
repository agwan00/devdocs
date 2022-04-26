"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1769],{3905:function(e,o,t){t.d(o,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=d(e.components);return n.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return t?n.createElement(h,i(i({ref:o},c),{},{components:t})):n.createElement(h,i({ref:o},c))}));function u(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2028:function(e,o,t){t.r(o),t.d(o,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={title:"Moodle App Remote themes",sidebar_label:"Remote themes",sidebar_position:4,tags:["Moodle App"]},s=void 0,d={unversionedId:"guides/moodleapp/remote-themes",id:"guides/moodleapp/remote-themes",title:"Moodle App Remote themes",description:"How do Remote themes work?",source:"@site/docs/guides/moodleapp/remote-themes.md",sourceDirName:"guides/moodleapp",slug:"/guides/moodleapp/remote-themes",permalink:"/devdocs/docs/guides/moodleapp/remote-themes",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/remote-themes.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1650987624,formattedLastUpdatedAt:"26/04/2022",sidebarPosition:4,frontMatter:{title:"Moodle App Remote themes",sidebar_label:"Remote themes",sidebar_position:4,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Customisation",permalink:"/devdocs/docs/guides/moodleapp/customisation"},next:{title:"API Guides",permalink:"/devdocs/docs/apis"}},c={},p=[{value:"How do Remote themes work?",id:"how-do-remote-themes-work",level:2},{value:"How can you create your own theme?",id:"how-can-you-create-your-own-theme",level:2},{value:"Applying theme changes during development",id:"applying-theme-changes-during-development",level:3},{value:"Knowing what to style",id:"knowing-what-to-style",level:3},{value:"Working with colors",id:"working-with-colors",level:3},{value:"Basic shades",id:"basic-shades",level:4},{value:"Semantic colors",id:"semantic-colors",level:4},{value:"Specific colors",id:"specific-colors",level:4},{value:"Targeting different environments",id:"targeting-different-environments",level:3},{value:"Platform",id:"platform",level:4},{value:"Moodle App and Moodle site versions",id:"moodle-app-and-moodle-site-versions",level:4},{value:"Application theme",id:"application-theme",level:4},{value:"Combining classes",id:"combining-classes",level:4},{value:"Styling the shadow DOM",id:"styling-the-shadow-dom",level:3},{value:"Supporting older versions of the app",id:"supporting-older-versions-of-the-app",level:3},{value:"Common customisations",id:"common-customisations",level:2},{value:"Header toolbar",id:"header-toolbar",level:3},{value:"Bottom tab bar (main menu)",id:"bottom-tab-bar-main-menu",level:3},{value:"Top tabs",id:"top-tabs",level:3},{value:"Items",id:"items",level:3},{value:"Progress bar",id:"progress-bar",level:3},{value:"More page",id:"more-page",level:3},{value:"Login page",id:"login-page",level:3},{value:"Messages page",id:"messages-page",level:3},{value:"Showing course summary image on course page",id:"showing-course-summary-image-on-course-page",level:3},{value:"Updating your theme after release",id:"updating-your-theme-after-release",level:2},{value:"Difference between Remote themes and Branded Apps",id:"difference-between-remote-themes-and-branded-apps",level:2}],m={toc:p};function u(e){var o=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-remote-themes-work"},"How do Remote themes work?"),(0,r.kt)("p",null,"When you enter a site, it downloads any file configured on the ",(0,r.kt)("inlineCode",{parentName:"p"},"mobilecssurl")," administration field and injects the styles in the app. Every time you change between sites, each style will be enabled or disabled appropriately."),(0,r.kt)("p",null,"The styles will remain enabled in the login page, but any other page that is not related with a specific site will use the default styles. For example, pages to add or remove sites cannot be customised with Remote themes."),(0,r.kt)("h2",{id:"how-can-you-create-your-own-theme"},"How can you create your own theme?"),(0,r.kt)("p",null,"First of all, Remote themes are only available for sites that purchased a Premium subscription for the Moodle App. You can check the different plans in ",(0,r.kt)("a",{parentName:"p",href:"https://apps.moodle.com"},"the Apps Portal"),". If you want, you can follow the instructions in this document without purchasing a subscription and it will work in your development environment."),(0,r.kt)("p",null,"In order to create your own theme, we recommend that you use the app from ",(0,r.kt)("a",{parentName:"p",href:"https://master.apps.moodledemo.net"},"master.apps.moodledemo.net")," and check the styles using the browser inspector. You can use any Chromium-based browser, but you should launch it with some special arguments. You can read more about that in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Using_the_Moodle_App_in_a_browser"},"Using the Moodle App in a browser")," page. If you need to test a different version of the app, you can also use ",(0,r.kt)("a",{parentName:"p",href:"https://integration.apps.moodledemo.net"},"integration.apps.moodledemo.net")," for the latest development version or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_App_Docker_images"},"the Docker images")," for anything more specific."),(0,r.kt)("p",null,'Once you have everything ready, you can configure your theme by going to "Site administration > Mobile app > Mobile appearance" in your site and setting the ',(0,r.kt)("inlineCode",{parentName:"p"},"mobilecssurl")," field to a url pointing to a CSS file. This file can be placed inside your Moodle installation in your custom theme, inside a local plugin, or hosted elsewhere."),(0,r.kt)("p",null,"You can get started with the following example, and you should see the background of the top bar change to red once you log into the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    --core-header-toolbar-background: red;\n}\n")),(0,r.kt)("h3",{id:"applying-theme-changes-during-development"},"Applying theme changes during development"),(0,r.kt)("p",null,'For performance reasons, the app caches the styles after you log in for the first time. So if you make any changes, you won\'t see them unless you log out and log in again. However, there is a faster way to update them. You can also open the Preferences page in the app and click on the "Synchronise now" button. This will download the files again, and you can use this method to iterate on your styles while you make the theme.'),(0,r.kt)("p",null,"The file can also be cached by the browser, so when you do this make sure to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/network/reference/#disable-cache"},"disable network cache")," as well."),(0,r.kt)("h3",{id:"knowing-what-to-style"},"Knowing what to style"),(0,r.kt)("p",null,"Depending on how much you want to customise the UI, you'll need to do different things."),(0,r.kt)("p",null,"The application defines some ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables")," that can help you customise basic styles, like the one we used in our example above to change the background color of the header toolbar. You can find these variables in the source code, the main ones are defined within ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp/blob/master/src/theme/theme.light.scss"},"theme.light.scss")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp/blob/master/src/theme/theme.dark.scss"},"theme.dark.scss"),", and you can find others within component styles."),(0,r.kt)("p",null,"If you need anything more specific, the application is built using ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/theming/basics"},"the Ionic Framework"),", so reading their documentation can help you understand how the UI works and which components are available. We have some custom components that you won't find listed on their documentation, but most of them built on top of Ionic's."),(0,r.kt)("p",null,"Finally, if you need to style something even more specific, you can always ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp"},"browse the source code")," to see how a specific page is built. You can also use the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/dom/"},"Elements Panel")," of your browser to inspect styles and debug anything that isn't working as you'd expect. Depending what you are trying to do, remember that this is only a development environment and it may not work correctly in a native device. If you are doing anything complicated, make sure to double check using a real device to see that everything looks good."),(0,r.kt)("p",null,"Notice that you will often need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"!important")," if you're overriding component styles directly, without using any variables. That's because the default styles are usually scoped to the Angular component, and you won't be able to provide more ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"},"specificity")," in your selectors."),(0,r.kt)("h3",{id:"working-with-colors"},"Working with colors"),(0,r.kt)("p",null,"The main color of the app is Moodle Orange, but you can change it by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--primary")," variable. Other than the overall brand color, there are also some specific variables for other colors."),(0,r.kt)("h4",{id:"basic-shades"},"Basic shades"),(0,r.kt)("p",null,"These are the variables used to define the basic color palette used throughout the app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--white")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"--black"),"."),(0,r.kt)("li",{parentName:"ul"},"Gray shades ",(0,r.kt)("inlineCode",{parentName:"li"},"--gray-100"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--gray-200")," ... ",(0,r.kt)("inlineCode",{parentName:"li"},"--gray-900"),". Where the greater, the darker.")),(0,r.kt)("h4",{id:"semantic-colors"},"Semantic colors"),(0,r.kt)("p",null,"The named colors are not directly used. Instead, the following semantic colors are used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--primary")," Brand color."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--secondary")," Gray 300 shade."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--danger")," Red."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--warning")," Yellow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--success")," Green."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--info")," Blue."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--light")," Gray 100 shade."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--medium")," Gray 700 shade."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--dark")," Gray 900 shade.")),(0,r.kt)("p",null,"Each of these also define other variants: ",(0,r.kt)("inlineCode",{parentName:"p"},"rgb"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"contrast"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"contrast-rgb"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"shade")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tint"),". If you want to modify any of these, it won't suffice with changing the base color they are derived from, because there are limitations and you'll have to override each variant manually."),(0,r.kt)("p",null,"For example, if you want to override the primary color, you'll need to override the following variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    --ion-color-primary: #006600;\n\n    /* RGB list of the color */\n    --ion-color-primary-rgb: 0,102,0;\n\n    /* Black or white, depending on which color gives more contrast */\n    --ion-color-primary-contrast: #ffffff;\n\n    /* RGB version of the contrast color */\n    --ion-color-primary-contrast-rgb: 255,255,255;\n\n    /* Slightly darker color. (mix 12% of black) */\n    --ion-color-primary-shade: #005a00;\n\n    /* Slightly lighter color. (mix 10% of white) */\n    --ion-color-primary-tint: #1a751a;\n}\n")),(0,r.kt)("h4",{id:"specific-colors"},"Specific colors"),(0,r.kt)("p",null,"Other than the basic and semantic colors, other components and pages define their own variables that you can override. You can look at the source code to find more, but these are some of the most relevant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    /* Page background */\n    --background-color: white;\n    --ion-background-color-rgb: 255, 255, 255;\n\n    /* Main text color */\n    --text-color: black;\n    --ion-text-color-rgb: 0, 0, 0;\n\n    /* Text used in categories and secondary content */\n    --subdued-text-color: gray;\n\n    /* Links text */\n    --core-link-color: blue;\n}\n")),(0,r.kt)("h3",{id:"targeting-different-environments"},"Targeting different environments"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," elements contain classes that indicate the environment the app is running on."),(0,r.kt)("h4",{id:"platform"},"Platform"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," element indicates which platform the app is running on. For example, you can specify styles that will only apply to iOS by prepending them with ",(0,r.kt)("inlineCode",{parentName:"p"},"html.ios"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"html.md")," for Android:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Red toolbar in iOS */\nhtml.ios body {\n    --core-header-toolbar-background: red;\n}\n\n/* Green toolbar in Android */\nhtml.md body {\n    --core-header-toolbar-background: green;\n}\n")),(0,r.kt)("h4",{id:"moodle-app-and-moodle-site-versions"},"Moodle App and Moodle site versions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," element indicates the versions of the app and the Moodle site, so you can restrict CSS rules to a specific version by prepending one of these classes to the selector. For example, when accessing a 3.11.2 site using the 3.9.5 app the following classes will be present in the body:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version-3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version-3-11")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version-3-11-2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"moodleapp-3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"moodleapp-3-9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"moodleapp-3-9-5"))),(0,r.kt)("p",null,"And here's how to use them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Red toolbar for Moodle App version 3.9.X */\nbody.moodleapp-3-9 {\n    --core-header-toolbar-background: red;\n}\n\n/* Green toolbar for all other versions */\nbody {\n    --core-header-toolbar-background: green;\n}\n")),(0,r.kt)("h4",{id:"application-theme"},"Application theme"),(0,r.kt)("p",null,"The application uses a light theme by default, but it adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"dark")," class to the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," element when it is using a dark theme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Red toolbar for the Light Theme */\nbody {\n    --core-header-toolbar-background: red;\n}\n\n/* Green toolbar for the Dark Theme */\nbody.dark {\n    --core-header-toolbar-background: green;\n}\n")),(0,r.kt)("p",null,"Bear in mind that you can disable Dark Mode for all your users following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Moodle_app_guide_for_admins#Disabled_features"},"the guide for admins (Disabled features)"),"."),(0,r.kt)("h4",{id:"combining-classes"},"Combining classes"),(0,r.kt)("p",null,"Of course, you can combine any of these classes to create more granular styles."),(0,r.kt)("p",null,"Let's say you want to have a red toolbar only in iOS, with the Dark Theme, for a Moodle site running 3.11.X:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"html.ios body.version-3-11.dark {\n    --core-header-toolbar-background: red;\n}\n")),(0,r.kt)("h3",{id:"styling-the-shadow-dom"},"Styling the shadow DOM"),(0,r.kt)("p",null,"Ionic is a set of web components and uses the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"shadow DOM")," to encapsulate them and make them more opaque to developers and users (hiding markup structure, style, and behaviour), thus avoiding conflicts with existing rules."),(0,r.kt)("p",null,"This makes it more difficult to personalise and change some parts of those components. However you can check ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/theming/css-shadow-parts#ionic-framework-parts"},"the official Ionic documentation")," to see which parts are customisable."),(0,r.kt)("p",null,"For example, if you look at ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/button#css-shadow-parts"},"the documentation for an ",(0,r.kt)("inlineCode",{parentName:"a"},"ion-button")),", you can style it this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'/* Disable text transformations */\nion-button::part(native) {\n    text-transform: none;\n}\n\n/* Use a red background by default */\nion-button {\n    --background: red;\n}\n\n/* Use a yellow background for buttons with the "my-custom-class" class */\nion-button.my-custom-class {\n    --background: yellow;\n}\n')),(0,r.kt)("p",null,"You can learn more about the shadow DOM in the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"Using shadow DOM - Web Components | MDN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/theming/css-shadow-parts"},"CSS Shadow Parts - Ionic Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ionicframework.com/blog/shadow-dom-in-ionic-and-why-its-awesome/"},"Shadow DOM in Ionic (and Why it's Awesome) - Ionic Blog"))),(0,r.kt)("h3",{id:"supporting-older-versions-of-the-app"},"Supporting older versions of the app"),(0,r.kt)("p",null,"If you need to support different versions of the app, or you're upgrading your theme from an older version, you should read the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_App_Remote_themes_Upgrade_Guide"},"Moodle App Remote themes Upgrade Guide"),"."),(0,r.kt)("h2",{id:"common-customisations"},"Common customisations"),(0,r.kt)("p",null,"In this section you will find a list of some common customisations you may want to add to your Remote theme."),(0,r.kt)("h3",{id:"header-toolbar"},"Header toolbar"),(0,r.kt)("p",null,"The header toolbar has a bottom border that you can disable or customise, along with other parts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Background */\nion-header ion-toolbar {\n    --core-header-toolbar-background: red;\n}\n\n/* Bottom border */\nion-header ion-toolbar {\n    --core-header-toolbar-border-width: 2px; /* Use 0 to disable it */\n    --core-header-toolbar-border-color: green;\n}\n\n/* Text and buttons */\nion-header ion-toolbar {\n    --core-header-toolbar-color: blue;\n}\n\nion-header ion-toolbar.in-toolbar h1,\nion-header ion-toolbar.in-toolbar h2 {\n    font-weight: normal;\n}\n")),(0,r.kt)("h3",{id:"bottom-tab-bar-main-menu"},"Bottom tab bar (main menu)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"ion-tab-bar.mainmenu-tabs {\n    /* Background */\n    --core-bottom-tabs-background: red;\n    --core-bottom-tabs-background-selected: transparent;\n\n    /* Tab icons */\n    --core-bottom-tabs-color: blue;\n\n    /* Selected tab icon */\n    --core-bottom-tabs-color-selected: green;\n\n    /* Badges */\n    --core-bottom-tabs-badge-text-color: black;\n    --core-bottom-tabs-badge-color: white;\n}\n")),(0,r.kt)("h3",{id:"top-tabs"},"Top tabs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"core-tabs, core-tabs-outlet {\n    /* Background */\n    --core-tabs-background: red;\n\n    /* Tab */\n    --core-tab-background: red;\n    --core-tab-color: white;\n\n    /* Selected tab */\n    --core-tab-color-active: blue;\n    --core-tab-border-color-active: blue;\n    --core-tab-font-weight-active: bold;\n}\n")),(0,r.kt)("h3",{id:"items"},"Items"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    /* Background */\n    --ion-item-background: green;\n\n    /* Divider */\n    --item-divider-background: red;\n    --item-divider-color: blue;\n\n    /* Empty Divider */\n    --spacer-background: yellow;\n}\n")),(0,r.kt)("h3",{id:"progress-bar"},"Progress bar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"core-progress-bar {\n    --core-progressbar-height: 4px;\n    --core-progressbar-color: red;\n    --core-progressbar-text-color: green;\n    --core-progressbar-background: blue;\n}\n")),(0,r.kt)("h3",{id:"more-page"},"More page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* Icons */\npage-core-mainmenu-more {\n    --core-more-icon: red;\n}\n\n/* Target a specific icon */\npage-core-mainmenu-more .addon-privatefiles-handler ion-icon {\n    color: green !important;\n}\n\n/* Items */\npage-core-mainmenu-more {\n    --core-more-item-border: blue;\n    --spacer-background: blue;\n}\n")),(0,r.kt)("h3",{id:"login-page"},"Login page"),(0,r.kt)("p",null,"You can personalise some colors in the Login page, but keep in mind that this only includes the credentials page (the one after you select the site)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    --core-login-background: red;\n    --core-login-text-color: blue;\n    --core-login-input-background: green;\n    --core-login-input-color: yellow;\n}\n")),(0,r.kt)("h3",{id:"messages-page"},"Messages page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    --addon-messages-message-bg: white;\n    --addon-messages-message-activated-bg: gray-light;\n    --addon-messages-message-note-text: gray-dark;\n    --addon-messages-message-mine-bg: gray-light;\n    --addon-messages-message-mine-activated-bg: gray;\n    --addon-messages-discussion-badge: orange;\n    --addon-messages-discussion-badge-text: white;\n    --core-send-message-input-background: gray-light;\n    --core-send-message-input-color: black;\n}\n")),(0,r.kt)("h3",{id:"showing-course-summary-image-on-course-page"},"Showing course summary image on course page"),(0,r.kt)("p",null,"By default, course summary images are hidden to reduce scrolling when entering a course. If you want to change this behaviour, you can include the following CSS in your Remote theme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"ion-app core-course-format .core-format-progress-list .core-course-thumb {\n    display: block !important;\n}\n")),(0,r.kt)("h2",{id:"updating-your-theme-after-release"},"Updating your theme after release"),(0,r.kt)("p",null,"Once you have configured your theme, some users may already have downloaded previous styles and they will be cached."),(0,r.kt)("p",null,"If you are updating the styles and you want users to get the latest version, you can change the url of the theme file. This doesn't mean that you need to change the name of the file itself, you can just add some query parameters that will be irrelevant when the file is downloaded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"https://mysite.com/mobile/mobiletheme.css?version=1\n")),(0,r.kt)("p",null,"Every time you make some changes in your theme and you want the file to be re-downloaded in the app, just increase this number."),(0,r.kt)("h2",{id:"difference-between-remote-themes-and-branded-apps"},"Difference between Remote themes and Branded Apps"),(0,r.kt)("p",null,"Remote theme styles can be tricky to modify. There are lots of CSS rules and some of them can change between versions. Using your own Branded App, you will have better integrations because you can also use Sass variables to change colors and styles. Additionally, you will get your custom application icon and the theming will cover the entire application, not just pages using your site."),(0,r.kt)("p",null,"You can find more info on the ",(0,r.kt)("a",{parentName:"p",href:"https://moodle.com/branded-app"},"Branded Apps")," page."))}u.isMDXComponent=!0}}]);