(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(4),o=c(5),d=c(8),l=c(7),i=c(1),r=c.n(i),u=(c(13),c(14),c(6)),b=c.n(u),h=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.handleRemoveGood=function(){e.setState({selectedGood:""})},e.handleAdd=function(t){e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(h.jsxs)("main",{className:"section container",children:[t?Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t," ","is selected",Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleRemoveGood})]}):Object(h.jsx)("h1",{className:"title",children:"No goods selected"}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:j.map((function(c){return Object(h.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":t===c}),children:[Object(h.jsx)("td",{children:t===c?Object(h.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.handleRemoveGood,children:"-"}):Object(h.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.handleAdd(c)},children:"+"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]})}))})})]})}}]),c}(r.a.Component);s.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6f0cee32.chunk.js.map