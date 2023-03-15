"use strict";(self.webpackChunkSpazioZero=self.webpackChunkSpazioZero||[]).push([[895],{4895:(Ot,M,c)=>{c.r(M),c.d(M,{GestioneDocumentiModule:()=>u});var l=c(6895),g=c(1214),G=c(6741),S=c(3315),t=c(8274),A=c(533),b=c(1135);class p{constructor(){this.documentoSelected$=new b.X(null),this.filterData$=new b.X(null)}get filterData(){return this.filterData$.value}}p.\u0275fac=function(o){return new(o||p)},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var C=c(2775),O=c(2925),I=c(7125),y=c(3900),U=c(7290);function N(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Oqu(e.nome),t.xp6(2),t.Oqu(e.cognome),t.xp6(2),t.hij(" ",t.xi3(7,4,e.dataNascita,"dd/MM/yyyy"),""),t.xp6(3),t.hij(" ",e.luogoNascita,"")}}class _{constructor(o,e,i){this._anagraficaService=o,this._gestDocService=e,this._documentoService=i,this.personaList=[]}ngOnInit(){this._gestDocService.documentoSelected$.subscribe(o=>{this._documentoService.documenti(0,1,o.idDocumento).pipe((0,y.w)(e=>{const i=Array.from(e.data,a=>a.idAnagrafica);return this._anagraficaService.anagraficaList(0,5,i)})).subscribe({next:e=>{this.personaList=e.data},error:e=>{console.log(e)}})})}}_.\u0275fac=function(o){return new(o||_)(t.Y36(U.u),t.Y36(p),t.Y36(A.t))},_.\u0275cmp=t.Xpm({type:_,selectors:[["gestdoc-dettaglio-anagrafiche"]],decls:18,vars:1,consts:[[1,"anagrafica-container"],["type","button",1,"btn","btn-primary","btn-icon","btn-xs"],["name","person-fill-add","size","sm"],[1,"table","table-hover"],["scope","col",1,"min-width-140"],["scope","col",1,"min-width-110"],["scope","col",1,"min-width-125"],[4,"ngFor","ngForOf"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t._UZ(2,"app-icon",2),t.TgZ(3,"span"),t._uU(4,"Aggiunge Anagrafica"),t.qZA()(),t.TgZ(5,"table",3)(6,"thead")(7,"tr")(8,"th",4),t._uU(9,"Nome"),t.qZA(),t.TgZ(10,"th",4),t._uU(11,"cognome"),t.qZA(),t.TgZ(12,"th",5),t._uU(13,"Data nascita"),t.qZA(),t.TgZ(14,"th",6),t._uU(15,"Luogo nascita"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,N,10,7,"tr",7),t.qZA()()()),2&o&&(t.xp6(17),t.Q6J("ngForOf",e.personaList))},dependencies:[l.sg,C.U,l.uU]});var P=c(5861),r=c(433),x=c(3824),q=c(9808),F=c(6853),w=c(3403),J=c(3695),Q=c(6532),Y=c(1588);const E=["uploadImg"];function z(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-document-item",14),t.NdJ("outSelect",function(a){t.CHM(e);const m=t.oxw(3);return t.KtG(m.loadFileDetail(a))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("file",e)}}function L(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-img-item",14),t.NdJ("outSelect",function(a){t.CHM(e);const m=t.oxw(3);return t.KtG(m.loadFileDetail(a))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("file",e)}}function j(n,o){if(1&n&&(t.ynx(0),t.YNc(1,z,1,1,"app-document-item",13),t.YNc(2,L,1,1,"app-img-item",13),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.valideExtensionDoc(e)),t.xp6(1),t.Q6J("ngIf",i.valideExtensionImg(e))}}function $(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17)(2,"h3",18),t._uU(3),t.qZA(),t.TgZ(4,"app-icon",19),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(3);return t.KtG(a.removeFile())}),t.qZA()(),t.TgZ(5,"div",20),t._UZ(6,"img",21),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(3);t.xp6(3),t.hij(" ",null==e.fileSelected?null:e.fileSelected.name,""),t.xp6(3),t.Q6J("src",null==e.fileSelected?null:e.fileSelected.data,t.LSH)("alt",null==e.fileSelected?null:e.fileSelected.name)}}function k(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"app-icon",30),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(5);return t.KtG(a.searchControl.setValue(""))}),t.qZA()()()}}function H(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-icon",25),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(4);return a.showSearch=!1,t.KtG(a.searchControl.setValue(""))}),t.qZA(),t._UZ(2,"input",26),t.YNc(3,k,3,0,"div",27),t.BQk()}if(2&n){const e=t.oxw(4);t.xp6(2),t.Q6J("appFocus",!0)("formControl",e.searchControl),t.xp6(1),t.Q6J("ngIf",e.searchControl.value)}}function R(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"h3",31),t._uU(1),t.qZA(),t.TgZ(2,"div")(3,"app-icon",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(4);return t.KtG(a.showSearch=!0)}),t.qZA(),t.TgZ(4,"app-icon",19),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(4);return t.KtG(a.removeFile())}),t.qZA()()}if(2&n){const e=t.oxw(4);t.xp6(1),t.hij(" ",null==e.fileSelected?null:e.fileSelected.name,"")}}function B(n,o){if(1&n&&(t.TgZ(0,"div",17),t.YNc(1,H,4,3,"ng-container",15),t.YNc(2,R,5,1,"ng-template",null,22,t.W1O),t.qZA(),t.TgZ(4,"div",23),t._UZ(5,"app-document-item-table",24),t.qZA()),2&n){const e=t.MAs(3),i=t.oxw(3);t.xp6(1),t.Q6J("ngIf",i.showSearch)("ngIfElse",e),t.xp6(4),t.Q6J("data",null==i.fileSelected?null:i.fileSelected.data)("search",i.searchValue)}}function K(n,o){if(1&n&&(t.ynx(0),t.YNc(1,$,7,3,"ng-container",15),t.YNc(2,B,6,4,"ng-template",null,16,t.W1O),t.BQk()),2&n){const e=t.MAs(3),i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.valideExtensionImg(i.fileSelected))("ngIfElse",e)}}function V(n,o){1&n&&(t.ynx(0),t.TgZ(1,"div",33),t._UZ(2,"app-icon",34),t.qZA(),t.TgZ(3,"h3",35),t._uU(4," Selezionare un'immagine o un documento per visualizzare i dettagli "),t.qZA(),t.BQk())}function X(n,o){if(1&n&&(t.TgZ(0,"div",5)(1,"ul",6),t.YNc(2,j,3,2,"ng-container",7),t.qZA(),t.TgZ(3,"div",8)(4,"div",9)(5,"div",10)(6,"div",11),t.YNc(7,K,4,2,"ng-container",12),t.YNc(8,V,5,0,"ng-container",12),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.fileList),t.xp6(5),t.Q6J("ngIf",e.fileSelected),t.xp6(1),t.Q6J("ngIf",!e.fileSelected&&e.fileList.length)}}class f{constructor(o){this._imageService=o,this.fileList=[{name:"img-prueba1.png",size:3357322,state:"SUCCESS",data:"assets/images/img-prueba1.png"},{name:"img-prueba2.png",size:3357322,state:"SUCCESS",data:"assets/images/img-prueba2.png"},{name:"img-prueba3.jpg",size:3357322,state:"SUCCESS",data:"assets/images/img-prueba3.jpg"},{name:"img-prueba4.png",size:3357322,state:"SUCCESS",data:"assets/images/img-prueba4.png"}],this.showSearch=!1,this.searchValue="",this.searchControl=new r.NI,this.fileSelected=null,this.loadFileDetail=e=>this.fileSelected=e}ngOnInit(){}valideExtensionDoc(o){let e=!1;for(const i of x.y.TYPES_EXT_SHEET)if(o.name.includes(`.${i}`)){e=!0;break}return e}valideExtensionImg(o){let e=!1;for(const i of x.y.TYPES_EXT_IMG)if(o.name.includes(`.${i}`)){e=!0;break}return e}removeFile(){const o=this.fileList.findIndex(e=>e.uuid==this.fileSelected.uuid);o<0||(this.fileList.splice(o,1),this.resetDetailFile())}resetDetailFile(){this.fileSelected=null,this.showSearch=!1}uploadImage(){var o=this;return(0,P.Z)(function*(){try{const e=o.uploadImg?.nativeElement;let i=[];for(let a=0;a<e.files.length;a++){if(!o.valideExtensionImg(e.files.item(a)))throw{msg:`L'estensione valida sono: ${x.y.TYPES_EXT_IMG.join(", ")}`};i.push((0,q.n)(o._imageService.readFile(e.files.item(a))))}i=yield Promise.all(i),o.resetDetailFile();for(let a=0;a<e.files.length;a++)o.fileList.push({name:e.files.item(a)?.name,state:"STAND_BY",size:e.files.item(a)?.size,file:e.files.item(a),data:i[a],uuid:(0,S.DO)()});console.log(o.fileList)}catch{}})()}}f.\u0275fac=function(o){return new(o||f)(t.Y36(F.A))},f.\u0275cmp=t.Xpm({type:f,selectors:[["gestdoc-dettaglio-immagini"]],viewQuery:function(o,e){if(1&o&&t.Gf(E,5),2&o){let i;t.iGM(i=t.CRH())&&(e.uploadImg=i.first)}},decls:7,vars:1,consts:[["type","file","name","uploadImg","id","uploadImg","multiple","multiple",1,"upload",3,"change"],["uploadImg",""],["for","uploadImg",1,"upload-label"],["name","upload"],["class","images-container",4,"ngIf"],[1,"images-container"],[1,"upload-file-list","upload-file-list-image","overflow-auto","col-5"],[4,"ngFor","ngForOf"],[1,"card-detail-file","col-7"],[1,"card-wrapper"],[1,"card"],[1,"card-body"],[4,"ngIf"],[3,"file","outSelect",4,"ngIf"],[3,"file","outSelect"],[4,"ngIf","ngIfElse"],["documentTemplate",""],[1,"d-flex","justify-content-between","align-items-center","m-b-16","detail-document__header"],[1,"card-title","h5"],["name","delete","size","sm","itTooltip","Cancellare",1,"icon-primary","cursor-pointer","m-l-5",3,"click"],[1,"container-img"],[1,"rounded","img-fluid",3,"src","alt"],["showHeaderDetail",""],[1,"overflow-auto","containter-table-document"],[3,"data","search"],["name","arrow-left","size","sm",1,"icon-primary","cursor-pointer",3,"click"],["type","text","id","search","name","search","placeholder","Cerca",1,"form-control",3,"appFocus","formControl"],["class","input-group-prepend cursor-pointer",4,"ngIf"],[1,"input-group-prepend","cursor-pointer"],[1,"input-group-text"],["name","close","size","sm",1,"icon-primary",3,"click"],[1,"card-title","h5","m-0"],["name","search","size","sm","itTooltip","Cercare",1,"icon-primary","cursor-pointer",3,"click"],[1,"top-icon","d-flex","justify-content-center"],["name","files"],[1,"card-title","h5","no_toc","text-center"]],template:function(o,e){1&o&&(t.TgZ(0,"input",0,1),t.NdJ("change",function(){return e.uploadImage()}),t.qZA(),t.TgZ(2,"label",2),t._UZ(3,"app-icon",3),t.TgZ(4,"span"),t._uU(5,"Upload Immagini"),t.qZA()(),t.YNc(6,X,9,3,"div",4)),2&o&&(t.xp6(6),t.Q6J("ngIf",e.fileList.length))},dependencies:[l.sg,l.O5,C.U,w._,J.t,Q._,I.i9,Y.R,r.Fj,r.JJ,r.oH],styles:[".upload-label[_ngcontent-%COMP%]{margin-bottom:16px}.images-container[_ngcontent-%COMP%]{display:flex}.images-container[_ngcontent-%COMP%]   .upload-file-list[_ngcontent-%COMP%]{max-width:300px;margin-right:16px}.images-container[_ngcontent-%COMP%]   .card-detail-file[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%]{max-width:518px;max-height:300px;overflow:auto}.images-container[_ngcontent-%COMP%]   .card-detail-file[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0}"]});class h{constructor(){}ngOnInit(){}}h.\u0275fac=function(o){return new(o||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["gestdoc-dettaglio-informazioni"]],decls:41,vars:0,consts:[[1,"info-container"],[1,"select-wrapper"],["for","tipoDocumentoId"],["id","tipoDocumentoId"],["selected","","value",""],["for","tipoAttoId"],["id","tipoAttoId"],["for","parteId"],["id","parteId"],["for","serieId"],["id","serieId"],[1,"form-group"],["for","comune"],["type","text","id","comune",1,"form-control"],["for","dataAtto",1,"active"],["type","date","id","dataAtto",1,"form-control"],["for","annoAtto"],["type","number","id","annoAtto",1,"form-control"],["for","nroAtto"],["type","number","id","nroAtto",1,"form-control"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Tipo documento"),t.qZA(),t.TgZ(4,"select",3)(5,"option",4),t._uU(6,"Scegli un'opzione"),t.qZA()()(),t.TgZ(7,"div",1)(8,"label",5),t._uU(9,"Tipo atto"),t.qZA(),t.TgZ(10,"select",6)(11,"option",4),t._uU(12,"Scegli un'opzione"),t.qZA()()(),t.TgZ(13,"div",1)(14,"label",7),t._uU(15,"Parte"),t.qZA(),t.TgZ(16,"select",8)(17,"option",4),t._uU(18,"Scegli un'opzione"),t.qZA()()(),t.TgZ(19,"div",1)(20,"label",9),t._uU(21,"Serie"),t.qZA(),t.TgZ(22,"select",10)(23,"option",4),t._uU(24,"Scegli un'opzione"),t.qZA()()(),t.TgZ(25,"div",11)(26,"label",12),t._uU(27,"Comune"),t.qZA(),t._UZ(28,"input",13),t.qZA(),t.TgZ(29,"div",11)(30,"label",14),t._uU(31,"Data atto"),t.qZA(),t._UZ(32,"input",15),t.qZA(),t.TgZ(33,"div",11)(34,"label",16),t._uU(35,"Anno atto"),t.qZA(),t._UZ(36,"input",17),t.qZA(),t.TgZ(37,"div",11)(38,"label",18),t._uU(39,"Numero atto"),t.qZA(),t._UZ(40,"input",19),t.qZA()())},dependencies:[r.YN,r.Kr],styles:[".info-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:24px}.info-container[_ngcontent-%COMP%]   .select-wrapper[_ngcontent-%COMP%]{margin:0 16px 32px 0;max-width:180px}.info-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-right:16px;max-width:180px}"]});const W=["accordionDetailDoc"];function tt(n,o){1&n&&t._UZ(0,"gestdoc-dettaglio-anagrafiche")}var d=(()=>{return(n=d||(d={}))[n.INFORMAZIONI=0]="INFORMAZIONI",n[n.IMMAGINI=1]="IMMAGINI",n[n.ANAGRAFICHE=2]="ANAGRAFICHE",d;var n})();class v{constructor(o,e,i,a){this.location=o,this._documentoService=e,this._activatedRoute=i,this._gestDocService=a,this.collapseList=[],this.ECollapseDettaglio=d,this.documento=null,this.loadDataInit=!0,this.OPEN_ACCORDION={INFORMAZIONI:!1,IMMAGINI:!1,ANAGRAFICHE:!1}}ngOnInit(){this._activatedRoute.params.subscribe(({id:o})=>{o&&(0,S.hj)(String(o||""))&&this.loadDettaglio(Number(o))})}ngAfterViewInit(){this.handlerAccordionDetailDoc=new G.UQ(this.accordionDetailDoc?.nativeElement);let o=[].slice.call(document.querySelectorAll(".collapse"));this.collapseList=o.map(function(e){return new G.UO(e,{toggle:!1,parent:"accordionDetailDoc"})});for(const e in d){if(isNaN(e))continue;let i=document.getElementById(`collapse${parseInt(e)+1}`),a=document.getElementById(`btnCollapse${parseInt(e)+1}`);i?.addEventListener("hide.bs.collapse",()=>{this.OPEN_ACCORDION[d[e]]=!1,a?.classList.remove("collapsed")}),i?.addEventListener("show.bs.collapse",()=>{a?.classList.add("collapsed"),this.OPEN_ACCORDION[d[e]]=!0})}}returnPrev(){this.location.back()}toggleAccordion(o){this.collapseList[o].toggle()}loadDettaglio(o){this._documentoService.documenti(0,1,o).subscribe({next:e=>{console.log(e),this._gestDocService.documentoSelected$.next({...this._gestDocService.documentoSelected$.value,idDocumento:o}),this.documento=e.data[0],this.loadDataInit=!1},error:e=>{console.log(e),this.loadDataInit=!1}})}}v.\u0275fac=function(o){return new(o||v)(t.Y36(l.Ye),t.Y36(A.t),t.Y36(g.gz),t.Y36(p))},v.\u0275cmp=t.Xpm({type:v,selectors:[["gestdoc-dettaglio-documento"]],viewQuery:function(o,e){if(1&o&&t.Gf(W,5),2&o){let i;t.iGM(i=t.CRH())&&(e.accordionDetailDoc=i.first)}},decls:66,vars:14,consts:[[1,"documento"],[1,"documento__detail"],[1,"documento__detail-header"],["name","arrow-left","itTooltip","Ritornare",1,"icon-primary","cursor-pointer",3,"click"],[1,"divider"],[1,"documento__accordions"],[1,"container"],["id","accordionDetailDoc",1,"accordion"],["accordionDetailDoc",""],[1,"accordion-item"],["id","heading1",1,"accordion-header"],["id","btnCollapse1","type","button",1,"accordion-button",3,"click"],["id","collapse1","data-bs-parent","#accordionDetailDoc","role","region","aria-labelledby","heading1",1,"accordion-collapse","collapse"],[1,"accordion-body"],["id","heading2",1,"accordion-header"],["id","btnCollapse2","type","button",1,"accordion-button",3,"click"],["id","collapse2","data-bs-parent","#accordionDetailDoc","role","region","aria-labelledby","heading2",1,"accordion-collapse","collapse"],["id","heading3",1,"accordion-header"],["id","btnCollapse3","type","button",1,"accordion-button",3,"click"],["id","collapse3","data-bs-parent","#accordionDetailDoc","role","region","aria-labelledby","heading3",1,"accordion-collapse","collapse"],[4,"ngIf"]],template:function(o,e){1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-spinner"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"app-icon",3),t.NdJ("click",function(){return e.returnPrev()}),t.qZA(),t.TgZ(6,"h4"),t._uU(7,"Dettaglio documento"),t.qZA()(),t.TgZ(8,"ul")(9,"li")(10,"strong"),t._uU(11,"Tipo documento"),t.qZA(),t.TgZ(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"li")(15,"strong"),t._uU(16,"Comune"),t.qZA(),t.TgZ(17,"span"),t._uU(18),t.qZA()(),t.TgZ(19,"li")(20,"strong"),t._uU(21,"Data documento"),t.qZA(),t.TgZ(22,"span"),t._uU(23),t.ALo(24,"date"),t.qZA()(),t.TgZ(25,"li")(26,"strong"),t._uU(27,"Anno documento"),t.qZA(),t.TgZ(28,"span"),t._uU(29),t.qZA()(),t.TgZ(30,"li")(31,"strong"),t._uU(32,"Parte"),t.qZA(),t.TgZ(33,"span"),t._uU(34),t.qZA()(),t.TgZ(35,"li")(36,"strong"),t._uU(37,"Serie"),t.qZA(),t.TgZ(38,"span"),t._uU(39),t.qZA()()()(),t._UZ(40,"div",4),t.TgZ(41,"div",5)(42,"div",6)(43,"div",7,8)(45,"div",9)(46,"h2",10)(47,"button",11),t.NdJ("click",function(){return e.toggleAccordion(e.ECollapseDettaglio.INFORMAZIONI)}),t._uU(48," Informazioni "),t.qZA()(),t.TgZ(49,"div",12)(50,"div",13),t._UZ(51,"gestdoc-dettaglio-informazioni"),t.qZA()()(),t.TgZ(52,"div",9)(53,"h2",14)(54,"button",15),t.NdJ("click",function(){return e.toggleAccordion(e.ECollapseDettaglio.IMMAGINI)}),t._uU(55," Immagini "),t.qZA()(),t.TgZ(56,"div",16)(57,"div",13),t._UZ(58,"gestdoc-dettaglio-immagini"),t.qZA()()(),t.TgZ(59,"div",9)(60,"h2",17)(61,"button",18),t.NdJ("click",function(){return e.toggleAccordion(e.ECollapseDettaglio.ANAGRAFICHE)}),t._uU(62," Anagrafiche "),t.qZA()(),t.TgZ(63,"div",19)(64,"div",13),t.YNc(65,tt,1,0,"gestdoc-dettaglio-anagrafiche",20),t.qZA()()()()()()()),2&o&&(t.ekj("d-none",!e.loadDataInit),t.xp6(2),t.ekj("d-none",e.loadDataInit),t.xp6(11),t.Oqu(null==e.documento?null:e.documento.tipoDocumento),t.xp6(5),t.Oqu(null==e.documento?null:e.documento.comune),t.xp6(5),t.Oqu(t.xi3(24,11,null==e.documento?null:e.documento.dataAtto,"dd/MM/yyyy")),t.xp6(6),t.Oqu(null==e.documento?null:e.documento.annoAtto),t.xp6(5),t.Oqu(null==e.documento?null:e.documento.parte),t.xp6(5),t.Oqu(null==e.documento?null:e.documento.serie),t.xp6(26),t.Q6J("ngIf",!e.loadDataInit))},dependencies:[l.O5,C.U,O.O,I.i9,_,f,h,l.uU],styles:[".documento[_ngcontent-%COMP%]{display:flex;width:100%}.documento[_ngcontent-%COMP%]   .documento__detail[_ngcontent-%COMP%]{max-width:273px;flex:1}.documento[_ngcontent-%COMP%]   .documento__detail[_ngcontent-%COMP%]   .documento__detail-header[_ngcontent-%COMP%]{display:flex}.documento[_ngcontent-%COMP%]   .documento__detail[_ngcontent-%COMP%]   .documento__detail-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:22px}.documento[_ngcontent-%COMP%]   .documento__detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}.documento[_ngcontent-%COMP%]   .documento__detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.documento[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{border:1px solid var(--bs-primary);border-radius:50px;margin:16px}.documento[_ngcontent-%COMP%]   .documento__accordions[_ngcontent-%COMP%]{flex:1}.documento[_ngcontent-%COMP%]   .documento__accordions[_ngcontent-%COMP%]   .anagrafica-container[_ngcontent-%COMP%]   .btn.btn-xs[_ngcontent-%COMP%]{margin-bottom:16px}.documento[_ngcontent-%COMP%]   .documento__accordions[_ngcontent-%COMP%]   .anagrafica-container[_ngcontent-%COMP%]   .btn.btn-xs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}"]});var s=c(7340),et=c(9300),ot=c(8372),nt=c(7188),it=c(585),at=c(6652),ct=c(9799),rt=c(6279),lt=c(3556),st=c(3499),pt=c(6585),dt=c(2134);function mt(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-icon",38),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.searchControl.setValue(""))}),t.qZA(),t.BQk()}}function ut(n,o){1&n&&t._UZ(0,"app-icon",39)}function gt(n,o){if(1&n&&(t.TgZ(0,"option",40),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.tipoDocumentoId),t.xp6(1),t.Oqu(e.tipoDocumentoDesc)}}function _t(n,o){if(1&n&&(t.TgZ(0,"option",40),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.tipoAttoId),t.xp6(1),t.Oqu(e.tipoAttoDesc)}}function ft(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",19)(1,"label",41),t._uU(2,"Tipo di atto"),t.qZA(),t.TgZ(3,"select",42),t.NdJ("change",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.changeTipoAtto())}),t.TgZ(4,"option",22),t._uU(5,"Scegli un'opzione"),t.qZA(),t.YNc(6,_t,2,2,"option",23),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.tipiAtto)}}function ht(n,o){if(1&n&&(t.TgZ(0,"option",40),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.tipoParteId),t.xp6(1),t.Oqu(e.tipoParteDesc)}}function vt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",19)(1,"label",43),t._uU(2,"Parte"),t.qZA(),t.TgZ(3,"select",44),t.NdJ("change",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.changeParte())}),t.TgZ(4,"option",22),t._uU(5,"Scegli un'opzione"),t.qZA(),t.YNc(6,ht,2,2,"option",23),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.tipiParte)}}function Zt(n,o){if(1&n&&(t.TgZ(0,"option",40),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.Q6J("value",e.tipoSerieId),t.xp6(1),t.Oqu(e.tipoSerieDesc)}}function Dt(n,o){if(1&n&&(t.TgZ(0,"div",19)(1,"label",45),t._uU(2,"Serie"),t.qZA(),t.TgZ(3,"select",46)(4,"option",22),t._uU(5,"Scegli un'opzione"),t.qZA(),t.YNc(6,Zt,2,2,"option",23),t.qZA()()),2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.tipiSerie)}}function Ct(n,o){1&n&&t._UZ(0,"app-curtain")}function At(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"app-icon",53),t.NdJ("click",function(){const m=t.CHM(e).$implicit,T=t.oxw(2);return t.KtG(T.redirectDetail(m))}),t.qZA()()()}if(2&n){const e=o.$implicit;t.xp6(2),t.hij(" ",e.nomeDocumento," "),t.xp6(2),t.hij(" ",t.xi3(5,6,e.dataAtto,"dd/MM/yyyy"),""),t.xp6(3),t.hij(" ",e.annoAtto," "),t.xp6(2),t.hij(" ",e.nomeAnagrafica+" "+e.cognomeAnagrafica," "),t.xp6(2),t.hij(" ",t.xi3(12,9,e.dataNascitaAnagrafica,"dd/MM/yyyy"),""),t.xp6(3),t.hij(" ",e.luogoNascitaAnagrafica,"")}}function It(n,o){if(1&n&&(t.TgZ(0,"div",47),t.YNc(1,Ct,1,0,"app-curtain",36),t.TgZ(2,"table",48)(3,"thead")(4,"tr")(5,"th",49),t._uU(6,"Documento"),t.qZA(),t.TgZ(7,"th",50),t._uU(8,"Data atto"),t.qZA(),t.TgZ(9,"th",50),t._uU(10,"Anno atto"),t.qZA(),t.TgZ(11,"th",50),t._uU(12,"Nome Cognome"),t.qZA(),t.TgZ(13,"th",50),t._uU(14,"Luogo Nascita"),t.qZA(),t.TgZ(15,"th",50),t._uU(16,"Data Nascita"),t.qZA(),t._UZ(17,"th",51),t.qZA()(),t.TgZ(18,"tbody"),t.YNc(19,At,17,12,"tr",52),t.qZA()()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.serviceSearchForPaginator),t.xp6(18),t.Q6J("ngForOf",e.documentoList)}}function xt(n,o){1&n&&(t.TgZ(0,"div")(1,"p",54),t._uU(2,"Per iniziare \xe8 necessario filtrare "),t.qZA()())}function Tt(n,o){1&n&&t._UZ(0,"app-spinner")}function Mt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-pagination",55),t.NdJ("paginationChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.paginationChange())}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("currentPagination",e.paginator)}}class Z{constructor(o,e,i,a,m,T){this._fb=o,this._tipoDocumentoService=e,this._documentoService=i,this._router=a,this._activatedRoute=m,this._gestDocService=T,this.viewFilterAdvance=!1,this.showModalCarouselDoc=!1,this.tipiDocumento=[],this.tipiAtto=[],this.tipiParte=[],this.tipiSerie=[],this.documentoList=[],this.serviceSearch=!1,this.serviceSearchForPaginator=!1,this.total=0,this.paginator=new it.t({pageSize:10}),this.personSelected=null,this.documentSelected=null,this.spinner={tipoDocumento:!1},this.formGroup=this._buildForm()}ngOnInit(){this.searchControl.valueChanges.pipe((0,et.h)(o=>!1===this.viewFilterAdvance&&(o||"").length>3),(0,ot.b)(500)).subscribe(()=>{this.filteredSearch()}),this.loadTipoDocumento(),this._gestDocService.filterData&&this.setValuesForm(this._gestDocService.filterData)}get searchControl(){return this.formGroup.controls.seach}get tipoDocumentoIdControl(){return this.formGroup.controls.tipoDocumentoId}get nroAttoControl(){return this.formGroup.controls.nroAtto}get annoAttoControl(){return this.formGroup.controls.annoAtto}get dataDocumentoControl(){return this.formGroup.controls.dataDocumento}_buildForm(){return this._fb.group({seach:[""],tipoDocumentoId:[""],nroAtto:[null],annoAtto:[null,[r.kI.maxLength(4),at.q.isNumeric()]],dataDocumento:[""]})}filteredSearch(){this.serviceSearch||(this.serviceSearch=!0,this._documentoService.documenti().subscribe({next:o=>{this.paginator.currentPage=1,this.paginator.totalPages=parseInt(String(o.total/this.paginator.pageSize)),this.documentoList=o.data,this.total=o.total,this.serviceSearch=!1},error:o=>{this.serviceSearch=!1}}))}loadTipoDocumento(){this.spinner.tipoDocumento=!0,this.tipoDocumentoIdControl.disable(),this._tipoDocumentoService.tipiDocumento().subscribe({next:o=>{this.spinner.tipoDocumento=!1,this.tipiDocumento=o,this.tipoDocumentoIdControl.enable()},error:o=>{this.spinner.tipoDocumento=!0,this.tipoDocumentoIdControl.enable()}})}changeTipoDocumento(){this.formGroup.removeControl("tipoAttoId"),this.formGroup.removeControl("parteId"),this.formGroup.removeControl("serieId"),(!this.tipoDocumentoIdControl.value||"null"==this.tipoDocumentoIdControl.value)&&this.tipoDocumentoIdControl.setValue(""),!this.tipoDocumentoIdControl.invalid&&this._tipoDocumentoService.tipiAtto(this.tipoDocumentoIdControl.value).subscribe({next:o=>{o.length&&(this.tipiAtto=o,this.formGroup.addControl("tipoAttoId",new r.NI("")))},error:o=>{}})}changeTipoAtto(){this.formGroup.removeControl("parteId"),this.formGroup.removeControl("serieId");const o=this.formGroup.controls.tipoAttoId.value;(!o||"null"==o)&&this.formGroup.controls.tipoAttoId.setValue(""),!this.formGroup.controls.tipoAttoId.invalid&&(0,nt.$)(this._tipoDocumentoService.tipiParte(Number(o)),this._tipoDocumentoService.tipoSerie(Number(o),this.formGroup.get("parteId")?.value)).subscribe({next:([e,i])=>{e.length&&(this.tipiParte=e,this.formGroup.addControl("parteId",new r.NI(""))),i.length&&(this.tipiSerie=i,this.formGroup.addControl("SerieId",new r.NI("")))}})}changeParte(){this.formGroup.removeControl("serieId");const o=this.formGroup.controls.parteId.value;(!o||"null"==o)&&this.formGroup.controls.parteId.setValue(""),!this.formGroup.controls.parteId.invalid&&this._tipoDocumentoService.tipoSerie(Number(this.formGroup.controls.tipoAttoId.value),Number(o)).subscribe({next:e=>{this.tipiSerie=e,this.tipiSerie.length&&this.formGroup.addControl("serieId",new r.NI(""))}})}paginationChange(){if(this.serviceSearchForPaginator)return;this.serviceSearchForPaginator=!0;const o=this.paginator.currentPage*this.paginator.pageSize;this._documentoService.documenti(o-this.paginator.pageSize,o).subscribe({next:i=>{this.documentoList=i.data,this.serviceSearchForPaginator=!1},error:i=>{this.serviceSearchForPaginator=!1}})}redirectDetail(o){this._gestDocService.filterData$.next(this.formGroup.value),this._gestDocService.documentoSelected$.next(o),this._router.navigate(["dettaglio-documento",o.idDocumento],{relativeTo:this._activatedRoute})}setValuesForm(o){Object.keys(o).map(i=>{this.formGroup.controls[i].setValue(o[i])})}}Z.\u0275fac=function(o){return new(o||Z)(t.Y36(r.qu),t.Y36(ct.d),t.Y36(A.t),t.Y36(g.F0),t.Y36(g.gz),t.Y36(p))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["gestdoc-main-documenti"]],decls:51,vars:20,consts:[[1,"container"],[1,"container-filter"],[1,"row"],[1,"form-group","col-11","input-search"],[1,"input-group"],["for","search"],["type","text","id","search","name","search",1,"form-control",3,"formControl"],[1,"input-group-prepend"],[1,"input-group-text"],[4,"ngIf","ngIfElse"],["searchIcon",""],[1,"col-1","text-end"],["type","button","tooltipPlacement","bottom",1,"btn","btn-icon",3,"itTooltip","click"],["size","sm",1,"primary-color","icon-trans",3,"name"],["name","slideInOut",1,"row"],[1,"card-wrapper","card-filter"],[1,"card","card-bg"],[1,"card-body"],[1,"container-filter-advance",3,"formGroup"],[1,"select-wrapper","filter-item"],["for","tipoDocumentoId"],["id","tipoDocumentoId","formControlName","tipoDocumentoId",3,"change"],["selected","","value",""],[3,"value",4,"ngFor","ngForOf"],[3,"start","typeInput"],["class","select-wrapper filter-item",4,"ngIf"],[1,"form-group","filter-item"],["for","nroAtto"],["type","number","id","nroAtto","formControlName","nroAtto",1,"form-control"],["for","annoAtto"],["type","text","onlyNumber","","onNumber","","id","annoAtto","formControlName","annoAtto","maxlength","4",1,"form-control"],["for","dataDocumento",1,"active"],["type","date","id","dataDocumento","formControlName","dataDocumento",1,"form-control"],[1,"row","d-flex"],["type","button",1,"btn","btn-primary","btn-search",3,"disabled","click"],["class","container-table",4,"ngIf"],[4,"ngIf"],[3,"currentPagination","paginationChange",4,"ngIf"],["name","close","size","sm",1,"icon-primary","cursor-pointer",3,"click"],["name","search","size","sm",1,"icon-primary"],[3,"value"],["for","tipoAttoId"],["id","tipoAttoId","formControlName","tipoAttoId",3,"change"],["for","parteId"],["id","parteId","formControlName","parteId",3,"change"],["for","serieId"],["id","serieId","formControlName","serieId"],[1,"container-table"],[1,"table","table-hover"],["scope","col",1,"min-width-140"],["scope","col",1,"min-width-125"],["scope","col"],[4,"ngFor","ngForOf"],["name","arrow-right","itTooltip","Visualizzare dettaglio",1,"icon-primary","cursor-pointer",3,"click"],[1,"text-center"],[3,"currentPagination","paginationChange"]],template:function(o,e){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label",5),t._uU(6,"Cerca persona"),t.qZA(),t._UZ(7,"input",6),t.TgZ(8,"div",7)(9,"div",8),t.YNc(10,mt,2,0,"ng-container",9),t.YNc(11,ut,1,0,"ng-template",null,10,t.W1O),t.qZA()()()(),t.TgZ(13,"div",11)(14,"button",12),t.NdJ("click",function(){return e.viewFilterAdvance=!e.viewFilterAdvance}),t._UZ(15,"app-icon",13),t.qZA()()(),t.TgZ(16,"div",14)(17,"div",15)(18,"div",16)(19,"div",17)(20,"form",18)(21,"div",19)(22,"label",20),t._uU(23,"Tipo documento"),t.qZA(),t.TgZ(24,"select",21),t.NdJ("change",function(){return e.changeTipoDocumento()}),t.TgZ(25,"option",22),t._uU(26,"Scegli un'opzione"),t.qZA(),t.YNc(27,gt,2,2,"option",23),t.qZA(),t._UZ(28,"app-spinner-input-form",24),t.qZA(),t.YNc(29,ft,7,1,"div",25),t.YNc(30,vt,7,1,"div",25),t.YNc(31,Dt,7,1,"div",25),t.TgZ(32,"div",26)(33,"label",27),t._uU(34,"Numero atto"),t.qZA(),t._UZ(35,"input",28),t.qZA(),t.TgZ(36,"div",26)(37,"label",29),t._uU(38,"Anno atto"),t.qZA(),t._UZ(39,"input",30),t.qZA(),t.TgZ(40,"div",26)(41,"label",31),t._uU(42,"Data documento"),t.qZA(),t._UZ(43,"input",32),t.qZA()(),t.TgZ(44,"div",33)(45,"button",34),t.NdJ("click",function(){return e.filteredSearch()}),t._uU(46,"Cerca"),t.qZA()()()()()(),t.YNc(47,It,20,2,"div",35),t.YNc(48,xt,3,0,"div",36),t.YNc(49,Tt,1,0,"app-spinner",36),t.YNc(50,Mt,1,1,"app-pagination",37),t.qZA()()),2&o){const i=t.MAs(12);t.xp6(5),t.ekj("active",e.searchControl.value),t.xp6(2),t.Q6J("formControl",e.searchControl),t.xp6(3),t.Q6J("ngIf",e.searchControl.value)("ngIfElse",i),t.xp6(4),t.Q6J("itTooltip",e.viewFilterAdvance?"Nascondere filtro":"Mostra filtro"),t.xp6(1),t.Q6J("name",e.viewFilterAdvance?"filter-square":"filter"),t.xp6(1),t.Q6J("@slideInOut",e.viewFilterAdvance?"in":"out"),t.xp6(4),t.Q6J("formGroup",e.formGroup),t.xp6(7),t.Q6J("ngForOf",e.tipiDocumento),t.xp6(1),t.Q6J("start",e.spinner.tipoDocumento)("typeInput","select"),t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.tipoAttoId),t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.parteId),t.xp6(1),t.Q6J("ngIf",e.formGroup.controls.serieId),t.xp6(14),t.Q6J("disabled",e.formGroup.invalid||e.serviceSearch),t.xp6(2),t.Q6J("ngIf",!e.serviceSearch),t.xp6(1),t.Q6J("ngIf",!e.documentoList.length&&!e.serviceSearch),t.xp6(1),t.Q6J("ngIf",e.serviceSearch),t.xp6(1),t.Q6J("ngIf",e.documentoList.length&&!e.serviceSearch)}},dependencies:[l.sg,l.O5,C.U,rt.F,lt.Q,O.O,st.G,I.i9,pt.O,dt.p,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.nD,r.oH,r.sg,r.u,l.uU],styles:[".container-filter[_ngcontent-%COMP%]{max-width:960px}.container-filter[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{margin-bottom:2rem}.container-filter[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{box-shadow:none!important;padding:0!important;display:flex;justify-content:baseline;align-items:baseline;max-height:32px}.container-filter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:last-child{padding-left:calc(var(--bs-gutter-x) * .5)}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]{max-width:960px;display:grid;grid-template-columns:1fr 1fr 1fr}.container-filter[_ngcontent-%COMP%]   .container-filter-advance[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]{margin:24px 24px 24px 0}.container-filter[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%]{max-width:100px}.container-filter[_ngcontent-%COMP%]   .card-filter[_ngcontent-%COMP%]{padding:16px}.container-table[_ngcontent-%COMP%]{max-width:960px;margin:32px 0;overflow:auto;position:relative}.container-table[_ngcontent-%COMP%]   .link-list[_ngcontent-%COMP%]{padding:0;margin:0}.card.card-bg[_ngcontent-%COMP%]:after{margin-top:0}"],data:{animation:[(0,s.X$)("slideInOut",[(0,s.SB)("in",(0,s.oB)({overflow:"hidden",height:"*",opacity:"1"})),(0,s.SB)("out",(0,s.oB)({opacity:"0",overflow:"hidden",height:"0px"})),(0,s.eR)("in => out",(0,s.jt)("400ms ease-in-out")),(0,s.eR)("out => in",(0,s.jt)("400ms ease-in-out"))])]}});class D{constructor(){document.title="SpazioZero | Gest. Documenti"}ngOnInit(){}}D.\u0275fac=function(o){return new(o||D)},D.\u0275cmp=t.Xpm({type:D,selectors:[["app-gestione-documenti"]],decls:1,vars:0,template:function(o,e){1&o&&t._UZ(0,"router-outlet")},dependencies:[g.lC]});const St=g.Bz.forChild([{path:"",component:D,children:[{path:"",pathMatch:"prefix",component:Z},{path:"dettaglio-documento/:id",pathMatch:"prefix",component:v}]}]);var bt=c(3500);class u{}u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[l.ez,St,bt.m,r.u5,r.UX]})}}]);