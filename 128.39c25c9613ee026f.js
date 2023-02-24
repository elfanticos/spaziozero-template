"use strict";(self.webpackChunkSpazioZero=self.webpackChunkSpazioZero||[]).push([[128],{2128:(Y,g,s)=>{s.r(g),s.d(g,{GestioneUtentiModule:()=>m});var u=s(6895),C=s(1039),l=s(7340),v=s(9300),Z=s(8372),b=s(585),t=s(8274),i=s(433),U=s(4004),w=s(529);class p{constructor(e){this._http=e}utenteList(e=0,o=10){return this._http.get("/utenteList").pipe((0,U.U)(a=>({total:a.length,data:JSON.parse(JSON.stringify(a)).slice(e,o)})))}tipoRuoloList(){return this._http.get("/tipoRuoloList")}}p.\u0275fac=function(e){return new(e||p)(t.LFG(w.eN))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var h=s(2775),T=s(3556),x=s(4734),M=s(7125),F=s(3173);const A=["modalFormUtente"];function I(n,e){if(1&n&&(t.TgZ(0,"option",31),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.Q6J("value",o.ruoloId),t.xp6(1),t.Oqu(o.ruolo)}}function G(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",32),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPass=!r.showPass)}),t.qZA()}}function P(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",33),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPass=!r.showPass)}),t.qZA()}}function J(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",32),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPassConfirm=!r.showPassConfirm)}),t.qZA()}}function y(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-icon",33),t.NdJ("click",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showPassConfirm=!r.showPassConfirm)}),t.qZA()}}class d{constructor(e,o){this._fb=e,this._utenteService=o,this.outClose=new t.vpe,this.showPass=!1,this.showPassConfirm=!1,this.tipiRuolo=[],this.formGroup=this._buildForm()}ngOnInit(){setTimeout(()=>{this.utente&&this.setValueForm()},1),this.loadTipoRuolo()}ngAfterViewInit(){this.handlerModal=new F.u_(this.modal?.nativeElement),this.handlerModal?.show(),this.modal?.nativeElement.addEventListener("hidden.bs.modal",()=>this.closeModal())}_buildForm(){return this._fb.group({nome:[null,[i.kI.required,i.kI.minLength(2),i.kI.maxLength(60)]],cognome:[null,[i.kI.required,i.kI.minLength(2),i.kI.maxLength(60)]],username:[null,[i.kI.required]],tipoRuoloId:["",[i.kI.required]],password:[null,[i.kI.required]],passwordConfirm:[null,[i.kI.required]]})}loadTipoRuolo(){this._utenteService.tipoRuoloList().subscribe({next:e=>{this.tipiRuolo=e,console.log(this.tipiRuolo)},error:e=>{}})}closeModal(){this.handlerModal?.hide(),this.outClose.emit(!0)}setValueForm(){Object.keys(this.formGroup.value)}sendForm(){console.log(this.formGroup.value),this.closeModal()}}function N(n,e){if(1&n&&(t.TgZ(0,"option",38),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.Q6J("value",o.ruoloId),t.xp6(1),t.Oqu(o.ruolo)}}function q(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",39)(9,"button",40),t.NdJ("click",function(){const c=t.CHM(o).$implicit,_=t.oxw();return t.KtG(_.openModalForm(c))}),t._UZ(10,"app-icon",41),t.qZA(),t.TgZ(11,"button",42),t.NdJ("click",function(){const c=t.CHM(o).$implicit,_=t.oxw();return t.KtG(_.openModalConfirmDelete(c))}),t._UZ(12,"app-icon",43),t.qZA()()()()}if(2&n){const o=e.$implicit;t.xp6(2),t.AsE("",o.nome," ",o.cognome,""),t.xp6(2),t.hij(" ",o.username,""),t.xp6(2),t.hij(" ",o.ruolo,"")}}function O(n,e){1&n&&(t.TgZ(0,"div")(1,"p",44),t._uU(2,"Per iniziare \xe8 necessario filtrare "),t.qZA()())}function R(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-pagination",45),t.NdJ("paginationChange",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.paginationChange())}),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("currentPagination",o.paginator)}}function S(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-modal-form-utente",46),t.NdJ("outClose",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showModalFormUtente=!1)}),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("utente",o.utenteSelected)}}function k(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"app-modal-confirm",47),t.NdJ("outClose",function(){t.CHM(o);const r=t.oxw();return t.KtG(r.showModalConfirm=!1)})("outConfirm",function(r){t.CHM(o);const c=t.oxw();return t.KtG(c.confirmDelete(r))}),t.qZA()}2&n&&t.Q6J("title","Conferma per eliminare")("alertDesc",!0)("descrizione","che una volta confermata, non pu\xf2 essere recuperata")}d.\u0275fac=function(e){return new(e||d)(t.Y36(i.qu),t.Y36(p))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-modal-form-utente"]],viewQuery:function(e,o){if(1&e&&t.Gf(A,5),2&e){let a;t.iGM(a=t.CRH())&&(o.modal=a.first)}},inputs:{utente:"utente"},outputs:{outClose:"outClose"},decls:48,vars:8,consts:[[1,"it-example-modal"],["tabindex","-1","role","dialog","id","modalFormUtente",1,"modal","modal"],["modalFormUtente",""],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","h5"],[1,"modal-body"],[1,"container-form-utente",3,"formGroup"],[1,"form-group"],["for","nome-form"],["type","text","id","nome-form","formControlName","nome",1,"form-control"],["for","cognome-form"],["type","text","id","cognome-form","name","cognome-form","formControlName","cognome",1,"form-control"],[1,"select-wrapper"],["for","tipoRuoloId-form"],["id","tipoRuoloId-form","name","tipoRuoloId-form","formControlName","tipoRuoloId"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],["for","username-form"],["type","text","id","username-form","name","username-form","formControlName","username",1,"form-control"],["for","password-form"],["name","password-form","id","password-form","formControlName","password",1,"form-control","input-password",3,"type"],["aria-hidden","true",1,"password-icon","bg-transparent"],["name","password-visible","size","sm","class","password-icon-visible",3,"click",4,"ngIf"],["name","password-invisible","size","sm","class","password-icon-invisible",3,"click",4,"ngIf"],["for","passwordConfirm-form"],["name","passwordConfirm-form","id","passwordConfirm-form","formControlName","passwordConfirm",1,"form-control","input-password",3,"type"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],["type","button",1,"btn","btn-primary","btn-sm"],[3,"value"],["name","password-visible","size","sm",1,"password-icon-visible",3,"click"],["name","password-invisible","size","sm",1,"password-icon-invisible",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7,"Nuovo utente"),t.qZA()(),t.TgZ(8,"div",7)(9,"form",8)(10,"div",9)(11,"label",10),t._uU(12,"Nome"),t.qZA(),t._UZ(13,"input",11),t.qZA(),t.TgZ(14,"div",9)(15,"label",12),t._uU(16,"Cognome"),t.qZA(),t._UZ(17,"input",13),t.qZA(),t.TgZ(18,"div",14)(19,"label",15),t._uU(20,"Tipo ruolo"),t.qZA(),t.TgZ(21,"select",16)(22,"option",17),t._uU(23,"Scegli un'opzione"),t.qZA(),t.YNc(24,I,2,2,"option",18),t.qZA()(),t.TgZ(25,"div",9)(26,"label",19),t._uU(27,"Username"),t.qZA(),t._UZ(28,"input",20),t.qZA(),t.TgZ(29,"div",9)(30,"label",21),t._uU(31,"Password"),t.qZA(),t._UZ(32,"input",22),t.TgZ(33,"span",23),t.YNc(34,G,1,0,"app-icon",24),t.YNc(35,P,1,0,"app-icon",25),t.qZA()(),t.TgZ(36,"div",9)(37,"label",26),t._uU(38,"Conferma password"),t.qZA(),t._UZ(39,"input",27),t.TgZ(40,"span",23),t.YNc(41,J,1,0,"app-icon",24),t.YNc(42,y,1,0,"app-icon",25),t.qZA()()()(),t.TgZ(43,"div",28)(44,"button",29),t.NdJ("click",function(){return o.closeModal()}),t._uU(45,"No"),t.qZA(),t.TgZ(46,"button",30),t._uU(47,"Invia"),t.qZA()()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",o.formGroup),t.xp6(15),t.Q6J("ngForOf",o.tipiRuolo),t.xp6(8),t.Q6J("type",o.showPass?"text":"password"),t.xp6(2),t.Q6J("ngIf",!o.showPass),t.xp6(1),t.Q6J("ngIf",o.showPass),t.xp6(4),t.Q6J("type",o.showPassConfirm?"text":"password"),t.xp6(2),t.Q6J("ngIf",!o.showPassConfirm),t.xp6(1),t.Q6J("ngIf",o.showPassConfirm))},dependencies:[u.sg,u.O5,h.U,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u],styles:[".container-form-utente[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:32px 0}"]});class f{constructor(e,o){this._fb=e,this._utenteService=o,this.viewFilterAdvance=!1,this.showModalFormUtente=!1,this.paginator=new b.t({pageSize:10}),this.total=0,this.serviceSearch=!1,this.showModalConfirm=!1,this.utenteList=[],this.utenteSelected=null,this.tipiRuolo=[],this.spinner={tipoRuoloId:!1},this.formGroup=this._buildForm(),this.loadTipoRuolo()}ngOnInit(){this.searchControl.valueChanges.pipe((0,v.h)(e=>!1===this.viewFilterAdvance&&(e||"").length>3),(0,Z.b)(500)).subscribe(()=>{this.filteredSearch()}),this.filteredSearch()}get searchControl(){return this.formGroup.controls.search}get usernameControl(){return this.formGroup.controls.username}get tipoRuoloIdControl(){return this.formGroup.controls.tipoRuoloId}_buildForm(){return this._fb.group({search:[""],username:[""],tipoRuoloId:[""]})}loadTipoRuolo(){this.spinner.tipoRuoloId=!0,this.tipoRuoloIdControl.disable(),this._utenteService.tipoRuoloList().subscribe({next:e=>{this.spinner.tipoRuoloId=!1,this.tipiRuolo=e,this.tipoRuoloIdControl.enable()},error:e=>{this.spinner.tipoRuoloId=!0,this.tipoRuoloIdControl.enable()}})}filteredSearch(){console.log(this.formGroup.value),this._utenteService.utenteList().subscribe({next:e=>{console.log(e),this.paginator.currentPage=1,this.paginator.totalPages=parseInt(String(e.total/this.paginator.pageSize)),this.utenteList=e.data,this.total=e.total}})}paginationChange(){const e=this.paginator.currentPage*this.paginator.pageSize;this._utenteService.utenteList(e-this.paginator.pageSize,e).subscribe({next:a=>{this.utenteList=a.data}})}openModalForm(e){this.utenteSelected=e,this.showModalFormUtente=!0}openModalConfirmDelete(e){this.utenteSelected=e,this.showModalConfirm=!0}confirmDelete(e){e&&(console.log(this.utenteSelected),this.showModalConfirm=!1)}}f.\u0275fac=function(e){return new(e||f)(t.Y36(i.qu),t.Y36(p))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-gestione-utenti"]],decls:51,vars:12,consts:[[1,"container"],[1,"container-filter"],[1,"row"],[1,"form-group","col-11","input-search"],[1,"input-group"],["for","search"],["type","text","id","search","name","search",1,"form-control",3,"formControl"],[1,"input-group-prepend"],[1,"input-group-text"],["name","search","size","sm",1,"icon-primary"],[1,"col-1"],["type","button","tooltipPlacement","bottom",1,"btn","btn-icon",3,"itTooltip","click"],["size","sm",1,"primary-color","icon-trans",3,"name"],["type","button","itTooltip","Nuevo utente","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","person-fill-add","size","sm",1,"primary-color","icon-trans"],["name","slideInOut",1,"row"],[1,"card-wrapper","card-filter"],[1,"card","card-bg"],[1,"card-body"],[1,"container-filter-advance",3,"formGroup"],[1,"form-group","filter-item"],["for","username"],["type","text","id","username","formControlName","username",1,"form-control"],[1,"select-wrapper","filter-item"],["for","tipoRuoloId"],["id","tipoRuoloId","formControlName","tipoRuoloId"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","d-flex"],["type","button",1,"btn","btn-primary","btn-search",3,"disabled","click"],[1,"container-table"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"currentPagination","paginationChange",4,"ngIf"],[3,"utente","outClose",4,"ngIf"],[3,"title","alertDesc","descrizione","outClose","outConfirm",4,"ngIf"],[3,"value"],[1,"d-flex"],["type","button","itTooltip","Aggiornare","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","pencil","size","sm",1,"icon-primary"],["type","button","itTooltip","Eliminare","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","delete","size","sm",1,"icon-warning"],[1,"text-center"],[3,"currentPagination","paginationChange"],[3,"utente","outClose"],[3,"title","alertDesc","descrizione","outClose","outConfirm"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),t._uU(6,"Cerca utente"),t.qZA(),t._UZ(7,"input",6),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"app-icon",9),t.qZA()()()(),t.TgZ(11,"div",10)(12,"button",11),t.NdJ("click",function(){return o.viewFilterAdvance=!o.viewFilterAdvance}),t._UZ(13,"app-icon",12),t.qZA(),t.TgZ(14,"button",13),t.NdJ("click",function(){return o.openModalForm()}),t._UZ(15,"app-icon",14),t.qZA()()(),t.TgZ(16,"div",15)(17,"div",16)(18,"div",17)(19,"div",18)(20,"form",19)(21,"div",20)(22,"label",21),t._uU(23,"Username"),t.qZA(),t._UZ(24,"input",22),t.qZA(),t.TgZ(25,"div",23)(26,"label",24),t._uU(27,"Tipo Ruolo"),t.qZA(),t.TgZ(28,"select",25)(29,"option",26),t._uU(30,"Scegli un'opzione"),t.qZA(),t.YNc(31,N,2,2,"option",27),t.qZA()()(),t.TgZ(32,"div",28)(33,"button",29),t.NdJ("click",function(){return o.filteredSearch()}),t._uU(34,"Cerca"),t.qZA()()()()()(),t.TgZ(35,"div",30)(36,"table",31)(37,"thead")(38,"tr")(39,"th",32),t._uU(40,"Nome e cognome"),t.qZA(),t.TgZ(41,"th",32),t._uU(42,"Ruolo"),t.qZA(),t.TgZ(43,"th",32),t._uU(44,"Azioni"),t.qZA()()(),t.TgZ(45,"tbody"),t.YNc(46,q,13,4,"tr",33),t.qZA()()(),t.YNc(47,O,3,0,"div",34),t.YNc(48,R,1,1,"app-pagination",35),t.qZA(),t.YNc(49,S,1,1,"app-modal-form-utente",36),t.YNc(50,k,1,3,"app-modal-confirm",37),t.qZA()),2&e&&(t.xp6(7),t.Q6J("formControl",o.searchControl),t.xp6(5),t.Q6J("itTooltip",o.viewFilterAdvance?"Nascondere filtro":"Mostra filtro"),t.xp6(1),t.Q6J("name",o.viewFilterAdvance?"filter-square":"filter"),t.xp6(3),t.Q6J("@slideInOut",o.viewFilterAdvance?"in":"out"),t.xp6(4),t.Q6J("formGroup",o.formGroup),t.xp6(11),t.Q6J("ngForOf",o.tipiRuolo),t.xp6(2),t.Q6J("disabled",o.formGroup.invalid||o.serviceSearch),t.xp6(13),t.Q6J("ngForOf",o.utenteList),t.xp6(1),t.Q6J("ngIf",!o.utenteList.length),t.xp6(1),t.Q6J("ngIf",o.utenteList.length),t.xp6(1),t.Q6J("ngIf",1==o.showModalFormUtente),t.xp6(1),t.Q6J("ngIf",1==o.showModalConfirm))},dependencies:[u.sg,u.O5,h.U,T.Q,x.b,M.i9,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.oH,i.sg,i.u,d],styles:[".container-filter[_ngcontent-%COMP%]{max-width:960px}.container-filter[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{margin-bottom:2rem}.container-filter[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{box-shadow:none!important;padding:0!important}.container-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child{padding-left:calc(var(--bs-gutter-x) * .5)}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]{max-width:960px;display:grid;grid-template-columns:1fr 1fr 1fr}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]{margin:24px 24px 24px 0}.container-filter[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]{max-width:100px}.container-filter[_ngcontent-%COMP%]   .card-filter[_ngcontent-%COMP%]{padding:16px}.container-table[_ngcontent-%COMP%]{max-width:960px;margin:32px 0;overflow:auto}.container-table[_ngcontent-%COMP%]   .link-list[_ngcontent-%COMP%]{padding:0;margin:0}.card.card-bg[_ngcontent-%COMP%]:after{margin-top:0}"],data:{animation:[(0,l.X$)("slideInOut",[(0,l.SB)("in",(0,l.oB)({overflow:"hidden",height:"*",opacity:"1"})),(0,l.SB)("out",(0,l.oB)({opacity:"0",overflow:"hidden",height:"0px"})),(0,l.eR)("in => out",(0,l.jt)("400ms ease-in-out")),(0,l.eR)("out => in",(0,l.jt)("400ms ease-in-out"))])]}});const z=C.Bz.forChild([{path:"",component:f}]);var L=s(3500);class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[u.ez,z,L.m,i.u5,i.UX]})}}]);