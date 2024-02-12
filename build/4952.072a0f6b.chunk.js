"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[4952],{20894:($,T,t)=>{t.d(T,{B:()=>j,D:()=>W,H:()=>S,R:()=>N});var r=t(19968),v=t(48936),s=t(63358),w=t(20596),m=t(48112),E=t(42816),M=t(28464),u=t(16048),p=t(14520),D=t(15396),y=t(14632),R=t(85816),A=t(1844),k=t(69372);const x=(0,k.cp)(v.C)`
  svg path {
    fill: ${({theme:O})=>O.colors.neutral600};
  }
`,U=({name:O})=>(0,r.jsxs)(v.C,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,u.W8)(300),children:[(0,r.jsx)(x,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,r.jsx)(p.c,{width:`${8/16}rem`})}),(0,r.jsx)(s.O,{fontWeight:"bold",children:O})]}),W=()=>(0,r.jsx)(R.P,{renderItem:O=>{if(O.type===A.D.STAGE)return(0,r.jsx)(U,{name:typeof O.item=="string"?O.item:null})}}),N=({children:O})=>(0,r.jsx)(w._,{children:(0,r.jsx)(m.G,{tabIndex:-1,children:(0,r.jsx)(E.S,{children:O})})}),j=({href:O})=>{const{formatMessage:z}=(0,y.c)();return(0,r.jsx)(u.cH,{startIcon:(0,r.jsx)(D.c,{}),to:O,children:z({id:"global.back",defaultMessage:"Back"})})},S=({title:O,subtitle:z,navigationAction:X,primaryAction:q})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.K8,{name:O}),(0,r.jsx)(M.a,{navigationAction:X,primaryAction:q,title:O,subtitle:z})]})},85240:($,T,t)=>{t.d(T,{a:()=>w,g:()=>s});var r=t(15520),v=t(1844);function s(m){if(!m)return null;const M=Object.entries(r.g.colors).filter(([,u])=>u.toUpperCase()===m.toUpperCase()).reduce((u,[p])=>(v.S?.[p]&&(u=p),u),null);return M?{themeColorName:M,name:v.S[M]}:null}function w(){return Object.entries(v.S).map(([m,E])=>({hex:r.g.colors[m].toUpperCase(),name:E}))}},59784:($,T,t)=>{t.d(T,{u:()=>m});var r=t(62552),v=t(16048),s=t(14632),w=t(85816);const m=(E={},M)=>{const{locale:u}=(0,s.c)(),p=(0,v.In)(u,{sensitivity:"base"}),{data:D,error:y,isError:R,isLoading:A,refetch:k}=(0,w.z)(E,M);return{roles:r.useMemo(()=>[...D??[]].sort((U,W)=>p.compare(U.name,W.name)),[D,p]),error:y,isError:R,isLoading:A,refetch:k}}},41712:($,T,t)=>{t.d(T,{u:()=>M});var r=t(62552),v=t(16048),s=t(85816);const w=s.m.injectEndpoints({endpoints:u=>({getComponents:u.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:p=>p.data}),getContentTypes:u.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:p=>p.data})}),overrideExisting:!1}),{useGetComponentsQuery:m,useGetContentTypesQuery:E}=w;function M(){const{_unstableFormatAPIError:u}=(0,v.An)(),p=(0,v.eo)(),D=m(),y=E();r.useEffect(()=>{y.error&&p({type:"warning",message:u(y.error)})},[y.error,u,p]),r.useEffect(()=>{D.error&&p({type:"warning",message:u(D.error)})},[D.error,u,p]);const R=D.isLoading||y.isLoading,A=r.useMemo(()=>(y?.data??[]).filter(x=>x.kind==="collectionType"&&x.isDisplayed),[y?.data]),k=r.useMemo(()=>(y?.data??[]).filter(x=>x.kind!=="collectionType"&&x.isDisplayed),[y?.data]);return{isLoading:R,components:r.useMemo(()=>D?.data??[],[D?.data]),collectionTypes:A,singleTypes:k}}},85204:($,T,t)=>{t.d(T,{u:()=>v});var r=t(29384);function v(s={}){const{id:w="",...m}=s,{data:E,isLoading:M}=(0,r.c)({id:w,populate:"stages",...m}),[u]=(0,r.d)(),[p]=(0,r.e)(),[D]=(0,r.f)(),{workflows:y,meta:R}=E??{};return{meta:R,workflows:y,isLoading:M,createWorkflow:u,updateWorkflow:p,deleteWorkflow:D}}},72032:($,T,t)=>{t.d(T,{S:()=>et,W:()=>ot,a:()=>$e,b:()=>he,c:()=>fe,d:()=>ke,e:()=>je,f:()=>Ae,g:()=>Le,h:()=>ge,i:()=>Be,j:()=>Qe,k:()=>Ne,l:()=>Te,r:()=>Re,s:()=>ze,u:()=>Ce,v:()=>nt});var r=t(62552),v=t(85816),s=t(19968),w=t(5e3),m=t(63358),E=t(48936),M=t(5928),u=t(23264),p=t(35480),D=t(42616),y=t(34404),R=t(12248),A=t(28724),k=t(70996),x=t(62492),U=t(56104),W=t(16048),N=t(14632),j=t(70516),S=t(69372),O=t(71692),z=t(67636),X=t(67516),q=t(32680),ye=t(33104),ce=t(2165),F=t(58756),Q=t(31812),Oe=t(65656),i=t(1844),ee=t(85240),L=t(67432),De=t(13192),_e=t(29088),Pe=t(35184),C=t(52540);function Ce(e,o){const a=(0,v.Q)();(0,r.useEffect)(()=>{a.injectReducer(e,o)},[a,e,o])}function Se(e){return{type:i.j,payload:{id:e}}}function Te({workflow:e}){return{type:i.A,payload:e}}function ke({workflows:e}){return{type:i.c,payload:e}}function xe(e){return{type:i.k,payload:{stageId:e}}}function ge(e){return{type:i.d,payload:e}}function te(e,o){return{type:i.l,payload:{stageId:e,...o}}}function We(e){return{type:i.m,payload:e}}function Ie(e,o){return{type:i.n,payload:{newIndex:o,oldIndex:e}}}function ue(e){return{type:i.i,payload:e}}function Re(){return{type:i.e}}function je(e){return{type:i.f,payload:e}}function Ae(e){return{type:i.g,payload:e}}function Le(e){return{type:i.h,payload:e}}const se=(0,S.cp)(O.c)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,be=(0,S.cp)(w.k)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${m.O} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${m.O} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,pe=({children:e,...o})=>(0,s.jsx)(be,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...o,children:(0,s.jsxs)(E.C,{gap:2,children:[(0,s.jsx)(se,{"aria-hidden":!0}),(0,s.jsx)(m.O,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})});pe.propTypes={children:ye.node.isRequired};const G={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Be(e=G,o){return(0,_e.Ut)(e,a=>{const{payload:c}=o;switch(o.type){case i.f:{a.serverState.contentTypes=c;break}case i.h:{a.clientState.isLoading=c;break}case i.g:{a.serverState.roles=c;break}case i.A:{const n=c;n&&(a.serverState.workflow=n,a.clientState.currentWorkflow.data={...n,stages:n.stages.map(d=>({...d,color:d?.color??i.b}))});break}case i.c:{a.serverState.workflows=c;break}case i.e:{a.clientState=G.clientState,a.serverState=(0,_e.eQ)(G.serverState);break}case i.k:{const{stageId:n}=c,{currentWorkflow:d}=e.clientState;a.clientState.currentWorkflow.data.stages=d.data.stages?.filter(f=>(f?.id??f.__temp_key__)!==n);break}case i.d:{const{currentWorkflow:n}=e.clientState;n.data||(a.clientState.currentWorkflow.data={stages:[]});const d=me(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages?.push({...c,color:c?.color??i.b,__temp_key__:d});break}case i.j:{const{currentWorkflow:n}=e.clientState,{id:d}=c,f=n.data.stages?.findIndex(h=>(h?.id??h?.__temp_key__)===d);if(f!==void 0&&f!==-1){const h=n.data.stages?.[f];a.clientState.currentWorkflow.data.stages?.splice(f+1,0,{...h,id:void 0,__temp_key__:me(a.clientState.currentWorkflow.data.stages)})}break}case i.l:{const{currentWorkflow:n}=e.clientState,{stageId:d,...f}=c;a.clientState.currentWorkflow.data.stages=n.data.stages?.map(h=>(h.id??h.__temp_key__)===d?{...h,...f}:h);break}case i.m:{const{currentWorkflow:n}=e.clientState;a.clientState.currentWorkflow.data.stages=n.data.stages?.map(d=>({...d,...c}));break}case i.n:{const{currentWorkflow:{data:{stages:n}}}=e.clientState,{newIndex:d,oldIndex:f}=c;if(n&&d>=0&&d<n.length){const h=n[f],I=[...n];I.splice(f,1),I.splice(d,0,h),a.clientState.currentWorkflow.data.stages=I}break}case i.i:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...c};break}}})}const me=(e=[])=>{const o=e.map(a=>Number(a.id??a.__temp_key__));return Math.max(...o,-1)+1},b=e=>e[i.R]??G,Ke=(0,L.M3)(b,({serverState:{contentTypes:e}})=>e),fe=(0,L.M3)(b,({serverState:{roles:e}})=>e),he=(0,L.M3)(b,({clientState:{currentWorkflow:e}})=>e.data),Ue=(0,L.M3)(b,({serverState:{workflows:e}})=>e),$e=(0,L.M3)(b,({serverState:e,clientState:{currentWorkflow:o}})=>!De(e.workflow,o.data)),Ne=(0,L.M3)(b,({serverState:e,clientState:{currentWorkflow:o}})=>!(e.workflow?.stages??[]).every(a=>!!o.data.stages?.find(({id:c})=>c===a.id))),ze=(0,L.M3)(b,({clientState:{isLoading:e}})=>e),Qe=(0,L.M3)(b,({serverState:e})=>e),He=(0,S.cp)(M.eI)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,Fe=(0,S.cp)(E.C)`
  > * {
    flex-grow: 1;
  }
