"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[803],{8803:(O,d,a)=>{a.r(d),a.d(d,{default:()=>P});var r=a(4341),l=a(34),g=a(177),t=a(4438),u=a(5498);const p=()=>["/login"];function h(e,s){if(1&e&&(t.j41(0,"div",42),t.EFF(1),t.k0s()),2&e){const o=t.XpG();t.R7$(),t.SpI(" ",o.errorMessage," ")}}function f(e,s){1&e&&(t.j41(0,"div",43),t.EFF(1," First name is required. "),t.k0s())}function _(e,s){1&e&&(t.j41(0,"div",43),t.EFF(1," Last name is required. "),t.k0s())}function v(e,s){1&e&&(t.j41(0,"div",43),t.EFF(1," Please enter a valid email address. "),t.k0s())}function C(e,s){1&e&&(t.j41(0,"div",43),t.EFF(1," Please enter a valid 10-digit mobile number. "),t.k0s())}function b(e,s){1&e&&(t.j41(0,"div",43),t.EFF(1," Password must be at least 6 characters long. "),t.k0s())}function F(e,s){if(1&e&&(t.j41(0,"div",44)(1,"div",45)(2,"button",46),t.nrm(3,"img",47),t.j41(4,"span",48),t.EFF(5),t.k0s()()()()),2&e){const o=s.$implicit;t.R7$(3),t.Mz_("alt","",o.name," img"),t.Y8G("src",o.image,t.B4B),t.R7$(2),t.JRh(o.name)}}let P=(()=>{class e{constructor(o,i,n){this.formBuilder=o,this.router=i,this.authService=n,this.errorMessage="",this.SignUpOptions=[{name:"Google",image:"assets/images/google.png"},{name:"Facebook",image:"assets/images/facebook.png"},{name:"Twitter",image:"assets/images/twitter.png"}],this.registerForm=this.formBuilder.group({firstName:["",r.k0.required],lastName:["",r.k0.required],email:["",[r.k0.required,r.k0.email]],mobile:["",[r.k0.required,r.k0.pattern("[0-9]{10}")]],password:["",[r.k0.required,r.k0.minLength(6)]]})}ngOnInit(){}onSubmit(){if(this.registerForm.valid){const{firstName:o,lastName:i,email:n,mobile:c,password:M}=this.registerForm.value;this.authService.register({firstName:o,lastName:i,email:n,mobile:c,password:M}).subscribe(m=>{console.log("Registration successful",m),this.router.navigate(["/login"])},m=>{this.errorMessage=m.error?.message||"Registration failed. Please try again.",console.error("Registration error",m)})}else this.errorMessage="Please fill in all required fields correctly."}static{this.\u0275fac=function(i){return new(i||e)(t.rXU(r.ok),t.rXU(l.Ix),t.rXU(u.u))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-register"]],standalone:!0,features:[t.aNF],decls:76,vars:11,consts:[[1,"auth-main"],[1,"auth-wrapper","v3"],[1,"auth-form"],[1,"auth-header"],["href","javascript:"],["src","assets/images/logo-dark.svg","alt","logo img"],[1,"card","my-5"],[1,"form-group",3,"ngSubmit","formGroup"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-end","mb-4"],[1,"mb-0"],[1,"link-primary",3,"routerLink"],["class","alert alert-danger",4,"ngIf"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","firstName"],["type","text","id","firstName","formControlName","firstName","placeholder","First Name",1,"form-control"],["class","text-danger",4,"ngIf"],["for","lastName"],["type","text","id","lastName","formControlName","lastName","placeholder","Last Name",1,"form-control"],["for","emailAddress"],["type","email","id","emailAddress","formControlName","email","placeholder","Email Address",1,"form-control"],["for","mobile"],["type","number","id","mobile","formControlName","mobile","placeholder","Mobile",1,"form-control"],["for","password"],["type","password","id","password","formControlName","password","placeholder","Password",1,"form-control"],[1,"mt-4","text-sm","text-muted"],["href","javascript:",1,"text-primary"],[1,"d-grid","mt-3"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"separator","mt-3"],["class","col-4",4,"ngFor","ngForOf"],[1,"auth-footer","row"],[1,"col","my-1"],[1,"m-0"],["href","https://codedthemes.com/","target","_blank"],[1,"col-auto","my-1"],[1,"list-inline","footer-link","mb-0"],[1,"list-inline-item"],["href","https://codedthemes.com/privacy-policy/","target","_blank"],["href","https://codedthemes.support-hub.io/","target","_blank"],[1,"alert","alert-danger"],[1,"text-danger"],[1,"col-4"],[1,"d-grid"],["type","button",1,"btn","mt-2","btn-light-primary","bg-light","text-muted"],[3,"src","alt"],[1,"d-none","d-sm-inline-block"]],template:function(i,n){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t.nrm(5,"img",5),t.k0s()(),t.j41(6,"div",6)(7,"form",7),t.bIt("ngSubmit",function(){return n.onSubmit()}),t.j41(8,"div",8)(9,"div",9)(10,"h3",10)(11,"b"),t.EFF(12,"Sign up"),t.k0s()(),t.j41(13,"a",11),t.EFF(14,"Already have an account?"),t.k0s()(),t.DNE(15,h,2,1,"div",12),t.j41(16,"div",13)(17,"div",14)(18,"div",15)(19,"label",16),t.EFF(20,"First Name*"),t.k0s(),t.nrm(21,"input",17),t.DNE(22,f,2,0,"div",18),t.k0s()(),t.j41(23,"div",14)(24,"div",15)(25,"label",19),t.EFF(26,"Last Name*"),t.k0s(),t.nrm(27,"input",20),t.DNE(28,_,2,0,"div",18),t.k0s()()(),t.j41(29,"div",15)(30,"label",21),t.EFF(31,"Email Address*"),t.k0s(),t.nrm(32,"input",22),t.DNE(33,v,2,0,"div",18),t.k0s(),t.j41(34,"div",15)(35,"label",23),t.EFF(36,"Mobile"),t.k0s(),t.nrm(37,"input",24),t.DNE(38,C,2,0,"div",18),t.k0s(),t.j41(39,"div",15)(40,"label",25),t.EFF(41,"Password"),t.k0s(),t.nrm(42,"input",26),t.DNE(43,b,2,0,"div",18),t.k0s(),t.j41(44,"p",27),t.EFF(45," By Signing up, you agree to our "),t.j41(46,"a",28),t.EFF(47,"Terms of Service"),t.k0s(),t.EFF(48," and "),t.j41(49,"a",28),t.EFF(50,"Privacy Policy"),t.k0s()(),t.j41(51,"div",29)(52,"button",30),t.EFF(53,"Create Account"),t.k0s()(),t.j41(54,"div",31)(55,"span"),t.EFF(56,"Sign up with"),t.k0s()(),t.j41(57,"div",13),t.DNE(58,F,6,4,"div",32),t.k0s()()(),t.j41(59,"div",33)(60,"div",34)(61,"p",35),t.EFF(62," Copyright \xa9 "),t.j41(63,"a",36),t.EFF(64,"CodedThemes"),t.k0s()()(),t.j41(65,"div",37)(66,"ul",38)(67,"li",39)(68,"a",36),t.EFF(69,"Home"),t.k0s()(),t.j41(70,"li",39)(71,"a",40),t.EFF(72,"Privacy Policy"),t.k0s()(),t.j41(73,"li",39)(74,"a",41),t.EFF(75,"Contact us"),t.k0s()()()()()()()()()),2&i&&(t.R7$(7),t.Y8G("formGroup",n.registerForm),t.R7$(6),t.Y8G("routerLink",t.lJ4(10,p)),t.R7$(2),t.Y8G("ngIf",n.errorMessage),t.R7$(7),t.Y8G("ngIf",n.registerForm.controls.firstName.invalid&&n.registerForm.controls.firstName.touched),t.R7$(6),t.Y8G("ngIf",n.registerForm.controls.lastName.invalid&&n.registerForm.controls.lastName.touched),t.R7$(5),t.Y8G("ngIf",n.registerForm.controls.email.invalid&&n.registerForm.controls.email.touched),t.R7$(5),t.Y8G("ngIf",n.registerForm.controls.mobile.invalid&&n.registerForm.controls.mobile.touched),t.R7$(5),t.Y8G("ngIf",n.registerForm.controls.password.invalid&&n.registerForm.controls.password.touched),t.R7$(9),t.Y8G("disabled",n.registerForm.invalid),t.R7$(6),t.Y8G("ngForOf",n.SignUpOptions))},dependencies:[r.X1,r.qT,r.me,r.Q0,r.BC,r.cb,r.j4,r.JD,l.iI,l.Wk,g.MD,g.Sq,g.bT],styles:['.auth-main[_ngcontent-%COMP%]{position:relative}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]{height:100%;width:100%;min-height:100vh}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .saprator[_ngcontent-%COMP%]{position:relative;display:flex;align-self:center;justify-content:center}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .saprator[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;left:0;width:100%;height:1px;background:var(--bs-border-color);z-index:1}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .saprator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.875rem;padding:8px 24px;background:#fff;z-index:5;text-transform:capitalize;color:#262626;font-weight:500}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]{display:flex;align-items:center}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]{flex-direction:column;background:url(img-auth-bg.c28bbbadbe67914d.svg);min-height:100vh;padding:24px;background-repeat:no-repeat;background-size:auto 82%;background-position:left bottom;position:relative;justify-content:space-between}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:5}.auth-main[_ngcontent-%COMP%]   .auth-wrapper.v3[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#fff3;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-grow:1}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%;max-width:495px;box-shadow:none}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{padding-left:15px}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-form[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-decoration:underline}.auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-footer[_ngcontent-%COMP%], .auth-main[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .auth-header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between}']})}}return e})()}}]);