"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[6632],{96632:(p,P,s)=>{s.d(P,{ProtectedListPage:()=>ts});var _=s(19968),r=s(62552),e=s(76512),E=s(9752),i=s(63358),C=s(48936),T=s(5e3),h=s(23264),D=s(48112),a=s(28464),R=s(35676),L=s(52051),U=s(42816),W=s(42848),S=s(89616),I=s(20464),K=s(35480),G=s(48744),o=s(16048),$=s(48636),V=s(32680),J=s(89940),H=s(71324),Q=s(78164),X=s(29088),N=s(14632),b=s(49008),F=s(85816),k=s(59784),z=s(33627),Ds=s(54320),Os=s(5240),Ms=s(91892),Ps=s(36196),Cs=s(20880),Ts=s(21424),hs=s(70516),Rs=s(31812),Ls=s(18424),ms=s(52540),vs=s(21968),cs=s(12132),As=s(48632),gs=s(85676),Bs=s(35184),Us=s(99568),Ws=s(96556),Is=s(13192),Ks=s(30840),xs=s(77784),js=s(79371),fs=s(67888),us=s(52600),ys=s(95752),ps=s(37388),Ss=s(61840),$s=s(49108),Ns=s(44632),Fs=s(50840),zs=s(20252),Ys=s(86432),Zs=s(22612),Gs=s(24808),Vs=s(24024),Js=s(40960),Hs=s(33656),Qs=s(43280),Xs=s(79804),bs=s(19632),ks=s(29576),ws=s(61152),qs=s(9589),s_=s(45488),__=s(75516),t_=s(38768),n_=s(79904);const w=({id:t,name:M,description:l,usersCount:v,icons:c,rowIndex:x,canUpdate:A})=>{const{formatMessage:g}=(0,N.c)(),[,m]=c,j=g({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:v});return(0,_.jsxs)(e.Tr,{"aria-rowindex":x,...A?(0,o.on)({fn:m.onClick}):{},children:[(0,_.jsx)(E.Td,{maxWidth:(0,o.W8)(130),children:(0,_.jsx)(i.O,{ellipsis:!0,textColor:"neutral800",children:M})}),(0,_.jsx)(E.Td,{maxWidth:(0,o.W8)(250),children:(0,_.jsx)(i.O,{ellipsis:!0,textColor:"neutral800",children:l})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(i.O,{textColor:"neutral800",children:j})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(C.C,{justifyContent:"flex-end",...o.Ii,children:c.map((d,B)=>d?(0,_.jsx)(T.k,{paddingLeft:B===0?0:1,children:(0,_.jsx)(h.w,{onClick:d.onClick,label:d.label,borderWidth:0,icon:d.icon})},d.label):null)})})]},t)},q=()=>{const{formatMessage:t}=(0,N.c)();(0,o.G0)();const M=(0,F.j)(z.s),{formatAPIError:l}=(0,o.An)(),v=(0,o.eo)(),[c,x]=r.useState(!1),[{query:A}]=(0,o.WK)(),{isLoading:g,allowedActions:{canCreate:m,canDelete:j,canRead:d,canUpdate:B}}=(0,o.aU)(M.settings?.roles),{roles:Y,refetch:ns}=(0,k.u)({filters:A?._q?{name:{$containsi:A._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:g||!d}),{push:f}=(0,b.Uz)(),[{showModalConfirmButtonLoading:os,roleToDelete:Es},u]=r.useReducer(_s,ss),{post:as}=(0,o.YF)(),ls=async()=>{try{u({type:"ON_REMOVE_ROLES"}),await as("/admin/roles/batch-delete",{ids:[Es]}),await ns(),u({type:"RESET_DATA_TO_DELETE"})}catch(n){n instanceof Q.Uh&&v({type:"warning",message:l(n)})}y()},Z=()=>f("/settings/roles/new"),y=()=>x(n=>!n),is=n=>O=>{O.preventDefault(),O.stopPropagation(),n.usersCount?v({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):(u({type:"SET_ROLE_TO_DELETE",id:n.id}),y())},ds=n=>O=>{O.preventDefault(),O.stopPropagation(),f(`/settings/roles/duplicate/${n.id}`)},es=Y.length+1,rs=6;return g?(0,_.jsx)(D.G,{children:(0,_.jsx)(o.Wm,{})}):(0,_.jsxs)(D.G,{children:[(0,_.jsx)(o.K8,{name:"Roles"}),(0,_.jsx)(a.a,{primaryAction:m?(0,_.jsx)(R.Z,{onClick:Z,startIcon:(0,_.jsx)($.c,{}),size:"S",children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:t({id:"global.roles",defaultMessage:"roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),d&&(0,_.jsx)(L.U,{startActions:(0,_.jsx)(o.w9,{label:t({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:t({id:"global.roles",defaultMessage:"roles"})})})}),d&&(0,_.jsx)(U.S,{children:(0,_.jsxs)(W.o,{colCount:rs,rowCount:es,footer:m?(0,_.jsx)(S.U,{onClick:Z,icon:(0,_.jsx)($.c,{}),children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,_.jsx)(I.o,{children:(0,_.jsxs)(e.Tr,{"aria-rowindex":1,children:[(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(K.K,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,_.jsx)(G.K,{children:Y?.map((n,O)=>(0,_.jsx)(w,{id:n.id,name:n.name,description:n.description,usersCount:n.usersCount,icons:[m&&{onClick:ds(n),label:t({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,_.jsx)(V.c,{})},B&&{onClick:()=>f(`/settings/roles/${n.id}`),label:t({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,_.jsx)(J.c,{})},j&&{onClick:is(n),label:t({id:"global.delete",defaultMessage:"Delete"}),icon:(0,_.jsx)(H.c,{})}].filter(Boolean),rowIndex:O+2,canUpdate:B},n.id))})]})}),(0,_.jsx)(o.cz,{isOpen:c,onConfirm:ls,isConfirmButtonLoading:os,onToggleDialog:y})]})},ss={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(t,M)=>(0,X.cp)(t,l=>{switch(M.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=M.id;break}default:return l}}),ts=()=>{const t=(0,F.j)(z.s);return(0,_.jsx)(o.rF,{permissions:t.settings?.roles.main,children:(0,_.jsx)(q,{})})}},59784:(p,P,s)=>{s.d(P,{u:()=>i});var _=s(62552),r=s(16048),e=s(14632),E=s(85816);const i=(C={},T)=>{const{locale:h}=(0,e.c)(),D=(0,r.In)(h,{sensitivity:"base"}),{data:a,error:R,isError:L,isLoading:U,refetch:W}=(0,E.z)(C,T);return{roles:_.useMemo(()=>[...a??[]].sort((I,K)=>D.compare(I.name,K.name)),[a,D]),error:R,isError:L,isLoading:U,refetch:W}}},89616:(p,P,s)=>{s.d(P,{U:()=>D});var _=s(19968),r=s(69372),e=s(5e3),E=s(6912),i=s(48936),C=s(63358);const T=(0,r.cp)(e.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.primary600};
  }
`,h=(0,r.cp)(e.k)`
  border-radius: 0 0 ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,D=({children:a,icon:R,...L})=>(0,_.jsxs)("div",{children:[(0,_.jsx)(E.c,{}),(0,_.jsx)(h,{as:"button",background:"primary100",padding:5,...L,children:(0,_.jsxs)(i.C,{children:[(0,_.jsx)(T,{"aria-hidden":!0,background:"primary200",children:R}),(0,_.jsx)(e.k,{paddingLeft:3,children:(0,_.jsx)(C.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:a})})]})})]})}}]);