`,Ge=(0,S.cp)(ce.IP)`
  color: ${({theme:e})=>e.colors.danger600};
`,Ye=(0,S.cp)(F.mf)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,Ve=(0,S.cp)(u.w)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,Ze=(0,ee.a)(),Je=()=>(0,s.jsx)(w.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"}),Xe=({id:e,index:o,canDelete:a,canReorder:c,canUpdate:n,isOpen:d=!1,stagesCount:f})=>{const h=l=>`${l+1} of ${f}`,I=l=>{_(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:B.value,position:h(l)}))},oe=l=>{_(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:B.value,position:h(l)}))},Y=()=>{_(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:B.value}))},ne=(l,K)=>{_(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:B.value,position:h(l)})),P(Ie(K,l))},ae=()=>{ie(!0)},[V,_]=r.useState(null),{formatMessage:g}=(0,N.c)(),{trackUsage:re}=(0,W.m4)(),P=(0,j.OY)(),at=(0,W.eo)(),[le,rt]=r.useState(d),[lt,ie]=r.useState(!1),[B,Ee,it]=(0,Q.m4)(`stages.${o}.name`),[Z,Me,dt]=(0,Q.m4)(`stages.${o}.color`),[H,ve,ct]=(0,Q.m4)(`stages.${o}.permissions`),_t=(0,j.w1)(fe),[{handlerId:gt,isDragging:ut,handleKeyDown:pt},mt,ft,ht,we]=(0,v.T)(c,{index:o,item:{index:o,name:B.value},onGrabItem:I,onDropItem:oe,onMoveItem:ne,onCancel:Y,type:i.D.STAGE}),Et=(0,v.V)(mt,ft),Mt=Ze.map(({hex:l,name:K})=>({value:l,label:g({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:K}),color:l})),{themeColorName:vt}=(0,ee.g)(Z.value)??{},de=_t?.filter(l=>l.code!=="strapi-super-admin");return r.useEffect(()=>{we((0,Oe.s)(),{captureDraggingState:!1})},[we,o]),(0,s.jsxs)(w.k,{ref:l=>Et(l),children:[V&&(0,s.jsx)(p.K,{"aria-live":"assertive",children:V}),ut?(0,s.jsx)(Je,{}):(0,s.jsxs)(D.G,{size:"S",variant:"primary",onToggle:()=>{rt(!le),le||re("willEditStage")},expanded:le,shadow:"tableShadow",error:Ee.error??Me?.error??ve?.error,hasErrorMessage:!1,children:[(0,s.jsx)(y.M,{title:B.value,togglePosition:"left",action:(a||n)&&(0,s.jsxs)(E.C,{children:[(0,s.jsxs)(F.Ss,{children:[(0,s.jsxs)(Ye,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(z.c,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(p.K,{as:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(F.kP,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(F.gN,{children:[n&&(0,s.jsx)(ce.IP,{onClick:()=>P(Se(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),a&&(0,s.jsx)(Ge,{onClick:()=>P(xe(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),n&&(0,s.jsx)(Ve,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:ht,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:l=>l.stopPropagation(),onKeyDown:pt,children:(0,s.jsx)(X.c,{})})]})}),(0,s.jsx)(R.u,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(A.y,{gap:4,children:[(0,s.jsx)(k.C,{col:6,children:(0,s.jsx)(x.g,{...B,id:B.name,disabled:!n,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:Ee.error??!1,onChange:l=>{it.setValue(l.target.value),P(te(e,{name:l.target.value}))},required:!0})}),(0,s.jsx)(k.C,{col:6,children:(0,s.jsx)(U.K_,{disabled:!n,error:Me?.error??!1,id:Z.name,required:!0,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:l=>{dt.setValue(l),P(te(e,{color:String(l)}))},value:Z.value.toUpperCase(),startIcon:(0,s.jsx)(E.C,{as:"span",height:2,background:Z.value,borderColor:vt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:Mt.map(({value:l,label:K,color:J})=>{const{themeColorName:wt}=(0,ee.g)(J)||{};return(0,s.jsx)(U.kH,{value:l,startIcon:(0,s.jsx)(E.C,{as:"span",height:2,background:J,borderColor:wt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:K},l)})})}),(0,s.jsx)(k.C,{col:6,children:de?.length===0?(0,s.jsx)(W.Q$,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:H.name}):(0,s.jsxs)(E.C,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(Fe,{grow:1,children:(0,s.jsx)(M.e,{...H,disabled:!n,error:ve.error??!1,id:H.name,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:l=>{const K=l.map(J=>({role:parseInt(J,10),action:"admin::review-workflows.stage.transition"}));ct.setValue(K),P(te(e,{permissions:K}))},placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(H.value??[]).map(l=>`${l.role}`),withTags:!0,children:(0,s.jsx)(M.OK,{label:g({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:de?.map(l=>`${l.id}`),children:de?.map(l=>(0,s.jsx)(He,{value:`${l.id}`,children:l.name},l.id))})})}),(0,s.jsx)(u.w,{disabled:!n,icon:(0,s.jsx)(q.c,{}),label:g({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>ae()})]})})]})})]}),(0,s.jsx)(W.cz.Root,{iconRightButton:null,isOpen:lt,onToggleDialog:()=>ie(!1),onConfirm:()=>{P(We({permissions:H.value})),ie(!1),at({type:"success",message:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"default",children:(0,s.jsx)(W.cz.Body,{children:(0,s.jsx)(m.O,{textAlign:"center",variant:"omega",children:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})},qe=(0,S.cp)(w.k)`
  transform: translateX(-50%);
