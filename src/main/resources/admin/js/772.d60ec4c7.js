"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[772],{88772:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var i=function(){var e=this,t=e._self._c;return t("page-header-wrapper",{attrs:{title:!1}},[t("a-form-model",{attrs:{model:e.anime,labelAlign:"right","label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-form-model-item",{attrs:{label:"番剧ID"}},[t("a-input",{attrs:{disabled:""},model:{value:e.anime.id,callback:function(t){e.$set(e.anime,"id",t)},expression:"anime.id"}},[t("a-icon",{attrs:{slot:"addonAfter",type:"search"},on:{click:e.openFileSelectModal},slot:"addonAfter"})],1)],1),t("a-form-model-item",{attrs:{label:"标题"}},[t("a-input",{attrs:{placeholder:"请输入标题"},model:{value:e.anime.title,callback:function(t){e.$set(e.anime,"title",t)},expression:"anime.title"}})],1),t("a-form-model-item",{attrs:{label:"原始标题"}},[t("a-input",{attrs:{placeholder:"请输入原始标题，建议输入bgmtv能检索到的原始标题，Ikaros可能根据这个标题去互联网查询元数据"},model:{value:e.anime.originalTitle,callback:function(t){e.$set(e.anime,"originalTitle",t)},expression:"anime.originalTitle"}})],1),t("a-form-model-item",{attrs:{label:"简述"}},[t("a-textarea",{attrs:{placeholder:"请输入番剧介绍","auto-size":{minRows:3,maxRows:10}},model:{value:e.anime.overview,callback:function(t){e.$set(e.anime,"overview",t)},expression:"anime.overview"}})],1),t("a-form-model-item",{attrs:{label:"制作组"}},[t("a-input",{attrs:{placeholder:"请输入制作组"},model:{value:e.anime.producer,callback:function(t){e.$set(e.anime,"producer",t)},expression:"anime.producer"}})],1),t("a-form-model-item",{attrs:{label:"工作人员"}},[t("a-textarea",{attrs:{placeholder:"请输入工作人员： 一行一个， 职位 : 姓名","auto-size":{minRows:3,maxRows:10}},model:{value:e.anime.staffs,callback:function(t){e.$set(e.anime,"staffs",t)},expression:"anime.staffs"}})],1),t("a-form-model-item",{attrs:{label:"首次放送日期"}},[t("a-date-picker",{staticStyle:{width:"100%"},attrs:{"show-time":"",type:"date",placeholder:"选择日期"},model:{value:e.anime.airTime,callback:function(t){e.$set(e.anime,"airTime",t)},expression:"anime.airTime"}})],1),t("a-form-model-item",{attrs:{label:"海报图URL"}},[t("a-input",{attrs:{placeholder:"点击右边按钮，可快速获取已存在文件URL或者上传新的图片"},model:{value:e.anime.coverUrl,callback:function(t){e.$set(e.anime,"coverUrl",t)},expression:"anime.coverUrl"}},[t("a-icon",{attrs:{slot:"addonAfter",type:"search"},on:{click:e.openFileSelectModal},slot:"addonAfter"})],1)],1),t("a-form-model-item",{attrs:{"wrapper-col":e.labelItemWrapperCol}},[t("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveAnimeClick}},[e._v(" 保存番剧信息 ")])],1),t("hr"),e._l(e.seasons,(function(a,i){return t("a-form-model-item",{key:i,attrs:{"wrapper-col":e.noLabelItemWrapperCol}},[t("a-collapse",{attrs:{bordered:!1},scopedSlots:e._u([{key:"expandIcon",fn:function(e){return[t("a-icon",{attrs:{type:"caret-right",rotate:e.isActive?90:0}})]}}],null,!0)},[t("a-collapse-panel",{staticStyle:{background:"#f7f7f7","border-radius":"4px",border:"0",overflow:"hidden"},attrs:{header:a.title}},[t("AnimeSeason",{attrs:{receiveSeason:a,animeId:new String(e.anime.id)},on:{updateSeason:function(e){a=e}}}),t("a-icon",{staticClass:"dynamic-delete-button",attrs:{slot:"extra",type:"minus-circle-o"},on:{click:function(t){return e.removeSeason(a)}},slot:"extra"})],1)],1)],1)})),t("a-form-model-item",{attrs:{"wrapper-col":e.noLabelItemWrapperCol}},[t("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed"},on:{click:e.addSeasonItem}},[t("a-icon",{attrs:{type:"plus"}}),e._v(" 添加季度 ")],1)],1)],2),t("FileSelectModal",{attrs:{visible:e.fileSelectModalVisible,disableCopySelectedFileIdButton:!0},on:{"update:visible":function(t){e.fileSelectModalVisible=t},sendSelectedFileFieldValue:e.handSelectedFileFieldValue}})],1)},s=[],n=(a(40561),a(68309),function(){var e=this,t=e._self._c;return t("a-modal",{attrs:{width:"65%",title:"文件选择"},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[t("a-row",{attrs:{gutter:12,align:"middle",type:"flex"}},[t("a-col",{staticClass:"pb-3",attrs:{span:24}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"关键词："}},[t("a-input",{on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery()}},model:{value:e.list.params.keyword,callback:function(t){e.$set(e.list.params,"keyword",t)},expression:"list.params.keyword"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"存储位置："}},[t("a-select",{attrs:{loading:e.places.loading,allowClear:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.list.params.place,callback:function(t){e.$set(e.list.params,"place",t)},expression:"list.params.place"}},e._l(e.places.data,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(" "+e._s(e._f("fileTypePlace")(a))+" ")])})),1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"文件类型："}},[t("a-select",{attrs:{loading:e.types.loading,allowClear:""},on:{change:function(t){return e.handleQuery()}},model:{value:e.list.params.type,callback:function(t){e.$set(e.list.params,"type",t)},expression:"list.params.type"}},e._l(e.types.data,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a}},[e._v(e._s(e._f("fileTypeText")(a))+" ")])})),1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons"},[t("a-space",[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleQuery()}}},[e._v("查询")]),t("a-button",{on:{click:function(t){return e.handleResetParam()}}},[e._v("重置")]),t("a-button",{attrs:{icon:"cloud-upload",type:"primary"},on:{click:function(t){e.upload.visible=!0}}},[e._v("上传")])],1)],1)])],1)],1)],1)]),t("a-col",{attrs:{span:24}},[t("a-spin",{attrs:{spinning:e.list.loading}},[t("div",{staticClass:"div-filelist-item"},[t("a-row",{staticClass:"row-filelist",attrs:{gutter:16}},e._l(e.list.data,(function(a,i){return t("div",{key:i,on:{click:function(t){return e.handleFileItemClick(a)}}},[t("a-col",{staticClass:"col-file-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6}},[t("a-card",{class:"".concat(e.isItemSelect(a)?"card-body-select-true":"card-body-select-false"),attrs:{title:a.name,bordered:!1}},[e.isImage(a)?t("img",{staticClass:"img-filelist-item",attrs:{alt:a.name,src:a.url,loading:"lazy"}}):t("div",[t("p",[e._v("当前文件 类型/后缀 为： "+e._s(e._f("fileTypeText")(a.type))+"/"+e._s(a.postfix))]),t("p",[e._v("非图片格式在选择页不支持预览，预览请去文件页")])])])],1)],1)})),0)],1)])],1)],1),t("div",{staticClass:"page-wrapper"},[t("a-pagination",{staticClass:"pagination",attrs:{current:e.pagination.page,defaultPageSize:e.pagination.size,pageSizeOptions:["8","16","32","64","128"],total:e.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:e.handlePageChange,showSizeChange:e.handlePageSizeChange}})],1),t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.closeFileSelectModal}},[e._v("返回")]),t("a-button",{attrs:{type:"primary",disabled:e.disableCopySelectedFileIdButton},on:{click:e.copySelectedFileId}},[e._v("复制ID")]),t("a-button",{attrs:{type:"primary",disabled:e.disableCopySelectedFileUrlButton},on:{click:e.copySelectedFileUrl}},[e._v("复制URL")])],1),t("FileUploadModal",{attrs:{visible:e.upload.visible},on:{"update:visible":function(t){return e.$set(e.upload,"visible",t)},fileUploadModalClose:e.onFileUploadModalClose}})],2)}),l=[],o=a(6835),r=a(48534),d=(a(23157),a(34553),a(92222),a(5996)),c=a(30627),p={name:"FileSelectModal",components:{FileUploadModal:d.Z},props:{visible:{type:Boolean,default:!1},disableCopySelectedFileIdButton:{type:Boolean,default:!1},disableCopySelectedFileUrlButton:{type:Boolean,default:!1}},computed:{modalVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},isImage:function(){return function(e){return!(!e||!e.type)&&e.type.startsWith("IMAGE")}},isItemSelect:function(){return function(e){return this.list.current===e}},pagination:function(){return{page:this.list.params.page,size:this.list.params.size,total:this.list.total}},selectPreviousButtonDisabled:function(){var e=this,t=this.list.data.findIndex((function(t){return t.id===e.list.current.id}));return 0===t&&!this.list.hasPrevious},selectNextButtonDisabled:function(){var e=this,t=this.list.data.findIndex((function(t){return t.id===e.list.current.id}));return t===this.list.data.length-1&&!this.list.hasNext}},data:function(){return{list:{data:[],loading:!1,total:0,hasNext:!1,hasPrevious:!1,params:{page:1,size:8,keyword:void 0,type:void 0,place:void 0},current:{}},types:{data:[],loading:!1},places:{data:[],loading:!1},upload:{visible:!1}}},created:function(){this.handleResetParam()},methods:{handleResetParam:function(){this.list.params.keyword=void 0,this.list.params.type=void 0,this.list.params.place=void 0,this.handlePageChange(),this.handleListTypes(),this.handleListPlaces()},handleListFiles:function(){var e=this;return(0,r.Z)((0,o.Z)().mark((function t(){var a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.list.loading=!0,t.next=4,(0,c.bc)(e.list.params);case 4:if(a=t.sent,!(0===a.result.content.length&&e.list.params.page>0)){t.next=10;break}return e.list.params.page--,t.next=9,e.handleListFiles();case 9:return t.abrupt("return");case 10:e.list.data=a.result.content,e.list.total=a.result.total,e.list.hasNext=a.result.hasNext,e.list.hasPrevious=a.result.hasPrevious,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),e.$log.error(t.t0);case 19:return t.prev=19,e.list.loading=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])})))()},handleQuery:function(){this.$log.debug("params",this.list.params),this.handlePageChange()},handlePageChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.list.params.page=e,this.handleListFiles()},handlePageSizeChange:function(e,t){this.$log.debug("Current: ".concat(e,", PageSize: ").concat(t)),this.list.params.page=1,this.list.params.size=t,this.handleListFiles()},handleListTypes:function(){var e=this;return(0,r.Z)((0,o.Z)().mark((function t(){var a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.types.loading=!0,t.next=4,(0,c.Z9)();case 4:a=t.sent,e.types.data=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$log.error(t.t0);case 11:return t.prev=11,e.types.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))()},handleListPlaces:function(){var e=this;return(0,r.Z)((0,o.Z)().mark((function t(){var a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.places.loading=!0,t.next=4,(0,c.U4)();case 4:a=t.sent,e.places.data=a.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$log.error(t.t0);case 11:return t.prev=11,e.places.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))()},onFileUploadModalClose:function(){this.handlePageChange(),this.handleListTypes(),this.handleListPlaces()},handleFileItemClick:function(e){this.isItemSelect(e)?this.list.current={}:this.list.current=e},copySelectedFileId:function(){this.list.current.id?(this.closeFileSelectModal(),this.$emit("sendSelectedFileFieldValue",this.list.current.id)):this.$notification.warning({message:"请选中一个文件"})},copySelectedFileUrl:function(){this.list.current.url?(this.closeFileSelectModal(),this.$emit("sendSelectedFileFieldValue",this.list.current.url)):this.$notification.warning({message:"请选中一个文件"})},closeFileSelectModal:function(){this.modalVisible=!1}}},u=p,m=a(1001),f=(0,m.Z)(u,n,l,!1,null,"6a7e1dd1",null),h=f.exports,v=function(){var e=this,t=e._self._c;return t("a-form-model",{attrs:{model:e.season,labelAlign:"left","label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-form-model-item",{attrs:{label:"季度ID"}},[t("a-input",{attrs:{disabled:""},model:{value:e.season.id,callback:function(t){e.$set(e.season,"id",t)},expression:"season.id"}})],1),t("a-form-model-item",{attrs:{label:"季度类型"}},[t("a-select",{attrs:{placeholder:"请选择季度类型"},model:{value:e.season.type,callback:function(t){e.$set(e.season,"type",t)},expression:"season.type"}},e._l(e.seasonTypes,(function(a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(" "+e._s(e._f("seasonTypeFilter")(a))+" ")])})),1)],1),t("a-form-model-item",{attrs:{label:"季度标题"}},[t("a-input",{attrs:{placeholder:"请输入标题"},model:{value:e.season.title,callback:function(t){e.$set(e.season,"title",t)},expression:"season.title"}})],1),t("a-form-model-item",{attrs:{label:"季度原始标题"}},[t("a-input",{attrs:{placeholder:"请输入原始标题，建议罗马音或者英文，Ikaros可能根据这个标题去互联网查询元数据"},model:{value:e.season.originalTitle,callback:function(t){e.$set(e.season,"originalTitle",t)},expression:"season.originalTitle"}})],1),t("a-form-model-item",{attrs:{label:"简述"}},[t("a-textarea",{attrs:{placeholder:"请输入季度介绍","auto-size":{minRows:3,maxRows:10}},model:{value:e.season.overview,callback:function(t){e.$set(e.season,"overview",t)},expression:"season.overview"}})],1),t("a-form-model-item",{attrs:{"wrapper-col":e.noLabelItemWrapperCol}},[t("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveClick}},[e._v(" 保存季度信息 ")])],1),t("a-collapse",{attrs:{bordered:!1},scopedSlots:e._u([{key:"expandIcon",fn:function(e){return[t("a-icon",{attrs:{type:"caret-right",rotate:e.isActive?90:0}})]}}])},[t("a-collapse-panel",{staticStyle:{background:"#f7f7f7","border-radius":"4px",border:"0",overflow:"hidden"},attrs:{header:"剧集信息"}},[t("a-form-model-item",{attrs:{"wrapper-col":e.noLabelItemWrapperCol}},[t("a-button",{staticStyle:{width:"50%"},attrs:{type:"dashed"},on:{click:e.addEpisodeItem}},[t("a-icon",{attrs:{type:"plus"}}),e._v(" 添加剧集 ")],1),t("a-button",{staticStyle:{width:"50%"},attrs:{type:"dashed"},on:{click:e.deleActiveTabEpisodeItem}},[t("a-icon",{attrs:{type:"delete"}}),e._v(" 移除选中剧集 ")],1)],1),t("a-tabs",{attrs:{"default-active-key":0,activeKey:e.episodeTabsActiveKey,"tab-position":"top",size:"large"},on:{change:e.handleTabChange,edit:e.onEdit}},e._l(e.episodes,(function(a,i){return t("a-tab-pane",{key:i,attrs:{closable:e.tabClosable,tab:"第".concat(void 0===a.seq?"":a.seq,"集")}},[t("AnimeEpisode",{attrs:{receiveSeasonId:new String(e.season.id),receiveEepisode:a},on:{updateEpisode:function(e){return a=e}}})],1)})),1)],1)],1)],1)},b=[],g=a(37498),y=a(28762),S=function(){var e=this,t=e._self._c;return t("a-form-model",{attrs:{model:e.episode,labelAlign:"left","label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[t("a-form-model-item",{attrs:{label:"ID"}},[t("a-input",{attrs:{disabled:""},model:{value:e.episode.id,callback:function(t){e.$set(e.episode,"id",t)},expression:"episode.id"}})],1),t("a-form-model-item",{attrs:{label:"序列"}},[t("a-input",{attrs:{placeholder:"请输入第几集，要求数组"},model:{value:e.episode.seq,callback:function(t){e.$set(e.episode,"seq",t)},expression:"episode.seq"}})],1),t("a-form-model-item",{attrs:{label:"时长"}},[t("a-input",{attrs:{disabled:""},model:{value:e.episode.duration,callback:function(t){e.$set(e.episode,"duration",t)},expression:"episode.duration"}})],1),t("a-form-model-item",{attrs:{label:"URL"}},[t("a-input",{attrs:{placeholder:"点击右边按钮，可快速获取已存在文件URL或者上传新的文件"},model:{value:e.episode.url,callback:function(t){e.$set(e.episode,"url",t)},expression:"episode.url"}},[t("a-icon",{attrs:{slot:"addonAfter",type:"search"},on:{click:e.openFileSelectModal},slot:"addonAfter"})],1)],1),t("a-form-model-item",{attrs:{label:"标题"}},[t("a-input",{attrs:{placeholder:"请输入标题"},model:{value:e.episode.title,callback:function(t){e.$set(e.episode,"title",t)},expression:"episode.title"}})],1),t("a-form-model-item",{attrs:{label:"原始标题"}},[t("a-input",{attrs:{placeholder:"请输入原始标题，建议罗马音或者英文，Ikaros可能根据这个标题去互联网查询元数据"},model:{value:e.episode.originalTitle,callback:function(t){e.$set(e.episode,"originalTitle",t)},expression:"episode.originalTitle"}})],1),t("a-form-model-item",{attrs:{label:"放送日期"}},[t("a-date-picker",{staticStyle:{width:"100%"},attrs:{"show-time":"",type:"date",placeholder:"选择日期"},model:{value:e.episode.airTime,callback:function(t){e.$set(e.episode,"airTime",t)},expression:"episode.airTime"}}),t("a-form-model-item",{attrs:{label:"简述"}},[t("a-textarea",{attrs:{placeholder:"请输入剧集介绍","auto-size":{minRows:3,maxRows:10}},model:{value:e.episode.overview,callback:function(t){e.$set(e.episode,"overview",t)},expression:"episode.overview"}})],1),t("a-form-model-item",{attrs:{"wrapper-col":e.noLabelItemWrapperCol}},[t("a-button",{attrs:{type:"primary"},on:{click:e.handleSaveEpClick}},[e._v(" 保存剧集信息 ")])],1)],1),t("FileSelectModal",{attrs:{visible:e.fileSelectModalVisible,disableCopySelectedFileIdButton:!0},on:{"update:visible":function(t){e.fileSelectModalVisible=t},sendSelectedFileFieldValue:e.handSelectedFileFieldValue}})],1)},k=[],x=(a(41539),a(30381)),w=a.n(x),I={components:{FileSelectModal:h},props:{receiveSeasonId:{type:String,default:-1},receiveEepisode:{type:Object,default:function(){return{}}}},beforeMount:function(){this.receiveSeasonId&&(this.seasonId=this.receiveSeasonId),this.receiveEepisode&&(this.receiveEepisode.airTime=w()(this.receiveEepisode.airTime),this.episode=this.receiveEepisode)},mounted:function(){},data:function(){return{labelCol:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24}},labelItemWrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:16,offset:4},lg:{span:20,offset:2}},noLabelItemWrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:24,offset:0}},fileSelectModalVisible:!1,seasonId:-1,episode:{}}},methods:{fileterEpisode:function(e){return e.airTime=w()(e.airTime),e},openFileSelectModal:function(){this.fileSelectModalVisible=!0},handSelectedFileFieldValue:function(e){this.episode.fileId=e},publishEpisodeUpdatedEvent:function(e){this.$emit("updateEpisode",e)},handleSaveEpClick:function(){var e=this;(0,g.p$)(this.seasonId,this.episode).then((function(t){var a=e.fileterEpisode(t.result);e.$set(e,"episode",a),e.$message.success("保存剧集成功，剧集ID="+a.id),e.publishEpisodeUpdatedEvent(a)})).catch((function(t){e.$log.error("save episode fail, err: ",t),e.$message.error("保存剧集失败")})).finally((function(){}))}}},$=I,C=(0,m.Z)($,S,k,!1,null,"2cac3286",null),T=C.exports,F={name:"AnimeSeason",components:{AnimeEpisode:T},props:{animeId:{type:String,default:-1},receiveSeason:{type:Object,default:function(){return{}}}},filters:{seasonTypeFilter:function(e){return y.er.get(e)?y.er.get(e):e}},beforeMount:function(){this.receiveSeason?(this.$set(this,"season",this.receiveSeason),this.$set(this,"episodes",this.receiveSeason.episodes)):this.$set(this,"episodes",[])},created:function(){this.findAnimeSeasonTypes()},data:function(){return{labelCol:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24}},labelItemWrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:16,offset:4},lg:{span:20,offset:2}},noLabelItemWrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:24,offset:0}},seasonTypes:[],season:{},episodes:[],episodeTabsActiveKey:0,tabClosable:!0}},methods:{publishSeasonUpdatedEvent:function(e){this.$emit("updateSeason",e)},handleSaveClick:function(){var e=this;(0,g.WG)(this.season,this.animeId).then((function(t){e.publishSeasonUpdatedEvent(t.result)})).catch((function(t){e.$log.error("save season fail, err: ",t),e.$message.error("保存季度失败")}))},findAnimeSeasonTypes:function(){var e=this;(0,g.Ee)().then((function(t){e.seasonTypes=t.result})).catch((function(t){e.$log.error("find season types fail, err: ",t),e.$message.error("查询季度类型失败")}))},handleTabChange:function(e){this.episodeTabsActiveKey=e},addEpisodeItem:function(){void 0===this.episodes&&(this.episodes=[]);var e={key:(new Date).getTime()};this.episodes.push(e),this.episodeTabsActiveKey=this.episodes.indexOf(e),this.$forceUpdate()},onEdit:function(e,t){this.$log.debug("targetKey",e),this.$log.debug("action",t)},deleActiveTabEpisodeItem:function(){var e=this.$log,t=this.$message,a=this.episodeTabsActiveKey,i=this.episodes,s=this.season.id,n=this.episodes[a],l=n.id;this.$confirm({title:"您确认要移除这个剧集吗？",content:"当你点击确认按钮，这个剧集的信息会被移除！！！当前剧集序列为："+n.seq,onOk:function(){(0,g.DC)(s,l).then((function(e){i.splice(a,1)})).catch((function(a){e.error("remove season episode fail, err: ",a),t.error("移除季度剧集失败")}))},onCancel:function(){}})}}},_=F,A=(0,m.Z)(_,v,b,!1,null,"105cb052",null),E=A.exports,M={name:"AnimeSave",components:{FileSelectModal:h,AnimeSeason:E},data:function(){return{labelCol:{xs:{span:24},sm:{span:24},md:{span:4},lg:{span:2}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:16},lg:{span:20}},labelItemWrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:16,offset:4},lg:{span:20,offset:2}},noLabelItemWrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0},md:{span:24,offset:0},lg:{span:24,offset:0}},fileSelectModalVisible:!1,anime:{id:"",title:"",bgmtvId:"",originalTitle:"",overview:"",producer:"",coverUrl:"",staffs:"",airTime:""},seasons:[]}},beforeMount:function(){if(this.$router.currentRoute.params.anime){var e=this.$router.currentRoute.params.anime;this.$log.debug("anime",e),e.airTime=w()(e.airTime),this.$set(this,"anime",e),this.$set(this,"seasons",e.seasons)}},methods:{openFileSelectModal:function(){this.fileSelectModalVisible=!0},handSelectedFileFieldValue:function(e){this.anime.coverUrl=e},handlerQuickFill:function(){""===this.anime.bgmtvId&&""===this.anime.originalTitle?this.$notification.warning({message:"请在下方输入 bgmTvId 或者 原始文件名称，Ikaros需要根据这两项去互联网匹配番剧元数据"}):(this.$notification.info({message:"Ikaros努力查询中，请耐心等待"}),""!==this.anime.bgmtvId?this.$log.debug("request server to quick fill by bgmTvId",this.anime.bgmtvId):this.$log.debug("request server to quick fill by originalTitle",this.anime.originalTitle))},removeSeason:function(e){var t=this.seasons,a=this.anime.id,i=this.$log,s=this.$message;this.$confirm({title:"您确认要移除这个季度信息吗？",content:"当你点击确认按钮，这个季度的信息会被移除！！！",onOk:function(){var n=t.indexOf(e);-1!==n&&t.splice(n,1),a&&e.id&&(i.debug("will remove season",e),(0,g.u$)(a,e.id).catch((function(e){i.error("save anime fail, err: ",e),s.error("移除季度失败")})))},onCancel:function(){}})},addSeasonItem:function(){this.$log.debug("id",this.anime.id),this.$log.debug("seasons",this.seasons),this.seasons.push({value:"",key:(new Date).getTime()}),this.$forceUpdate()},handleSaveAnimeClick:function(){var e=this,t=this.anime.id?", ID="+this.anime.id:"";(0,g.cK)(this.anime).then((function(a){e.$message.success("保存番剧成功"+t),e.anime=a.result,e.anime.airTime=w()(e.anime.airTime)})).catch((function(a){e.$log.error("save anime fail, err: ",a),e.$message.error("保存番剧失败"+t)}))}}},P=M,U=(0,m.Z)(P,i,s,!1,null,"c09e2142",null),L=U.exports},37498:function(e,t,a){a.d(t,{DC:function(){return m},Ee:function(){return p},KT:function(){return c},NC:function(){return r},WG:function(){return l},cK:function(){return n},p$:function(){return u},tp:function(){return o},u$:function(){return d}});var i=a(46945),s={basic:"/anime",seasonWithAnimeId:"/anime/season/animeId",listDTOS:"/anime/dtos",findDTOById:"/anime/dto/id",removeAnimeSeason:"/anime/season/animeId",reqBgmtvBangumiMetadata2AddAnimeFleetly:"/anime/metadata/network/bgmTvId",findSeasonTypes:"/anime/season/types",saveEpisodeWithSeasonId:"/anime/episode/seasonId",removeSeasonEpisode:"/anime/season/episode/seasonId"};function n(e){return(0,i.ZP)({url:s.basic,method:"put",data:e})}function l(e,t){return(0,i.ZP)({url:s.seasonWithAnimeId+"/"+t,method:"put",data:e})}function o(e){return(0,i.ZP)({url:s.listDTOS,method:"get",params:e})}function r(e){return(0,i.ZP)({url:s.findDTOById+"/"+e,method:"get"})}function d(e,t){return(0,i.ZP)({url:s.removeAnimeSeason+"/"+e,method:"delete",params:{seasonId:t}})}function c(e){return(0,i.ZP)({url:s.reqBgmtvBangumiMetadata2AddAnimeFleetly+"/"+e,method:"put"})}function p(){return(0,i.ZP)({url:s.findSeasonTypes,method:"get"})}function u(e,t){return(0,i.ZP)({url:s.saveEpisodeWithSeasonId+"/"+e,method:"put",data:t})}function m(e,t){return(0,i.ZP)({url:s.removeSeasonEpisode+"/"+e,method:"delete",params:{episodeId:t}})}}}]);