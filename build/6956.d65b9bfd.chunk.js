"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[6956],{56956:(m,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>W});var O=_(19968),D=_(52628),M=_(82188),n=_(62552),a=_(16048),i=_(21424),P=_(33627),l=_(38768),L=_(79904),o=_(85816),t=_(54320),A=_(5240),v=_(91892),R=_(36196),U=_(20880),d=_(70516),B=_(31812),I=_(18424),E=_(52540),T=_(21968),K=_(12132),C=_(48632),r=_(85676),h=_(35184),f=_(99568),g=_(96556),e=_(13192),S=_(30840),y=_(77784),j=_(79371),c=_(67888),N=_(52600),u=_(95752),H=_(37388),F=_(61840),G=_(49108),Y=_(44632),x=_(50840),V=_(20252),$=_(86432),Z=_(22612),z=_(24808),J=_(24024),X=_(40960),Q=_(33656),p=_(43280),k=_(79804),w=_(19632),b=_(29576),q=_(61152),__=_(9589),E_=_(45488),t_=_(75516),s_=_(41712),a_=_(81136),o_=_(56456);const W=()=>((0,M.u)(),(0,O.jsx)(D.HomePageCE,{}))},82188:(m,s,_)=>{_.d(s,{u:()=>o});var O=_(62552),D=_(16048),M=_(81136),n=_(14632),a=_(49008),i=_(56456);const P="strapi-notification-seat-limit",l="https://cloud.strapi.io/profile/billing",L="https://strapi.io/billing/request-seats",o=()=>{const{formatMessage:t}=(0,n.c)(),{license:A,isError:v,isLoading:R}=(0,i.u)(),U=(0,D.eo)(),{pathname:d}=(0,a.IT)(),{enforcementUserCount:B,permittedSeats:I,licenseLimitStatus:E,isHostedOnStrapiCloud:T}=A??{};O.useEffect(()=>{if(v||R)return;const K=!M(I)&&!window.sessionStorage.getItem(`${P}-${d}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let C;E==="OVER_LIMIT"?C="warning":E==="AT_LIMIT"&&(C="softWarning"),K&&U({type:C,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:B,permittedSeats:I}),link:{url:T?l:L,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:T})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${P}-${d}`,"true")}})},[U,A,d,t,R,I,E,B,T,v])}},56456:(m,s,_)=>{_.d(s,{u:()=>M});var O=_(62552),D=_(85816);function M({enabled:n}={enabled:!0}){const{data:a,isError:i,isLoading:P}=(0,D.n)(void 0,{skip:!n}),l=O.useCallback(L=>{const o=a?.data?.features.find(t=>t.name===L);return o&&"options"in o?o.options:{}},[a]);return{license:a?.data,getFeature:l,isError:i,isLoading:P}}}}]);
