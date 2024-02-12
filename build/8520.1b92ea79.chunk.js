"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[8520],{28520:(G,I,t)=>{t.r(I),t.d(I,{E:()=>N,a:()=>$,b:()=>Le});var e=t(19968),f=t(62552),m=t(48936),R=t(33128),k=t(89296),L=t(532),U=t(93432),y=t(75872),_=t(45412),a=t(35480),g=t(63358),M=t(38296),D=t(32568),B=t(19576),v=t(5e3),K=t(28724),j=t(70996),V=t(62492),ne=t(82800),re=t(65092),ae=t(9544),oe=t(28464),z=t(35676),ie=t(42816),de=t(48112),A=t(16048),le=t(39380),Q=t(49008),w=t(85816),Z=t(41712),ce=t(33627),ge=t(5540),he=t(48636),Y=t(39716),ue=t(24144),J=t(53305),_e=t(64764),Ee=t(15396),P=t(31812),W=t(14632),T=t(52540),me=t(43164),F=t(69372),pe=t(54196);const[fe,X]=(0,me.G)("WebhookEvent"),Me=({children:s})=>{const{formatMessage:n}=(0,W.c)(),{collectionTypes:r,isLoading:h}=(0,Z.u)(),o=f.useMemo(()=>r.some(i=>i.options?.draftAndPublish===!0),[r]),c=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(fe,{isDraftAndPublish:o,children:(0,e.jsxs)(m.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(R.u,{"aria-hidden":!0,children:c}),h&&(0,e.jsx)(k.c,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(ye,{"aria-label":c,children:s})]})})},ye=(0,F.cp)(L.w)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,ve=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},xe=({getHeaders:s=ve})=>{const{isDraftAndPublish:n}=X("Headers"),{formatMessage:r}=(0,W.c)(),h=s(n);return(0,e.jsx)(U.Y,{children:(0,e.jsxs)(y._,{children:[(0,e.jsx)(_.d,{children:(0,e.jsx)(a.K,{children:r({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),h.map(o=>["app.utils.publish","app.utils.unpublish"].includes(o?.id??"")?(0,e.jsx)(_.d,{title:r({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id):(0,e.jsx)(_.d,{children:(0,e.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id))]})})},Ce=({providedEvents:s})=>{const{isDraftAndPublish:n}=X("Body"),r=s||Oe(n),{values:h,handleChange:o}=(0,P.Sq)(),c="events",i=h.events,p=[],x=i.reduce((d,l)=>{const E=l.split(".")[0];return d[E]||(d[E]=[]),d[E].push(l),d},{}),u=({target:{name:d,value:l}})=>{const E=new Set(i);l?E.add(d):E.delete(d),o({target:{name:c,value:Array.from(E)}})},O=({target:{name:d,value:l}})=>{const E=new Set(i);l?r[d].forEach(b=>{p.includes(b)||E.add(b)}):r[d].forEach(b=>E.delete(b)),o({target:{name:c,value:Array.from(E)}})};return(0,e.jsx)(M.A,{children:Object.entries(r).map(([d,l])=>(0,e.jsx)(q,{disabledEvents:p,name:d,events:l,inputValue:x[d],handleSelect:u,handleSelectAll:O},d))})},Oe=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},q=({disabledEvents:s=[],name:n,events:r=[],inputValue:h=[],handleSelect:o,handleSelectAll:c})=>{const{formatMessage:i}=(0,W.c)(),p=r.filter(l=>!s.includes(l)),x=h.length>0,u=h.length===p.length,O=({target:{name:l}})=>{c({target:{name:l,value:!u}})},d=5;return(0,e.jsxs)(y._,{children:[(0,e.jsx)(_.w,{children:(0,e.jsx)(D.y,{indeterminate:x&&!u,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:O,value:u,children:je(n)})}),r.map(l=>(0,e.jsx)(_.w,{children:(0,e.jsx)(B.c,{disabled:s.includes(l),"aria-label":l,name:l,value:h.includes(l),onValueChange:E=>o({target:{name:l,value:E}})})},l)),r.length<d&&(0,e.jsx)(_.w,{colSpan:d-r.length})]})},je=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),$={Root:Me,Headers:xe,Body:Ce,Row:q},Pe=()=>(0,e.jsxs)($.Root,{children:[(0,e.jsx)($.Headers,{}),(0,e.jsx)($.Body,{})]}),be=()=>{const{formatMessage:s}=(0,W.c)(),{values:n,errors:r}=(0,P.Sq)();return(0,e.jsxs)(m.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(R.u,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(v.k,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(P.KE,{validateOnChange:!1,name:"headers",render:({push:h,remove:o})=>(0,e.jsxs)(K.y,{gap:4,children:[n.headers.map((c,i)=>{const p=r.headers?.[i],x=typeof p=="object"?p.key:void 0,u=typeof p=="object"?p.value:void 0;return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsx)(j.C,{col:6,children:(0,e.jsx)(P.IN,{as:De,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:x})}),(0,e.jsx)(j.C,{col:6,children:(0,e.jsxs)(m.C,{alignItems:"flex-end",children:[(0,e.jsx)(v.k,{style:{flex:1},children:(0,e.jsx)(P.IN,{as:V.g,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:u})}),(0,e.jsx)(m.C,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:u?0:5,children:(0,e.jsx)(A.CA,{disabled:n.headers.length===1,onClick:()=>o(i),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${c.key}`)}),(0,e.jsx)(j.C,{col:12,children:(0,e.jsx)(ne.c,{type:"button",onClick:()=>{h({key:"",value:""})},startIcon:(0,e.jsx)(he.c,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},De=({name:s,onChange:n,value:r,...h})=>{const{values:{headers:o}}=(0,P.Sq)(),[c,i]=f.useState([...ee]);f.useEffect(()=>{const u=ee.filter(O=>!o?.some(d=>d.key!==r&&d.key===O));i(u)},[o,r]);const p=u=>{n({target:{name:s,value:u}})},x=u=>{i(O=>[...O,u]),p(u)};return(0,e.jsx)(re.cT,{...h,onClear:()=>p(""),onChange:p,onCreateOption:x,placeholder:"",value:r,children:c.map(u=>(0,e.jsx)(ae.m,{value:u,children:u},u))})},ee=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Te=({isPending:s,onCancel:n,response:r})=>{const{statusCode:h,message:o}=r??{},{formatMessage:c}=(0,W.c)();return(0,e.jsx)(v.k,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(K.y,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(j.C,{col:3,children:(0,e.jsx)(g.O,{children:c({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(j.C,{col:3,children:(0,e.jsx)(Ae,{isPending:s,statusCode:h})}),(0,e.jsx)(j.C,{col:6,children:s?(0,e.jsx)(m.C,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:n,type:"button",children:(0,e.jsxs)(m.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(g.O,{textColor:"neutral400",children:c({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(H,{as:Y.c,color:"neutral400"})]})})}):(0,e.jsx)(We,{statusCode:h,message:o})})]})})},H=F.cp.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,F.gV)`
          path {
            fill: ${s.colors[n]};
          }
        `:""}
`),Ae=({isPending:s,statusCode:n})=>{const{formatMessage:r}=(0,W.c)();return s||!n?(0,e.jsxs)(m.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(H,{as:ue.c}),(0,e.jsx)(g.O,{children:r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(m.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(H,{as:J.c,color:"success700"}),(0,e.jsx)(g.O,{children:r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(m.C,{gap:2,alignItems:"center",children:[(0,e.jsx)(H,{as:Y.c,color:"danger700"}),(0,e.jsxs)(g.O,{children:[r({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},We=({statusCode:s,message:n})=>{const{formatMessage:r}=(0,W.c)();return s?s>=200&&s<300?(0,e.jsx)(m.C,{justifyContent:"flex-end",children:(0,e.jsx)(g.O,{textColor:"neutral600",ellipsis:!0,children:r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(m.C,{justifyContent:"flex-end",children:(0,e.jsx)(m.C,{maxWidth:(0,A.W8)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(g.O,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Ie=({handleSubmit:s,triggerWebhook:n,isCreating:r,isTriggering:h,triggerResponse:o,data:c})=>{const{formatMessage:i}=(0,W.c)(),[p,x]=f.useState(!1),u=(0,w.p)(Pe,async()=>(await t.e(5424).then(t.bind(t,55424))).EventsTableEE),O=l=>Object.keys(l).length?Object.entries(l).map(([E,b])=>({key:E,value:b})):[{key:"",value:""}],d=(0,P.KO)({initialValues:{name:c?.name||"",url:c?.url||"",headers:O(c?.headers||{}),events:c?.events||[]},async onSubmit(l,E){await s(l,E),E.resetForm({values:l})},validationSchema:ke({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return u?(0,e.jsx)(P.uo,{value:d,children:(0,e.jsxs)(A.QF,{children:[(0,e.jsx)(oe.a,{primaryAction:(0,e.jsxs)(m.C,{gap:2,children:[(0,e.jsx)(z.Z,{onClick:()=>{n(),x(!0)},variant:"tertiary",startIcon:(0,e.jsx)(_e.c,{}),disabled:r||h,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(z.Z,{startIcon:(0,e.jsx)(J.c,{}),type:"submit",size:"L",disabled:!d.dirty,loading:d.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):c?.name,navigationAction:(0,e.jsx)(ge.c,{as:le.Af,startIcon:(0,e.jsx)(Ee.c,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(ie.S,{children:(0,e.jsxs)(m.C,{direction:"column",alignItems:"stretch",gap:4,children:[p&&(0,e.jsx)(Te,{isPending:h,response:o,onCancel:()=>x(!1)}),(0,e.jsx)(v.k,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(m.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(K.y,{gap:6,children:[(0,e.jsx)(j.C,{col:6,children:(0,e.jsx)(P.IN,{as:V.g,name:"name",error:d.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(j.C,{col:12,children:(0,e.jsx)(P.IN,{as:V.g,name:"url",error:d.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(be,{}),(0,e.jsx)(u,{})]})})]})})]})}):null},Re=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Se=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,ke=({formatMessage:s})=>T.kt().shape({name:T.Qb().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(Re,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:T.Qb().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Se,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:T.Wk(n=>{const r=T.M$();if(n.length===1){const{key:h,value:o}=n[0];if(!h&&!o)return r}return r.of(T.kt().shape({key:T.Qb().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:T.Qb().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:T.M$()}),se=s=>({...s,headers:s.headers.reduce((n,{key:r,value:h})=>(r!==""&&(n[r]=h),n),{})}),N=()=>{const n=(0,Q.SU)("/settings/webhooks/:id")?.params.id,r=n==="create",{replace:h}=(0,Q.Uz)(),o=(0,A.eo)(),{_unstableFormatAPIError:c,_unstableFormatValidationErrors:i}=(0,A.An)(),{isLoading:p}=(0,Z.u)(),[x,u]=f.useState(!1),[O,d]=f.useState(),{isLoading:l,webhooks:E,error:b,createWebhook:Ue,updateWebhook:Be,triggerWebhook:Ke}=(0,pe.u)({id:n},{skip:r});f.useEffect(()=>{b&&o({type:"warning",message:c(b)})},[b,o,c]);const we=async()=>{try{u(!0);const S=await Ke(n);if("error"in S){o({type:"warning",message:c(S.error)});return}d(S.data)}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{u(!1)}},$e=async(S,te)=>{try{if(r){const C=await Ue(se(S));if("error"in C){(0,w.x)(C.error)&&C.error.name==="ValidationError"?te.setErrors(i(C.error)):o({type:"warning",message:c(C.error)});return}o({type:"success",message:{id:"Settings.webhooks.created"}}),h(`/settings/webhooks/${C.data.id}`)}else{const C=await Be({id:n,...se(S)});if("error"in C){(0,w.x)(C.error)&&C.error.name==="ValidationError"?te.setErrors(i(C.error)):o({type:"warning",message:c(C.error)});return}o({type:"success",message:{id:"notification.form.success.fields"}})}}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(l||p)return(0,e.jsx)(A.Wm,{});const[He]=E??[];return(0,e.jsxs)(de.G,{children:[(0,e.jsx)(A.K8,{name:"Webhooks"}),(0,e.jsx)(Ie,{data:He,handleSubmit:$e,triggerWebhook:we,isCreating:r,isTriggering:x,triggerResponse:O})]})},Le=Object.freeze(Object.defineProperty({__proto__:null,EditPage:N,ProtectedEditPage:()=>{const s=(0,w.j)(ce.s);return(0,e.jsx)(A.rF,{permissions:s.settings?.webhooks.update,children:(0,e.jsx)(N,{})})}},Symbol.toStringTag,{value:"Module"}))},41712:(G,I,t)=>{t.d(I,{u:()=>U});var e=t(62552),f=t(16048),m=t(85816);const R=m.m.injectEndpoints({endpoints:y=>({getComponents:y.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:_=>_.data}),getContentTypes:y.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:_=>_.data})}),overrideExisting:!1}),{useGetComponentsQuery:k,useGetContentTypesQuery:L}=R;function U(){const{_unstableFormatAPIError:y}=(0,f.An)(),_=(0,f.eo)(),a=k(),g=L();e.useEffect(()=>{g.error&&_({type:"warning",message:y(g.error)})},[g.error,y,_]),e.useEffect(()=>{a.error&&_({type:"warning",message:y(a.error)})},[a.error,y,_]);const M=a.isLoading||g.isLoading,D=e.useMemo(()=>(g?.data??[]).filter(v=>v.kind==="collectionType"&&v.isDisplayed),[g?.data]),B=e.useMemo(()=>(g?.data??[]).filter(v=>v.kind!=="collectionType"&&v.isDisplayed),[g?.data]);return{isLoading:M,components:e.useMemo(()=>a?.data??[],[a?.data]),collectionTypes:D,singleTypes:B}}},54196:(G,I,t)=>{t.d(I,{u:()=>y});var e=t(85816);const f=e.m.injectEndpoints({endpoints:_=>({getWebhooks:_.query({query:a=>({url:`/admin/webhooks/${a?.id??""}`,method:"GET"}),transformResponse:a=>Array.isArray(a.data)?a.data:[a.data],providesTags:(a,g,M)=>typeof M=="object"&&"id"in M?[{type:"Webhook",id:M.id}]:[...a?.map(({id:D})=>({type:"Webhook",id:D}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:_.mutation({query:a=>({url:"/admin/webhooks",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:_.mutation({query:({id:a,...g})=>({url:`/admin/webhooks/${a}`,method:"PUT",data:g}),transformResponse:a=>a.data,invalidatesTags:(a,g,{id:M})=>[{type:"Webhook",id:M}]}),triggerWebhook:_.mutation({query:a=>({url:`/admin/webhooks/${a}/trigger`,method:"POST"}),transformResponse:a=>a.data}),deleteManyWebhooks:_.mutation({query:a=>({url:"/admin/webhooks/batch-delete",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:(a,g,{ids:M})=>M.map(D=>({type:"Webhook",id:D}))})}),overrideExisting:!1}),{useGetWebhooksQuery:m,useCreateWebhookMutation:R,useUpdateWebhookMutation:k,useTriggerWebhookMutation:L,useDeleteManyWebhooksMutation:U}=f,y=(_=void 0,a)=>{const{data:g,isLoading:M,error:D}=m(_,a),[B]=R(),[v]=k(),[K]=L(),[j]=U();return{webhooks:g,isLoading:M,error:D,createWebhook:B,updateWebhook:v,triggerWebhook:K,deleteManyWebhooks:j}}}}]);
