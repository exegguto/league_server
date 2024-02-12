"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[7676],{47676:(cs,G,s)=>{s.d(G,{ReviewWorkflowsEditPage:()=>ls});var t=s(19968),_=s(62552),J=s(35676),C=s(48936),X=s(89296),A=s(63358),M=s(16048),$=s(53305),R=s(31812),b=s(14632),l=s(70516),q=s(49008),ss=s(59784),ts=s(41712),e=s(72032),os=s(33627),es=s(85816),ns=s(56456),as=s(29384),h=s(20894),E=s(6484),T=s(1844),is=s(85204),Ls=s(85240),Cs=s(13192),As=s(35184),Rs=s(52540),Ts=s(38768),Ws=s(79904),Is=s(85676),Bs=s(96556),Us=s(54320),Ks=s(5240),us=s(91892),ws=s(36196),ys=s(20880),js=s(21424),Ss=s(18424),ps=s(21968),xs=s(12132),Fs=s(48632),Ys=s(99568),zs=s(30840),ks=s(77784),Ns=s(79371),Vs=s(67888),Zs=s(52600),Hs=s(95752),Qs=s(37388),Gs=s(61840),Js=s(49108),Xs=s(44632),$s=s(50840),bs=s(20252),qs=s(86432),st=s(22612),tt=s(24808),ot=s(24024),et=s(40960),nt=s(33656),at=s(43280),it=s(79804),lt=s(19632),_t=s(29576),rt=s(61152),Et=s(9589),dt=s(45488),Mt=s(75516);const ls=()=>{const{workflowId:j}=(0,q.W4)(),_s=(0,l.w1)(os.s),{formatMessage:n}=(0,b.c)(),r=(0,l.OY)(),{_unstableFormatAPIError:rs,_unstableFormatValidationErrors:Es}=(0,M.An)(),O=(0,M.eo)(),{isLoading:D,meta:P,workflows:g}=(0,is.u)(),{collectionTypes:S,singleTypes:p,isLoading:W}=(0,ts.u)(),ds=(0,l.w1)(e.j),Ms=(0,l.w1)(e.a),a=(0,l.w1)(e.b),x=(0,l.w1)(e.k),F=(0,l.w1)(e.c),v=(0,l.w1)(e.s),{allowedActions:{canDelete:Os,canUpdate:I}}=(0,M.aU)(_s.settings?.["review-workflows"]),[c,L]=_.useState({}),{getFeature:Ds,isLoading:Y}=(0,ns.u)(),{isLoading:B,roles:z}=(0,ss.u)(void 0),[k,d]=_.useState(null),[Ps,N]=_.useState(),[gs,V]=_.useState(!1),U=g?.find(o=>o.id===parseInt(j,10)),Z=g?.filter(o=>o.id!==parseInt(j,10)).flatMap(o=>o.contentTypes),K=Ds("review-workflows"),f=K?.[T.C],m=K?.[T.a],[vs]=(0,as.e)(),H=async()=>{N(void 0),V(!0);try{const o=await vs({...a,stages:a.stages?.map(i=>{let Q=!0;const w=ds.workflow?.stages?.find(y=>y.id===i?.id);return w&&(Q=w.permissions?.length!==i.permissions?.length||!w.permissions?.every(y=>!!i.permissions?.find(hs=>hs.role===y.role))),{...i,permissions:Q?i.permissions:void 0}})});if("error"in o){(0,es.x)(o.error)&&o.error.name==="ValidationError"?N(Es(o.error)):O({type:"warning",message:rs(o.error)});return}O({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}catch{O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{V(!1)}L({})},fs=async()=>{await H()},ms=()=>{L({})},u=(0,R.KO)({enableReinitialize:!0,initialErrors:Ps,initialValues:a,async onSubmit(){const o=a.contentTypes?.some(i=>Z?.includes(i));P&&f&&P?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)?d("stage"):x||o?(x&&L(i=>({...i,hasDeletedServerStages:!0})),o&&L(i=>({...i,hasReassignedContentTypes:!0}))):H()},validate(o){return(0,e.v)({values:o,formatMessage:n})}});return(0,e.u)(T.R,e.i),_.useEffect(()=>(!D&&U&&g&&(r((0,e.l)({workflow:U})),r((0,e.d)({workflows:g}))),W||r((0,e.e)({collectionTypes:S,singleTypes:p})),B||r((0,e.f)(z)),r((0,e.g)(D||W||B)),()=>{r((0,e.r)())}),[S,r,W,D,B,z,p,U,g]),_.useEffect(()=>{!D&&!Y&&(P&&f&&P?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)&&d("stage"))},[a.stages,Y,D,K,P,f,m]),_.useEffect(()=>{!v&&F?.length===0&&O({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,v,F,O]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.D,{}),(0,t.jsx)(R.uo,{value:u,children:(0,t.jsxs)(R.QF,{onSubmit:u.handleSubmit,children:[(0,t.jsx)(h.H,{navigationAction:(0,t.jsx)(h.B,{href:"/settings/review-workflows"}),primaryAction:I&&(0,t.jsx)(J.Z,{startIcon:(0,t.jsx)($.c,{}),type:"submit",size:"M",disabled:!Ms,loading:!Boolean(Object.keys(c).length>0)&&gs,children:n({id:"global.save",defaultMessage:"Save"})}),subtitle:!v&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:a.stages?.length}),title:a.name||""}),(0,t.jsx)(h.R,{children:v?(0,t.jsx)(C.C,{justifyContent:"center",children:(0,t.jsx)(X.c,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,t.jsxs)(C.C,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(e.W,{canUpdate:I}),(0,t.jsx)(e.S,{canDelete:Os,canUpdate:I,stages:u.values?.stages})]})})]})}),(0,t.jsx)(M.cz.Root,{isConfirmButtonLoading:v,isOpen:Object.keys(c).length>0,onToggleDialog:ms,onConfirm:fs,children:(0,t.jsx)(M.cz.Body,{children:(0,t.jsxs)(C.C,{direction:"column",gap:5,children:[c.hasDeletedServerStages&&(0,t.jsx)(A.O,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),c.hasReassignedContentTypes&&(0,t.jsx)(A.O,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:Z?.filter(o=>a.contentTypes?.includes(o)).length})}),(0,t.jsx)(A.O,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(E.L.Root,{isOpen:k==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(E.L.Root,{isOpen:k==="stage",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
