"use strict";(self["webpackChunkonline_store"]=self["webpackChunkonline_store"]||[]).push([[908],{67:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i=t(252),s=t(577),a=t.p+"img/bg_gradient_item.f8deadf4.svg";const o={class:"home"},c={class:"main"},m={class:"main__figure"},r=["src","alt"],l={class:"main__content"},_={class:"main__title"},d={class:"main__text"},g={class:"main__price"},u=(0,i._)("img",{class:"main__bg",src:a,alt:"bg gradient item"},null,-1),p={class:"container section"},h=(0,i._)("h2",{class:"main-title"},"Our products",-1),f={class:"grid-list"};function w(n,e,t,a,w,k){const y=(0,i.up)("SpinnerComponent"),I=(0,i.up)("CardComponent");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("main",c,[(0,i._)("figure",m,[w.loading?((0,i.wg)(),(0,i.j4)(y,{key:0})):(0,i.kq)("",!0),(0,i._)("img",{src:w.mainItem.image,alt:w.mainItem.name},null,8,r)]),(0,i._)("section",l,[w.loading?((0,i.wg)(),(0,i.j4)(y,{key:0})):(0,i.kq)("",!0),(0,i._)("h1",_,(0,s.zw)(w.mainItem.name)+" "+(0,s.zw)(w.mainItem.brand),1),(0,i._)("p",d,(0,s.zw)(w.mainItem.description),1)]),(0,i._)("h2",g,(0,s.zw)(k.localePrices(w.mainItem.price)),1),u]),(0,i._)("section",p,[h,(0,i._)("ul",f,[(0,i.Wm)(I,{products:w.items},null,8,["products"]),w.loading?((0,i.wg)(),(0,i.j4)(y,{key:0})):(0,i.kq)("",!0)])])])}function k(n){if(void 0!==n)return n.toLocaleString("en-US",{style:"currency",currency:"USD"})}var y=t(459),I=t(758),v={name:"HomeView",data(){return{items:[],mainItem:{},loading:!1}},components:{CardComponent:y.Z,SpinnerComponent:I.Z},mounted(){this.getItems()},methods:{localePrices:k,async getItems(){try{this.loading=!0;const n=await fetch("https://my-json-server.typicode.com/DavidXploidz/online_store/clothes?_page=1&_limit=10"),e=await n.json();this.items=e,this.mainItem=e[e.length-1],this.loading=!1}catch(n){console.log(n)}}}},C=t(744);const b=(0,C.Z)(v,[["render",w]]);var j=b}}]);
//# sourceMappingURL=908.940ffb2e.js.map