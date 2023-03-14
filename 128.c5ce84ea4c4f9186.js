"use strict";(self.webpackChunkSpazioZero=self.webpackChunkSpazioZero||[]).push([[128],{2128:(D,g,s)=>{s.r(g),s.d(g,{GestioneUtentiModule:()=>m});var u=s(6895),C=s(1039),l=s(7340),v=s(9300),Z=s(8372),U=s(585),t=s(8274),i=s(433),b=s(4004),T=s(529);class p{constructor(e){this._http=e}utenteList(e=0,o=10){return this._http.get("/utenteList").pipe((0,b.U)(a=>({total:a.length,data:JSON.parse(JSON.stringify(a)).slice(e,o)})))}tipoRuoloList(){return this._http.get("/tipoRuoloList")}}p.\u0275fac=function(e){return new(e||p)(t.LFG(T.eN))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var h=s(2775),x=s(3556),w=s(4734),M=s(2925),F=s(3499),A=s(7125),I=s(6741);const P=["modalFormUtente"];function G(n,e){if(1&n&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.Q6J("value",o.ruoloId),t.xp6(1),t.Oqu(o.ruolo)}}function J(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",32),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPass=!r.showPass)}),t.qZA()}}function S(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",33),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPass=!r.showPass)}),t.qZA()}}function y(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",32),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPassConfirm=!r.showPassConfirm)}),t.qZA()}}function N(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",33),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPassConfirm=!r.showPassConfirm)}),t.qZA()}}class d{constructor(e,o){this._fb=e,this._utenteService=o,this.outClose=new t.vpe,this.showPass=!1,this.showPassConfirm=!1,this.tipiRuolo=[],this.formGroup=this._buildForm()}ngOnInit(){setTimeout(()=>{this.utente&&this.setValueForm()},1),this.loadTipoRuolo()}ngAfterViewInit(){this.handlerModal=new I.u_(this.modal?.nativeElement),this.handlerModal?.show(),this.modal?.nativeElement.addEventListener("hidden.bs.modal",()=>this.closeModal())}_buildForm(){return this._fb.group({nome:[null,[i.kI.required,i.kI.minLength(2),i.kI.maxLength(60)]],cognome:[null,[i.kI.required,i.kI.minLength(2),i.kI.maxLength(60)]],username:[null,[i.kI.required]],tipoRuoloId:["",[i.kI.required]],password:[null,[i.kI.required]],passwordConfirm:[null,[i.kI.required]]})}loadTipoRuolo(){this._utenteService.tipoRuoloList().subscribe({next:e=>{this.tipiRuolo=e},error:e=>{}})}closeModal(){this.handlerModal?.hide(),this.outClose.emit(!0)}setValueForm(){Object.keys(this.formGroup.value)}sendForm(){this.closeModal()}}function O(n,e){if(1&n&&(t.TgZ(0,"option",35),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.Q6J("value",o.ruoloId),t.xp6(1),t.Oqu(o.ruolo)}}function q(n,e){1&n&&t._UZ(0,"app-curtain")}function R(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",40)(9,"button",41),t.NdJ("click",function(){const c=t.CHM(o).$implicit,_=t.oxw(2);return t.KtG(_.openModalForm(c))}),t._UZ(10,"app-icon",42),t.qZA(),t.TgZ(11,"button",43),t.NdJ("click",function(){const c=t.CHM(o).$implicit,_=t.oxw(2);return t.KtG(_.openModalConfirmDelete(c))}),t._UZ(12,"app-icon",44),t.qZA()()()()}if(2&n){const o=e.$implicit;t.xp6(2),t.AsE("",o.nome," ",o.cognome,""),t.xp6(2),t.hij(" ",o.username,""),t.xp6(2),t.hij(" ",o.ruolo,"")}}function Q(n,e){if(1&n&&(t.TgZ(0,"div",36),t.YNc(1,q,1,0,"app-curtain",31),t.TgZ(2,"table",37)(3,"thead")(4,"tr")(5,"th",38),t._uU(6,"Nome e cognome"),t.qZA(),t.TgZ(7,"th",38),t._uU(8,"Ruolo"),t.qZA(),t.TgZ(9,"th",38),t._uU(10,"Azioni"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,R,13,4,"tr",39),t.qZA()()()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.serviceSearchForPaginator),t.xp6(11),t.Q6J("ngForOf",o.utenteList)}}function k(n,e){1&n&&(t.TgZ(0,"div")(1,"p",45),t._uU(2,"Per iniziare \xe8 necessario filtrare "),t.qZA()())}function z(n,e){1&n&&t._UZ(0,"app-spinner")}function L(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-pagination",46),t.NdJ("paginationChange",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.paginationChange())}),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("currentPagination",o.paginator)}}function Y(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-modal-form-utente",47),t.NdJ("outClose",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showModalFormUtente=!1)}),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("utente",o.utenteSelected)}}function E(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-modal-confirm",48),t.NdJ("outClose",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showModalConfirm=!1)})("outConfirm",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.confirmDelete(r))}),t.qZA()}2&n&&t.Q6J("title","Conferma per eliminare")("alertDesc",!0)("descrizione","che una volta confermata, non pu\xf2 essere recuperata")}d.\u0275fac=function(e){return new(e||d)(t.Y36(i.qu),t.Y36(p))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-modal-form-utente"]],viewQuery:function(e,o){if(1&e&&t.Gf(P,5),2&e){let a;t.iGM(a=t.CRH())&&(o.modal=a.first)}},inputs:{utente:"utente"},outputs:{outClose:"outClose"},decls:48,vars:8,consts:[[1,"it-example-modal"],["tabindex","-1","role","dialog","id","modalFormUtente",1,"modal","modal"],["modalFormUtente",""],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","h5"],[1,"modal-body"],[1,"container-form-utente",3,"formGroup"],[1,"form-group"],["for","nome-form"],["type","text","id","nome-form","formControlName","nome",1,"form-control"],["for","cognome-form"],["type","text","id","cognome-form","name","cognome-form","formControlName","cognome",1,"form-control"],[1,"select-wrapper"],["for","tipoRuoloId-form"],["id","tipoRuoloId-form","name","tipoRuoloId-form","formControlName","tipoRuoloId"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],["for","username-form"],["type","text","id","username-form","name","username-form","formControlName","username",1,"form-control"],["for","password-form"],["name","password-form","id","password-form","formControlName","password",1,"form-control","input-password",3,"type"],["aria-hidden","true",1,"password-icon","bg-transparent"],["name","password-visible","size","sm","class","password-icon-visible",3,"click",4,"ngIf"],["name","password-invisible","size","sm","class","password-icon-invisible",3,"click",4,"ngIf"],["for","passwordConfirm-form"],["name","passwordConfirm-form","id","passwordConfirm-form","formControlName","passwordConfirm",1,"form-control","input-password",3,"type"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],["type","button",1,"btn","btn-primary","btn-sm"],[3,"value"],["name","password-visible","size","sm",1,"password-icon-visible",3,"click"],["name","password-invisible","size","sm",1,"password-icon-invisible",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Nuovo utente"),t.qZA()(),t.TgZ(8,"div",7)(9,"form",8)(10,"div",9)(11,"label",10),t._uU(12,"Nome"),t.qZA(),t._UZ(13,"input",11),t.qZA(),t.TgZ(14,"div",9)(15,"label",12),t._uU(16,"Cognome"),t.qZA(),t._UZ(17,"input",13),t.qZA(),t.TgZ(18,"div",14)(19,"label",15),t._uU(20,"Tipo ruolo"),t.qZA(),t.TgZ(21,"select",16)(22,"option",17),t._uU(23,"Scegli un'opzione"),t.qZA(),t.YNc(24,G,2,2,"option",18),t.qZA()(),t.TgZ(25,"div",9)(26,"label",19),t._uU(27,"Username"),t.qZA(),t._UZ(28,"input",20),t.qZA(),t.TgZ(29,"div",9)(30,"label",21),t._uU(31,"Password"),t.qZA(),t._UZ(32,"input",22),t.TgZ(33,"span",23),t.YNc(34,J,1,0,"app-icon",24),t.YNc(35,S,1,0,"app-icon",25),t.qZA()(),t.TgZ(36,"div",9)(37,"label",26),t._uU(38,"Conferma password"),t.qZA(),t._UZ(39,"input",27),t.TgZ(40,"span",23),t.YNc(41,y,1,0,"app-icon",24),t.YNc(42,N,1,0,"app-icon",25),t.qZA()()()(),t.TgZ(43,"div",28)(44,"button",29),t.NdJ("click",function(){return o.closeModal()}),t._uU(45,"No"),t.qZA(),t.TgZ(46,"button",30),t._uU(47,"Invia"),t.qZA()()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.formGroup),t.xp6(15),t.Q6J("ngForOf",o.tipiRuolo),t.xp6(8),t.Q6J("type",o.showPass?"text":"password"),t.xp6(2),t.Q6J("ngIf",!o.showPass),t.xp6(1),t.Q6J("ngIf",o.showPass),t.xp6(4),t.Q6J("type",o.showPassConfirm?"text":"password"),t.xp6(2),t.Q6J("ngIf",!o.showPassConfirm),t.xp6(1),t.Q6J("ngIf",o.showPassConfirm))},dependencies:[u.sg,u.O5,h.U,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u],styles:[".container-form-utente[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:32px 0}"]});class f{constructor(e,o){this._fb=e,this._utenteService=o,this.viewFilterAdvance=!1,this.showModalFormUtente=!1,this.paginator=new U.t({pageSize:10}),this.total=0,this.serviceSearch=!1,this.serviceSearchForPaginator=!1,this.showModalConfirm=!1,this.utenteList=[],this.utenteSelected=null,this.tipiRuolo=[],this.spinner={tipoRuoloId:!1},document.title="SpazioZero | Gest. Utenti",this.formGroup=this._buildForm(),this.loadTipoRuolo()}ngOnInit(){this.searchControl.valueChanges.pipe((0,v.h)(e=>!1===this.viewFilterAdvance&&(e||"").length>3),(0,Z.b)(500)).subscribe(()=>{this.filteredSearch()}),this.filteredSearch()}get searchControl(){return this.formGroup.controls.search}get usernameControl(){return this.formGroup.controls.username}get tipoRuoloIdControl(){return this.formGroup.controls.tipoRuoloId}_buildForm(){return this._fb.group({search:[""],username:[""],tipoRuoloId:[""]})}loadTipoRuolo(){this.spinner.tipoRuoloId=!0,this.tipoRuoloIdControl.disable(),this._utenteService.tipoRuoloList().subscribe({next:e=>{this.spinner.tipoRuoloId=!1,this.tipiRuolo=e,this.tipoRuoloIdControl.enable()},error:e=>{this.spinner.tipoRuoloId=!0,this.tipoRuoloIdControl.enable()}})}filteredSearch(){this.serviceSearch||(this.serviceSearch=!0,this._utenteService.utenteList().subscribe({next:e=>{this.paginator.currentPage=1,this.paginator.totalPages=parseInt(String(e.total/this.paginator.pageSize)),this.utenteList=e.data,this.total=e.total,this.serviceSearch=!1},error:e=>{this.serviceSearch=!1}}))}paginationChange(){if(this.serviceSearchForPaginator)return;this.serviceSearchForPaginator=!0;const e=this.paginator.currentPage*this.paginator.pageSize;this._utenteService.utenteList(e-this.paginator.pageSize,e).subscribe({next:a=>{this.utenteList=a.data,this.serviceSearchForPaginator=!1},error:a=>{this.serviceSearchForPaginator=!1}})}openModalForm(e){this.utenteSelected=e,this.showModalFormUtente=!0}openModalConfirmDelete(e){this.utenteSelected=e,this.showModalConfirm=!0}confirmDelete(e){e&&(this.showModalConfirm=!1)}}f.\u0275fac=function(e){return new(e||f)(t.Y36(i.qu),t.Y36(p))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-gestione-utenti"]],decls:41,vars:13,consts:[[1,"container"],[1,"container-filter"],[1,"row"],[1,"form-group","col-11","input-search"],[1,"input-group"],["for","search"],["type","text","id","search","name","search",1,"form-control",3,"formControl"],[1,"input-group-prepend"],[1,"input-group-text"],["name","search","size","sm",1,"icon-primary"],[1,"col-1","d-flex"],["type","button","tooltipPlacement","bottom",1,"btn","btn-icon",3,"itTooltip","click"],["size","sm",1,"primary-color","icon-trans",3,"name"],["type","button","itTooltip","Nuevo utente","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","person-fill-add","size","sm",1,"primary-color","icon-trans"],["name","slideInOut",1,"row"],[1,"card-wrapper","card-filter"],[1,"card","card-bg"],[1,"card-body"],[1,"container-filter-advance",3,"formGroup"],[1,"form-group","filter-item"],["for","username"],["type","text","id","username","formControlName","username",1,"form-control"],[1,"select-wrapper","filter-item"],["for","tipoRuoloId"],["id","tipoRuoloId","formControlName","tipoRuoloId"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","d-flex"],["type","button",1,"btn","btn-primary","btn-search",3,"disabled","click"],["class","container-table",4,"ngIf"],[4,"ngIf"],[3,"currentPagination","paginationChange",4,"ngIf"],[3,"utente","outClose",4,"ngIf"],[3,"title","alertDesc","descrizione","outClose","outConfirm",4,"ngIf"],[3,"value"],[1,"container-table"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex"],["type","button","itTooltip","Aggiornare","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","pencil","size","sm",1,"icon-primary"],["type","button","itTooltip","Eliminare","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","delete","size","sm",1,"icon-warning"],[1,"text-center"],[3,"currentPagination","paginationChange"],[3,"utente","outClose"],[3,"title","alertDesc","descrizione","outClose","outConfirm"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),t._uU(6,"Cerca utente"),t.qZA(),t._UZ(7,"input",6),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"app-icon",9),t.qZA()()()(),t.TgZ(11,"div",10)(12,"button",11),t.NdJ("click",function(){return o.viewFilterAdvance=!o.viewFilterAdvance}),t._UZ(13,"app-icon",12),t.qZA(),t.TgZ(14,"button",13),t.NdJ("click",function(){return o.openModalForm()}),t._UZ(15,"app-icon",14),t.qZA()()(),t.TgZ(16,"div",15)(17,"div",16)(18,"div",17)(19,"div",18)(20,"form",19)(21,"div",20)(22,"label",21),t._uU(23,"Username"),t.qZA(),t._UZ(24,"input",22),t.qZA(),t.TgZ(25,"div",23)(26,"label",24),t._uU(27,"Tipo Ruolo"),t.qZA(),t.TgZ(28,"select",25)(29,"option",26),t._uU(30,"Scegli un'opzione"),t.qZA(),t.YNc(31,O,2,2,"option",27),t.qZA()()(),t.TgZ(32,"div",28)(33,"button",29),t.NdJ("click",function(){return o.filteredSearch()}),t._uU(34,"Cerca"),t.qZA()()()()()(),t.YNc(35,Q,13,2,"div",30),t.YNc(36,k,3,0,"div",31),t.YNc(37,z,1,0,"app-spinner",31),t.YNc(38,L,1,1,"app-pagination",32),t.qZA(),t.YNc(39,Y,1,1,"app-modal-form-utente",33),t.YNc(40,E,1,3,"app-modal-confirm",34),t.qZA()),2&e&&(t.xp6(7),t.Q6J("formControl",o.searchControl),t.xp6(5),t.Q6J("itTooltip",o.viewFilterAdvance?"Nascondere filtro":"Mostra filtro"),t.xp6(1),t.Q6J("name",o.viewFilterAdvance?"filter-square":"filter"),t.xp6(3),t.Q6J("@slideInOut",o.viewFilterAdvance?"in":"out"),t.xp6(4),t.Q6J("formGroup",o.formGroup),t.xp6(11),t.Q6J("ngForOf",o.tipiRuolo),t.xp6(2),t.Q6J("disabled",o.formGroup.invalid||o.serviceSearch),t.xp6(2),t.Q6J("ngIf",!o.serviceSearch),t.xp6(1),t.Q6J("ngIf",!o.utenteList.length&&!o.serviceSearch),t.xp6(1),t.Q6J("ngIf",o.serviceSearch),t.xp6(1),t.Q6J("ngIf",o.utenteList.length&&!o.serviceSearch),t.xp6(1),t.Q6J("ngIf",1==o.showModalFormUtente),t.xp6(1),t.Q6J("ngIf",1==o.showModalConfirm))},dependencies:[u.sg,u.O5,h.U,x.Q,w.b,M.O,F.G,A.i9,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.oH,i.sg,i.u,d],styles:[".container-filter[_ngcontent-%COMP%]{max-width:960px}.container-filter[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{margin-bottom:2rem}.container-filter[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{box-shadow:none!important;padding:0!important;display:flex;justify-content:baseline;align-items:baseline;max-height:32px}.container-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child{padding-left:calc(var(--bs-gutter-x) * .5)}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]{max-width:960px;display:grid;grid-template-columns:1fr 1fr 1fr}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]{margin:24px 24px 24px 0}.container-filter[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]{max-width:100px}.container-filter[_ngcontent-%COMP%]   .card-filter[_ngcontent-%COMP%]{padding:16px}.container-table[_ngcontent-%COMP%]{max-width:960px;margin:32px 0;overflow:auto;position:relative}.container-table[_ngcontent-%COMP%]   .link-list[_ngcontent-%COMP%]{padding:0;margin:0}.card.card-bg[_ngcontent-%COMP%]:after{margin-top:0}"],data:{animation:[(0,l.X$)("slideInOut",[(0,l.SB)("in",(0,l.oB)({overflow:"hidden",height:"*",opacity:"1"})),(0,l.SB)("out",(0,l.oB)({opacity:"0",overflow:"hidden",height:"0px"})),(0,l.eR)("in => out",(0,l.jt)("400ms ease-in-out")),(0,l.eR)("out => in",(0,l.jt)("400ms ease-in-out"))])]}});const K=C.Bz.forChild([{path:"",component:f}]);var j=s(3500);class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[u.ez,K,j.m,i.u5,i.UX]})}}]);