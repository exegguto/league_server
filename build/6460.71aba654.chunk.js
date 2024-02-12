"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[6460],{76460:(ps,h,e)=>{e.r(h),e.d(h,{default:()=>ss});var s=e(19968),x=e(62552),F=e(11208),Q=e(2931),G=e(25824),H=e(28724),M=e(70996),N=e(25352),$=e(3548),T=e(35676),Z=e(42848),z=e(20464),c=e(76512),m=e(9752),f=e(35480),O=e(63358),J=e(48744),C=e(55716),y=e(23264),V=e(3400),v=e(48112),U=e(28464),L=e(42816),a=e(16048),P=e(14632),u=e(48632),i=e(19480),gs=e(79804),X=e(5848),A=e(39820),Y=e(31812),l=e(33104),E=e(52540),k=e(51384),R=e(89940),w=e(53305);const q=E.kt().shape({options:E.kt().shape({from:E.kt().shape({name:E.Qb().required(a.aO.required),email:E.Qb().email(a.aO.email).required(a.aO.required)}).required(),response_email:E.Qb().email(a.aO.email),object:E.Qb().required(a.aO.required),message:E.Qb().required(a.aO.required)}).required(a.aO.required)}),K=({template:t,onToggle:r,onSubmit:n})=>{const{formatMessage:d}=(0,P.c)();return(0,s.jsxs)(F.E,{onClose:r,labelledBy:`${d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${d({id:(0,i.g)(t.display),defaultMessage:t.display})}`,children:[(0,s.jsx)(Q.k,{children:(0,s.jsxs)(X.M,{label:`${d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${d({id:(0,i.g)(t.display),defaultMessage:t.display})}`,children:[(0,s.jsx)(A.i,{children:d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,s.jsx)(A.i,{isCurrent:!0,children:d({id:(0,i.g)(t.display),defaultMessage:t.display})})]})}),(0,s.jsx)(Y.QJ,{onSubmit:n,initialValues:t,validateOnChange:!1,validationSchema:q,enableReinitialize:!0,children:({errors:_,values:p,handleChange:g,isSubmitting:j})=>(0,s.jsxs)(a.QF,{children:[(0,s.jsx)(G.a,{children:(0,s.jsxs)(H.y,{gap:5,children:[(0,s.jsx)(M.C,{col:6,s:12,children:(0,s.jsx)(a.u,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:g,value:p.options.from.name,error:_?.options?.from?.name,type:"text"})}),(0,s.jsx)(M.C,{col:6,s:12,children:(0,s.jsx)(a.u,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:g,value:p.options.from.email,error:_?.options?.from?.email,type:"text"})}),(0,s.jsx)(M.C,{col:6,s:12,children:(0,s.jsx)(a.u,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:g,value:p.options.response_email,error:_?.options?.response_email,type:"text"})}),(0,s.jsx)(M.C,{col:6,s:12,children:(0,s.jsx)(a.u,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:g,value:p.options.object,error:_?.options?.object,type:"text"})}),(0,s.jsx)(M.C,{col:12,s:12,children:(0,s.jsx)(N.A,{label:d({id:(0,i.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:g,value:p.options.message,error:_?.options?.message&&d({id:_.options.message,defaultMessage:_.options.message})})})]})}),(0,s.jsx)($._,{startActions:(0,s.jsx)(T.Z,{onClick:r,variant:"tertiary",children:"Cancel"}),endActions:(0,s.jsx)(T.Z,{loading:j,type:"submit",children:"Finish"})})]})})]})};K.propTypes={template:l.shape({display:l.string,icon:l.string,options:l.shape({from:l.shape({name:l.string,email:l.string}),message:l.string,object:l.string,response_email:l.string})}).isRequired,onSubmit:l.func.isRequired,onToggle:l.func.isRequired};const I=({canUpdate:t,onEditClick:r})=>{const{formatMessage:n}=(0,P.c)();return(0,s.jsxs)(Z.o,{colCount:3,rowCount:3,children:[(0,s.jsx)(z.o,{children:(0,s.jsxs)(c.Tr,{children:[(0,s.jsx)(m.Th,{width:"1%",children:(0,s.jsx)(f.K,{children:n({id:(0,i.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,s.jsx)(m.Th,{children:(0,s.jsx)(O.O,{variant:"sigma",textColor:"neutral600",children:n({id:(0,i.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,s.jsx)(m.Th,{width:"1%",children:(0,s.jsx)(f.K,{children:n({id:(0,i.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,s.jsxs)(J.K,{children:[(0,s.jsxs)(c.Tr,{...(0,a.on)({fn:()=>r("reset_password")}),children:[(0,s.jsx)(m.Td,{children:(0,s.jsx)(C.G,{children:(0,s.jsx)(k.c,{"aria-label":n({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(O.O,{children:n({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,s.jsx)(m.Td,{...a.Ii,children:(0,s.jsx)(y.w,{onClick:()=>r("reset_password"),label:n({id:(0,i.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:t&&(0,s.jsx)(R.c,{})})})]}),(0,s.jsxs)(c.Tr,{...(0,a.on)({fn:()=>r("email_confirmation")}),children:[(0,s.jsx)(m.Td,{children:(0,s.jsx)(C.G,{children:(0,s.jsx)(w.c,{"aria-label":n({id:(0,i.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,s.jsx)(m.Td,{children:(0,s.jsx)(O.O,{children:n({id:(0,i.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,s.jsx)(m.Td,{...a.Ii,children:(0,s.jsx)(y.w,{onClick:()=>r("email_confirmation"),label:n({id:(0,i.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:t&&(0,s.jsx)(R.c,{})})})]})]})]})};I.propTypes={canUpdate:l.bool.isRequired,onEditClick:l.func.isRequired};const ss=()=>(0,s.jsx)(a.rF,{permissions:i.P.readEmailTemplates,children:(0,s.jsx)(es,{})}),es=()=>{const{formatMessage:t}=(0,P.c)(),{trackUsage:r}=(0,a.m4)(),{notifyStatus:n}=(0,V.O)(),d=(0,a.eo)(),{lockApp:_,unlockApp:p}=(0,a.H6)(),g=(0,u.useQueryClient)(),{get:j,put:as}=(0,a.Qn)(),{formatAPIError:B}=(0,a.An)();(0,a.G0)();const[is,ts]=x.useState(!1),[W,ls]=x.useState(null),{isLoading:ns,allowedActions:{canUpdate:os}}=(0,a.aU)({update:i.P.updateEmailTemplates}),{isLoading:ds,data:b}=(0,u.useQuery)(["users-permissions","email-templates"],async()=>{const{data:o}=await j("/users-permissions/email-templates");return o},{onSuccess(){n(t({id:(0,i.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(o){d({type:"warning",message:B(o)})}}),rs=ns||ds,D=()=>{ts(o=>!o)},ms=o=>{ls(o),D()},S=(0,u.useMutation)(o=>as("/users-permissions/email-templates",{"email-templates":o}),{async onSuccess(){await g.invalidateQueries(["users-permissions","email-templates"]),d({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),r("didEditEmailTemplates"),p(),D()},onError(o){d({type:"warning",message:B(o)}),p()},refetchActive:!0}),_s=o=>{_(),r("willEditEmailTemplates");const Es={...b,[W]:o};S.mutate(Es)};return rs?(0,s.jsxs)(v.G,{"aria-busy":"true",children:[(0,s.jsx)(a.K8,{name:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(U.a,{title:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(L.S,{children:(0,s.jsx)(a.Wm,{})})]}):(0,s.jsxs)(v.G,{"aria-busy":S.isLoading,children:[(0,s.jsx)(a.K8,{name:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(U.a,{title:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsxs)(L.S,{children:[(0,s.jsx)(I,{onEditClick:ms,canUpdate:os}),is&&(0,s.jsx)(K,{template:b[W],onToggle:D,onSubmit:_s})]})]})}}}]);
