"use strict";(self.webpackChunkSpazioZero=self.webpackChunkSpazioZero||[]).push([[592],{6853:(f,h,o)=>{o.d(h,{A:()=>e});var t=o(9646),m=o(9751),c=o(3900),p=o(262),g=o(8274),i=o(529);class e{constructor(a){this.httpClient=a}getData(a){return this.httpClient.get(a,{responseType:"blob"}).pipe((0,c.w)(l=>this.readFile(l)),(0,p.K)(()=>(0,t.of)(null)))}getDataBlob(a){return this.httpClient.get(a,{responseType:"blob"}).pipe((0,p.K)(()=>(0,t.of)(null)))}readFile(a){return new m.y(l=>{const u=new FileReader;return u.onerror=_=>l.error(_),u.onabort=_=>l.error(_),u.onload=()=>l.next(u.result),u.onloadend=()=>l.complete(),u.readAsDataURL(a)})}}e.\u0275fac=function(a){return new(a||e)(g.LFG(i.eN))},e.\u0275prov=g.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})},9799:(f,h,o)=>{o.d(h,{d:()=>p});var t=o(4004),m=o(8274),c=o(529);class p{constructor(i){this._http=i}tipiDocumento(){return this._http.get("/tipiDocumento")}tipiAtto(i){return this._http.get("/tipiAtto").pipe((0,t.U)(e=>e.filter(s=>s._tipoDocumentoId==i)))}tipiParte(i){return this._http.get("/tipiParte").pipe((0,t.U)(e=>e.filter(s=>s._tipoAttoId==i)))}tipoSerie(i,e){return this._http.get("/tipiSerie").pipe((0,t.U)(s=>s.filter(a=>a._tipoAttoId==i&&a._parteId==e)))}}p.\u0275fac=function(i){return new(i||p)(m.LFG(c.eN))},p.\u0275prov=m.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})},4734:(f,h,o)=>{o.d(h,{b:()=>i});var t=o(8274),m=o(3173),c=o(6895);const p=["modalConfirm"];function g(e,s){1&e&&(t.TgZ(0,"strong"),t._uU(1,"Ricordati: "),t.qZA())}class i{constructor(){this.outClose=new t.vpe,this.outConfirm=new t.vpe,this.title="",this.descrizione="",this.alertDesc=!1}ngOnInit(){}ngAfterViewInit(){this.handlerModal=new m.u_(this.modal?.nativeElement),this.handlerModal?.show(),this.modal?.nativeElement.addEventListener("hidden.bs.modal",()=>this.closeModal())}closeModal(){this.handlerModal?.hide(),this.outClose.emit(!0)}sendConfirm(s){this.outConfirm.emit(s),this.handlerModal?.hide()}}i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-modal-confirm"]],viewQuery:function(s,a){if(1&s&&t.Gf(p,5),2&s){let l;t.iGM(l=t.CRH())&&(a.modal=l.first)}},inputs:{title:"title",descrizione:"descrizione",alertDesc:"alertDesc"},outputs:{outClose:"outClose",outConfirm:"outConfirm"},decls:18,vars:3,consts:[[1,"it-example-modal"],["tabindex","-1","role","dialog","id","modalConfirm","aria-labelledby","modalConfirmTitle","aria-describedby","modalConfirmDescription",1,"modal"],["modalConfirm",""],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","modalConfirmTitle",1,"modal-title","h5","no_toc"],[1,"modal-body"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2",6),t._uU(7),t.qZA()(),t.TgZ(8,"div",7)(9,"p"),t.YNc(10,g,2,0,"strong",8),t.TgZ(11,"span"),t._uU(12),t.qZA()()(),t.TgZ(13,"div",9)(14,"button",10),t.NdJ("click",function(){return a.sendConfirm(!1)}),t._uU(15,"No"),t.qZA(),t.TgZ(16,"button",11),t.NdJ("click",function(){return a.sendConfirm(!0)}),t._uU(17,"Si"),t.qZA()()()()()()),2&s&&(t.xp6(7),t.Oqu(a.title),t.xp6(3),t.Q6J("ngIf",a.alertDesc),t.xp6(2),t.Oqu(a.descrizione))},dependencies:[c.O5]})},3556:(f,h,o)=>{o.d(h,{Q:()=>u});var t=o(8274),m=o(3173),c=o(585),p=o(6895),g=o(2775);const i=["pageChanger"];function e(_,r){if(1&_){const n=t.EpF();t.TgZ(0,"a",19),t.NdJ("click",function(){t.CHM(n);const P=t.oxw().$implicit,C=t.oxw();return t.KtG(C.setPage(P.page))}),t._uU(1),t.qZA()}if(2&_){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.page," ")}}function s(_,r){if(1&_){const n=t.EpF();t.TgZ(0,"a",5),t.NdJ("click",function(){t.CHM(n);const P=t.oxw().$implicit,C=t.oxw();return t.KtG(C.setPage(P.page))}),t._uU(1),t.qZA()}if(2&_){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.page)}}function a(_,r){1&_&&(t.TgZ(0,"span",20),t._uU(1,"..."),t.qZA())}function l(_,r){if(1&_&&(t.TgZ(0,"li",4),t.YNc(1,e,2,1,"a",16),t.YNc(2,s,2,1,"a",17),t.YNc(3,a,2,0,"span",18),t.qZA()),2&_){const n=r.$implicit,d=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.separator&&n.page===d.currentPagination.currentPage),t.xp6(1),t.Q6J("ngIf",!n.separator&&n.page!==d.currentPagination.currentPage),t.xp6(1),t.Q6J("ngIf",n.separator)}}class u{constructor(){this.currentPagination=new c.t,this.paginationChange=new t.vpe,this.pages=[],this.currentPageRound=[]}ngOnInit(){this.setPageRound(1)}ngOnChanges(r){r.currentPagination&&this.setPageRound(this.currentPagination.currentPage)}ngAfterViewInit(){this.pageChangerRef=new m.Lt(this.pageChanger?.nativeElement)}setPage(r){this.currentPagination.currentPage=r,this.setPageRound(r),this.paginationChange.emit({page:this.currentPagination.currentPage,pageSize:this.currentPagination.pageSize})}nextPage(){const r=this.currentPagination.currentPage+1;this.pages.find(n=>n.page===r)&&(this.currentPagination.currentPage=r,this.setPageRound(r),this.paginationChange.emit({page:this.currentPagination.currentPage,pageSize:this.currentPagination.pageSize}))}previousPage(){const r=this.currentPagination.currentPage-1;this.pages.find(n=>n.page===r)&&(this.currentPagination.currentPage=r,this.setPageRound(r),this.paginationChange.emit({page:this.currentPagination.currentPage,pageSize:this.currentPagination.pageSize}))}changePageSize(r){this.currentPagination.pageSize=r,this.paginationChange.emit({page:1,pageSize:this.currentPagination.pageSize}),this.pageChangerRef?.toggle()}setPageRound(r){if(this.pages=[],this.currentPagination.totalPages>7){const n=r-2>1?r-2:2,d=r+2<this.currentPagination.totalPages?r+2:this.currentPagination.totalPages-1;this.pages.push({separator:!1,page:1}),n>2&&this.pages.push({separator:!0});const C=n>2?d:n+3;for(let v=r>this.currentPagination.totalPages-4?this.currentPagination.totalPages-4:n;v<=C;v++)this.pages.push({separator:!1,page:v});d<this.currentPagination.totalPages-1&&this.pages.push({separator:!0}),this.pages.push({separator:!1,page:this.currentPagination.totalPages})}else for(let n=1;n<=this.currentPagination.totalPages;n++)this.pages.push({separator:!1,page:n})}openMenu(){this.pageChangerRef?.toggle()}}u.\u0275fac=function(r){return new(r||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-pagination"]],viewQuery:function(r,n){if(1&r&&t.Gf(i,5),2&r){let d;t.iGM(d=t.CRH())&&(n.pageChanger=d.first)}},inputs:{currentPagination:"currentPagination"},outputs:{paginationChange:"paginationChange"},features:[t.TTD],decls:38,vars:2,consts:[[1,"row"],[1,"col"],["aria-label","Esempio di navigazione della pagina",1,"pagination-wrapper","justify-content-center"],[1,"pagination"],[1,"page-item"],["href","javascript:void(0);",1,"page-link",3,"click"],["name","chevron-left"],["class","page-item",4,"ngFor","ngForOf"],["name","chevron-right"],[1,"dropdown"],["href","javascript:void(0);","role","button","id","pagerChanger","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false","aria-label","Salta alla pagina",1,"btn","btn-dropdown","dropdown-toggle",3,"click"],["pageChanger",""],["aria-labelledby","pagerChanger",1,"dropdown-menu"],[1,"link-list-wrapper"],[1,"link-list"],["href","javascript:void(0);",1,"list-item",3,"click"],["class","page-link","href","javascript:void(0);","aria-current","page",3,"click",4,"ngIf"],["class","page-link","href","javascript:void(0);",3,"click",4,"ngIf"],["class","page-link",4,"ngIf"],["href","javascript:void(0);","aria-current","page",1,"page-link",3,"click"],[1,"page-link"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"nav",2)(3,"ul",3)(4,"li",4)(5,"a",5),t.NdJ("click",function(){return n.previousPage()}),t._UZ(6,"app-icon",6),t.qZA()(),t.YNc(7,l,4,3,"li",7),t.TgZ(8,"li",4)(9,"a",5),t.NdJ("click",function(){return n.nextPage()}),t._UZ(10,"app-icon",8),t.qZA()()(),t.TgZ(11,"div",9)(12,"a",10,11),t.NdJ("click",function(){return n.openMenu()}),t._uU(14),t.qZA(),t.TgZ(15,"div",12)(16,"div",13)(17,"ul",14)(18,"li")(19,"a",15),t.NdJ("click",function(){return n.changePageSize(10)}),t.TgZ(20,"span"),t._uU(21,"pag. 10"),t.qZA()()(),t.TgZ(22,"li")(23,"a",15),t.NdJ("click",function(){return n.changePageSize(20)}),t.TgZ(24,"span"),t._uU(25,"pag. 20"),t.qZA()()(),t.TgZ(26,"li")(27,"a",15),t.NdJ("click",function(){return n.changePageSize(30)}),t.TgZ(28,"span"),t._uU(29,"pag. 30"),t.qZA()()(),t.TgZ(30,"li")(31,"a",15),t.NdJ("click",function(){return n.changePageSize(40)}),t.TgZ(32,"span"),t._uU(33,"pag. 40"),t.qZA()()(),t.TgZ(34,"li")(35,"a",15),t.NdJ("click",function(){return n.changePageSize(50)}),t.TgZ(36,"span"),t._uU(37,"pag. 50"),t.qZA()()()()()()()()()()),2&r&&(t.xp6(7),t.Q6J("ngForOf",n.pages),t.xp6(7),t.hij("pag. ",n.currentPagination.pageSize,""))},dependencies:[p.sg,p.O5,g.U]})},585:(f,h,o)=>{o.d(h,{t:()=>t});class t{constructor(c){this.pageCount=c?.pageCount,this.pageSize=c?.pageSize,this.totalCount=c?.totalCount,this.totalPages=c?.totalPages,this.currentPage=c?.currentPage}}},7125:(f,h,o)=>{o.d(h,{i9:()=>g});var t=o(8274),m=o(3173);class g{set title(e){e&&this.element.setAttribute("data-bs-original-title",e)}set placement(e){this.element.setAttribute("data-bs-placement",e)}set html(e){this.element.setAttribute("data-bs-html",function c(i){return void 0!==i&&(!0===i||"true"===i)}(e)?"true":"false")}constructor(e){this._elementRef=e,this.onShow=new t.vpe,this.onShown=new t.vpe,this.onHide=new t.vpe,this.onHidden=new t.vpe,this.onInserted=new t.vpe,this.element=this._elementRef.nativeElement}ngOnDestroy(){this.hide()}ngAfterViewInit(){this.element.setAttribute("data-bs-toggle","tooltip"),this.tooltip=m.u.getOrCreateInstance(this.element),this.element.addEventListener("show.bs.tooltip",e=>this.onShow.emit(e)),this.element.addEventListener("shown.bs.tooltip",e=>this.onShown.emit(e)),this.element.addEventListener("hide.bs.tooltip",e=>this.onHide.emit(e)),this.element.addEventListener("hidden.bs.tooltip",e=>this.onHidden.emit(e)),this.element.addEventListener("inserted.bs.tooltip",e=>this.onInserted.emit(e))}show(){this.tooltip?.show()}hide(){this.tooltip?.hide()}toggle(){this.tooltip?.toggle()}dispose(){this.tooltip?.dispose()}enable(){this.tooltip?.enable()}disable(){this.tooltip?.disable()}toggleEnabled(){this.tooltip?.disable()}update(){this.tooltip?.disable()}}g.\u0275fac=function(e){return new(e||g)(t.Y36(t.SBq))},g.\u0275dir=t.lG2({type:g,selectors:[["","itTooltip",""]],inputs:{title:["itTooltip","title"],placement:["tooltipPlacement","placement"],html:["tooltipHtml","html"]},outputs:{onShow:"onShow",onShown:"onShown",onHide:"onHide",onHidden:"onHidden",onInserted:"onInserted"},exportAs:["itTooltip"]})},9808:(f,h,o)=>{o.d(h,{n:()=>m});var t=o(6805);function m(c,p){const g="object"==typeof p;return new Promise((i,e)=>{let a,s=!1;c.subscribe({next:l=>{a=l,s=!0},error:e,complete:()=>{s?i(a):g?i(p.defaultValue):e(new t.K)}})})}},8372:(f,h,o)=>{o.d(h,{b:()=>p});var t=o(1566),m=o(4482),c=o(5403);function p(g,i=t.z){return(0,m.e)((e,s)=>{let a=null,l=null,u=null;const _=()=>{if(a){a.unsubscribe(),a=null;const n=l;l=null,s.next(n)}};function r(){const n=u+g,d=i.now();if(d<n)return a=this.schedule(void 0,n-d),void s.add(a);_()}e.subscribe((0,c.x)(s,n=>{l=n,u=i.now(),a||(a=i.schedule(r,g),s.add(a))},()=>{_(),s.complete()},void 0,()=>{l=a=null}))})}},5861:(f,h,o)=>{function t(c,p,g,i,e,s,a){try{var l=c[s](a),u=l.value}catch(_){return void g(_)}l.done?p(u):Promise.resolve(u).then(i,e)}function m(c){return function(){var p=this,g=arguments;return new Promise(function(i,e){var s=c.apply(p,g);function a(u){t(s,i,e,a,l,"next",u)}function l(u){t(s,i,e,a,l,"throw",u)}a(void 0)})}}o.d(h,{Z:()=>m})}}]);