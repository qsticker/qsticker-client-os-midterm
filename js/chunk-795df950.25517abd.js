(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-795df950"],{"7f8c":function(t,e,a){},aa21:function(t,e,a){"use strict";a("7f8c")},d701:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"startBody"},[s("div",[s("img",{staticClass:"mb-4",staticStyle:{"border-radius":"50%"},attrs:{src:a("b640"),alt:"",width:"70",height:"70"}}),s("h1",{staticClass:"h3 mb-3 fw-normal"},[t._v(" "+t._s(t.$t("brandname"))+" ")]),s("LanguageSelector",{staticClass:"mr-2"}),s("div",{staticClass:"form-floating",staticStyle:{"margin-top":"10px"}},[s("label",{staticStyle:{position:"left"},attrs:{for:"answer-code"}},[t._v(t._s(t.$t("答題碼")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{id:"answer-code",type:"text",placeholder:""},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),s("b-button",{staticStyle:{"margin-top":"20px"},attrs:{variant:"primary",block:""},on:{click:function(e){return t.goTo()}}},[t._v(" "+t._s(t.$t("開始"))+" ")]),t.status!=t.Status.INITIAL?s("b-alert",{staticStyle:{"margin-top":"10px"},attrs:{show:"",variant:"danger"}},[t.status===t.Status.NOT_EXISTING?s("div",[t._v(" "+t._s(t.$t("答題碼不存在"))+" ")]):t.status===t.Status.SUBMMITED?s("div",[t._v(" "+t._s(t.$t("測驗已繳交"))+" ")]):t.status===t.Status.EMPTY_INPUT?s("div",[t._v(" "+t._s(t.$t("答題碼為空，請輸入答題碼"))+" ")]):t.status===t.Status.NETWORK_ERROR?s("div",[t._v(" HTTP Status: "+t._s(t.networkErrorCode)+" ")]):t._e()]):t._e(),s("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v(" "+t._s(t.$t("brandname"))+" © 2022 ")])],1)])},r=[],n=a("1da1"),o=(a("96cf"),a("2b0e")),c=a("af9c"),i=a("fd0e"),u=a("0186"),d=o["default"].extend({components:{LanguageSelector:c["a"]},data:function(){return{code:"",status:u["a"].INITIAL,networkErrorCode:"",errored:!1,loading:!0,Status:u["a"],clientType:""}},created:function(){this.code=this.$route.query.code,this.clientType=this.$route.query.clientType},methods:{goTo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.code&&void 0!==t.code){e.next=4;break}t.status=u["a"].EMPTY_INPUT,e.next=17;break;case 4:return t.$store.commit("updateLoading",!0),e.prev=5,e.next=8,i["a"].check(t.code);case 8:a=e.sent,a===u["a"].TEMP_SUBMITTED||a===u["a"].STARTED||a===u["a"].TRY_AGAIN?t.$router.push({path:"/ing",query:{code:t.code,clientType:t.clientType}}):a===u["a"].SUBMMITED&&(t.status=u["a"].SUBMMITED),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](5),s=e.t0,404===s.response.status?t.status=u["a"].NOT_EXISTING:(t.status=u["a"].NETWORK_ERROR,t.networkErrorCode=s.response.status);case 16:t.$store.commit("updateLoading",!1);case 17:case"end":return e.stop()}}),e,null,[[5,12]])})))()}}}),l=d,p=(a("aa21"),a("2877")),m=Object(p["a"])(l,s,r,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-795df950.25517abd.js.map