`,et=({canDelete:e=!0,canUpdate:o=!0,stages:a=[]})=>{const{formatMessage:c}=(0,N.c)(),n=(0,j.OY)(),{trackUsage:d}=(0,W.m4)();return(0,s.jsxs)(E.C,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(w.k,{position:"relative",width:"100%",children:[(0,s.jsx)(qe,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(E.C,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:a.map((f,h)=>{const I=Number(f?.id??f.__temp_key__);return(0,s.jsx)(w.k,{as:"li",children:(0,s.jsx)(Xe,{id:I,index:h,isOpen:!f.id,canDelete:a.length>1&&e,canReorder:a.length>1,canUpdate:o,stagesCount:a.length})},`stage-${I}`)})})]}),o&&(0,s.jsx)(pe,{type:"button",onClick:()=>{n(ge({name:""})),d("willCreateStage")},children:c({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},tt=(0,S.cp)(M.eI)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,st=(0,S.cp)(m.O)`
  font-style: italic;
`,ot=({canUpdate:e=!0})=>{const{formatMessage:o,locale:a}=(0,N.c)(),c=(0,j.OY)(),n=(0,j.w1)(Ke),d=(0,j.w1)(he),f=(0,j.w1)(Ue),[h,I,oe]=(0,Q.m4)("name"),[Y,ne,ae]=(0,Q.m4)("contentTypes"),V=(0,W.In)(a,{sensitivity:"base"});return(0,s.jsxs)(A.y,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(k.C,{col:6,children:(0,s.jsx)(x.g,{...h,id:h.name,disabled:!e,label:o({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:I.error??!1,onChange:_=>{c(ue({name:_.target.value})),oe.setValue(_.target.value)},required:!0})}),n&&(0,s.jsx)(k.C,{col:6,children:(0,s.jsx)(M.e,{...Y,customizeContent:_=>o({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:_?.length}),disabled:!e,error:ne.error??!1,id:Y.name,label:o({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:_=>{c(ue({contentTypes:_})),ae.setValue(_)},placeholder:o({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...n.collectionTypes.length>0?[{label:o({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...n.collectionTypes].sort((_,g)=>V.compare(_.info.displayName,g.info.displayName)).map(_=>({label:_.info.displayName,value:_.uid}))}]:[],...n.singleTypes.length>0?[{label:o({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...n.singleTypes].map(_=>({label:_.info.displayName,value:_.uid}))}]:[]].map(_=>{if("children"in _)return(0,s.jsx)(M.OK,{label:_.label,values:_.children.map(g=>g.value.toString()),children:_.children.map(g=>{const{name:re}=f?.find(P=>(d&&P.id!==d.id||!d)&&P.contentTypes.includes(g.value))??{};return(0,s.jsx)(tt,{value:g.value,children:(0,s.jsx)(m.O,{children:o({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:g.label,name:re,em:(...P)=>(0,s.jsx)(m.O,{as:"em",fontWeight:"bold",children:P}),i:(...P)=>(0,s.jsx)(st,{children:P})})})},g.value)})},_.label)})})})]})};async function nt({values:e,formatMessage:o}){const a=C.kt({contentTypes:C.M$().of(C.Qb()),name:C.Qb().max(255,o({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:C.M$().of(C.kt().shape({name:C.Qb().required(o({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,o({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",o({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:n}}=this;return n?.stages.filter(d=>d.name===c).length===1}),color:C.Qb().required(o({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:C.M$(C.kt({role:C.CQ().strict().typeError(o({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required(),action:C.Qb().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await a.validate(e,{abortEarly:!1,context:e}),!0}catch(c){const n={};return c instanceof C.$D&&c.inner.forEach(d=>{d.path&&Pe(n,d.path,d.message)}),n}}}}]);
