(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{344:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n(22),c=n(95),l=n(18),s=Object(i.c)(c.a).withConfig({displayName:"Container",componentId:"fuc9tj-0"})(["",""],o.maxWidth);s.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:l.b};var u=s,d=(n(15),n(346)),p=n.n(d),f=n(96),m=n.n(f),g=n(345),b=n.n(g),h=(n(368),n(97)),y=n(361),v=Object(i.b)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{color:",";}"],o.fontSize,o.space,o.color,o.fontWeight,o.lineHeight,o.letterSpacing,o.display,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(y.a)("hoverColor")),w=Object(i.c)(m.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],v),E=Object(i.c)(b.a).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],v),x=function(e){var t=e.to,n=(e.button,e.blacklist),a=p()(e,["to","button","blacklist"]);return t?r.a.createElement(E,Object.assign({to:t},a)):r.a.createElement(w,Object.assign({is:"a",target:"_blank",blacklist:n},a))};x.defaultProps={blacklist:h.a,fontWeight:"bold"};var k=x,j=n(369);t.default=Object(j.a)(function(){return r.a.createElement(u,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(k,{to:"/"},"Go back to the homepage"))})},347:function(e,t,n){"use strict";n(98),n(164),n(15);var a=n(0),r=n.n(a),o=n(22),i=n(99),c=n.n(i),l=n(2),s=n(96),u=n.n(s),d=n(97),p=n(14),f=Object(o.c)(u.a).withConfig({displayName:"Text",componentId:"sc-1vna78b-0"})(["margin-top:0;margin-bottom:0;"," "," "," "," "," "," "," "," "," "," "," ",""],l.display,l.fontSize,l.space,l.color,l.textAlign,l.fontWeight,l.fontFamily,l.lineHeight,l.letterSpacing,l.position,Object(p.a)("verticalAlign"),Object(p.a)("textTransform"));f.defaultProps={is:"p",fontSize:"1em",lineHeight:1.5,blacklist:d.a},f.inline=function(e){return r.a.createElement(f,Object.assign({is:"span"},e))},f.bold=function(e){return r.a.createElement(f,Object.assign({fontWeight:"bold"},e))},f.thin=function(e){return r.a.createElement(f,Object.assign({fontWeight:"200"},e))},f.dosis=function(e){return r.a.createElement(f,Object.assign({fontFamily:"Dosis"},e))},c()(1,7).forEach(function(e){var t="h"+e;f[t]=function(n){return r.a.createElement(f,Object.assign({is:t,fontSize:1+.125*(6-e)+"em"},n))}}),t.a=f},348:function(e,t,n){"use strict";var a=n(2),r=n(22),o=n(95);t.a=Object(r.c)(o.a).withConfig({displayName:"Flex",componentId:"sc-1wakzhz-0"})(["display:flex;"," "," "," ",""],a.alignItems,a.justifyContent,a.flexDirection,a.flexWrap)},349:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(22),i=n(2),c=n(95),l=Object(o.c)(c.a).withConfig({displayName:"BackgroundImage",componentId:"sc-1yvvs87-0"})(["position:relative;background-image:url(",");background-size:",";background-position:",";background-repeat:no-repeat;",""],function(e){return e.src},function(e){return e.size},function(e){return e.backgroundPosition},function(e){return e.height?"":Object(i.ratio)(e)});l.propTypes={src:r.a.string,size:r.a.string,position:r.a.string},l.defaultProps={ratio:1,size:"cover",backgroundPosition:"50% 50%"},l.displayName="BackgroundImage",t.a=l},350:function(e,t,n){var a;e.exports=(a=n(355))&&a.default||a},351:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(345),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(350),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(64);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},352:function(e){e.exports=[{label:"前言",to:"foreword"},{label:"產業輪廓",to:"industry",name:"品牌經營面面觀"},{label:"乘風啟航",to:"sail",name:"打造全方位輔導資源"},{label:"版圖擴展",to:"territory",name:"那些年我們一起參加的展會"},{label:"征戰國際",to:"international",name:"數讀Fresh Taiwan重要成果"},{label:"翻轉產業",to:"flip",name:"臺灣文化行銷全球"},{label:"深入報導",to:"report",name:"臺灣文創行銷全球"}]},354:function(e){e.exports={data:{site:{siteMetadata:{title:"台灣創意設計中心"}}}}},355:function(e,t,n){"use strict";n.r(t);n(15);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(100),l=n(4),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},358:function(e,t,n){e.exports=n.p+"static/headerlogo-7cb69a1ee371992ffb34da85a9b4daa8.svg"},359:function(e,t,n){"use strict";var a=n(354),r=n(0),o=n.n(r),i=n(1),c=n.n(i),l=n(363),s=n.n(l),u=n(351),d=(n(29),n(9)),p=n.n(d),f=n(356),m=n(352),g=n(358),b=n.n(g),h=n(95),y=n(348),v=n(349),w=n(18),E=n(347),x=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={nowPage:!1},t.setActive=function(e){return t.setState({focus:e})},t}return p()(t,e),t.prototype.render=function(){var e=this,t=this.state.nowPage;return o.a.createElement(y.a,{bg:"white",position:"fixed",left:"0",right:"0",justifyContent:"space-between",px:"1em",py:"1em",height:w.c.headerHeight,alignItems:"center",zIndex:99,boxShadow:"0px 4px 6px rgba(0,0,0,0.15)"},o.a.createElement(h.a,{maxWidth:"5em",width:"8%"},o.a.createElement(f.Link,{spy:!0,smooth:!0,to:"intro",onSetActive:function(){return e.setState({nowPage:"intro"})},style:{cursor:"pointer"}},o.a.createElement(v.a,{src:b.a,ratio:71.95/126.41}))),o.a.createElement(y.a,null,m.map(function(n,a){var r=t===a;return o.a.createElement(y.a,{key:a},o.a.createElement(f.Link,{smooth:!0,spy:!0,to:n.to,onSetActive:function(){return e.setState({nowPage:a})},offset:-80},o.a.createElement(h.a,{color:r?"black":"gray",onClick:function(){return e.setActive(a)},borderBottom:"3px solid",borderColor:r?"yellow":"transparent",pb:"0.25em",fontWeight:r?"bold":"normal",fontSize:["0.8em",null,"1em"]},n.label)),a<m.length-1&&o.a.createElement(E.a,{color:"gray",mx:"0.5em",lineHeight:"1"},"|"))})))},t}(r.PureComponent),k=function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement("div",null,o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(x,null),t)},data:a})};k.propTypes={children:c.a.node.isRequired};t.a=k},361:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return function(t){var n=t[e];return t.theme.colors[n]||n}}},368:function(e,t,n){"use strict";var a=n(346),r=n.n(a),o=(n(15),n(0)),i=n.n(o),c=n(22),l=n(2),s=n(96),u=n.n(s),d=n(95),p=n(361),f=n(97),m=Object(c.b)(["color:",";background-color:",";border-color:",";"],Object(p.a)("hoverColor"),Object(p.a)("hoverBg"),Object(p.a)("hoverBorder")),g=Object(c.b)(["padding:0;border:none;font-family:inherit;line-height:1;text-decoration:none;"," "," "," "," "," "," "," "," "," "," "," appearance:none;transition:all ","ms;cursor:pointer;&:hover,&:focus{"," outline:none;}"," ",""],l.display,l.fontSize,l.position,l.space,l.color,l.width,l.borders,l.borderColor,l.borderRadius,l.fontWeight,l.letterSpacing,Object(l.themeGet)("duration",250),function(e){return!e.disabled&&m},function(e){return e.active&&!e.disabled&&m},function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "}),b=Object(c.c)(u.a).withConfig({displayName:"Button__ButtonBase",componentId:"onvwh0-0"})(["",""],g),h=function(e){return i.a.createElement(d.a,Object.assign({is:"span"},e))},y=function(e){var t=e.leftIcon,n=e.rightIcon,a=e.iconSpacing,o=e.children,c=e.verticalAlign,l=r()(e,["leftIcon","rightIcon","iconSpacing","children","verticalAlign"]);return i.a.createElement(b,l,t?i.a.createElement(h,{mr:a},t()):null,i.a.createElement(h,{verticalAlign:c},o),n?i.a.createElement(h,{ml:a},n()):null)};y.defaultProps={blacklist:f.a,is:"button",fontSize:"1.25em",border:"2px solid",borderColor:"primary",bg:"primary",color:"white",hoverColor:"primary",hoverBg:"white",px:"2.5em",py:"0.75em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"0.25em",display:"inline-block",verticalAlign:"text-top"},y.secondary=function(e){return i.a.createElement(y,Object.assign({bg:"secondary",borderColor:"secondary",hoverColor:"secondary"},e))},y.transparent=function(e){return i.a.createElement(y,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},e))},t.a=y},369:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(359);t.a=function(e){return function(t){return r.a.createElement(o.a,null,r.a.createElement(e,t))}}}}]);
//# sourceMappingURL=component---src-pages-about-js-beec66fbb67eb3b72454.js.map