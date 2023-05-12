import{_ as R,A as T,r,o as c,c as m,w as i,g as V,h as v,F as C,b as l,i as h}from"./index-1482ff37.js";import{B as g}from"./BitrixService-de8aa495.js";const k={name:"RuleView",data(){return{items:[],entity:[{id:1,name:"Лид",isCategory:!1,code:"LEAD"},{id:2,name:"Сделка",isCategory:!0,code:"DEAL"}],newRule:{phone:null,entityTypeId:null,categoryId:null,stageId:null,stages:[]}}},methods:{getItems(){T.phoneGetList().then(t=>{this.items=t.data.data,t.data.data.forEach(e=>{this.entityTypeChangeHandler(e.entityTypeId),this.categoryChangeHandler(e)})}).catch(t=>{console.log(t)})},getSmartTypes(){g.smartProcessGetList().then(t=>{t.data.result.types.forEach(e=>{this.entity.push({id:e.entityTypeId,name:e.title,code:"SMART"})})})},entityTypeChangeHandler(t){const e=[...this.entity].find(a=>a.id===t);if(e){if(e.code==="LEAD")return;g.getCategories(e.id).then(a=>{e.categories=a.data.result.categories}).catch(a=>{console.log(a)})}},categoryChangeHandler(t){const e=[...this.entity].find(a=>a.id===t.entityTypeId);e&&g.getStages(e.code,t.entityTypeId,t.categoryId).then(a=>{t.stageId=`C${t.categoryId}:NEW`,t.stages=a.data.result,this.items=[...this.items]})},getCategoryByEntityId(t){const e=[...this.entity].find(a=>a.id===t);if(e&&e.categories)return e.categories},checkPhoneDouble(){return![...this.items].find(e=>parseInt(e.number)===parseInt(this.newRule.phone))},save(){if(!this.newRule.phone){this.$notify({title:"Заполните номер",type:"warn"});return}if(this.checkPhoneDouble()){if(!this.newRule.entityTypeId){this.$notify({title:"Выберите сущность",type:"warn"});return}if(!this.newRule.categoryId&&this.newRule.entityTypeId===2){this.$notify({title:"Выберите воронку",type:"warn"});return}T.phoneAdd(this.newRule.entityTypeId,this.newRule.categoryId,this.newRule.stageId,this.newRule.phone).then(t=>{this.newRule={phone:null,entityTypeId:null,categoryId:null,stageId:null,stages:[]},this.getItems(),this.getSmartTypes()}).catch(t=>{console.log(t)})}else this.$notify({title:"Номер уже используется",type:"warn"})},update(t){console.log(t)},remove(t){}},mounted(){this.getItems(),this.getSmartTypes()},watch:{"newRule.categoryId":function(t){this.newRule.entityTypeId!==null&&this.newRule.entityTypeId!==1&&g.getStages("DEAL||SMART",this.newRule.entityTypeId,t).then(e=>{this.newRule.stageId=`C${t}:NEW`,this.newRule.stages=e.data.result})}}};function E(t,e,a,U,d,u){const _=r("v-text-field"),o=r("v-col"),y=r("v-select"),f=r("v-btn"),p=r("v-row"),I=r("v-container"),w=r("v-card");return c(),m(I,null,{default:i(()=>[(c(!0),V(C,null,v(d.items,n=>(c(),m(p,{key:n.id},{default:i(()=>[l(o,{cols:"12"},{default:i(()=>[l(w,null,{default:i(()=>[l(I,null,{default:i(()=>[l(p,null,{default:i(()=>[l(o,{cols:"2"},{default:i(()=>[l(_,{"hide-details":!0,type:"number",modelValue:n.number,"onUpdate:modelValue":s=>n.number=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(o,{cols:"2"},{default:i(()=>[l(y,{"hide-details":!0,items:d.entity,"item-title":"name","item-value":"id",modelValue:n.entityTypeId,"onUpdate:modelValue":[s=>n.entityTypeId=s,u.entityTypeChangeHandler]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:2},1024),l(o,{cols:"3"},{default:i(()=>[n.entityTypeId!==1?(c(),m(y,{key:0,items:u.getCategoryByEntityId(n.entityTypeId),modelValue:n.categoryId,"onUpdate:modelValue":[s=>n.categoryId=s,s=>u.categoryChangeHandler(n)],"item-title":"name","item-value":"id","hide-details":!0},null,8,["items","modelValue","onUpdate:modelValue"])):h("",!0)]),_:2},1024),l(o,{cols:"3"},{default:i(()=>[n.entityTypeId!==1?(c(),m(y,{key:0,modelValue:n.stageId,"onUpdate:modelValue":s=>n.stageId=s,items:n.stages,"item-title":"NAME","item-value":"STATUS_ID","hide-details":!0},null,8,["modelValue","onUpdate:modelValue","items"])):h("",!0)]),_:2},1024),l(o,{cols:"2"},{default:i(()=>[l(f,{class:"mr-2","prepend-icon":"mdi-content-save-check-outline",onClick:s=>u.update(n)},null,8,["onClick"]),l(f,{"prepend-icon":"mdi mdi-delete-empty",onClick:s=>u.remove(n)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),l(p,null,{default:i(()=>[l(o,{cols:"12"},{default:i(()=>[l(w,null,{default:i(()=>[l(I,null,{default:i(()=>[l(p,null,{default:i(()=>[l(o,{cols:"2"},{default:i(()=>[l(_,{modelValue:d.newRule.phone,"onUpdate:modelValue":e[0]||(e[0]=n=>d.newRule.phone=n),"hide-details":!0,type:"number",placeholder:"Номер"},null,8,["modelValue"])]),_:1}),l(o,{cols:"2"},{default:i(()=>[l(y,{placeholder:"Сущность","hide-details":!0,items:d.entity,"item-title":"name","item-value":"id",modelValue:d.newRule.entityTypeId,"onUpdate:modelValue":[e[1]||(e[1]=n=>d.newRule.entityTypeId=n),u.entityTypeChangeHandler]},null,8,["items","modelValue","onUpdate:modelValue"])]),_:1}),l(o,{cols:"3"},{default:i(()=>[d.newRule.entityTypeId!==1?(c(),m(y,{key:0,items:u.getCategoryByEntityId(d.newRule.entityTypeId),"item-title":"name","item-value":"id",placeholder:"Воронка",modelValue:d.newRule.categoryId,"onUpdate:modelValue":e[2]||(e[2]=n=>d.newRule.categoryId=n),"hide-details":!0},null,8,["items","modelValue"])):h("",!0)]),_:1}),l(o,{cols:"3"},{default:i(()=>[d.newRule.entityTypeId!==1?(c(),m(y,{key:0,placeholder:"Стадия",items:d.newRule.stages,modelValue:d.newRule.stageId,"onUpdate:modelValue":e[3]||(e[3]=n=>d.newRule.stageId=n),"item-title":"NAME","item-value":"STATUS_ID","hide-details":!0},null,8,["items","modelValue"])):h("",!0)]),_:1}),l(o,{cols:"2"},{default:i(()=>[l(f,{onClick:u.save,class:"mr-2","prepend-icon":"mdi-content-save-check-outline"},null,8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const b=R(k,[["render",E]]);export{b as default};
