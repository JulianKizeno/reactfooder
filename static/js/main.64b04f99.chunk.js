(this["webpackJsonpwebinar-client"]=this["webpackJsonpwebinar-client"]||[]).push([[0],{322:function(e,t,a){e.exports=a(489)},328:function(e,t,a){},350:function(e,t,a){},489:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(73),l=a.n(o),i=a(18),s=a(23),c=a(25),d=a(24),m=(a(327),a(328),a(22)),u=a(94),p=a(61),h=a(91),g=a.n(h),f=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e){var a=e.username,n=e.password,r=e.country;return t.service.post("/signup",{username:a,password:n,country:r})},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n})},this.logout=function(){return t.service.post("/logout")},this.isLoggedIn=function(){return t.service.get("/loggedin")},this.service=g.a.create({baseURL:"https://reactr-realfooder.herokuapp.com/api/auth",withCredentials:!0})},E=a(26),b=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).logout=function(){n.props.setTheUser(!1),localStorage.setItem("currentUser",JSON.stringify(null)),n.authService.logout(),n.props.history.push("/")},n.authService=new f,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{expand:"md"},r.a.createElement(u.a.Brand,{as:"div"},this.props.loggedInUser?r.a.createElement("div",null,"RealFooder!"):r.a.createElement(E.b,{to:"/"},"RealFooder!")),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,null,r.a.createElement(p.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/alimentos"},"Alimentos")),r.a.createElement(p.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/estadisticas"},"Estad\xedsticas")),r.a.createElement(p.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/dietas"},"Dietas")),this.props.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a.Link,{as:"div",onClick:this.logout,style:{cursor:"pointer"}},"Cerrar sesi\xf3n")):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/"},"Iniciar sesi\xf3n")),r.a.createElement(p.a.Link,{as:"div"},r.a.createElement(E.b,{to:"/signup"},"Registro")))),r.a.createElement(u.a.Text,{className:"ml-auto"}," Hola, ",this.props.loggedInUser?this.props.loggedInUser.username:"invitad@")))}}]),a}(n.Component),v=a(53),y=a(49),C=a(54),k=a(19),x=a(20),S=a(12),I=a(37),L=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=Object(y.a)({},n.state.loginInfo),a=e.target,r=a.name,o=a.value;t=Object(y.a)(Object(y.a)({},t),{},Object(v.a)({},r,o)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.login(n.state.loginInfo).then((function(e){localStorage.setItem("currentUser",JSON.stringify(e.data)),n.props.setTheUser(e.data),n.props.history.push("/alimentos")})).catch((function(e){return console.log(e)}))},n.state={loginInfo:{username:"",password:""},errorMessage:""},n.authService=new f,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{className:"index-page"},r.a.createElement(k.a,{className:"background-index"},r.a.createElement(x.a,{md:4},r.a.createElement("h3",null,"Inicio de sesi\xf3n"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,{controlId:"name"},r.a.createElement(S.a.Label,null,"Usuario"),r.a.createElement(S.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"pwd"},r.a.createElement(S.a.Label,null,"Contrase\xf1a"),r.a.createElement(S.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(I.a,{variant:"dark",type:"submit"},"Iniciar sesi\xf3n")),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfNo tienes cuenta? ",r.a.createElement(E.b,{to:"/signup"},"Reg\xedstrate")))),r.a.createElement(x.a,{md:7,style:{marginTop:"20px"}},r.a.createElement("header",{style:{marginLeft:"60px",textAlign:"center",backgroundColor:"transparent",color:"#333",borderRadius:"10px",padding:"50px 0"}},r.a.createElement("h1",null,"RealFooder"),r.a.createElement("p",null,"Una sencilla SPA de alimentaci\xf3n")))))}}]),a}(n.Component),O=function e(){var t=this;Object(i.a)(this,e),this.getCountries=function(){return t.service.get("/")},this.service=g.a.create({baseURL:"https://reactr-realfooder.herokuapp.com/api/countries",withCredentials:!0})},j=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getAllCountries=function(){n.countryService.getCountries().then((function(e){return n.setState({countries:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getAllCountries()},n.handleInputChange=function(e){var t=Object(y.a)({},n.state.loginInfo),a=e.target,r=a.name,o=a.value;t=Object(y.a)(Object(y.a)({},t),{},Object(v.a)({},r,o)),n.setState({loginInfo:t})},n.handleSubmit=function(e){e.preventDefault(),n.authService.signup(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/alimentos")})).catch((function(e){return console.log(e)}))},n.state={countries:[],loginInfo:{country:"",username:"",password:""},errorMessage:""},n.authService=new f,n.countryService=new O,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(k.a,{className:"background-index",style:{marginTop:"65px"}},r.a.createElement(x.a,{md:{span:4,offset:4}},r.a.createElement("h3",null,"Registro de usuario"),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit,method:"POST"},r.a.createElement(S.a.Group,{controlId:"name"},r.a.createElement(S.a.Label,null,"Usuario"),r.a.createElement(S.a.Control,{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"pwd"},r.a.createElement(S.a.Label,null,"Contrase\xf1a"),r.a.createElement(S.a.Control,{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(S.a.Group,{controlId:"select"},r.a.createElement(S.a.Label,null,"Pa\xeds"),r.a.createElement(S.a.Control,{as:"select",name:"country",value:this.state.country,onChange:this.handleInputChange},r.a.createElement("option",null,"Selecciona un pa\xeds"),this.state.countries.map((function(e,t){return r.a.createElement("option",{key:t},e.name)})))),r.a.createElement("p",{className:"error-message",style:{display:this.state.errorMessage?"block":"none"}},this.state.errorMessage),r.a.createElement(I.a,{variant:"dark",type:"submit"},"Registrarme")),r.a.createElement("p",null,r.a.createElement("small",null,"\xbfYa tienes cuenta? ",r.a.createElement(E.b,{to:"/"},"Inicia sesi\xf3n"))))))}}]),a}(n.Component),w=function e(){var t=this;Object(i.a)(this,e),this.getFoods=function(){return t.service.get("/")},this.getFood=function(e){return t.service.get("/details/".concat(e))},this.saveFood=function(e){return t.service.post("/newFood",e)},this.deleteFood=function(e){return t.service.delete("/delete/".concat(e))},this.editFood=function(e,a){return t.service.put("/edit/".concat(e),a)},this.service=g.a.create({baseURL:"https://reactr-realfooder.herokuapp.com/api/foods",withCredentials:!0})},M=a(275),P=a(204),A=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(v.a)({},a,r))},n.handleCheckBox=function(e){n.setState({importTax:e.target.checked})},n.showInfo=function(){if(n.props.editProductModal){var e=n.props.productId;n.foodsService.getFood(e).then((function(e){return n.setState(e.data)})).catch((function(e){return console.log(e)}))}},n.componentDidMount=function(){n.showInfo()},n.handleSubmit=function(e){if(e.preventDefault(),n.props.newProductModal){var t=Object(y.a)({},n.state);t.origin=t.origin.split(",").map((function(e){return e.trim()})),t.owner_id=n.props.loggedInUser._id,n.foodsService.saveFood(t).then((function(){n.props.finishFoodPost()})).catch((function(e){return console.log(e)}))}if(n.props.editProductModal){var a=n.state._id,r=Object(y.a)({},n.state);r.origin=r.origin.toString().split(",").map((function(e){return e.trim()})),r.owner_id=n.props.loggedInUser._id,n.foodsService.editFood(a,r).then((function(){n.props.finishFoodPost()})).catch((function(e){return console.log(e)}))}},n.state={name:"",description:"",img:"",price:0,kcal:0,protein:0,fat:0,carbs:0,stock:0,importTax:!1,origin:""},n.foodsService=new w,n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{as:"section",style:{paddingTop:"0px"}},r.a.createElement(k.a,null,r.a.createElement("h1",{style:{marginLeft:"15px",marginTop:"8px",marginBottom:0}},this.props.editProductModal?"Editar Alimento":"Crear Nuevo Alimento")),r.a.createElement("hr",null),r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(k.a,null,r.a.createElement(x.a,null,r.a.createElement(S.a.Group,{controlId:"name"},r.a.createElement(S.a.Label,null,"Nombre"),r.a.createElement(S.a.Control,{name:"name",type:"text",placeholder:"Nombre del producto",value:this.state.name,onChange:this.handleInputChange,required:!0})),r.a.createElement(S.a.Group,{controlId:"description"},r.a.createElement(S.a.Label,null,"Descripci\xf3n"),r.a.createElement(S.a.Control,{name:"description",as:"textarea",placeholder:"Descripci\xf3n del producto",value:this.state.description,onChange:this.handleInputChange,required:!0})),r.a.createElement(S.a.Group,{controlId:"originCountry"},r.a.createElement(S.a.Label,null,"Pa\xedses de origen (separar por comas)"),r.a.createElement(S.a.Control,{name:"origin",type:"text",placeholder:"Pa\xeds(es) de origen",value:this.state.origin,onChange:this.handleInputChange,required:!0})),r.a.createElement(S.a.Group,{controlId:"productImage"},r.a.createElement(S.a.Label,null,"Imagen (URL)"),r.a.createElement(S.a.Control,{name:"img",type:"text",placeholder:"http://",value:this.state.img,onChange:this.handleInputChange,required:!0}))),r.a.createElement(x.a,null,r.a.createElement(k.a,null,r.a.createElement(x.a,null,r.a.createElement(S.a.Group,{controlId:"price"},r.a.createElement(S.a.Label,null,"Precio"),r.a.createElement(S.a.Control,{name:"price",type:"number",value:this.state.price,onChange:this.handleInputChange,required:!0})),r.a.createElement(S.a.Group,{controlId:"protein"},r.a.createElement(S.a.Label,null,"Prote\xednas"),r.a.createElement(S.a.Control,{name:"protein",type:"number",value:this.state.protein,onChange:this.handleInputChange,required:!0})),r.a.createElement(S.a.Group,{controlId:"carbs"},r.a.createElement(S.a.Label,null,"Carbohidratos"),r.a.createElement(S.a.Control,{name:"carbs",type:"number",value:this.state.carbs,onChange:this.handleInputChange,required:!0}))),r.a.createElement(x.a,null,r.a.createElement(S.a.Group,{controlId:"kcal"},r.a.createElement(S.a.Label,null,"Kcal"),r.a.createElement(S.a.Control,{name:"kcal",type:"number",value:this.state.kcal,onChange:this.handleInputChange,required:!0})),r.a.createElement(S.a.Group,{controlId:"fat"},r.a.createElement(S.a.Label,null,"Grasas"),r.a.createElement(S.a.Control,{name:"fat",type:"number",value:this.state.fat,onChange:this.handleInputChange,required:!0})),r.a.createElement(S.a.Group,{controlId:"stock"},r.a.createElement(S.a.Label,null,"Stock"),r.a.createElement(S.a.Control,{name:"stock",type:"number",value:this.state.stock,onChange:this.handleInputChange,required:!0})))),r.a.createElement(S.a.Group,{controlId:"importTax"},r.a.createElement(S.a.Check,{name:"importTax",type:"checkbox",label:"Aplica impuestos de importaci\xf3n",checked:this.state.importTax,onChange:this.handleCheckBox})),r.a.createElement(I.a,{variant:"dark",type:"submit",style:{width:"100%"}},this.props.editProductModal?"Guardar Cambios":"Crear alimento")))))}}]),a}(n.Component),U=(a(350),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={show:e.show},n}return Object(s.a)(a,[{key:"render",value:function(){return this.props.children?r.a.createElement(r.a.Fragment,null,this.props.show&&r.a.createElement("div",{show:this.props.show,onClose:this.props.onClose},r.a.createElement("div",{className:"modal-create"},this.props.children))):r.a.createElement(r.a.Fragment,null,this.props.show&&r.a.createElement("div",{show:this.props.show,onClose:this.props.onClose},r.a.createElement("div",{className:"modal-create"},r.a.createElement("p",{className:"textToast"},this.props.title),r.a.createElement("hr",null),r.a.createElement("p",{className:"textToast"},this.props.message))))}}]),a}(n.Component)),T=a(194),F=a(191),N=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleOnChange=function(e){n.setState({search:e.target.value}),n.searchBar(e.target.value)},n.toggleModal=function(e){n.setState(Object(v.a)({},e,!n.state[e]))},n.searchBar=function(e){var t=n.state.food.filter((function(t){return t.name&&t.name.toLowerCase().includes(e.toLowerCase())}));n.setState({filteredFood:t})},n.getAllFood=function(){n.foodsService.getFoods().then((function(e){return n.setState({food:e.data,filteredFood:e.data})})).catch((function(e){return console.log(e)}))},n.handleDelete=function(e){n.foodsService.deleteFood(e).then((function(){n.toggleModal("toastModal"),n.getAllFood(),setTimeout((function(){n.toggleModal("toastModal")}),3e3)})).catch((function(e){return console.log(e)}))},n.showModalEdit=function(e){n.setState({_id:e}),n.toggleModal("editProductModal")},n.componentDidMount=function(){n.getAllFood()},n.finishFoodPost=function(){n.getAllFood(),n.state.newProductModal?(n.toggleModal("newProductModal"),n.toggleModal("toastAfterModal"),setTimeout((function(){n.toggleModal("toastAfterModal")}),3e3)):n.toggleModal("editProductModal")},n.state={newProductModal:!1,editProductModal:!1,toastModal:!1,toastAfterModal:!1,food:[],filteredFood:[],search:""},n.foodsService=new w,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{position:"relative"},className:"backg-foods"},r.a.createElement(C.a,{as:"section"},r.a.createElement(k.a,{style:{margin:0}},r.a.createElement("header",null,r.a.createElement("h1",null,"Alimentos"),r.a.createElement("p",null,"Consulta los detalles de stock, precios y origen."))),r.a.createElement(k.a,{className:"modal-row"},r.a.createElement("form",null,r.a.createElement("label",null,"Nombre:"),r.a.createElement("input",{type:"text",value:this.state.search,className:"searchBar",onChange:this.handleOnChange})),this.props.loggedInUser&&r.a.createElement(I.a,{variant:"outline-dark",className:"btn bck-home-btn",onClick:function(){return e.toggleModal("newProductModal")}},"A\xf1adir nuevo alimento")),r.a.createElement(U,{show:this.state.toastAfterModal,onClose:function(){return e.toggleModal("toastAfterModal")},style:{borderRadius:"5px",width:"inherit"}},r.a.createElement("p",null,"Mensaje"),r.a.createElement("hr",null),r.a.createElement("p",null,"Producto Creado Correctamente")),r.a.createElement(P.a,{show:this.state.newProductModal||this.state.editProductModal,onHide:function(){return e.state.editProductModal?e.toggleModal("editProductModal"):e.toggleModal("newProductModal")}},r.a.createElement(P.a.Body,null,this.state.newProductModal?r.a.createElement(A,{finishFoodPost:this.finishFoodPost,newProductModal:this.state.newProductModal,loggedInUser:this.props.loggedInUser}):r.a.createElement(A,{finishFoodPost:this.finishFoodPost,editProductModal:this.state.editProductModal,loggedInUser:this.props.loggedInUser,productId:this.state._id}))),r.a.createElement(M.a,{className:"table"},r.a.createElement("tbody",null,this.state.filteredFood.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("img",{className:"product-picture",src:t.img,alt:t.name})),r.a.createElement("td",null,r.a.createElement("p",null,t.name)),r.a.createElement("td",null,r.a.createElement("p",null,"Precio: ",t.price," \u20ac | Stock disponible: ",t.stock,"  uds",e.props.loggedInUser&&t.origin.includes(e.props.loggedInUser.country)&&r.a.createElement("sup",null,"Proximidad")),r.a.createElement(E.b,{to:"/alimento/".concat(t._id),style:{textDecoration:"none",color:"inherit"}},r.a.createElement(I.a,{variant:"outline-dark"},"Detalles ")),e.props.loggedInUser&&e.props.loggedInUser._id===t.owner_id&&r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{variant:"outline-dark",onClick:function(){return e.handleDelete(t._id)}},r.a.createElement(F.a,{icon:T.b})),r.a.createElement(I.a,{variant:"outline-dark",onClick:function(){return e.showModalEdit(t._id)}}," ",r.a.createElement(F.a,{icon:T.a})))))})),!this.state.filteredFood.length&&r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,"Sin resultados"))))),r.a.createElement(U,{show:this.state.toastModal,title:"Mensaje",message:"Producto Borrado Correctamente",onClose:function(){return e.toggleModal("toastModal")}})))}}]),a}(n.Component),D=a(518),B=a(286),R=a(147),G=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getOneFood=function(){var e=n.props.match.params.foodId;n.foodsService.getFood(e).then((function(e){return n.setState(e.data)})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getOneFood()},n.state={},n.foodsService=new w,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{as:"section",className:"backg-details"},r.a.createElement(k.a,null,r.a.createElement(x.a,{md:4},r.a.createElement(D.a,null,r.a.createElement("h1",{style:{textAlign:"center",marginBottom:"30px"}},this.state.name," "),r.a.createElement("img",{src:this.state.img,alt:this.state.name,style:{textAlign:"center"}}))),r.a.createElement(x.a,{md:{span:7,offset:1,margin:0}},r.a.createElement("h2",null,"Especificaciones"),r.a.createElement("p",null,this.state.description," "),r.a.createElement("hr",null),r.a.createElement("p",null,"Precio: ",this.state.price," \u20ac"),r.a.createElement(B.a,{defaultActiveKey:"nutricional"},r.a.createElement(R.a,{eventKey:"nutricional",title:"Nutricional"},r.a.createElement("h3",null,"Informaci\xf3n notricional"),r.a.createElement("hr",null),r.a.createElement("h6",{style:{marginTop:"20px",marginBottom:"20px"}},"Aporte nutricional por 100g"),r.a.createElement("ul",null,r.a.createElement("li",null,"Calorias: ",this.state.kcal),r.a.createElement("li",null,"Prote\xednas: ",this.state.protein),r.a.createElement("li",null,"Grasas: ",this.state.fat),r.a.createElement("li",null,"Carbohidratos: ",this.state.carbs))),r.a.createElement(R.a,{eventKey:"origen",title:"Origen"},r.a.createElement("h3",null,"Origen"),r.a.createElement("hr",null),r.a.createElement("h6",{style:{marginTop:"20px",marginBottom:"20px"}}," ",this.state.name," procente de:  "),r.a.createElement("ul",null,this.state.origin?this.state.origin.map((function(e,t){return r.a.createElement("li",{key:t},e)})):void 0)),r.a.createElement(R.a,{eventKey:"stock",title:"Stock"},r.a.createElement("h3",null,"Stock"),r.a.createElement("hr",null),r.a.createElement("p",null,"Stock actual: ",this.state.stock," unidades en stock "))),r.a.createElement(I.a,{variant:"outline-dark",className:"bck-home-btn",onClick:function(){return e.props.history.goBack()}},"Volver"))))}}]),a}(n.Component),q=a(143),z=a(108),W=a(285),_=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).bringFoods=function(){n.foodsService.getFoods().then((function(e){n.setState({food:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.bringFoods()},n.state={food:[]},n.foodsService=new w,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.food.slice(0,6),t={fat:"Grasa",protein:"Proteina",carbs:"Carbohidratos"},a=e.map((function(e){return e.name})),n=Object.keys(t).map((function(a){var n={property:t[a]};return e.map((function(e){return n[e.name]=e[a]})),n})),o=e.map((function(e){return{id:e.name,label:e.name,value:e.price}})),l=e.map((function(e){return{foodNames:e.name,Grasa:e.fat,"Carbohidr\xe1tos":e.carbs,"Prote\xedna":e.protein}}));return r.a.createElement(C.a,{className:"backg-stats"},r.a.createElement("h1",{style:{marginBottom:"50px"}},"Estad\xedsticas"),r.a.createElement("h3",{style:{position:"absolute"}},"Aportes Nutricionales"),r.a.createElement(k.a,{style:{height:"300px",marginBottom:"100px",backgroundColor:"rgba(255, 255, 255, 0.6)"}},r.a.createElement(q.a,{keys:a,data:n,indexBy:"property",margin:{top:50,right:140,bottom:50,left:60},padding:.3,colors:{scheme:"set3"},defs:[{id:"dots",type:"patternDots",background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"Aguacate"},id:"dots"},{match:{id:"Esp\xe1rragos"},id:"lines"}],axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Valor Nutricional",legendPosition:"middle",legendOffset:46},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Aporte",legendPosition:"middle",legendOffset:-50},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",2]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:5,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}],animate:!0,motionStiffness:90,motionDamping:15})),r.a.createElement(k.a,{style:{height:"300px",backgroundColor:"rgba(255, 255, 255, 0.6)"}},r.a.createElement(x.a,{md:7},r.a.createElement("h3",{style:{position:"absolute"}},"Comparativa de precios"),r.a.createElement(z.a,{data:o,margin:{top:65,right:0,bottom:60,left:0},innerRadius:.15,padAngle:45,colors:{scheme:"accent"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},radialLabelsLinkDiagonalLength:5,radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"Esp\xe1rragos"},id:"lines"},{match:{id:"Aguacate"},id:"dots"},{match:{id:"Pepino"},id:"lines"},{match:{id:"Tomate rama"},id:"dots"},{match:{id:"Berenjena"},id:"lines"}],legends:[{anchor:"left",direction:"column",translateY:50,itemsSpacing:10,itemWidth:100,itemHeight:10,itemTextColor:"#999",symbolSize:18,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})),r.a.createElement(x.a,{md:5},r.a.createElement("h3",{style:{position:"absolute"}},"Comparativa Nutricional"),r.a.createElement(W.a,{data:l,keys:["Grasa","Carbohidr\xe1tos","Prote\xedna"],indexBy:"foodNames",maxValue:"auto",margin:{top:70,right:80,bottom:40,left:80},curve:"linearClosed",borderColor:"inherit",gridLevels:5,gridShape:"circular",gridLabelOffset:20,enableDots:!0,dotSize:5,dotColor:"white",dotBorderWidth:2,dotBorderColor:{from:"color"},enableDotLabel:!0,dotLabel:"value",dotLabelYOffset:-12,colors:{scheme:"category10"},fillOpacity:.55,blendMode:"multiply",animate:!0,motionStiffness:90,motionDamping:15,isInteractive:!0,legends:[{anchor:"bottom-left",direction:"column",translateX:-50,translateY:-70,itemWidth:80,itemHeight:20,itemTextColor:"#999",symbolSize:12,symbolShape:"circle",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]}))))}}]),a}(n.Component),H=a(77),K=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getAllFood=function(){n.foodsService.getFoods().then((function(e){return n.setState({food:e.data})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.getAllFood()},n.state={food:[]},n.foodsService=new w,n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.food.filter((function(e){return e.protein>3})).sort((function(e,t){return e<t?1:-1})).slice(0,9),t=e.map((function(e){return{id:e.name,value:e.protein}})),a=e.map((function(e){return{id:e.name,value:e.kcal}})),n=e.map((function(e){return{id:e.name,value:e.carbs}}));return r.a.createElement(C.a,{className:"backg-diets"},r.a.createElement("h1",{style:{marginBottom:"50px"}},"Dietas"),r.a.createElement(H.a,null,r.a.createElement(D.a,{style:{backgroundColor:"#ffffff66",alignItems:"baseline",marginBottom:"100px"}},r.a.createElement(H.a.Toggle,{as:D.a.Header,eventKey:"0",className:"btn-dark btn"},"Alimentos Ricos en prote\xedna"),r.a.createElement("p",{style:{paddingLeft:"50px",textAlign:"justify"}},"Despu\xe9s del agua, las prote\xednas son el nutriente con mayor presencia en el cuerpo humano. Es por eso que son parte fundamental para nuestro desarrollo y bienestar f\xedsico ya que son un componente importante para la formaci\xf3n de los m\xfasculos, el cerebro y los \xf3rganos vitales del cuerpo, adem\xe1s de ayudar al correcto funcionamiento del sistema inmunol\xf3gico e influir en el metabolismo."),r.a.createElement(H.a.Collapse,{eventKey:"0"},r.a.createElement(D.a.Body,null,r.a.createElement(k.a,{style:{justifyContent:"flex-end"}},r.a.createElement(x.a,{md:4},r.a.createElement(k.a,{style:{height:"300px",backgroundColor:"transparent",alignItems:"center"}},r.a.createElement(z.a,{data:t,margin:{top:65,right:0,bottom:60,left:0},innerRadius:0,padAngle:0,cornerRadius:45,colors:{scheme:"nivo"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},slicesLabelsSkipAngle:5,radialLabelsLinkDiagonalLength:20,radialLabelsLinkHorizontalLength:20,slicesLabelsTextColor:"#333333",defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"Esp\xe1rragos"},id:"lines"},{match:{id:"Aguacate"},id:"dots"},{match:{id:"Pepino"},id:"lines"},{match:{id:"Tomate rama"},id:"dots"},{match:{id:"Berenjena"},id:"lines"}]}))),r.a.createElement(x.a,{sm:6},r.a.createElement(k.a,{style:{margin:"auto",width:"85%",justifyContent:"center"}},e.map((function(e,t){return r.a.createElement(E.b,{to:"/alimento/".concat(e._id),style:{textDecoration:"none",color:"inherit"},key:t},r.a.createElement(D.a,{className:"diet-card"},r.a.createElement("img",{src:e.img,alt:e.name,style:{textAlign:"center"}}),r.a.createElement("h3",{style:{textAlign:"center",fontSize:"16px",margin:0}},e.name," ")))})))))))),r.a.createElement(D.a,{style:{backgroundColor:"#ffffff66",alignItems:"baseline",marginBottom:"100px"}},r.a.createElement(H.a.Toggle,{as:D.a.Header,eventKey:"2",className:"btn-dark btn"},"Alimentos Ricos en Carbohidr\xe1tos"),r.a.createElement("p",{style:{paddingLeft:"50px",textAlign:"justify"}},"Se recomienda que entre un 45-65% de las calor\xedas totales de la dieta diaria proceda de los hidratos de carbonos. Los hidr\xe1tos de carbono permiten que tu cuerpo se mueva: son la principal fuente de energ\xeda, por delante de las grasas y las prote\xednas. La glucosa de los hidratos de carbono pasa directamente al cerebro para que tu mente pueda funcionar, adem\xe1s mejoran el estado de \xe1nimo: los hidratos de carbono complejos son ricos en vitamina B, esencial para el buen funcionamiento del sistema nervioso y el estado de \xe1nimo."),r.a.createElement(H.a.Collapse,{eventKey:"2"},r.a.createElement(D.a.Body,null,r.a.createElement(k.a,{style:{justifyContent:"flex-end"}},r.a.createElement(x.a,{sm:6},r.a.createElement(k.a,{style:{margin:"auto",width:"85%",justifyContent:"center"}},e.map((function(e,t){return r.a.createElement(E.b,{to:"/alimento/".concat(e._id),style:{textDecoration:"none",color:"inherit"},key:t},r.a.createElement(D.a,{className:"diet-card"},r.a.createElement("img",{src:e.img,alt:e.name,style:{textAlign:"center"}}),r.a.createElement("h3",{style:{textAlign:"center",fontSize:"16px",margin:0}},e.name," ")))})))),r.a.createElement(x.a,{md:5},r.a.createElement(k.a,{style:{height:"300px",backgroundColor:"transparent",alignItems:"center"}},r.a.createElement(q.a,{keys:["value"],data:n,indexBy:"id",margin:{top:50,right:140,bottom:50,left:60},padding:.3,colors:{scheme:"set3"},axisBottom:{tickSize:5,tickPadding:2,tickRotation:-40},axisLeft:{tickSize:5,tickPadding:8,tickRotation:0,legend:"Aporte",legendPosition:"middle",legendOffset:-50},labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",2]]},animate:!0,motionStiffness:90,motionDamping:15}))))))),r.a.createElement(D.a,{style:{backgroundColor:"#ffffff66",alignItems:"baseline",marginBottom:"100px"}},r.a.createElement(H.a.Toggle,{as:D.a.Header,variant:"link",eventKey:"1",className:"btn-dark btn"},"Alimentos Cal\xf3ricos"),r.a.createElement("p",{style:{paddingLeft:"50px",textAlign:"justify"}},"Las calor\xedas son indispensables para el desarrollo del individuo, para absorber nutrientes de los alimentos, y para las actividades f\xedsicas o actividades que generan mucho estr\xe9s. Refiri\xe9ndose a los alimentos, dice que aunque el n\xfamero de calor\xedas var\xeda entre ellos, todos las contienen, desde un filete de salm\xf3n, hasta los pepinos y el pan dulce."),r.a.createElement(H.a.Collapse,{eventKey:"1"},r.a.createElement(D.a.Body,null,r.a.createElement(k.a,{style:{justifyContent:"flex-end"}},r.a.createElement(x.a,{md:4},r.a.createElement(k.a,{style:{height:"300px",backgroundColor:"transparent",alignItems:"center"}},r.a.createElement(z.a,{data:a,margin:{top:65,right:0,bottom:60,left:0},innerRadius:.6,padAngle:5,colors:{scheme:"nivo"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,defs:[{id:"dots",type:"patternDots",background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0},{id:"lines",type:"patternLines",background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10}],fill:[{match:{id:"Esp\xe1rragos"},id:"lines"},{match:{id:"Aguacate"},id:"dots"},{match:{id:"Pepino"},id:"lines"},{match:{id:"Tomate rama"},id:"dots"},{match:{id:"Berenjena"},id:"lines"}]}))),r.a.createElement(x.a,{sm:6},r.a.createElement(k.a,{style:{margin:"auto",width:"85%",justifyContent:"center"}},e.map((function(e,t){return r.a.createElement(E.b,{to:"/alimento/".concat(e._id),style:{textDecoration:"none",color:"inherit"},key:t},r.a.createElement(D.a,{className:"diet-card"},r.a.createElement("img",{src:e.img,alt:e.name,style:{textAlign:"center"}}),r.a.createElement("h3",{style:{textAlign:"center",fontSize:"16px",margin:0}},e.name," ")))}))))))))))}}]),a}(n.Component),J=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).setTheUser=function(t){return e.setState({loggedInUser:t},(function(){return console.log("El estado de App ha cambiado:",e.state)}))},e.fetchUser=function(){var t=localStorage.currentUser||!1;e.setTheUser(JSON.parse(t))},e.componentDidMount=function(){e.fetchUser()},e.state={loggedInUser:null},e.authService=new f,e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{exact:!0,render:function(t){return r.a.createElement(b,Object.assign({setTheUser:e.setTheUser,loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(L,Object.assign({loggedInUser:e.state.loggedInUser,setTheUser:e.setTheUser},t))}}),r.a.createElement(m.a,{path:"/alimentos",exact:!0,render:function(t){return r.a.createElement(N,Object.assign({loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(m.a,{path:"/alimento/:foodId",exact:!0,render:function(t){return r.a.createElement(G,Object.assign({loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(m.a,{path:"/estadisticas",exact:!0,render:function(t){return r.a.createElement(_,Object.assign({loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(m.a,{path:"/dietas",exact:!0,render:function(t){return r.a.createElement(K,Object.assign({loggedInUser:e.state.loggedInUser},t))}}),r.a.createElement(m.a,{path:"/signup",exact:!0,render:function(t){return r.a.createElement(j,Object.assign({setTheUser:e.setTheUser},t))}})))}}]),a}(n.Component);l.a.render(r.a.createElement(E.a,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[322,1,2]]]);
//# sourceMappingURL=main.64b04f99.chunk.js.map