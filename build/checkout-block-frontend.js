(()=>{"use strict";const e=window.wp.element,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"checkout-block-example/gift-message","version":"1.0.0","title":"Gift Message","category":"woocommerce","parent":["woocommerce/checkout-shipping-address-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"textdomain":"checkout-block-example","editorScript":"file:./build/index.js"}'),a=window.wc.blocksCheckout,{registerCheckoutBlock:c}=(window.wp.i18n,wc.blocksCheckout);c({metadata:t,component:({children:t,checkoutExtensionData:c})=>{const[s,o]=(0,e.useState)(""),[l,i]=(0,e.useState)(""),{setExtensionData:r}=c;(0,e.useEffect)((()=>{r("checkout-block-example","gift_message",s)}),[]);const n=(0,e.useCallback)((e=>{o(e),r("checkout-block-example","gift_message",e)}),[o.setExtensionData]);(0,e.useEffect)((()=>{r("checkout-block-example","delivery_date",l)}),[]);const m=(0,e.useCallback)((e=>{i(e),r("checkout-block-example","delivery_date",e)}),[i.setExtensionData]);return(0,e.createElement)("div",{className:"th-wrapper"},(0,e.createElement)("div",{className:"example-fields"},(0,e.createElement)(a.ValidatedTextInput,{id:"delivery_date",type:"date",required:!0,className:"order-datepicker",label:"Lieferdatum",value:l,onChange:m})),(0,e.createElement)("div",{className:"example-fields"},(0,e.createElement)(a.ValidatedTextInput,{id:"gift_message",type:"text",required:!1,className:"gift-message",label:"Text für Kart",value:s,onChange:n})))}})})();