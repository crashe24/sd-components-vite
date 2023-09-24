import{j as M}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s=({label:o,size:C="h1",AllCaps:L=!1,color:v="text-tertiary",fontColor:x="#1ddd54"})=>M.jsx("span",{className:`${C} ${v}`,style:{color:x},children:L?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"h1"},description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},AllCaps:{defaultValue:{value:"false"},description:"Capitalize all letterr",name:"AllCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-tertiary"},description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:{value:"#1ddd54"},description:"Font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const S={title:"UI/label/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"My label Label"}},a={args:{label:"My All Label",AllCaps:!0}},r={args:{label:"My secondary Label",color:"text-secondary"}},l={args:{label:"My custom color Label",fontColor:"#dfgfdf"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'My label Label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'My All Label',
    AllCaps: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var i,m,y;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'My secondary Label',
    color: 'text-secondary'
  }
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var b,f,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'My custom color Label',
    fontColor: '#dfgfdf'
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,q as __namedExportsOrder,S as default};
//# sourceMappingURL=MyLabel.stories-0237d8a5.js.map
