(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9pBV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=o(a("q1tI"));o(a("i8i4"));function o(e){return e&&e.__esModule?e:{default:e}}var s=0,i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.id=s++,a.createForm=a.createForm.bind(a),a.findFormElement=a.findFormElement.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var a=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var a=t.serializeArray();e.props.onSubmit(a)}});return window.hbspt.forms.create(a),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return l.default.createElement("div",null,l.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(l.default.Component);t.default=i,e.exports=t.default},s6aV:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("cWnB"),o=a("zM5D"),s=a("9pBV"),i=a.n(s),c=a("kCIJ"),m=a("/Yc3");t.a=function(e){var t=e.title,a=e.actionText,s=e.formId,u=e.person,d=Object(c.useIntl)(),f=Object(n.useState)(!1),p=f[0],E=f[1],h=function(){return E(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{variant:"primary",onClick:function(){return E(!0)},className:"btn btn-primary btn-lg mt-2 mt-sm-0"},a),r.a.createElement(o.a,{show:p,onHide:h},r.a.createElement(o.a.Header,null,r.a.createElement(o.a.Title,null,r.a.createElement(m.Offline,null,r.a.createElement(c.FormattedMessage,{id:"offline.text"})),r.a.createElement(m.Online,null,t)),r.a.createElement("button",{className:"btn btn--close",onClick:h},r.a.createElement("span",{className:"sr-only"},r.a.createElement(c.FormattedMessage,{id:"action.close"})))),r.a.createElement(o.a.Body,{className:""},r.a.createElement(m.Online,null,r.a.createElement(i.a,{portalId:"7433878",formId:s,onSubmit:function(){return console.log("Submit!")},onReady:function(e){return console.log("Form ready!")},loading:r.a.createElement("div",null,"Loading...")})),r.a.createElement(m.Offline,null,r.a.createElement("div",{className:"text-center p-5"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 512 512"},r.a.createElement("title",null,r.a.createElement(c.FormattedMessage,{id:"offline.status"})),r.a.createElement("path",{d:"M93.72,183.25C49.49,198.05,16,233.1,16,288c0,66,54,112,120,112H320.37",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("path",{d:"M467.82,377.74C485.24,363.3,496,341.61,496,312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16,0-48.79,6.93-67.6,18.14",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),r.a.createElement("line",{x1:"448",y1:"448",x2:"64",y2:"64",style:{fill:"none",stroke:"#000",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:"32px"}}))),r.a.createElement("p",{className:"lead text-center"},r.a.createElement("strong",null,r.a.createElement(c.FormattedMessage,{id:"offline.cta"}))))),r.a.createElement(o.a.Footer,{className:"justify-content-center"},r.a.createElement("p",null,r.a.createElement(c.FormattedMessage,{id:"question.emailInstead"})),r.a.createElement("a",{href:d.formatMessage({id:"team."+u+".email"}),rel:"nofollow"},r.a.createElement(c.FormattedMessage,{id:"team."+u+".email"})))))}},yhRL:function(e,t,a){e.exports=a.p+"static/og_home-2b1b527e3f785301869c5edf0aee606b.jpg"},zIjM:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return F}));var n=a("q1tI"),r=a.n(n),l=a("kCIJ"),o=a("xXt2"),s=a("7vrA"),i=a("3Z9Z"),c=a("JI6e"),m=a("Bl7J"),u=a("k3mn"),d=a("wx14"),f=a("zLVn"),p=a("TSYQ"),E=a.n(p),h=a("vUet"),b=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.variant,l=e.pill,o=e.className,s=e.as,i=void 0===s?"span":s,c=Object(f.a)(e,["bsPrefix","variant","pill","className","as"]),m=Object(h.b)(a,"badge");return r.a.createElement(i,Object(d.a)({ref:t},c,{className:E()(o,m,l&&m+"-pill",n&&m+"-"+n)}))}));b.displayName="Badge",b.defaultProps={pill:!1};var g=b,y=function(e){var t=e.post;return r.a.createElement("details",{className:"card bg-white"},r.a.createElement("summary",{className:"card-body"},r.a.createElement("h4",{className:"summary__text m-0"},t.frontmatter.question),r.a.createElement(g,{variant:"light",className:"d-inline-flex"},t.frontmatter.category)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.html}})))},v=a("s6aV"),k=a("yhRL"),w=a.n(k),F=(t.default=Object(l.injectIntl)((function(e){var t=e.intl,a=e.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.category})).map((function(e){return r.a.createElement("li",{className:"mb-2",key:e.node.id},r.a.createElement(y,{post:e.node}))}));return r.a.createElement(m.a,null,r.a.createElement(u.a,{lang:t.locale,title:t.formatMessage({id:"page.faq.title"}),description:t.formatMessage({id:"page.faq.description"}),keywords:["help","faq","information","questions"],ogImage:w.a}),r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(c.a,{xs:"12",md:"10",lg:"9",className:"ml-auto mr-auto"},r.a.createElement("h1",{className:"display-2 my-4 py-4"},r.a.createElement("strong",null,r.a.createElement(l.FormattedMessage,{id:"page.faq.headline"}))),r.a.createElement("p",{className:"lead"},r.a.createElement("strong",null,r.a.createElement(l.FormattedMessage,{id:"page.faq.emphasize"}))," ",r.a.createElement(l.FormattedMessage,{id:"page.faq.text"})),r.a.createElement("div",{className:"pt-4 text-center text-sm-left"},r.a.createElement(v.a,{title:t.formatMessage({id:"action.askQuestion"}),actionText:t.formatMessage({id:"action.askQuestion"}),formId:"713d7366-3f1a-4160-a2d0-d1ad9b015941",person:"matthias"}),r.a.createElement(l.Link,{to:"/contact",className:"btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0"},r.a.createElement(l.FormattedMessage,{id:"question.wantToKnowMore"}))))))),r.a.createElement("section",null,r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(c.a,{xs:"12",sm:"10",md:"8",lg:"8",className:"mr-auto mb-4"},r.a.createElement("h2",{className:"h3"},r.a.createElement("strong",null,r.a.createElement(l.FormattedMessage,{id:"block.questions.emphasize"}))," ",r.a.createElement(l.FormattedMessage,{id:"block.questions.text"})))),r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement("ul",{className:"list-unstyled"},a))))))})),"2933258339")}}]);
//# sourceMappingURL=component---src-pages-faq-js-83d25fa8a55382255cb4.js.map