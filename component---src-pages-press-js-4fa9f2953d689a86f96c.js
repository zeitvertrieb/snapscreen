(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"8b04":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),r=a.n(n),o=(a("kCIJ"),a("xXt2")),l=a("7vrA"),s=a("3Z9Z"),i=a("JI6e"),c=a("Bl7J"),m=function(e){var t=e.post;return r.a.createElement("details",{className:"card bg-white"},r.a.createElement("summary",{className:"card-body"},r.a.createElement(s.a,{className:"align-items-center"},r.a.createElement(i.a,{xs:"5",sm:"3",md:"2",className:"mb-3 mb-md-0"},r.a.createElement("img",{style:{maxWidth:"100%"},src:t.frontmatter.teaser,alt:t.frontmatter.reference})),r.a.createElement(i.a,{xs:"11",sm:"8"},r.a.createElement("p",{className:"lead m-0"},t.frontmatter.title),r.a.createElement("small",null,t.frontmatter.date," • ",r.a.createElement("a",{href:t.frontmatter.url,target:"_blank",rel:"noopener noreferrer"},t.frontmatter.reference))))),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.html}})))},u=a("s6aV"),d=(t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return r.a.createElement("li",{className:"mb-2",key:e.node.id},r.a.createElement(m,{post:e.node}))}));return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement(i.a,{xs:"12",md:"10",lg:"9",className:"ml-auto mr-auto"},r.a.createElement("h1",{className:"display-2 my-4 py-4"},r.a.createElement("strong",null,"Press mentions and updates along our journey.")),r.a.createElement("p",{className:"lead my-5 text-left"},r.a.createElement("strong",null,"We are proud that others have found our work as interesting and exciting as us!")," Find here some nice articles and press mentions about us."),r.a.createElement("div",{className:"pt-4"},r.a.createElement(u.a,{title:"Receive Updates",actionText:"Subscribe for Updates",formId:"713d7366-3f1a-4160-a2d0-d1ad9b015941",person:"matthias"}),r.a.createElement("a",{href:"https://www.linkedin.com/company/snapscreen/",target:"_blank",rel:"noopener noreferrer",className:"btn btn-link btn-lg mx-sm-2 mt-2 mt-sm-0"},"Follow us on LinkedIn")))))),r.a.createElement("section",{className:"bg-light"},r.a.createElement(l.a,null,r.a.createElement("ul",{className:"list-unstyled"},t))))},"2635428530")},"9pBV":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=l(a("q1tI"));l(a("i8i4"));function l(e){return e&&e.__esModule?e:{default:e}}var s=0,i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.id=s++,a.createForm=a.createForm.bind(a),a.findFormElement=a.findFormElement.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=n({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var a=n({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var a=t.serializeArray();e.props.onSubmit(a)}});return window.hbspt.forms.create(a),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(o.default.Component);t.default=i,e.exports=t.default},s6aV:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("cWnB"),l=a("zM5D"),s=a("9pBV"),i=a.n(s),c=a("kCIJ");t.a=function(e){var t=e.title,a=e.actionText,s=e.formId,m=e.person,u=Object(c.useIntl)(),d=Object(n.useState)(!1),f=d[0],p=d[1],b=function(){return p(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{variant:"primary",onClick:function(){return p(!0)},className:"btn btn-primary btn-lg mt-2 mt-sm-0"},a),r.a.createElement(l.a,{show:f,onHide:b},r.a.createElement(l.a.Header,null,r.a.createElement(l.a.Title,null,t),r.a.createElement("button",{className:"btn btn--close",onClick:b},r.a.createElement("span",{className:"sr-only"},"Close"))),r.a.createElement(l.a.Body,{className:""},r.a.createElement(i.a,{portalId:"7433878",formId:s,onSubmit:function(){return console.log("Submit!")},onReady:function(e){return console.log("Form ready!")},loading:r.a.createElement("div",null,"Loading...")})),r.a.createElement(l.a.Footer,{className:"justify-content-center"},r.a.createElement("p",{className:""},"Prefer Email instead?"),r.a.createElement("a",{href:u.formatMessage({id:"team."+m+".email"}),rel:"nofollow"},r.a.createElement(c.FormattedMessage,{id:"team."+m+".email"})))))}}}]);
//# sourceMappingURL=component---src-pages-press-js-4fa9f2953d689a86f96c.js.map