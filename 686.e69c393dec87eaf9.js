"use strict";(self.webpackChunkSpazioZero=self.webpackChunkSpazioZero||[]).push([[686],{6853:(f,_,a)=>{a.d(_,{A:()=>i});var t=a(9646),l=a(9751),u=a(3900),o=a(262),n=a(8274),e=a(529);class i{constructor(r){this.httpClient=r}getData(r){return this.httpClient.get(r,{responseType:"blob"}).pipe((0,u.w)(d=>this.readFile(d)),(0,o.K)(()=>(0,t.of)(null)))}getDataBlob(r){return this.httpClient.get(r,{responseType:"blob"}).pipe((0,o.K)(()=>(0,t.of)(null)))}readFile(r){return new l.y(d=>{const h=new FileReader;return h.onerror=g=>d.error(g),h.onabort=g=>d.error(g),h.onload=()=>d.next(h.result),h.onloadend=()=>d.complete(),h.readAsDataURL(r)})}}i.\u0275fac=function(r){return new(r||i)(n.LFG(e.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})},533:(f,_,a)=>{a.d(_,{t:()=>o});var t=a(4004),l=a(8274),u=a(529);class o{constructor(e){this._http=e}documentiPerAnagrafiche(e=0,i=10){return this._http.get("/documentiPerAnagrafiche").pipe((0,t.U)(c=>({total:c.length,data:JSON.parse(JSON.stringify(c)).slice(e,i)})))}documenti(e=0,i=10){return this._http.get("/documenti").pipe((0,t.U)(c=>({total:c.length,data:JSON.parse(JSON.stringify(c)).slice(e,i)})))}}o.\u0275fac=function(e){return new(e||o)(l.LFG(u.eN))},o.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})},9799:(f,_,a)=>{a.d(_,{d:()=>o});var t=a(4004),l=a(8274),u=a(529);class o{constructor(e){this._http=e}tipiDocumento(){return this._http.get("/tipiDocumento")}tipiAtto(e){return this._http.get("/tipiAtto").pipe((0,t.U)(i=>i.filter(c=>c._tipoDocumentoId==e)))}tipiParte(e){return this._http.get("/tipiParte").pipe((0,t.U)(i=>i.filter(c=>c._tipoAttoId==e)))}tipoSerie(e,i){return this._http.get("/tipiSerie").pipe((0,t.U)(c=>c.filter(r=>r._tipoAttoId==e&&r._parteId==i)))}}o.\u0275fac=function(e){return new(e||o)(l.LFG(u.eN))},o.\u0275prov=l.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})},3499:(f,_,a)=>{a.d(_,{G:()=>l});var t=a(8274);class l{constructor(){}}l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-curtain"]],inputs:{type:"type"},decls:5,vars:0,consts:[[1,"curtain"],[1,"progress","progress-indeterminate"],[1,"visually-hidden"],["role","progressbar",1,"progress-bar"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t._uU(3,"In elaborazione..."),t.qZA(),t._UZ(4,"div",3),t.qZA()())},styles:[".curtain[_ngcontent-%COMP%]{background-color:#fffc;position:absolute;inset:0;z-index:999}.curtain[_ngcontent-%COMP%]   .progress-indeterminate[_ngcontent-%COMP%]{width:100%}"]})},3556:(f,_,a)=>{a.d(_,{Q:()=>h});var t=a(8274),l=a(6741),u=a(585),o=a(6895),n=a(2775);const e=["pageChanger"];function i(g,p){if(1&g){const s=t.EpF();t.TgZ(0,"a",19),t.NdJ("click",function(){t.CHM(s);const v=t.oxw().$implicit,P=t.oxw();return t.KtG(P.setPage(v.page))}),t._uU(1),t.qZA()}if(2&g){const s=t.oxw().$implicit;t.xp6(1),t.hij(" ",s.page," ")}}function c(g,p){if(1&g){const s=t.EpF();t.TgZ(0,"a",5),t.NdJ("click",function(){t.CHM(s);const v=t.oxw().$implicit,P=t.oxw();return t.KtG(P.setPage(v.page))}),t._uU(1),t.qZA()}if(2&g){const s=t.oxw().$implicit;t.xp6(1),t.Oqu(s.page)}}function r(g,p){1&g&&(t.TgZ(0,"span",20),t._uU(1,"..."),t.qZA())}function d(g,p){if(1&g&&(t.TgZ(0,"li",4),t.YNc(1,i,2,1,"a",16),t.YNc(2,c,2,1,"a",17),t.YNc(3,r,2,0,"span",18),t.qZA()),2&g){const s=p.$implicit,m=t.oxw();t.xp6(1),t.Q6J("ngIf",!s.separator&&s.page===m.currentPagination.currentPage),t.xp6(1),t.Q6J("ngIf",!s.separator&&s.page!==m.currentPagination.currentPage),t.xp6(1),t.Q6J("ngIf",s.separator)}}class h{constructor(){this.currentPagination=new u.t,this.paginationChange=new t.vpe,this.pages=[],this.currentPageRound=[]}ngOnInit(){this.setPageRound(1)}ngOnChanges(p){p.currentPagination&&this.setPageRound(this.currentPagination.currentPage)}ngAfterViewInit(){this.pageChangerRef=new l.Lt(this.pageChanger?.nativeElement)}setPage(p){this.currentPagination.currentPage=p,this.setPageRound(p),this.paginationChange.emit({page:this.currentPagination.currentPage,pageSize:this.currentPagination.pageSize})}nextPage(){const p=this.currentPagination.currentPage+1;this.pages.find(s=>s.page===p)&&(this.currentPagination.currentPage=p,this.setPageRound(p),this.paginationChange.emit({page:this.currentPagination.currentPage,pageSize:this.currentPagination.pageSize}))}previousPage(){const p=this.currentPagination.currentPage-1;this.pages.find(s=>s.page===p)&&(this.currentPagination.currentPage=p,this.setPageRound(p),this.paginationChange.emit({page:this.currentPagination.currentPage,pageSize:this.currentPagination.pageSize}))}changePageSize(p){this.currentPagination.pageSize=p,this.paginationChange.emit({page:1,pageSize:this.currentPagination.pageSize}),this.pageChangerRef?.toggle()}setPageRound(p){if(this.pages=[],this.currentPagination.totalPages>7){const s=p-2>1?p-2:2,m=p+2<this.currentPagination.totalPages?p+2:this.currentPagination.totalPages-1;this.pages.push({separator:!1,page:1}),s>2&&this.pages.push({separator:!0});const P=s>2?m:s+3;for(let C=p>this.currentPagination.totalPages-4?this.currentPagination.totalPages-4:s;C<=P;C++)this.pages.push({separator:!1,page:C});m<this.currentPagination.totalPages-1&&this.pages.push({separator:!0}),this.pages.push({separator:!1,page:this.currentPagination.totalPages})}else for(let s=1;s<=this.currentPagination.totalPages;s++)this.pages.push({separator:!1,page:s})}openMenu(){this.pageChangerRef?.toggle()}}h.\u0275fac=function(p){return new(p||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-pagination"]],viewQuery:function(p,s){if(1&p&&t.Gf(e,5),2&p){let m;t.iGM(m=t.CRH())&&(s.pageChanger=m.first)}},inputs:{currentPagination:"currentPagination"},outputs:{paginationChange:"paginationChange"},features:[t.TTD],decls:38,vars:2,consts:[[1,"row"],[1,"col"],["aria-label","Esempio di navigazione della pagina",1,"pagination-wrapper","justify-content-center"],[1,"pagination"],[1,"page-item"],["href","javascript:void(0);",1,"page-link",3,"click"],["name","chevron-left"],["class","page-item",4,"ngFor","ngForOf"],["name","chevron-right"],[1,"dropdown"],["href","javascript:void(0);","role","button","id","pagerChanger","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false","aria-label","Salta alla pagina",1,"btn","btn-dropdown","dropdown-toggle",3,"click"],["pageChanger",""],["aria-labelledby","pagerChanger",1,"dropdown-menu"],[1,"link-list-wrapper"],[1,"link-list"],["href","javascript:void(0);",1,"list-item",3,"click"],["class","page-link","href","javascript:void(0);","aria-current","page",3,"click",4,"ngIf"],["class","page-link","href","javascript:void(0);",3,"click",4,"ngIf"],["class","page-link",4,"ngIf"],["href","javascript:void(0);","aria-current","page",1,"page-link",3,"click"],[1,"page-link"]],template:function(p,s){1&p&&(t.TgZ(0,"div",0)(1,"div",1)(2,"nav",2)(3,"ul",3)(4,"li",4)(5,"a",5),t.NdJ("click",function(){return s.previousPage()}),t._UZ(6,"app-icon",6),t.qZA()(),t.YNc(7,d,4,3,"li",7),t.TgZ(8,"li",4)(9,"a",5),t.NdJ("click",function(){return s.nextPage()}),t._UZ(10,"app-icon",8),t.qZA()()(),t.TgZ(11,"div",9)(12,"a",10,11),t.NdJ("click",function(){return s.openMenu()}),t._uU(14),t.qZA(),t.TgZ(15,"div",12)(16,"div",13)(17,"ul",14)(18,"li")(19,"a",15),t.NdJ("click",function(){return s.changePageSize(10)}),t.TgZ(20,"span"),t._uU(21,"pag. 10"),t.qZA()()(),t.TgZ(22,"li")(23,"a",15),t.NdJ("click",function(){return s.changePageSize(20)}),t.TgZ(24,"span"),t._uU(25,"pag. 20"),t.qZA()()(),t.TgZ(26,"li")(27,"a",15),t.NdJ("click",function(){return s.changePageSize(30)}),t.TgZ(28,"span"),t._uU(29,"pag. 30"),t.qZA()()(),t.TgZ(30,"li")(31,"a",15),t.NdJ("click",function(){return s.changePageSize(40)}),t.TgZ(32,"span"),t._uU(33,"pag. 40"),t.qZA()()(),t.TgZ(34,"li")(35,"a",15),t.NdJ("click",function(){return s.changePageSize(50)}),t.TgZ(36,"span"),t._uU(37,"pag. 50"),t.qZA()()()()()()()()()()),2&p&&(t.xp6(7),t.Q6J("ngForOf",s.pages),t.xp6(7),t.hij("pag. ",s.currentPagination.pageSize,""))},dependencies:[o.sg,o.O5,n.U]})},585:(f,_,a)=>{a.d(_,{t:()=>t});class t{constructor(u){this.pageCount=u?.pageCount,this.pageSize=u?.pageSize,this.totalCount=u?.totalCount,this.totalPages=u?.totalPages,this.currentPage=u?.currentPage}}},6279:(f,_,a)=>{a.d(_,{F:()=>e});var t=a(8274),l=a(6895);function u(i,c){1&i&&(t.ynx(0),t.TgZ(1,"span",3),t._UZ(2,"div",4),t.qZA(),t.BQk())}function o(i,c){1&i&&(t.ynx(0),t.TgZ(1,"span",5),t._UZ(2,"div",4),t.qZA(),t.BQk())}function n(i,c){if(1&i&&(t.ynx(0)(1,1),t.YNc(2,u,3,0,"ng-container",2),t.YNc(3,o,3,0,"ng-container",2),t.BQk()()),2&i){const r=t.oxw();t.xp6(1),t.Q6J("ngSwitch",r.typeInput),t.xp6(1),t.Q6J("ngSwitchCase","input"),t.xp6(1),t.Q6J("ngSwitchCase","select")}}class e{constructor(){this.start=!0,this.typeInput="input"}ngOnInit(){}}e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-spinner-input-form"]],inputs:{start:"start",typeInput:"typeInput"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"position-input"],[1,"progress-spinner","progress-spinner-active"],[1,"position-select"]],template:function(c,r){1&c&&t.YNc(0,n,4,3,"ng-container",0),2&c&&t.Q6J("ngIf",r.start)},dependencies:[l.O5,l.RF,l.n9],styles:[".position-select[_ngcontent-%COMP%]{position:absolute;right:20px;bottom:12px}.position-select[_ngcontent-%COMP%]   .progress-spinner[_ngcontent-%COMP%]{width:22px;height:22px;border-width:2px}"]})},2925:(f,_,a)=>{a.d(_,{O:()=>l});var t=a(8274);class l{constructor(){}}l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-spinner"]],inputs:{texto:"texto"},decls:8,vars:1,consts:[[1,"spinner-wrapper"],[1,"progress-spinner","progress-spinner-double","size-sm","progress-spinner-active"],[1,"progress-spinner-inner"],[1,"visually-hidden"],[1,"color-gray"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2)(3,"div",2),t.TgZ(4,"span",3),t._uU(5,"Caricamento..."),t.qZA()()(),t.TgZ(6,"span",4),t._uU(7),t.qZA()),2&o&&(t.xp6(7),t.Oqu(n.texto||""==n.texto?n.texto:"Caricando..."))},styles:["[_nghost-%COMP%]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{margin:5px 0 0 10px;color:var(#212121)}"]})},2134:(f,_,a)=>{a.d(_,{p:()=>l});var t=a(8274);class l{constructor(o){this.el=o,this.regex=new RegExp(/^-?[0-9]+(\[0-9]*){0,1}$/g),this.specialKeys=["Backspace","Tab","End","Home","-"]}onKeyDown(o){if(-1!==this.specialKeys.indexOf(o.key))return;let e=this.el.nativeElement.value.concat(o.key);e&&!String(e).match(this.regex)&&o.preventDefault()}}l.\u0275fac=function(o){return new(o||l)(t.Y36(t.SBq))},l.\u0275dir=t.lG2({type:l,selectors:[["","onNumber",""]],hostBindings:function(o,n){1&o&&t.NdJ("keydown",function(i){return n.onKeyDown(i)})}})},6585:(f,_,a)=>{a.d(_,{O:()=>u});var t=a(8274);class l{setBackgroundStyle(n){return{"background-image":`url(${n=n||""})`}}validatePhone(n){if("string"==typeof n)return n;if("object"==typeof n){let e=n.cell;if(e)return e;for(let i in n)if(n[i])return n[i]}throw"No phone number provided."}validateOnlyNumber(n){let e=n.which?n.which:n.keyCode;var i=n.ctrlKey||n.metaKey;if(i&&67==e)return!1;let c=n.target.value;if(i&&86==e)setTimeout(()=>{if(isNaN(n.target.value))return n.target.value=c,n.preventDefault(),!1},1);else if(46!=e&&190!=e&&110!=e&&e>31&&(e<48||e>57)&&(e<96||e>105)&&(e<37||e>40))return n.preventDefault(),!1;return!0}contains(n,e){return n.indexOf(e)>-1}browserDetected(){let n=!!window.opr||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,e=-1!=navigator.userAgent.indexOf("Firefox"),i=Object.prototype.toString.call(window.htmlElement).indexOf("Constructor")>0||-1!=navigator.userAgent.indexOf("Safari"),c=!!document.documentMode,r=!c&&!!window.StyleMedia||-1!=navigator.userAgent.indexOf("MSIE")||!!document.documentMode;return window.chrome&&!n||-1!=navigator.userAgent.indexOf("Chrome")?"isChrome":e?"isFirefox":c||r?"isIE":i?"isSafari":""}detectedModulePath(n){let e=n.slice(1),i=e.indexOf("/");return e=e.substring(0,-1!=i?i:e.length),e}}l.\u0275fac=function(n){return new(n||l)},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});class u{constructor(n,e){this._el=n,this._commonSrv=e}onKeyDown(n){try{this._commonSrv.validateOnlyNumber(n)}catch{}}}u.\u0275fac=function(n){return new(n||u)(t.Y36(t.SBq),t.Y36(l))},u.\u0275dir=t.lG2({type:u,selectors:[["","onlyNumber",""]],hostBindings:function(n,e){1&n&&t.NdJ("keydown",function(c){return e.onKeyDown(c)})}})},7125:(f,_,a)=>{a.d(_,{i9:()=>n});var t=a(8274),l=a(6741);class n{set title(i){i&&this.element.setAttribute("data-bs-original-title",i)}set placement(i){this.element.setAttribute("data-bs-placement",i)}set html(i){this.element.setAttribute("data-bs-html",function u(e){return void 0!==e&&(!0===e||"true"===e)}(i)?"true":"false")}constructor(i){this._elementRef=i,this.onShow=new t.vpe,this.onShown=new t.vpe,this.onHide=new t.vpe,this.onHidden=new t.vpe,this.onInserted=new t.vpe,this.element=this._elementRef.nativeElement}ngOnDestroy(){this.hide()}ngAfterViewInit(){this.element.setAttribute("data-bs-toggle","tooltip"),this.tooltip=l.u.getOrCreateInstance(this.element),this.element.addEventListener("show.bs.tooltip",i=>this.onShow.emit(i)),this.element.addEventListener("shown.bs.tooltip",i=>this.onShown.emit(i)),this.element.addEventListener("hide.bs.tooltip",i=>this.onHide.emit(i)),this.element.addEventListener("hidden.bs.tooltip",i=>this.onHidden.emit(i)),this.element.addEventListener("inserted.bs.tooltip",i=>this.onInserted.emit(i))}show(){this.tooltip?.show()}hide(){this.tooltip?.hide()}toggle(){this.tooltip?.toggle()}dispose(){this.tooltip?.dispose()}enable(){this.tooltip?.enable()}disable(){this.tooltip?.disable()}toggleEnabled(){this.tooltip?.disable()}update(){this.tooltip?.disable()}}n.\u0275fac=function(i){return new(i||n)(t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","itTooltip",""]],inputs:{title:["itTooltip","title"],placement:["tooltipPlacement","placement"],html:["tooltipHtml","html"]},outputs:{onShow:"onShow",onShown:"onShown",onHide:"onHide",onHidden:"onHidden",onInserted:"onInserted"},exportAs:["itTooltip"]})},9808:(f,_,a)=>{a.d(_,{n:()=>l});var t=a(6805);function l(u,o){const n="object"==typeof o;return new Promise((e,i)=>{let r,c=!1;u.subscribe({next:d=>{r=d,c=!0},error:i,complete:()=>{c?e(r):n?e(o.defaultValue):i(new t.K)}})})}},7188:(f,_,a)=>{a.d(_,{$:()=>c});var t=a(9751),l=a(8421);const{isArray:u}=Array;var n=a(515),e=a(5403),i=a(3269);function c(...r){const d=(0,i.jO)(r),h=function o(r){return 1===r.length&&u(r[0])?r[0]:r}(r);return h.length?new t.y(g=>{let p=h.map(()=>[]),s=h.map(()=>!1);g.add(()=>{p=s=null});for(let m=0;!g.closed&&m<h.length;m++)(0,l.Xf)(h[m]).subscribe((0,e.x)(g,v=>{if(p[m].push(v),p.every(P=>P.length)){const P=p.map(C=>C.shift());g.next(d?d(...P):P),p.some((C,E)=>!C.length&&s[E])&&g.complete()}},()=>{s[m]=!0,!p[m].length&&g.complete()}));return()=>{p=s=null}}):n.E}},8372:(f,_,a)=>{a.d(_,{b:()=>o});var t=a(1566),l=a(4482),u=a(5403);function o(n,e=t.z){return(0,l.e)((i,c)=>{let r=null,d=null,h=null;const g=()=>{if(r){r.unsubscribe(),r=null;const s=d;d=null,c.next(s)}};function p(){const s=h+n,m=e.now();if(m<s)return r=this.schedule(void 0,s-m),void c.add(r);g()}i.subscribe((0,u.x)(c,s=>{d=s,h=e.now(),r||(r=e.schedule(p,n),c.add(r))},()=>{g(),c.complete()},void 0,()=>{d=r=null}))})}},5861:(f,_,a)=>{function t(u,o,n,e,i,c,r){try{var d=u[c](r),h=d.value}catch(g){return void n(g)}d.done?o(h):Promise.resolve(h).then(e,i)}function l(u){return function(){var o=this,n=arguments;return new Promise(function(e,i){var c=u.apply(o,n);function r(h){t(c,e,i,r,d,"next",h)}function d(h){t(c,e,i,r,d,"throw",h)}r(void 0)})}}a.d(_,{Z:()=>l})}}]);