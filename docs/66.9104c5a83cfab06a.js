"use strict";(self.webpackChunkSpazioZero=self.webpackChunkSpazioZero||[]).push([[66],{2066:(w,d,r)=>{r.r(d),r.d(d,{GestioneUtentiModule:()=>l});var u=r(6895),Z=r(6773),p=r(7340),o=r(8256),m=r(2775),_=r(7125),g=r(6741);const f=["modalFormUtente"];function U(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"app-icon",33),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.showPass=!a.showPass)}),o.qZA()}}function A(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"app-icon",34),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.showPass=!a.showPass)}),o.qZA()}}function T(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"app-icon",33),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.showPassConfirm=!a.showPassConfirm)}),o.qZA()}}function v(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"app-icon",34),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.showPassConfirm=!a.showPassConfirm)}),o.qZA()}}class s{constructor(){this.showPass=!1,this.showPassConfirm=!1,this.outClose=new o.vpe}ngOnInit(){}ngAfterViewInit(){this.handlerModal=new g.u_(this.modal?.nativeElement),this.handlerModal?.show(),this.modal?.nativeElement.addEventListener("hidden.bs.modal",()=>this.closeModal())}closeModal(){this.handlerModal?.hide(),this.outClose.emit(!0)}}function b(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"app-modal-form-utente",55),o.NdJ("outClose",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.showModalFormUtente=!1)}),o.qZA()}}s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-modal-form-utente"]],viewQuery:function(n,t){if(1&n&&o.Gf(f,5),2&n){let i;o.iGM(i=o.CRH())&&(t.modal=i.first)}},outputs:{outClose:"outClose"},decls:53,vars:6,consts:[[1,"it-example-modal"],["tabindex","-1","role","dialog","id","modalFormUtente",1,"modal","modal"],["modalFormUtente",""],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title","h5"],[1,"modal-body"],[1,"container-form-utente"],[1,"select-wrapper"],["for","tipoDocumento"],["id","tipoDocumento"],["selected","","value",""],["value","Value 1"],["value","Value 2"],["value","Value 3"],[1,"form-group"],["for","userName"],["type","text","id","userName",1,"form-control"],["name","password","id","password","formControlName","password",1,"form-control","input-password",3,"type"],["for","password"],["aria-hidden","true",1,"password-icon","bg-transparent"],["name","password-visible","size","sm","class","password-icon-visible",3,"click",4,"ngIf"],["name","password-invisible","size","sm","class","password-icon-invisible",3,"click",4,"ngIf"],["name","password","id","passwordConfirm","formControlName","password",1,"form-control","input-password",3,"type"],["for","passwordConfirm"],["for","name"],["type","text","id","name",1,"form-control"],["for","cognome"],["type","text","id","cognome",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-sm",3,"click"],["type","button",1,"btn","btn-primary","btn-sm"],["name","password-visible","size","sm",1,"password-icon-visible",3,"click"],["name","password-invisible","size","sm",1,"password-icon-invisible",3,"click"]],template:function(n,t){1&n&&(o.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),o._uU(7,"Nuovo utente"),o.qZA()(),o.TgZ(8,"div",7)(9,"form",8)(10,"div",9)(11,"label",10),o._uU(12,"Tipo ruolo"),o.qZA(),o.TgZ(13,"select",11)(14,"option",12),o._uU(15,"Scegli un'opzione"),o.qZA(),o.TgZ(16,"option",13),o._uU(17,"Administratore"),o.qZA(),o.TgZ(18,"option",14),o._uU(19,"Utente avanzato"),o.qZA(),o.TgZ(20,"option",15),o._uU(21,"Utente"),o.qZA()()(),o.TgZ(22,"div",16)(23,"label",17),o._uU(24,"Username"),o.qZA(),o._UZ(25,"input",18),o.qZA(),o.TgZ(26,"div",16),o._UZ(27,"input",19),o.TgZ(28,"label",20),o._uU(29,"Password"),o.qZA(),o.TgZ(30,"span",21),o.YNc(31,U,1,0,"app-icon",22),o.YNc(32,A,1,0,"app-icon",23),o.qZA()(),o.TgZ(33,"div",16),o._UZ(34,"input",24),o.TgZ(35,"label",25),o._uU(36,"Conferma password"),o.qZA(),o.TgZ(37,"span",21),o.YNc(38,T,1,0,"app-icon",22),o.YNc(39,v,1,0,"app-icon",23),o.qZA()(),o.TgZ(40,"div",16)(41,"label",26),o._uU(42,"Nome"),o.qZA(),o._UZ(43,"input",27),o.qZA(),o.TgZ(44,"div",16)(45,"label",28),o._uU(46,"Cognome"),o.qZA(),o._UZ(47,"input",29),o.qZA()()(),o.TgZ(48,"div",30)(49,"button",31),o.NdJ("click",function(){return t.closeModal()}),o._uU(50,"Cancellare"),o.qZA(),o.TgZ(51,"button",32),o._uU(52,"Ok"),o.qZA()()()()()()),2&n&&(o.xp6(27),o.Q6J("type",t.showPass?"text":"password"),o.xp6(4),o.Q6J("ngIf",!t.showPass),o.xp6(1),o.Q6J("ngIf",t.showPass),o.xp6(2),o.Q6J("type",t.showPassConfirm?"text":"password"),o.xp6(4),o.Q6J("ngIf",!t.showPassConfirm),o.xp6(1),o.Q6J("ngIf",t.showPassConfirm))},dependencies:[u.O5,m.U],styles:[".container-form-utente[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:24px 0}"]});class c{constructor(){this.viewFilterAdvance=!1,this.showModalFormUtente=!1}ngOnInit(){}}c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=o.Xpm({type:c,selectors:[["app-gestione-utenti"]],decls:165,vars:4,consts:[[1,"container"],[1,"container-filter"],[1,"row"],[1,"form-group","col-11","input-search"],[1,"input-group"],["for","input-group-3"],["type","text","id","input-group-3","name","input-group-3",1,"form-control"],[1,"input-group-prepend"],[1,"input-group-text"],["name","search","size","sm",1,"icon-primary"],[1,"col-1"],["type","button","tooltipPlacement","bottom",1,"btn","btn-icon",3,"itTooltip","click"],["size","sm",1,"primary-color","icon-trans",3,"name"],["type","button","itTooltip","Nuevo utente","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","person-fill-add","size","sm",1,"primary-color","icon-trans"],["name","slideInOut",1,"row"],[1,"card-wrapper","card-space"],[1,"card","card-bg"],[1,"card-body"],[1,"container-filter-advance"],[1,"select-wrapper","filter-item"],["for","tipoDocumento"],["id","tipoDocumento"],["selected","","value",""],["value","Value 1"],["value","Value 2"],["value","Value 3"],["value","Value 4"],["value","Value 5"],["for","tipoAtto"],["id","tipoAtto"],[1,"form-group","filter-item"],["for","nroAtto"],["type","number","id","nroAtto",1,"form-control"],["for","annoAtto"],["type","number","id","annoAtto",1,"form-control"],["for","parte"],["id","parte"],["for","serie"],["id","serie"],["for","luogoNascita"],["type","number","id","luogoNascita",1,"form-control"],["for","dataNacita"],["type","number","id","dataNacita",1,"form-control"],[1,"row","d-flex"],["type","button",1,"btn","btn-primary","btn-search"],[1,"container-table"],[1,"table","table-hover"],["scope","col"],[1,"d-flex"],["type","button","itTooltip","Aggiornare","tooltipPlacement","bottom",1,"btn","btn-icon",3,"click"],["name","pencil","size","sm",1,"icon-primary"],["type","button","itTooltip","Eliminare","tooltipPlacement","bottom",1,"btn","btn-icon"],["name","delete","size","sm",1,"icon-warning"],[3,"outClose",4,"ngIf"],[3,"outClose"]],template:function(n,t){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),o._uU(6,"Cerca persona"),o.qZA(),o._UZ(7,"input",6),o.TgZ(8,"div",7)(9,"div",8),o._UZ(10,"app-icon",9),o.qZA()()()(),o.TgZ(11,"div",10)(12,"button",11),o.NdJ("click",function(){return t.viewFilterAdvance=!t.viewFilterAdvance}),o._UZ(13,"app-icon",12),o.qZA(),o.TgZ(14,"button",13),o.NdJ("click",function(){return t.showModalFormUtente=!0}),o._UZ(15,"app-icon",14),o.qZA()()(),o.TgZ(16,"div",15)(17,"div",16)(18,"div",17)(19,"div",18)(20,"form",19)(21,"div",20)(22,"label",21),o._uU(23,"Tipo documento"),o.qZA(),o.TgZ(24,"select",22)(25,"option",23),o._uU(26,"Scegli un'opzione"),o.qZA(),o.TgZ(27,"option",24),o._uU(28,"Opzione 1"),o.qZA(),o.TgZ(29,"option",25),o._uU(30,"Opzione 2"),o.qZA(),o.TgZ(31,"option",26),o._uU(32,"Opzione 3"),o.qZA(),o.TgZ(33,"option",27),o._uU(34,"Opzione 4"),o.qZA(),o.TgZ(35,"option",28),o._uU(36,"Opzione 5"),o.qZA()()(),o.TgZ(37,"div",20)(38,"label",29),o._uU(39,"Tipo di atto"),o.qZA(),o.TgZ(40,"select",30)(41,"option",23),o._uU(42,"Scegli un'opzione"),o.qZA(),o.TgZ(43,"option",24),o._uU(44,"Opzione 1"),o.qZA(),o.TgZ(45,"option",25),o._uU(46,"Opzione 2"),o.qZA(),o.TgZ(47,"option",26),o._uU(48,"Opzione 3"),o.qZA(),o.TgZ(49,"option",27),o._uU(50,"Opzione 4"),o.qZA(),o.TgZ(51,"option",28),o._uU(52,"Opzione 5"),o.qZA()()(),o.TgZ(53,"div",31)(54,"label",32),o._uU(55,"Numero atto"),o.qZA(),o._UZ(56,"input",33),o.qZA(),o.TgZ(57,"div",31)(58,"label",34),o._uU(59,"Anno atto"),o.qZA(),o._UZ(60,"input",35),o.qZA(),o.TgZ(61,"div",20)(62,"label",36),o._uU(63,"Parte"),o.qZA(),o.TgZ(64,"select",37)(65,"option",23),o._uU(66,"Scegli un'opzione"),o.qZA(),o.TgZ(67,"option",24),o._uU(68,"Opzione 1"),o.qZA(),o.TgZ(69,"option",25),o._uU(70,"Opzione 2"),o.qZA(),o.TgZ(71,"option",26),o._uU(72,"Opzione 3"),o.qZA(),o.TgZ(73,"option",27),o._uU(74,"Opzione 4"),o.qZA(),o.TgZ(75,"option",28),o._uU(76,"Opzione 5"),o.qZA()()(),o.TgZ(77,"div",20)(78,"label",38),o._uU(79,"Serie"),o.qZA(),o.TgZ(80,"select",39)(81,"option",23),o._uU(82,"Scegli un'opzione"),o.qZA(),o.TgZ(83,"option",24),o._uU(84,"Opzione 1"),o.qZA(),o.TgZ(85,"option",25),o._uU(86,"Opzione 2"),o.qZA(),o.TgZ(87,"option",26),o._uU(88,"Opzione 3"),o.qZA(),o.TgZ(89,"option",27),o._uU(90,"Opzione 4"),o.qZA(),o.TgZ(91,"option",28),o._uU(92,"Opzione 5"),o.qZA()()(),o.TgZ(93,"div",31)(94,"label",40),o._uU(95,"Luogo nascita"),o.qZA(),o._UZ(96,"input",41),o.qZA(),o.TgZ(97,"div",31)(98,"label",42),o._uU(99,"Data nascita"),o.qZA(),o._UZ(100,"input",43),o.qZA()(),o.TgZ(101,"div",44)(102,"button",45),o._uU(103,"Cerca"),o.qZA()()()()()(),o.TgZ(104,"div",46)(105,"table",47)(106,"thead")(107,"tr")(108,"th",48),o._uU(109,"Nome"),o.qZA(),o.TgZ(110,"th",48),o._uU(111,"Cognome"),o.qZA(),o.TgZ(112,"th",48),o._uU(113,"Utente"),o.qZA(),o.TgZ(114,"th",48),o._uU(115,"Ruolo"),o.qZA(),o.TgZ(116,"th",48),o._uU(117,"Azioni"),o.qZA()()(),o.TgZ(118,"tbody")(119,"tr")(120,"td"),o._uU(121,"Mario"),o.qZA(),o.TgZ(122,"td"),o._uU(123,"Rossi"),o.qZA(),o.TgZ(124,"td"),o._uU(125,"mrossi"),o.qZA(),o.TgZ(126,"td"),o._uU(127,"Administratore"),o.qZA(),o.TgZ(128,"td")(129,"div",49)(130,"button",50),o.NdJ("click",function(){return t.showModalFormUtente=!0}),o._UZ(131,"app-icon",51),o.qZA(),o.TgZ(132,"button",52),o._UZ(133,"app-icon",53),o.qZA()()()(),o.TgZ(134,"tr")(135,"td"),o._uU(136,"Mario"),o.qZA(),o.TgZ(137,"td"),o._uU(138,"Rossi"),o.qZA(),o.TgZ(139,"td"),o._uU(140,"mrossi"),o.qZA(),o.TgZ(141,"td"),o._uU(142,"Administratore"),o.qZA(),o.TgZ(143,"td")(144,"div",49)(145,"button",50),o.NdJ("click",function(){return t.showModalFormUtente=!0}),o._UZ(146,"app-icon",51),o.qZA(),o.TgZ(147,"button",52),o._UZ(148,"app-icon",53),o.qZA()()()(),o.TgZ(149,"tr")(150,"td"),o._uU(151,"Mario"),o.qZA(),o.TgZ(152,"td"),o._uU(153,"Rossi"),o.qZA(),o.TgZ(154,"td"),o._uU(155,"mrossi"),o.qZA(),o.TgZ(156,"td"),o._uU(157,"Administratore"),o.qZA(),o.TgZ(158,"td")(159,"div",49)(160,"button",50),o.NdJ("click",function(){return t.showModalFormUtente=!0}),o._UZ(161,"app-icon",51),o.qZA(),o.TgZ(162,"button",52),o._UZ(163,"app-icon",53),o.qZA()()()()()()()(),o.YNc(164,b,1,0,"app-modal-form-utente",54),o.qZA()),2&n&&(o.xp6(12),o.Q6J("itTooltip",t.viewFilterAdvance?"Nascondere filtro":"Mostra filtro"),o.xp6(1),o.Q6J("name",t.viewFilterAdvance?"filter-square":"filter"),o.xp6(3),o.Q6J("@slideInOut",t.viewFilterAdvance?"in":"out"),o.xp6(148),o.Q6J("ngIf",1==t.showModalFormUtente))},dependencies:[u.O5,m.U,_.i9,s],styles:[".container-filter[_ngcontent-%COMP%]{max-width:960px}.container-filter[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{margin-bottom:2rem}.container-filter[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{box-shadow:none!important;padding:0!important}.container-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child{padding-left:calc(var(--bs-gutter-x) * .5)}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]{max-width:960px;display:grid;grid-template-columns:1fr 1fr 1fr}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]{margin:24px 24px 24px 0}.container-filter[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]{max-width:100px}.container-table[_ngcontent-%COMP%]{max-width:960px;margin:32px 0;overflow:auto}.card.card-bg[_ngcontent-%COMP%]:after{margin-top:0}"],data:{animation:[(0,p.X$)("slideInOut",[(0,p.SB)("in",(0,p.oB)({overflow:"hidden",height:"*",opacity:"1"})),(0,p.SB)("out",(0,p.oB)({opacity:"0",overflow:"hidden",height:"0px"})),(0,p.eR)("in => out",(0,p.jt)("400ms ease-in-out")),(0,p.eR)("out => in",(0,p.jt)("400ms ease-in-out"))])]}});const C=Z.Bz.forChild([{path:"",component:c}]);var h=r(3500);class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[u.ez,C,h.m]})}}]);