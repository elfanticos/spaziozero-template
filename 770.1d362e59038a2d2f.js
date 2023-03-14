"use strict";(self.webpackChunkSpazioZero=self.webpackChunkSpazioZero||[]).push([[770],{8770:(L,u,i)=>{i.r(u),i.d(u,{GestioneAnagraficheModule:()=>l});var g=i(6895),h=i(1039),c=i(7340),_=i(9300),v=i(8372),C=i(585),t=i(8274),e=i(433),A=i(7290),Z=i(2775),b=i(3556),x=i(4734),M=i(2925),T=i(3499),N=i(7125),G=i(6741);const F=["modalFormAnagrafica"];class p{constructor(n){this._fb=n,this.outClose=new t.vpe,this.formGroup=this._buildForm()}ngOnInit(){setTimeout(()=>{this.anagrafica&&this.setValueForm()},1)}ngAfterViewInit(){this.handlerModal=new G.u_(this.modal?.nativeElement),this.handlerModal?.show(),this.modal?.nativeElement.addEventListener("hidden.bs.modal",()=>this.closeModal())}get nomeControl(){return this.formGroup.controls.nome}get cognomeControl(){return this.formGroup.controls.cognome}get dataNascitaControl(){return this.formGroup.controls.dataNascita}get luogoNascitaControl(){return this.formGroup.controls.luogoNascita}_buildForm(){return this._fb.group({nome:[null,[e.kI.required,e.kI.minLength(2),e.kI.maxLength(60)]],cognome:[null,[e.kI.required,e.kI.minLength(2),e.kI.maxLength(60)]],dataNascita:[null,[e.kI.required]],luogoNascita:[null,[e.kI.required]]})}closeModal(){this.handlerModal?.hide(),this.outClose.emit(!0)}setValueForm(){Object.keys(this.formGroup.value).map(o=>{"dataNascita"==o&&this.anagrafica[o]&&(this.anagrafica[o]=this.anagrafica[o].replace("T00:00:00","")),this.formGroup.controls[o].setValue(this.anagrafica[o])})}sendForm(){this.closeModal()}}function y(a,n){1&a&&t._UZ(0,"app-curtain")}function P(a,n){if(1&a){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td")(9,"div",36)(10,"button",37),t.NdJ("click",function(){const f=t.CHM(o).$implicit,d=t.oxw(2);return t.KtG(d.openModalForm(f))}),t._UZ(11,"app-icon",38),t.qZA(),t.TgZ(12,"button",39),t.NdJ("click",function(){const f=t.CHM(o).$implicit,d=t.oxw(2);return t.KtG(d.openModalConfirmDelete(f))}),t._UZ(13,"app-icon",40),t.qZA()()()()}if(2&a){const o=n.$implicit;t.xp6(2),t.AsE("",o.nome," ",o.congome,""),t.xp6(2),t.hij(" ",t.xi3(5,4,o.dataNascita,"dd/MM/yyyy"),""),t.xp6(3),t.hij(" ",o.luogoNascita,"")}}function S(a,n){if(1&a&&(t.TgZ(0,"div",32),t.YNc(1,y,1,0,"app-curtain",28),t.TgZ(2,"table",33)(3,"thead")(4,"tr")(5,"th",34),t._uU(6,"Nome e cognome"),t.qZA(),t.TgZ(7,"th",34),t._uU(8,"Data nascita"),t.qZA(),t.TgZ(9,"th",34),t._uU(10,"Luego nascita"),t.qZA(),t.TgZ(11,"th",34),t._uU(12,"Azioni"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,P,14,7,"tr",35),t.qZA()()()),2&a){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.serviceSearchForPaginator),t.xp6(13),t.Q6J("ngForOf",o.personaList)}}function U(a,n){1&a&&(t.TgZ(0,"div")(1,"p",41),t._uU(2,"Per iniziare \xe8 necessario filtrare "),t.qZA()())}function J(a,n){1&a&&t._UZ(0,"app-spinner")}function O(a,n){if(1&a){const o=t.EpF();t.TgZ(0,"app-pagination",42),t.NdJ("paginationChange",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.paginationChange())}),t.qZA()}if(2&a){const o=t.oxw();t.Q6J("currentPagination",o.paginator)}}function w(a,n){if(1&a){const o=t.EpF();t.TgZ(0,"app-modal-form-anagrafica",43),t.NdJ("outClose",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.showModalFormAnagrafica=!1)}),t.qZA()}if(2&a){const o=t.oxw();t.Q6J("anagrafica",o.personaSelected)}}function I(a,n){if(1&a){const o=t.EpF();t.TgZ(0,"app-modal-confirm",44),t.NdJ("outClose",function(){t.CHM(o);const s=t.oxw();return t.KtG(s.showModalConfirm=!1)})("outConfirm",function(s){t.CHM(o);const f=t.oxw();return t.KtG(f.confirmDelete(s))}),t.qZA()}2&a&&t.Q6J("title","Conferma per eliminare")("alertDesc",!0)("descrizione","che una volta confermata, non pu\xf2 essere recuperata")}p.\u0275fac=function(n){return new(n||p)(t.Y36(e.qu))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-modal-form-anagrafica"]],viewQuery:function(n,o){if(1&n&&t.Gf(F,5),2&n){let r;t.iGM(r=t.CRH())&&(o.modal=r.first)}},inputs:{anagrafica:"anagrafica"},outputs:{outClose:"outClose"},decls:31,vars:8,consts:[[1,"it-example-modal"],["tabindex","-1","role","dialog","id","modalFormAnagrafica",1,"modal","modal"],["modalFormAnagrafica",""],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","h5"],[1,"modal-body"],[1,"container-form-utente",3,"formGroup"],[1,"form-group"],["for","nome-form"],["type","text","id","nome-form","formControlName","nome",1,"form-control"],["for","cognome-form"],["type","text","id","cognome-form","formControlName","cognome",1,"form-control"],["for","dataNascita-form",1,"active"],["type","date","id","dataNascita-form","formControlName","dataNascita",1,"form-control"],["for","luogoNascita-form"],["type","text","id","luogoNascita-form","formControlName","luogoNascita",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7),t.qZA()(),t.TgZ(8,"div",7)(9,"form",8)(10,"div",9)(11,"label",10),t._uU(12,"Nome"),t.qZA(),t._UZ(13,"input",11),t.qZA(),t.TgZ(14,"div",9)(15,"label",12),t._uU(16,"Cognome"),t.qZA(),t._UZ(17,"input",13),t.qZA(),t.TgZ(18,"div",9)(19,"label",14),t._uU(20,"Data nascita"),t.qZA(),t._UZ(21,"input",15),t.qZA(),t.TgZ(22,"div",9)(23,"label",16),t._uU(24,"Luogo nascita"),t.qZA(),t._UZ(25,"input",17),t.qZA()()(),t.TgZ(26,"div",18)(27,"button",19),t.NdJ("click",function(){return o.closeModal()}),t._uU(28,"No"),t.qZA(),t.TgZ(29,"button",20),t.NdJ("click",function(){return o.sendForm()}),t._uU(30,"Envia"),t.qZA()()()()()()),2&n&&(t.xp6(7),t.Oqu(o.anagrafica?"Aggiornare anagrafica":"Inserire anagrafica"),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(2),t.ekj("active",o.nomeControl.value),t.xp6(4),t.ekj("active",o.cognomeControl.value),t.xp6(8),t.ekj("active",o.luogoNascitaControl.value))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:[".container-form-utente[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:32px 0}"]});class m{constructor(n,o){this._fb=n,this._anagraficaService=o,this.viewFilterAdvance=!1,this.paginator=new C.t({pageSize:10}),this.total=0,this.personaList=[],this.serviceSearch=!1,this.serviceSearchForPaginator=!1,this.showModalFormAnagrafica=!1,this.personaSelected=null,this.showModalConfirm=!1,document.title="SpazioZero | Gest. Anagrafiche",this.formGroup=this._buildForm()}ngOnInit(){this.filteredSearch(),this.searchControl.valueChanges.pipe((0,_.h)(n=>!1===this.viewFilterAdvance&&(n||"").length>3),(0,v.b)(500)).subscribe(()=>{this.filteredSearch()})}get searchControl(){return this.formGroup.controls.seach}get luogoNascitaControl(){return this.formGroup.controls.luogoNascita}get dataNascitaControl(){return this.formGroup.controls.dataNascita}_buildForm(){return this._fb.group({seach:[""],luogoNascita:[""],dataNascita:[""]})}filteredSearch(){this.serviceSearch||(this.serviceSearch=!0,this._anagraficaService.anagraficaList().subscribe({next:n=>{this.paginator.currentPage=1,this.paginator.totalPages=parseInt(String(n.total/this.paginator.pageSize)),this.personaList=n.data,this.total=n.total,this.serviceSearch=!1},error:n=>{this.serviceSearch=!1}}))}paginationChange(){if(this.serviceSearchForPaginator)return;this.serviceSearchForPaginator=!0;const n=this.paginator.currentPage*this.paginator.pageSize;this._anagraficaService.anagraficaList(n-this.paginator.pageSize,n).subscribe({next:r=>{this.personaList=r.data,this.serviceSearchForPaginator=!1},error:r=>{this.serviceSearchForPaginator=!1}})}openModalForm(n){this.personaSelected=n,this.showModalFormAnagrafica=!0}openModalConfirmDelete(n){this.personaSelected=n,this.showModalConfirm=!0}confirmDelete(n){n&&(this.showModalConfirm=!1)}}m.\u0275fac=function(n){return new(n||m)(t.Y36(e.qu),t.Y36(A.u))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-gestione-anagrafiche"]],decls:38,vars:12,consts:[[1,"container"],[1,"container-filter"],[1,"row"],[1,"form-group","col-11","input-search"],[1,"input-group"],["for","search"],["type","text","id","search","name","search",1,"form-control",3,"formControl"],[1,"input-group-prepend"],[1,"input-group-text"],["name","search","size","sm",1,"icon-primary"],[1,"col-1","d-flex","btns-filter"],["type","button","tooltipPlacement","bottom",1,"btn","btn-icon",3,"itTooltip","click"],["size","sm",1,"primary-color","icon-trans",3,"name"],["type","button","itTooltip","Nueva anagrafica","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","person-fill-add","size","sm",1,"primary-color","icon-trans"],["name","slideInOut",1,"row"],[1,"card-wrapper","card-filter"],[1,"card","card-bg"],[1,"card-body"],[1,"container-filter-advance",3,"formGroup"],[1,"form-group","filter-item"],["for","luogoNascita"],["type","text","id","luogoNascita","formControlName","luogoNascita",1,"form-control"],["for","dataNascita",1,"active"],["type","date","id","dataNascita","formControlName","dataNascita",1,"form-control"],[1,"row","d-flex"],["type","button",1,"btn","btn-primary","btn-search",3,"disabled","click"],["class","container-table",4,"ngIf"],[4,"ngIf"],[3,"currentPagination","paginationChange",4,"ngIf"],[3,"anagrafica","outClose",4,"ngIf"],[3,"title","alertDesc","descrizione","outClose","outConfirm",4,"ngIf"],[1,"container-table"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"d-flex"],["type","button","itTooltip","Aggiornare","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","pencil","size","sm",1,"icon-primary"],["type","button","itTooltip","Eliminare","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","delete","size","sm",1,"icon-warning"],[1,"text-center"],[3,"currentPagination","paginationChange"],[3,"anagrafica","outClose"],[3,"title","alertDesc","descrizione","outClose","outConfirm"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),t._uU(6,"Cerca persona"),t.qZA(),t._UZ(7,"input",6),t.TgZ(8,"div",7)(9,"div",8),t._UZ(10,"app-icon",9),t.qZA()()()(),t.TgZ(11,"div",10)(12,"button",11),t.NdJ("click",function(){return o.viewFilterAdvance=!o.viewFilterAdvance}),t._UZ(13,"app-icon",12),t.qZA(),t.TgZ(14,"button",13),t.NdJ("click",function(){return o.openModalForm()}),t._UZ(15,"app-icon",14),t.qZA()()(),t.TgZ(16,"div",15)(17,"div",16)(18,"div",17)(19,"div",18)(20,"form",19)(21,"div",20)(22,"label",21),t._uU(23,"Luogo nascita"),t.qZA(),t._UZ(24,"input",22),t.qZA(),t.TgZ(25,"div",20)(26,"label",23),t._uU(27,"Data nascita"),t.qZA(),t._UZ(28,"input",24),t.qZA()(),t.TgZ(29,"div",25)(30,"button",26),t.NdJ("click",function(){return o.filteredSearch()}),t._uU(31,"Cerca"),t.qZA()()()()()(),t.YNc(32,S,15,2,"div",27),t.YNc(33,U,3,0,"div",28),t.YNc(34,J,1,0,"app-spinner",28),t.YNc(35,O,1,1,"app-pagination",29),t.qZA(),t.YNc(36,w,1,1,"app-modal-form-anagrafica",30),t.YNc(37,I,1,3,"app-modal-confirm",31),t.qZA()),2&n&&(t.xp6(7),t.Q6J("formControl",o.searchControl),t.xp6(5),t.Q6J("itTooltip",o.viewFilterAdvance?"Nascondere filtro":"Mostra filtro"),t.xp6(1),t.Q6J("name",o.viewFilterAdvance?"filter-square":"filter"),t.xp6(3),t.Q6J("@slideInOut",o.viewFilterAdvance?"in":"out"),t.xp6(4),t.Q6J("formGroup",o.formGroup),t.xp6(10),t.Q6J("disabled",o.formGroup.invalid||o.serviceSearch),t.xp6(2),t.Q6J("ngIf",!o.serviceSearch),t.xp6(1),t.Q6J("ngIf",!o.personaList.length&&!o.serviceSearch),t.xp6(1),t.Q6J("ngIf",o.serviceSearch),t.xp6(1),t.Q6J("ngIf",o.personaList.length&&!o.serviceSearch),t.xp6(1),t.Q6J("ngIf",1==o.showModalFormAnagrafica),t.xp6(1),t.Q6J("ngIf",1==o.showModalConfirm))},dependencies:[g.sg,g.O5,Z.U,b.Q,x.b,M.O,T.G,N.i9,e._Y,e.Fj,e.JJ,e.JL,e.oH,e.sg,e.u,p,g.uU],styles:[".container-filter[_ngcontent-%COMP%]{max-width:960px}.container-filter[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{margin-bottom:2rem}.container-filter[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{box-shadow:none!important;padding:0!important;display:flex;justify-content:baseline;align-items:baseline;max-height:32px}.container-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child{padding-left:calc(var(--bs-gutter-x) * .5)}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]{max-width:960px;display:grid;grid-template-columns:1fr 1fr 1fr}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]{margin:24px 24px 24px 0}.container-filter[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]{max-width:100px}.container-filter[_ngcontent-%COMP%]   .card-filter[_ngcontent-%COMP%]{padding:16px}.container-table[_ngcontent-%COMP%]{max-width:960px;margin:32px 0;overflow:auto;position:relative}.container-table[_ngcontent-%COMP%]   .link-list[_ngcontent-%COMP%]{padding:0;margin:0}.card.card-bg[_ngcontent-%COMP%]:after{margin-top:0}"],data:{animation:[(0,c.X$)("slideInOut",[(0,c.SB)("in",(0,c.oB)({overflow:"hidden",height:"*",opacity:"1"})),(0,c.SB)("out",(0,c.oB)({opacity:"0",overflow:"hidden",height:"0px"})),(0,c.eR)("in => out",(0,c.jt)("400ms ease-in-out")),(0,c.eR)("out => in",(0,c.jt)("400ms ease-in-out"))])]}});const Q=h.Bz.forChild([{path:"",pathMatch:"full",component:m}]);var z=i(3500);class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.ez,Q,z.m,e.u5,e.UX]})}}]);