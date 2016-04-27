// ****************************************************************************
// *                                  status                                  *
// ****************************************************************************
var tabToday = true;
var tabNotifications = false;
var flip;


// ****************************************************************************
// *                                    img                                   *
// ****************************************************************************

var img = {
	wApple: "images/apple.png",
	blurBg:"images/blurBg-03.jpg",
	portrait:"images/portrait-04.png",
	load:"images/load.gif",
	toolBar: "images/toolBar-18.png",
	apple: "images/apple.png",
	battery: "images/battery-20.png",
	ampifier: "images/ampifier-21.png",
	sidemenu: "images/sidemenu-22.png",
	questionMark: "images/questionMark-23.png",
	toolbarInfo: "images/toolbar-info.png",
};




var goList = [
{ name:"Previous Graphic Work", link: "https://jasonshengblog.wordpress.com/"},
{ name:	"Project Catalogue", link: "http://sheng.design/catalogue/"},
{ name:	"Resume", link: "http://resume.minmingsheng.design/"},
{ name:	"Linkedin", link: "https://ca.linkedin.com/in/minming-sheng-9b1746b2"},
{ name:	"Github", link:"https://github.com/minmingsheng"},
{ name:	"Twitter", link:"https://twitter.com/?lang=en"}
]
var fileList = [
{ name:"App Design Prototype.pdf", link: "http://sheng.design/pdf/AppDeisgnPrototype.pdf"},
{ name:	"Watch App design.pdf", link: "http://sheng.design/pdf/watchDesign.pdf"},
{ name:	"Case study.pdf", link: "http://sheng.design/pdf/caseStudy.pdf"},
{ name:	"Interface critique.pdf", link: "http://sheng.design/pdf/InterfaceCritique.pdf"},
{ name:	"Kiosk Design.pdf", link:"http://sheng.design/pdf/kioskdesign.pdf"},
{ name:	"Resume.pdf", link:"http://sheng.design/pdf/resume.pdf"},
]

var jasonOS = [
	{
		name: "About jasonOS",
		des: "<p>version : 0.0.1</p>\
<p>This is my own platform to present my own work, everything is created by my self. I'm trying to use\
 pure javascript to create reusable component for practice. If it is possible, I want it to be a CMS in the future when I learn more.</p>"
	}
]
var aboutList = [
	{
		name: "Minming Sheng",
		des: "Minming Sheng is my full name,\
Call me minming or Jason."
	},
	{
		name: "Contact",
		des: "minming.ca@gmail.com"
	},
	{
		name: "Good education",
		des: "Just graduated in Sheridan College for Post-graducate certification.\
Previously I graduated in NASCAD, Halifax and Shanghai university, Shanghai."
	},
	{
		name: "Based in Toronto",
		des:"Now I live in Toronto."
	},
	{
		name: "UX/UI designer",
		des: "I think I have a not bad sense of design, I love design. In my mind, deisgn is not just do something\
 fancy, in stead, it is to solove problems. Make things fancy is just merely one part of whole process."
	},
	{
		name: "Junior Web developer",
		des: "I just started learn programming last year. I love programming. Eager to be a full stack developer. \
So I usually force myself not to use any libraryies and plugins to practice \
coding, I hate to copy and paste other people's code without any understanding, it is not responsible for myself, especially\
 during learning step."
	},
	{
		name: "Interdisciplinary designer",
		des: "<p>Interdisciplinary designers' areas are never limited, they use design thinking to define and solve problems. They are T-shape designers."
	}
]




var printing = [
	{
		type: "jpg",
		name:"book design",
		date:"2015",
		src: "images/printing/1.jpg"
	},
	{
		type: "jpg",
		name:"book design",
		date:"2015",
		src: "images/printing/2.jpg"
	},
	{
		type: "jpg",
		name:"book design",
		date:"2015",
		src: "images/printing/3.jpg"
	},
	{
		type: "jpg",
		name:"CD cover",
		date:"2014",
		src: "images/printing/cdCover.jpg"
	},
	{
		type: "jpg",
		name:"Five element(fire)",
		date:"2014",
		src: "images/printing/huo.jpg"
	},
	{
		type: "jpg",
		name:"Five element(golden)",
		date:"2014",
		src: "images/printing/jin.jpg"
	},
	{
		type: "jpg",
		name:"Five element(wood)",
		date:"2014",
		src: "images/printing/mu.jpg"
	},
	{
		type: "jpg",
		name:"Five element(water)",
		date:"2014",
		src: "images/printing/shui.jpg"
	},
	{
		type: "jpg",
		name:"Five element(earth)",
		date:"2014",
		src: "images/printing/tu.jpg"
	}
]

var poster = [
	{
		type: "jpg",
		name:"studentUnion1",
		date:"2016",
		src: "images/poster/studentUnion1.jpg"
	},
	{
		type: "jpg",
		name:"studentUnion2",
		date:"2016",
		src: "images/poster/studentUnion2.jpg"
	},
	{
		type: "jpg",
		name:"studentUnion3",
		date:"2016",
		src: "images/poster/studentUnion3.jpg"
	},
	{
		type: "jpg",
		name:"studentUnion4",
		date:"2016",
		src: "images/poster/studentUnion4.jpg"
	},
	{
		type: "jpg",
		name:"studentUnion5",
		date:"2016",
		src: "images/poster/studentUnion5.jpg"
	},
	{
		type: "jpg",
		name:"socialA",
		date:"2015",
		src: "images/poster/socialA.jpg"
	},
	{
		type: "jpg",
		name:"socialB",
		date:"2015",
		src: "images/poster/socialB.jpg"
	},
	{
		type: "jpg",
		name:"music",
		date:"2015",
		src: "images/poster/music.jpg"
	},
	{
		type: "jpg",
		name:"chickenSculpture",
		date:"2015",
		src: "images/poster/chickenSculpture.jpg"
	},
	{
		type: "jpg",
		name:"bubbleTea",
		date:"2015",
		src: "images/poster/bubbleTea.jpg"
	}
]
var digitaldrawing = [
	{
		type: "jpg",
		name:"dragonA",
		date:"2016",
		src: "images/drawing/dragonA.jpg"
	},
	{
		type: "jpg",
		name:"dragonB",
		date:"2016",
		src: "images/drawing/dragonB.jpg"
	},
	{
		type: "jpg",
		name:"girlA",
		date:"2016",
		src: "images/drawing/girlA.jpg"
	},
	{
		type: "jpg",
		name:"girlB",
		date:"2016",
		src: "images/drawing/girlB.jpg"
	},
	{
		type: "jpg",
		name:"killerA",
		date:"2016",
		src: "images/drawing/killerA.jpg"
	},
	{
		type: "jpg",
		name:"killerB",
		date:"2015",
		src: "images/drawing/killerB.jpg"
	},
	{
		type: "jpg",
		name:"ragdoll(colorpoint)",
		date:"2015",
		src: "images/drawing/ragdoll(colorpoint).jpg"
	},
	{
		type: "jpg",
		name:"ragdoll(mitted)",
		date:"2015",
		src: "images/drawing/ragdoll(mitted).jpg"
	},
	{
		type: "jpg",
		name:"ragdoll(bicolor)",
		date:"2015",
		src: "images/drawing/ragdoll(bicolor).jpg"
	}

]
var demo = [
	{
		type: "sound,three.js",
		name:"visualization",
		date:"2016",
		link: "http://sheng.design/three/sound-visualization.html",
		src: "images/demo/visualizaion.png"
	},
	{
		type: "three.js",
		name:"openHouse demo",
		date:"2016",
		link: "http://sheng.design/demo(three.js)/",
		src: "images/demo/openHouse.png"
	},
	{
		type: "Create.js",
		name:"Portrait",
		date:"2016",
		link: "http://sheng.design/portrait/",
		src: "images/demo/portrait.png"
	},
	{
		type: "three.js",
		name:"particle",
		date:"2016",
		link: "http://sheng.design/three/assign.html",
		src: "images/demo/parcicle.png"
	},
	{
		type: "three.js",
		name:"galaxy",
		date:"2016",
		link: "http://sheng.design/three/galaxy.html",
		src: "images/demo/galaxy.png"
	}
]
var practice = [
	{
		type: "css",
		name:"Book effect",
		date:"2016",
		link: "http://sheng.design/practice/book/",
		src: "images/practice/practice.png"
	},
	{
		type: "Js, css",
		name:"Elastic sliders",
		date:"2016",
		link: "http://sheng.design/practice/elastic-slide/",
		src: "images/practice/sliders.png"
	},
	{
		type: "css",
		name:"Portrait",
		date:"2016",
		link: "http://sheng.design/practice/flip/",
		src: "images/practice/rotate.png"
	},
	{
		type: "three.js",
		name:"particle",
		date:"2016",
		link: "http://sheng.design/portfoliopractise/",
		src: "images/practice/potfolio.png"
	}
]

var forderImg = {
	folder: "images/folder-21.png",
}

var layoutBtnImg = [
 "images/folderIcon-block.png",
"images/folderIcon-list.png",
"images/folderIcon-swipe.png"
]

var layoutActiveImg = [
"images/folderIcon-block-active.png",
 "images/folderIcon-list-active.png",
"images/folderIcon-swipe-active.png"
]

var leftBtnsImg = [
"images/leftBtn-close.png",
"images/leftBtn-min.png",
"images/leftBtn-max.png",
]
var leftBtnsImgHover = [
"images/leftBtn-close-hover.png",
"images/leftBtn-min-hover.png",
"images/leftBtn-max-hover.png",
]

var icons = [

	// "images/safariIcon.png",
	// "images/messageIcon.png",
	// "images/dockIcon.png",
	"images/icatalogue.png",
	"images/icarrental.png",
	"images/idevgo.png",
	"images/iform.png",
	"images/iragdoll.png",
	"images/iresume.png",
	"images/ispace.png",

	"images/LinkedIcon.png",
	"images/githubIcon.png",
	"images/finderIcon.png"
	// "images/twitterIcon.png",
	// "images/dockIcon-14.png",
]
var btnImg = {
	sleep: "images/Sleep-04.png",
	shut: "images/shut-06.png",
	restart: "images/restart-05.png",
}

var folderList = ["Printing", "Poster", "Digital Drawing", "Practice", "Demo"]
// ****************************************************************************
// *                                 component                                *
// ****************************************************************************

/*loading page*/
var LoadingPage = {
	el: document.createElement("div"),
	template: "<div class='centerbox'><img src=" + img.wApple +" alt='' /><div class='loadBar'><div></div></div></div>",
	className: ["loadingPage"],
	addFn: function(){
		/*render*/
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = this.template;
		document.body.appendChild(this.el)
		/*animation callback*/
		var _this = this;
		animated(this.el.querySelector(".loadBar>div"), function(){
			_this.el.remove();
			LogIn.addFn();
			LogIn.click();
		});


	},
	removeFn: function(){
		this.el.remove();
	}
}

/*desktop*/
// <div class="logIn"></div>

var ThreeBtn = {
	template1: "<div><img src='"+btnImg.sleep+"'/></div>",
	template2: "<div><img src='"+btnImg.shut+"'/></div>",
	template3: "<div><img src='"+btnImg.restart+"'/></div>"
}

var LogIn = {
	el: document.createElement("div"),
	template: "<div class='centerbox'><div class='circle'><img src="+img.portrait+"  /></div><p>Jason Sheng</p><div class='logIn-threeBtn'>"+ThreeBtn.template1+ThreeBtn.template2+ThreeBtn.template3+"</div></div>",
	className: ["logIn"],
	addFn: function(){
		/*render*/
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = this.template;
		document.body.appendChild(this.el);
		/*animation callback*/
	},
	click: function(){
		var c = this.el.querySelector('.circle');
		console.info("ccccc:", c);
		c.addEventListener("click", onclick);
		c.addEventListener("touchstart", onclick);
		function onclick(){
			console.info(this);
			Input.addFn();
		}
	}
}

/*child of LogIN*/
var Input = {
	el: document.createElement("div"),
	template: "<i></i><div><input type='password' placeholder='Enter Passwoord'></div>",
	className:['logIn-input'],
	addFn: function(){
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = this.template;
		LogIn.el.querySelector('.centerbox').appendChild(this.el);
		var arrow = this.el.querySelector("i");

		arrow.addEventListener("click", onclick);
		arrow.addEventListener("touchstart", onclick);
		function onclick(){
			this.parentElement.classList.add("dispear");
			var _this = this;
			animated(this.parentElement, function(){
				_this.parentElement.classList.remove("dispear");
				_this.parentElement.remove();
			})
			
		}

		var input = this.el.querySelector("input");
		input.addEventListener("keydown", onKeyDown);
		function onKeyDown(e){
			if(e.keyCode == 13) {
				addLoad();
				this.parentElement.parentElement.remove();
				console.log(this.parentElement.parentElement);
				setTimeout(function(){
					LogIn.el.remove();
					Desktop.addFn(); /*<----------------*/
				}, 2000)
			}
		}
		function addLoad(){
			var parent = document.querySelector(".centerbox");
			var load = document.createElement("div");
			load.style.marginTop = "2em";
			load.innerHTML = "<img src="+img.load+" style='opacity:0.5' />";
			parent.appendChild(load);

		}
	}
}

/******************************* Desktop ********************************/
var Desktop = {
	el: document.createElement("div"),
	template: "",
	className:['desktop'],
	addFn: function(){
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = this.template;
		document.body.appendChild(this.el);
		ToolBar.addFn(); /*<----------------*/
		Dock.addFn(); /*<-----------------*/
	
		for (var i = folderList.length - 1; i >= 0; i--) {
			Folder.addFn(i*130+30,window.innerWidth/4, folderList[i]);
		};

		var infoTemplate = "<div class='title'></div><div class='body'><div><img src="+ img.toolbarInfo +"  /></div><div>\
		<h1>"+"Jason welcomes you!"+"</h1>\
		<p>"+"Jason just finish Interaction Multimedia Management in Sheridan College.\
 Now He is available for you! He can draw. He can design. He can program!"+"</p>\
		<div class='plsopen'>Open work catalogue</div></div></div>";
		infoWindow.addFn(infoTemplate);
		infoWindow.drag();
		this.open();
	},
	open: function(){
		var a = document.querySelector('.plsopen');
		a.addEventListener("click", function(){
			var app = document.querySelector(".icons[data-id='icatalogue']");
			app.style.animation = "openApp 1.1s 4  ease";
			// app.style.width = width + "px";
			app.style.transform = "translate(0,0)";
			app.style.transiition = "all 0.5s ease";
			// document.querySelector(".dock").style.width = dockWidth+"px";
			// var _this = this;
			animated(app, function(){
				app.style.animation = "";
				 /*open safiri*/
				 console.log("openeeneennnnn!");
				Safari.addFn("http://sheng.design/catalogue","catalogue");
				Safari.close();
				Safari.max();
			})
			console.log("appppppp:", app);
			this.parentElement.parentElement.parentElement.remove();
		})
		console.log("a:::::",a);
	}

}

var Folder = {
	el: "",
	template: "",
	className: ["folder"],
	addFn: function(x,y, name){
		this.el = document.createElement("div");
		this.el.setAttribute("data-id", name.replace(" ", '').toLowerCase())

		console.log("jaosn");
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = "";

		var img = document.createElement("img");
		img.setAttribute("src", forderImg.folder);
		this.el.appendChild(img);

		var p = document.createElement("p");
		p.setAttribute("class", "title");
		p.textContent = name;
		this.el.appendChild(p);

		this.el.style.top = y+"px";
		this.el.style.left =x+"px";

		/*open folder*/
		this.el.addEventListener("dblclick", function(){
			console.log("folder:",this.textContent);
			var folderName = this.textContent;
			var id = folderName.replace(" ", "").toLowerCase();
			console.log("iddidididd", id);
			Finder.addFn(folderName, id);
		})

		Desktop.el.appendChild(this.el);
		this.drag();
		this.active();
	},
	drag: function(){
		var drag = false;
		this.el.addEventListener("mousedown", mousedown, true)
		function mousedown (e) {
			// console.log(this);
			var _this = this; 
			var _width = _this.getClientRects()[0].width;
			var _height = _this.getClientRects()[0].height;
			var _left = _this.getClientRects()[0].left;
			var _top = _this.getClientRects()[0].top;
			var _distanceX = e.clientX-_left;
			var _distanceY = e.clientY-_top;
			console.log(_distanceX);
			console.log(_distanceY);
			this.style.cursor = "default";
			// this.parentElement.style.zIndex += 20;
			window.onmousemove = function(e){
				// console.log("adasdasdasasdadsas");
				var _x = Math.max(e.clientX-_distanceX);
				var _y = Math.max(25,e.clientY-_distanceY);
				// var _window  = _this.parentElement;
				_this.style.top = _y+ "px";
				_this.style.left = _x + "px";
			}
		}
		this.el.addEventListener("mouseup", function(e){
			window.onmousemove = "";
		})
	},
	active:function(){
		var folders = document.querySelectorAll(".folder"); 
		for (var i = 0; i < folders.length; i++) {
			folders[i].addEventListener("click", function(){
				for (var j = 0; j < folders.length; j++) {
					folders[j].querySelector("img").classList.remove("activeFolder");
					folders[j].querySelector("p").classList.remove("activeFolderP");
				};
				this.querySelector('img').classList.add("activeFolder");
				this.querySelector('p').classList.add("activeFolderP");
			})
		};
		window.addEventListener("click", function(){
			var folders = document.querySelectorAll(".folder"); 
			for (var i = 0; i < folders.length; i++) {
				folders[i].querySelector("img").classList.remove("activeFolder");
				folders[i].querySelector("p").classList.remove("activeFolderP");
			}
		}, true)
	} 

}	

var Finder = {	
	el: "",
	className: ["window","finder"],
	addFn: function(folderName, folderid){
		this.el = document.createElement("div");
		this.el.classList.add(this.className[0]);
		this.el.classList.add(this.className[1]);
		this.el.innerHTML = "";
		this.el.style.top = "10px";
		this.el.style.left = "10px";
		this.el.style.zIndex = "1000";
		var title = document.createElement("div");
		title.setAttribute("class", "title");


/*--------------------------leftBtn--------------------------*/
		var leftBtns = document.createElement('div');
		leftBtns.classList.add("leftBtns");

		/*leftbtn*/
		for (var i = 0; i < leftBtnsImg.length; i++) {
			var btn = document.createElement("img");
			btn.setAttribute("src", leftBtnsImg[i]);
			btn.setAttribute("class", "btn"+i.toString());
			leftBtns.appendChild(btn);
		};

		leftBtns.addEventListener("mouseenter", function(){
			var c = this.children;
			for (var i = 0; i < c.length; i++) {
				c[i].setAttribute("src", leftBtnsImgHover[i])
			};
		}, true)

		leftBtns.addEventListener("mouseout", function(){
			var c = this.children;
			for (var i = 0; i < c.length; i++) {
				c[i].setAttribute("src", leftBtnsImg[i])
			};
		}, true)

		title.appendChild(leftBtns);

/*--------------------------Foldertitle--------------------------*/
		var folderTitle = document.createElement("div");
		folderTitle.classList.add("folderTitle");

		var folderTitleContainer = document.createElement('div');
		folderTitleContainer.classList.add("folderTitleContainer");
		folderTitleContainer.innerHTML = "<img src = "+forderImg.folder+" /> <p class = 'folderTitleP'>"+folderName+"</p>"
		folderTitle.appendChild(folderTitleContainer);		

		title.appendChild(folderTitle);


		var layoutBtn = document.createElement("div");

		layoutBtn.classList.add("layoutBtn");

		var block = document.createElement("div");
		block.innerHTML = "<img src="+ layoutBtnImg[0]+" />"
		layoutBtn.appendChild(block);
		block.classList.add("layoutclick");
		block.classList.add("block");

		var list = document.createElement("div");
		list.innerHTML = "<img src="+ layoutBtnImg[1]+" />"
		layoutBtn.appendChild(list);
		list.classList.add("layoutclick");
		list.classList.add("list");

		var swipe = document.createElement("div");
		swipe.innerHTML = "<img src="+ layoutActiveImg[2]+" />"
		layoutBtn.appendChild(swipe);
		swipe.classList.add("layoutclick");
		swipe.classList.add("swipe");

		title.appendChild(layoutBtn);



/*--------------------------FolderBody--------------------------*/
		var finderBody = document.createElement("div");
		finderBody.classList.add("finderBody");

		var leftPart = document.createElement("div");
		leftPart.classList.add("leftPart");

		/*----- left part content ----*/
		
		var that = this;
		for (var i = folderList.length - 1; i >= 0; i--) {
				var ll = document.createElement("div");
				ll.classList.add("ll")
				ll.textContent = folderList[i];
				if(folderList[i] == folderName){
					ll.classList.add("llactive")

				}

				ll.addEventListener("click", function(){
					var allLls  = document.querySelectorAll(".ll");
					for (var i = allLls.length - 1; i >= 0; i--) {
						allLls[i].classList.remove("llactive");
						// Finder.addFn(this.textContent, this.textContent.replace(" ", "").toLowerCase());

					};
					this.classList.add("llactive");
					var rp = this.parentElement.parentElement.querySelector(".rightPart");
					console.log(":thishishitishtishtsitsihtsith",  rp);
					rp.innerHTML = "";


					that.swipeLayout(this.parentElement.parentElement, this.textContent.replace(" ", "").toLowerCase());

					return

				})
				leftPart.appendChild(ll);
		};







		finderBody.appendChild(leftPart);
		var rightPart = document.createElement("div");
		rightPart.classList.add("rightPart");

		finderBody.appendChild(rightPart);

/*--------------------------resize Bar--------------------------*/
		
		for (var i = 0; i < 8; i++) {
			var resizeBar = document.createElement("div");
			resizeBar.classList.add("resizeBar"+ i.toString());						
			this.el.appendChild(resizeBar);
		};

		this.el.appendChild(title);
		this.el.appendChild(finderBody);
		Desktop.el.appendChild(this.el);

		/*call function */
		 Safari.max();
		 Safari.close();
		 // Safari.drag(this.el);
		 this.drag();
		 this.resize();
		 this.index();
		 this.activeLayout(folderid);

	},
	resize: function(){
		/*top bar*/
		var bar0 = document.querySelectorAll(".resizeBar0");
		for (var i = 0; i < bar0.length; i++) {
				bar0[i].addEventListener("mouseenter", function(){
				console.log(this.parentElement);
				var target = this.parentElement;
				this.style.cursor= "n-resize";
				this.addEventListener("mousedown", function(){
					var _top = target.getClientRects()[0].top;
					var _height = target.getClientRects()[0].height;
					document.body.style.cursor= "n-resize";
					window.onmousemove = function(e){
						var _targetHeight = _height+(_top-e.clientY);
						 _targetHeight = Math.max(200,  _targetHeight);
						target.style.height = _targetHeight+"px";/*√*/
						target.style.top = e.clientY +"px";
						target.getClientRects()[0].left = 0;
					}
				})
			})
		};
		/*bottom bar*/
		var bar2 = document.querySelectorAll(".resizeBar2");
		for (var i = 0; i < bar2.length; i++) {
				bar2[i].addEventListener("mouseenter", function(){
				console.log(this.parentElement);
				var target = this.parentElement;
				this.style.cursor= "s-resize";
				this.addEventListener("mousedown", function(){
					var _top = target.getClientRects()[0].top;
					var _height = target.getClientRects()[0].height;
					document.body.style.cursor= "s-resize";
					window.onmousemove = function(e){
						var _targetHeight = Math.max(0, e.clientY-_top);
						target.style.height = (e.clientY-_top)+"px";/*√*/
					// 	target.style.top = e.clientY +"px";
					// 	target.getClientRects()[0].left = 0;
					}
				})
			})
		};
		/*right bar*/
		var bar1 = document.querySelectorAll(".resizeBar1");
		for (var i = 0; i < bar1.length; i++) {
			bar1[i].addEventListener("mouseenter", function(){
			console.log(this.parentElement);
			var target = this.parentElement;
			this.style.cursor= "e-resize";
			this.addEventListener("mousedown", function(e){
				var _left = target.getClientRects()[0].left;
				document.body.style.cursor= "e-resize";
				window.onmousemove = function(e){
					var _targetWidth = Math.max(300,e.clientX-_left);
					target.style.width = _targetWidth+"px";/*√*/
				// 	target.style.top = e.clientY +"px";
				// 	target.getClientRects()[0].left = 0;
				}
			})
		})
		};
		/*left bar*/
		var bar3 = document.querySelectorAll(".resizeBar3");
		for (var i = 0; i < bar3.length; i++) {
			bar3[i].addEventListener("mouseenter", function(){
			console.log(this.parentElement);
			var target = this.parentElement;
			this.style.cursor= "w-resize";
			this.addEventListener("mousedown", function(e){
				var _left = target.getClientRects()[0].left;
				var _width= target.getClientRects()[0].width;
				var _top = target.getClientRects()[0].top;
				var _height = target.getClientRects()[0].height;
				document.body.style.cursor= "w-resize";
				window.onmousemove = function(e){
					var _targetWidth = Math.max(300,_width+(_left-e.clientX));
					target.style.width = _targetWidth+"px";/*√*/
					target.style.left = e.clientX +"px";
					// target.getClientRects()[0].left = 0;
				}
			})
		})
		};
		/*right top bar*/
		var bar4 = document.querySelectorAll(".resizeBar4");
		for (var i = 0; i < bar4.length; i++) {
			bar4[i].addEventListener("mouseenter", function(){
			console.log(this.parentElement);
			var target = this.parentElement;
			this.style.cursor= "nw-resize";
			this.addEventListener("mousedown", function(e){
				var _left = target.getClientRects()[0].left;
				var _width= target.getClientRects()[0].width;
				var _top = target.getClientRects()[0].top;
				var _height = target.getClientRects()[0].height;
				document.body.style.cursor= "nw-resize";
				window.onmousemove = function(e){
					/*left*/
					var _targetWidth = Math.max(300,_width+(_left-e.clientX));
					target.style.width = _targetWidth+"px";/*√*/
					target.style.left = e.clientX +"px";
					/*top*/
					var _targetHeight = _height+(_top-e.clientY);
					 _targetHeight = Math.max(200,  _targetHeight);
					target.style.height = _targetHeight+"px";/*√*/
					target.style.top = e.clientY +"px";
					target.getClientRects()[0].left = 0;
					
				}
			})
		})
		};
		var bar5 = document.querySelector(".resizeBar5");
		for (var i = 0; i < bar5.length; i++) {
			bar5[i].addEventListener("mouseenter", function(){
			console.log(this.parentElement);
			var target = this.parentElement;
			this.style.cursor= "ne-resize";
			this.addEventListener("mousedown", function(e){
				var _left = target.getClientRects()[0].left;
				var _width= target.getClientRects()[0].width;
				var _top = target.getClientRects()[0].top;
				var _height = target.getClientRects()[0].height;
					
				document.body.style.cursor= "ne-resize";
				window.onmousemove = function(e){
					// right
					var _targetWidth = Math.max(300,e.clientX-_left);
					target.style.width = _targetWidth+"px";/*√*/	


					/*top*/
					var _targetHeight = _height+(_top-e.clientY);
					 _targetHeight = Math.max(200,  _targetHeight);
					target.style.height = _targetHeight+"px";/*√*/
					target.style.top = e.clientY +"px";
					target.getClientRects()[0].left = 0;
					
				}
			})
		})
		};
		var bar6 = document.querySelectorAll(".resizeBar6");
		for (var i = 0; i < bar6.length; i++) {
			bar6[i].addEventListener("mouseenter", function(){
			console.log(this.parentElement);
			var target = this.parentElement;
			this.style.cursor= "se-resize";
			this.addEventListener("mousedown", function(e){
				var _left = target.getClientRects()[0].left;
				var _width= target.getClientRects()[0].width;
				var _top = target.getClientRects()[0].top;
				var _height = target.getClientRects()[0].height;
					
				document.body.style.cursor= "se-resize";
				window.onmousemove = function(e){
					// right
					var _targetWidth = Math.max(300,e.clientX-_left);
					target.style.width = _targetWidth+"px";/*√*/	


					/*top*/
					var _targetHeight = Math.max(0, e.clientY-_top);
					target.style.height = (e.clientY-_top)+"px";/*√*/
					
				}
			})
		})
		};
		var bar7 = document.querySelector(".resizeBar7");
		for (var i = 0; i < bar7.length; i++) {
			bar7[i].addEventListener("mouseenter", function(){
			console.log(this.parentElement);
			var target = this.parentElement;
			this.style.cursor= "sw-resize";
			this.addEventListener("mousedown", function(e){
				var _left = target.getClientRects()[0].left;
				var _width= target.getClientRects()[0].width;
				var _top = target.getClientRects()[0].top;
				var _height = target.getClientRects()[0].height;
					
				document.body.style.cursor= "sw-resize";
				window.onmousemove = function(e){
					// left
					var _targetWidth = Math.max(300,_width+(_left-e.clientX));
					target.style.width = _targetWidth+"px";/*√*/
					target.style.left = e.clientX +"px";


					/*bottom*/
					var _targetHeight = Math.max(0, e.clientY-_top);
					target.style.height = (e.clientY-_top)+"px";/*√*/
					
				}
			})
		})
		};
		window.addEventListener("mouseup", function(e){
			window.onmousemove = "";
			document.body.style.cursor= "default";
		})
	},
	drag: function(el){
		var drag = false;
		var titles = document.querySelectorAll(".title");
		for (var i = 0; i < titles.length; i++) {
			titles[i].addEventListener("mousedown", mousedown)
		};
		// document.querySelector(".title").addEventListener("mousedown", mousedown)
		function mousedown (e) {
			var _this = this; 
			var _width = _this.getClientRects()[0].width;
			var _height = _this.getClientRects()[0].height;
			var _left = _this.getClientRects()[0].left;
			var _top = _this.getClientRects()[0].top;
			var _distanceX = e.clientX-_left;
			var _distanceY = e.clientY-_top;
			console.log(_distanceX);
			console.log(_distanceY);
			this.style.cursor = "default";
			// this.parentElement.style.zIndex += 20;
			window.onmousemove = function(e){
				var _x = Math.max(e.clientX-_distanceX);
				var _y = Math.max(25,e.clientY-_distanceY);
				var _window  = _this.parentElement;
				_window.style.top = (_y)+ "px";
				_window.style.left = _x + "px";
			}
		}
		this.el.querySelector(".title").addEventListener("mouseup", function(e){
			window.onmousemove = "";
		})
	},

	index: function(){
		var windows = document.querySelectorAll(".window"); 
		for (var i = 0; i < windows.length; i++) {
			windows[i].addEventListener("mousedown", function(){
				for (var j = 0; j < windows.length; j++) {
					windows[j].style.zIndex = "10";
				};
				this.style.zIndex = "100";
			})
		};
	},

	activeLayout: function(folderid){
		var _this = this;
		var btns = this.el.querySelectorAll(".layoutclick");
		/*check the satus of layout*/
		for (var i = 0; i < btns.length; i++) {
			var temp = btns[i].querySelector('img').getAttribute("src");
			console.log("temp", new RegExp("active").test(temp));
			if(new RegExp("active").test(temp)){
				console.log("this:", this.el);
				this.swipeLayout(this.el, folderid)
			}
		}
		/*click to active*/
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener("click", function(){
				var target = this;
				for (var j = 0; j < btns.length; j++) {
					btns[j].querySelector('img').setAttribute("src", layoutBtnImg[j])
				};
				var src = this.querySelector("img").getAttribute("src");
				console.log("this.getAttribute",  new RegExp("swipe").test(src));
				var boss = target.parentElement.parentElement.parentElement;
				if(new RegExp("block").test(src)){
					_this.blockLayout(boss);
				}
				if(new RegExp("list").test(src)){
					_this.listLayout(boss);
				}
				if(new RegExp("swipe").test(src)){
					_this.swipeLayout(boss, folderid);
				}
				src = src.replace(".png", "-active.png")
				this.querySelector("img").setAttribute("src", src)
			})
		};
	},

	blockLayout: function(boss){
		console.log("block", boss);
		var t = boss.querySelector(".rightPart");
		t.innerHTML = "";
		t.textContent = "block"
	},

	listLayout: function(boss){
		console.log("list", boss);
		var t = boss.querySelector(".rightPart");
		t.innerHTML = "";
		t.textContent = "list"
	},

	swipeLayout: function(boss, folderid){
		console.log("swipe!!!!!!!", folderid);
		var t = boss.querySelector(".rightPart");
		t.innerHTML = "";
		// t.textContent  = "swipe"; 
/*-------------------  uP ------------------------*/
		var  up = document.createElement("div");
		up.classList.add("up");
		// up.textContent = "up";

		var imgContainer = document.createElement("ul");
		imgContainer.classList.add("imgContainer");
		var folderid = eval(folderid);
		for (var i = 0; i < folderid.length; i++) {
			var imgList = document.createElement("li");
			console.info(folderid[i]);
			imgList.innerHTML = "<img class='activeImg' src="+  folderid[i].src +" />"
			imgContainer.appendChild(imgList);
		};

		up.appendChild(imgContainer);
		t.appendChild(up);

/*-------------------  Down ------------------------*/
		var  down = document.createElement("div");
		down.classList.add("down");
		// down.textContent = "down";

		var downBar = document.createElement('div');
		downBar.classList.add("downBar");
		// downBar.textContent = "downBar";
		down.appendChild(downBar);

		var downList = document.createElement("div");
		downList.classList.add("downList");
		// downList.textContent = "downList";
		down.appendChild(downList);

		for (var i = 0; i < folderid.length; i++) {
			var downSingle = document.createElement("div");
			downSingle.setAttribute("data-id", i)
			downSingle.classList.add("downSingle");
			


			if(folderid[i].link){
				var a = document.createElement("div");
				a.setAttribute("href", folderid[i].link)
				a.classList.add("check");
				a.textContent = "check";
				a.addEventListener("click", function(){
					console.log("this.getAttribute('href')", this.getAttribute("href"));
					Safari.addFn(this.getAttribute("href"), this.getAttribute("href"));
					Safari.close();
					Safari.max();
					// Safari.drag();
					// Safari.resize();
					// Safari.index()
				})
				downSingle.appendChild(a);
			}



			var name = document.createElement("div");
			name.textContent = folderid[i].name;
			downSingle.appendChild(name);

			var date = document.createElement("div");
			date.textContent = folderid[i].date;
			downSingle.appendChild(date);

			var kind = document.createElement("div");
			kind.textContent = folderid[i].type;
			downSingle.appendChild(kind);


			downList.appendChild(downSingle);


		};





		t.appendChild(down);

		console.log("target,", t);

		this.swipe();
		this.clickDownList();
		this.activePic();
	},
	clickDownList: function(){
		var _this = this;
		var l = this.el.querySelectorAll(".downSingle");
		for (var i = 0; i < l.length; i++) {
			
			l[i].addEventListener('mousedown', function(){
				console.log("asdadasdasa", this.getAttribute("data-id"));
				console.log("flip",flip);
				var num = parseInt(this.getAttribute("data-id"));
				flip.flipster('jump',num)
				/*clean*/
				for (var i = 0; i < l.length; i++) {
					l[i].classList.remove("activeDownList");
					var words = l[i].children;
					for (var j = 0; j < words.length; j++) {
						words[j].style.color = '#656565';
					};
				};
				/*acttive blue bakground*/
				// var target = this.children[0].textContent;
				// console.log("target", target);
				// var pics = _this.el.querySelectorAll(".imgContainer div");
				// console.log("pics.", pics);
				// for (var i = 0; i < pics.length; i++) {
				// 	var temp = pics[i].innerHTML;
				// 	if(new RegExp(target).test(temp)){
				// 		var target = pics[i];
				// 		var offsetLeft = target.offsetLeft;
				// 		target.parentElement.parentElement.scrollLeft = offsetLeft-444;
				// 		// for (var i = 0; i < pics.length; i++) {
				// 		// 	pics[i].classList.remove("scale");
				// 		// };
				// 		// target.classList.add("scale");

				// 		setTimeout(function(){
				// 			var offsetLeft = target.offsetLeft;
							
				// 			var move = setInterval(function(){
				// 				target.parentElement.parentElement.scrollLeft+=1
				// 				if( target.parentElement.parentElement.scrollLeft == offsetLeft-300){
				// 					clearInterval(move)
				// 				}
				// 			}, 1)
				// 			console.log("ad11~~~~~~~");
				// 		}, 222)

				// 		break;
				// 	}
				// };

				this.classList.add("activeDownList");
				var words2 = this.children;
				for (var k = 0; k < words2.length; k++) {
					words2[k].style.color = "#f0f0f0";
				};
			}, false)
		};
		
		// this.el.addEventListener("keydown", function(e){
		// 	e.preventDefault();
		// 	console.log(e.keyCode);
		// })
	},
	swipe:function(){

		 flip = $('.up').flipster({
			itemContainer: 'ul',
			itemSelector: 'li',
			start: '0',
			style: 'flat',
			spacing: -0.25,
			click: true,
			keyboard: true
		});

	},
	activePic: function(){
		var pic =  document.querySelectorAll(".activeImg");
		console.log("pcipcipcipic,", pic);
		var _this = this;
		for (var i = pic.length - 1; i >= 0; i--) {
			pic[i].addEventListener("dblclick", function(){
				var src = this.getAttribute("src");
				// console.log("srcsrcccccc:", src);
				// var div = document.createElement("div");
				// div.innerHTML = "<img style='width:80%' src="+ src+" />"
				// div.style.position  = "absolute";
				// div.style.left  = "10%";
				// div.style.top  = "10%";
				// div.style.zIndex  = "10000000";
				// div.style.width  = window.innerWidth+ "px";
				// div.style.minHeight  = 300+ "px";
				// document.querySelector(".desktop").appendChild(div);
				_this.picWindow(src);
				Safari.close();
				Safari.max();
			})
		};
	},
	picWindow: function(src){
		var el = document.createElement("div");
		el.classList.add("picWindow");
		/*style*/
		el.style.width = window.innerWidth/1.3 + "px";
		el.style.height = window.innerHeight/1.2 + "px";
		// el.style.background = "red";
		el.classList.add(this.className[0]);
		el.classList.add(this.className[1]);

		var windows = document.querySelectorAll(".window"); 
		for (var j = 0; j < windows.length; j++) {
			windows[j].style.zIndex = "10";
		};

		/*open on the top*/
		el.style.zIndex = 100;
		el.innerHTML = "";

		var title = document.createElement("div");
		title.classList.add("title");


		/*-- temporay drag --*/
		var drag = false;
		
		title.addEventListener("mousedown", mousedown);
		
		function mousedown (e) {
			var _width = title.parentElement.getClientRects()[0].width;
			var _height = title.parentElement.getClientRects()[0].height;
			var _left = title.parentElement.getClientRects()[0].left;
			var _top = title.parentElement.getClientRects()[0].top;
			var _distanceX = e.clientX-_left;
			var _distanceY = e.clientY-_top;
			console.log("adandasdnNNUM", title.parentElement);
			console.log("adandasdnNNUM", title.parentElement);
			this.style.cursor = "default";
			// this.parentElement.style.zIndex += 20;
			window.onmousemove = function(e){
				var _x = Math.max(e.clientX-_distanceX);
				var _y = Math.max(25,e.clientY-_distanceY);
				var _window  = title.parentElement;
				_window.style.top = _y+ "px";
				_window.style.left = _x + "px";
			}
		}
		title.addEventListener("mouseup", function(e){
			window.onmousemove = "";
		})





		var leftBtns = document.createElement('div');
		leftBtns.classList.add("leftBtns");

		/*leftbtn*/
		for (var i = 0; i < leftBtnsImg.length; i++) {
			var btn = document.createElement("img");
			btn.setAttribute("src", leftBtnsImg[i]);
			btn.setAttribute("class", "btn"+i.toString());
			leftBtns.appendChild(btn);
		};

		leftBtns.addEventListener("mouseenter", function(){
			var c = this.children;
			for (var i = 0; i < c.length; i++) {
				c[i].setAttribute("src", leftBtnsImgHover[i])
			};
		}, true)

		leftBtns.addEventListener("mouseout", function(){
			var c = this.children;
			for (var i = 0; i < c.length; i++) {
				c[i].setAttribute("src", leftBtnsImg[i])
			};
		}, true)



		title.appendChild(leftBtns);/*<------add btn */

		/*resize bar*/
		for (var i = 0; i < 8; i++) {
			var resizeBar = document.createElement("div");
			resizeBar.classList.add("resizeBar"+ i.toString());						
			el.appendChild(resizeBar);
		};

		/*safariAddress*/
		var safariAddress = document.createElement("div");
		safariAddress.textContent = name;
		safariAddress.classList.add("safariAddress");
		title.appendChild(safariAddress);

		el.appendChild(title);

		/*tabs*/
		var safariTabs = document.createElement("div");
		safariTabs.classList.add("safariTabs");
		safariTabs.textContent = '';
		// el.appendChild(safariTabs);

		/*------- PIC conainer--------*/
		var PIC = document.createElement("div");
		PIC.classList.add("PIC");
		PIC.style.width ="100%";
		var img = document.createElement("img");
		img.setAttribute("src", src)
		img.style.width = "100%";
		PIC.appendChild(img);

		el.appendChild(PIC);		

		Desktop.el.appendChild(el);

	}


}

// child of Desktop
var ToolBar = {
	el: document.createElement("div"),
	template:"",
	className:['toolBar'],
	addFn: function(){
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = this.template;
		Desktop.el.appendChild(this.el);
		this.el.appendChild(toolBarMenu.el()) /*<-----------*/
		toolBarMenu.activeSideMenu()
		toolBarMenu.addSubmenu()
		
	}
}

var Dock = {
	el: document.createElement("div"),
	template: "",
	className: ["dock"],
	addFn: function(){
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = "";
		Desktop.el.appendChild(this.el);
		DockIcon.addFn();
		this.hover();
	},
	hover: function(){
		var icons = document.querySelectorAll(".icons");
		var width = document.querySelector(".icons").getClientRects()[0].width;
		var dockWidth = document.querySelector(".dock").getClientRects()[0].width;
		var l = 8;
		var m = 5;
		var h = -3;
		var mh = -1.5;
		/*hover icone*/
		for (var i = 0; i < icons.length; i++) {
			icons[i].addEventListener("mouseenter", function(e){


				console.log(this.nextSibling);
				console.log(this.previousSibling);
				if(this.nextSibling){
					this.nextSibling.style.width = m + "rem"
					this.nextSibling.style.transform = "translate(0,"+mh+"em)"
				}
				if(this.previousSibling){
					this.previousSibling.style.width = m + "rem"
					this.previousSibling.style.transform = "translate(0,"+mh+"em)"
				}
				this.style.transition = "all 0.3s ease";
				this.style.transform = "translate(0,"+h+"em)";
				this.style.width = l+"rem";
				document.querySelector(".dock").style.width = dockWidth*1.2+"px";
			})
			icons[i].addEventListener("mouseout", function(e){
				if(this.nextSibling){
					this.nextSibling.style.width = width*1.3+"px";
					this.nextSibling.style.transform = "translate(0,0)"
				}
				if(this.previousSibling){
					this.previousSibling.style.width = width*1.3+"px";
					this.previousSibling.style.transform = "translate(0,0)"
				}
				this.style.width = width*1.3 + "px";
				this.style.transform = "translate(0,0)";
				this.style.transiition = "all 0.5s ease";
				document.querySelector(".dock").style.width = dockWidth+"px";

			})

			/* open safari */
			icons[i].addEventListener('click', function(){
				console.log("this.dataset.id", this.dataset.id);
				var dd = this.dataset.id;
				var _this = this;
				var url = function(){
					switch(dd) {
					    case "icarrental":
					        return ["http://sheng.design/intro-carrental/", "Car Rental"]
					        break;
					    case "icatalogue":
					        return ["http://sheng.design/catalogue/", "Catalogue"];
					        break;
					    case "ispace":
					        return ["http://sheng.design/intro-spacexyz/", "Space"];
					        break;
					    case "iform":
					        return ["http://sheng.design/intro-form/", "Form"];
					        break;
					    case "iresume":
					        return ["http://sheng.design/intro-resume/", "resume"];
					        break;
					    case "iragdoll":
					        return ["http://sheng.design/intro-ragdoll/", "Ragdoll"];
					        break;
					    case "idevgo":
					        return ["http://sheng.design/intro-devgo/", "DevGo"];
					        break;
					    case "githubIcon":
					        	window.open("https://github.com/minmingsheng", '_blank'); 
					        	console.log("asdasdasddasdasdasdsadasdasd");
					        return [null, null];
					        break;
					    case "LinkedIcon":
					       		window.open("https://ca.linkedin.com/in/minming-sheng-9b1746b2", "_blank"); 
					    	return [null, null];
					        break;
					    case "finderIcon":
					    	
					    	console.log("document.querySelectorAll(folder)", document.querySelectorAll(".folder"));
					    	var ss = _this.getClientRects()[0].width;
					    	_this.style.width = width + "px";
					    	_this.style.transform = "translate(0,0)";
					    	_this.style.transiition = "all 0.1s ease";
					    	var folders =  document.querySelectorAll(".folder")
					    	for (var i = folders.length - 1; i >= 0; i--) {
					    		folders[i].classList.toggle("none");
					    	};
					    	_this.style.animation = " !important";

					    	return [null, null];
					        break;
					    default:
					    return "http://sheng.design/intro-carrental/"
					}
				};
				url();
				if(dd== 'finderIcon' || dd=="githubIcon" ||dd == "LinkedIcon"){
					return
				}
				this.style.animation = "openApp 1.1s 4  ease";
				if(this.nextSibling){
					this.nextSibling.style.width = width+"px";
					this.nextSibling.style.transform = "translate(0,0)"
				}
				if(this.previousSibling){
					this.previousSibling.style.width = width+"px";
					this.previousSibling.style.transform = "translate(0,0)"
				}
				this.style.width = width + "px";
				this.style.transform = "translate(0,0)";
				this.style.transiition = "all 0.5s ease";
				document.querySelector(".dock").style.width = dockWidth+"px";
				var _this = this;
				animated(this, function(){
					_this.style.animation = "";
					 /*open safiri*/
					Safari.addFn(url()[0],url()[1]);
					Safari.close();
					Safari.max();
				})
			})
		};
	}
}

var Safari = {
	// el: document.createElement("div"),
	className: ["window", "safari"],
	addFn: function(url, name){
		if(url == null){
			return;
		}
		if(name == null){
			return;
		}
		/*window*/
		var el = document.createElement("div");
		/*style*/
		el.style.width = window.innerWidth/1.3 + "px";
		el.style.height = window.innerHeight/1.2 + "px";
		// el.style.background = "red";
		el.classList.add(this.className[0]);
		el.classList.add(this.className[1]);

		var windows = document.querySelectorAll(".window"); 
		for (var j = 0; j < windows.length; j++) {
			windows[j].style.zIndex = "10";
		};

		/*open on the top*/
		el.style.zIndex = 100;
		el.innerHTML = "";

		var title = document.createElement("div");
		title.classList.add("title");

		var leftBtns = document.createElement('div');
		leftBtns.classList.add("leftBtns");

		/*leftbtn*/
		for (var i = 0; i < leftBtnsImg.length; i++) {
			var btn = document.createElement("img");
			btn.setAttribute("src", leftBtnsImg[i]);
			btn.setAttribute("class", "btn"+i.toString());
			leftBtns.appendChild(btn);
		};

		leftBtns.addEventListener("mouseenter", function(){
			var c = this.children;
			for (var i = 0; i < c.length; i++) {
				c[i].setAttribute("src", leftBtnsImgHover[i])
			};
		}, true)

		leftBtns.addEventListener("mouseout", function(){
			var c = this.children;
			for (var i = 0; i < c.length; i++) {
				c[i].setAttribute("src", leftBtnsImg[i])
			};
		}, true)



		title.appendChild(leftBtns);/*<------add btn */

		/*resize bar*/
		for (var i = 0; i < 8; i++) {
			var resizeBar = document.createElement("div");
			resizeBar.classList.add("resizeBar"+ i.toString());						
			el.appendChild(resizeBar);
		};

		/*safariAddress*/
		var safariAddress = document.createElement("div");
		safariAddress.textContent = name;
		safariAddress.classList.add("safariAddress");
		title.appendChild(safariAddress);

		el.appendChild(title);

		/*tabs*/
		var safariTabs = document.createElement("div");
		safariTabs.classList.add("safariTabs");
		safariTabs.textContent = '';
		// el.appendChild(safariTabs);

		var safariFrame = document.createElement("iframe");
		safariFrame.classList.add("safariFrame");
		safariFrame.setAttribute("src", url)
		safariFrame.textContent = 'this safariFrame';
		el.appendChild(safariFrame);		

		Desktop.el.appendChild(el);
		this.drag(el);
		this.index();
		Finder.resize();

	},
	drag: function(el){
		var drag = false;
		var titles = el.querySelectorAll(".title")
		for (var i = titles.length - 1; i >= 0; i--) {
			titles[i].addEventListener("mousedown", mousedown);
		};
		
		function mousedown (e) {
			var _this = this; 
			var _width = _this.getClientRects()[0].width;
			var _height = _this.getClientRects()[0].height;
			var _left = _this.getClientRects()[0].left;
			var _top = _this.getClientRects()[0].top;
			var _distanceX = e.clientX-_left;
			var _distanceY = e.clientY-_top;
			console.log(_distanceX);
			console.log(_distanceY);
			this.style.cursor = "default";
			// this.parentElement.style.zIndex += 20;
			window.onmousemove = function(e){
				var _x = Math.max(e.clientX-_distanceX);
				var _y = Math.max(25,e.clientY-_distanceY);
				var _window  = _this.parentElement;
				_window.style.top = _y+ "px";
				_window.style.left = _x + "px";
			}
		}
		el.querySelector(".title").addEventListener("mouseup", function(e){
			window.onmousemove = "";
		})
	},
	index: function(){
		var windows = document.querySelectorAll(".window"); 
		for (var i = 0; i < windows.length; i++) {
			windows[i].addEventListener("mousedown", function(){
				for (var j = 0; j < windows.length; j++) {
					windows[j].style.zIndex = "10";
				};
				this.style.zIndex = "100";
			})
		};
	},
	close: function(){
		var closes = document.querySelectorAll(".btn0");
		for (var i = 0; i < closes.length; i++) {
			closes[i].addEventListener("click", function(){
				/*close window*/
				this.parentElement.parentElement.parentElement.remove();
			})
		};
	},
	max: function(){
		var max = document.querySelectorAll(".btn2");
		var maxB = false;
		var _top;
		var _left;
		var _width;
		var _height;
		for (var i = 0; i < max.length; i++) {
			max[i].addEventListener("click", function(){
				/*max window*/
				if(!maxB){
					_left = this.parentElement.parentElement.parentElement.getClientRects()[0].left;
					_top = this.parentElement.parentElement.parentElement.getClientRects()[0].top;
					_width = this.parentElement.parentElement.parentElement.getClientRects()[0].width;
					_height = this.parentElement.parentElement.parentElement.getClientRects()[0].height;
					console.log("temp",_left);
					console.log("temp",_top);
					this.parentElement.parentElement.parentElement.style.transition = "all 0.4s ease";
					this.parentElement.parentElement.parentElement.style.width = window.innerWidth+ "px";
					this.parentElement.parentElement.parentElement.style.height = (window.innerHeight-60) + "px";
					this.parentElement.parentElement.parentElement.style.top = 0+ "px";
					this.parentElement.parentElement.parentElement.style.left = 0+ "px";
					var _this = this;
					setTimeout(function(){
						_this.parentElement.parentElement.parentElement.style.transition = "all 0s ease";
					},1001)
					maxB =true;
				}else{
					this.parentElement.parentElement.parentElement.style.transition = "all 0.4s ease";
					this.parentElement.parentElement.parentElement.style.width = window.innerWidth/2+ "px";
					this.parentElement.parentElement.parentElement.style.top = _top+ "px";
					this.parentElement.parentElement.parentElement.style.left = _left+ "px";
					this.parentElement.parentElement.parentElement.style.width = _width+ "px";
					this.parentElement.parentElement.parentElement.style.height = _height+ "px";
					var _this = this;
					setTimeout(function(){
						_this.parentElement.parentElement.parentElement.style.transition = "all 0s ease";
					},1001)
					maxB =false;
				}

			})
		};
	}
}


var DockIcon = {
	addFn: function(){
		/*create icon*/
		var el = document.createElement("div");
		el.classList.add("iconContainer");
		for (var i = 0; i < icons.length; i++) {
			var li = document.createElement("div");
			li.classList.add("icons");	
			var id = icons[i].replace(".png", '');
			id = id.replace("images/", '');
			li.setAttribute("data-id", id);
			var img = document.createElement('img');
			img.setAttribute("src", icons[i]);
			li.appendChild(img);
			var dot = document.createElement("div");
			dot.classList.add("dot");
			li.appendChild(dot)
			el.appendChild(li);
		};
		Dock.el.appendChild(el);
	},

}
// child of ToolBar
var toolBarMenu = {
	leftTemplate: "<div><img src=" + img.apple + "  /></div><div>jasonOS</div><div>File</div><div style='opacity:0.4'>View</div><div>Go</div><div style='opacity:0.4'>Window</div><div>About Me</div>",
	rightTemplate: "<div class='day'>Tue</div><div class='month'>Apr</div><div class='realtime'>00:00:00</div><div><img src="+ img.ampifier +" style='opacity:0.4' /></div><div><img class='sidemenu' src="+ img.sidemenu +"  /></div>",
	el : function(){
		var el = document.createElement("div");
		el.setAttribute("class", "menu")
		el.innerHTML = "<div>"+this.leftTemplate+"</div>";
		el.innerHTML += "<div>"+this.rightTemplate+"</div>";
		return el;
	},
	activeSideMenu: function(){
		var t = document.querySelector(".sidemenu");
		t.addEventListener("click", onclick);
		
		var toggle = true;


		function onclick(){
			if(toggle){
				/*open slide menu*/
				sideMenu.addFn();
				setTimeout(function(){
				sideMenu.el.style.right = '0';
				}, 2);
				toggle = false;
			}else{
				/*close slide menu*/
				sideMenu.el.style.right = -sideMenu.el.getClientRects()[0].width+"px";
				toggle = true
			}
			
		}
		this.realTime();
	},
	realTime: function(){
		var days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		var months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var currentTime = new Date();
		console.log(days[currentTime.getDay()]);
		console.log(months[currentTime.getMonth()]);
		document.querySelector(".day").innerHTML = days[currentTime.getDay()];
		document.querySelector(".month").innerHTML = months[currentTime.getMonth()];
		setInterval(function(){
			var currentTime = new Date();
			var hours = function(){
				if(parseInt(currentTime.getHours())<10){
					return "0"+currentTime.getHours();
				}else{
					return currentTime.getHours();
				};
			}
			var minutes =function(){
				if(parseInt(currentTime.getMinutes())<10){
					return "0"+currentTime.getMinutes();
				}else{
					return currentTime.getMinutes();
				};
			}
		   	var seconds = function(){
				if(parseInt(currentTime.getSeconds())<10){
					return "0"+currentTime.getSeconds();
				}else{
					return currentTime.getSeconds();
				};
			}
			document.querySelector('.realtime').innerHTML =hours() +":"+minutes()+":"+ seconds(); 		
		}, 1000)
	},
	addSubmenu: function(){
		var menu = document.querySelector(".menu");
		var go = true;
		var about = true;
		menu = menu.children[0].children;
		for (var i = 0; i < menu.length; i++) {
			// menu[i].classList.add("submenu");
			console.log(menu[i].textContent);
			menu[i].addEventListener("click", function(){
				console.log("document.querySelectorAll('submenu')",document.querySelectorAll('.submenu'));
				var submenus = document.querySelectorAll('.submenu');
				/*-------go------------*/
				if(this.textContent == "Go"){
					/*toggle bakground*/
					this.classList.toggle("blue");

					var sub = document.createElement("div");
					sub.classList.add("Go");
					/*====sub style===*/
					var btnLeft = this.getClientRects()[0].left;
					sub.style.left = btnLeft+ "px";
					/*====add child el( populate go list)=====*/
					for (var i = 0; i < goList.length; i++) {
						var subli = document.createElement("div");
						subli.innerHTML = "<img src='images/link-09.png' \
						 />"
						var p = document.createElement("a");
						p.textContent = goList[i].name;
						p.classList.add("go");
						p.setAttribute("href", goList[i].link);
						p.setAttribute("target", "_blank");
						subli.appendChild(p);
						sub.appendChild(subli);
					};
					sub.classList.add("submenu");
					if(go){
						document.querySelector(".desktop").appendChild(sub);
						go = false;
					}else{
						document.querySelector(".submenu").remove();
						go = true;
					}
					
				}	
				/*---------about me--------*/
				if(this.textContent == "About Me"){
					/*toggle bakground*/
					this.classList.toggle("blue");

					var sub = document.createElement("div");
					sub.classList.add("About");

					/*====sub style===*/
					var btnLeft = this.getClientRects()[0].left;
					sub.style.left = btnLeft+ "px";
					/*====add child el( populate go list)=====*/
					for (var i = 0; i < aboutList.length; i++) {
						var subli = document.createElement("a");

						subli.innerHTML = "";
						var p = document.createElement("div");
						p.textContent = aboutList[i].name;
						p.classList.add("aboutme");
						subli.setAttribute("data-des", aboutList[i].des);
						
						subli.addEventListener("click", function(){
							var infoTemplate = "<div class='title'></div><div class='body'><div><img src="+ img.toolbarInfo +"  /></div><div>\
							<h1>"+this.textContent+"</h1>\
							<p>"+this.getAttribute("data-des")+"</p>\
							<button>ok</button></div></div>";
							infoWindow.addFn(infoTemplate);
							infoWindow.buttonFn();
							infoWindow.drag();
						})

						
						subli.appendChild(p);
						sub.appendChild(subli);

					};
					sub.classList.add("submenu");
					if(about){
						document.querySelector(".desktop").appendChild(sub);
						about = false;
					}else{
						document.querySelector(".submenu").remove();
						about = true;
					}
					
				}	
				if(this.textContent == "jasonOS"){
					/*toggle bakground*/
					this.classList.toggle("blue");

					var sub = document.createElement("div");
					sub.classList.add("Jason");

					/*====sub style===*/
					var btnLeft = this.getClientRects()[0].left;
					sub.style.left = btnLeft+ "px";
					/*====add child el( populate go list)=====*/
					for (var i = 0; i < jasonOS.length; i++) {
						var subli = document.createElement("div");
						subli.innerHTML = "<img src='images/questionMark-23.png' \
						 />"

						var p = document.createElement("a");
						p.textContent = jasonOS[i].name;
						p.setAttribute("data-des", jasonOS[i].des);
						
						p.addEventListener("click", function(){
							var infoTemplate = "<div class='title'></div><div class='body'><div><img src="+ img.portrait +"  /></div><div>\
							<h1>"+this.textContent+"</h1>\
							<p>"+this.getAttribute("data-des")+"</p>\
							<button>ok</button></div></div>";
							infoWindow.addFn(infoTemplate);
							infoWindow.buttonFn();
							infoWindow.drag();
						})

						subli.appendChild(p);
						sub.appendChild(subli);
					};
					sub.classList.add("submenu");
					if(go){
						document.querySelector(".desktop").appendChild(sub);
						go = false;
					}else{
						document.querySelector(".submenu").remove();
						go = true;
					}
					
				}	

				/*---------File------------*/
				if(this.textContent == "File"){
					/*toggle bakground*/
					this.classList.toggle("blue");

					var sub = document.createElement("div");
					sub.classList.add("File");

					/*====sub style===*/
					var btnLeft = this.getClientRects()[0].left;
					sub.style.left = btnLeft+ "px";
					/*====add child el( populate go list)=====*/
					for (var i = 0; i < fileList.length; i++) {
						var subli = document.createElement("div");
						subli.innerHTML = "<img src='images/link-09.png' \
						 />"
						var p = document.createElement("a");
						p.textContent = fileList[i].name;
						p.setAttribute("href", fileList[i].link);
						p.setAttribute("target", "_blank");
						p.setAttribute("class", "file");
						subli.appendChild(p);
						sub.appendChild(subli);
					};
					sub.classList.add("submenu");
					if(go){
						document.querySelector(".desktop").appendChild(sub);
						go = false;
					}else{
						document.querySelector(".submenu").remove();
						go = true;
					}
					
				}	

				/*layout line*/
				var aboutmes = document.querySelectorAll(".aboutme");
				for (var i = aboutmes.length - 1; i >= 0; i--) {
					if (aboutmes[i].textContent == "Contact") {
						console.log("aboutmes[i]ssssss", aboutmes[i].parentElement);	
						aboutmes[i].parentElement.style.marginTop = "0.3em";
						aboutmes[i].parentElement.style.paddingBottom = "0.8em";
						aboutmes[i].parentElement.style.borderBottom = "2px solid rgba(225,225,225,0.5)";
					};

					if (aboutmes[i].textContent == "Good education") {
						console.log("aboutmes[i]ssssss", aboutmes[i].parentElement);	
						aboutmes[i].parentElement.style.marginTop = "0.8em";
						// aboutmes[i].parentElement.style.paddingBottom = "0.3em";
						// aboutmes[i].parentElement.style.borderBottom = "3px solid #fff";
					};

					if (aboutmes[i].textContent == "Based in Toronto") {
						console.log("aboutmes[i]ssssss", aboutmes[i].parentElement);	
						aboutmes[i].parentElement.style.marginTop = "0.3em";
						aboutmes[i].parentElement.style.paddingBottom = "0.8em";
						aboutmes[i].parentElement.style.borderBottom = "2px solid rgba(225,225,225,0.5)";
					};
					if (aboutmes[i].textContent == "UX/UI designer") {
						console.log("aboutmes[i]ssssss", aboutmes[i].parentElement);	
						aboutmes[i].parentElement.style.marginTop = "0.8em";
					};
				};
				var gos = document.querySelectorAll(".go");
				// console.log("gos", gos);
				for (var i = gos.length - 1; i >= 0; i--) {
					if(gos[i].textContent == "Project Catalogue"){
						gos[i].parentElement.style.marginTop = "0.3em";
						gos[i].parentElement.style.paddingBottom = "0.8em";
						gos[i].parentElement.style.borderBottom = "2px solid rgba(225,225,225,0.5)";
					}
					if(gos[i].textContent == "Resume"){
						gos[i].parentElement.style.marginTop = "0.8em";
						gos[i].parentElement.style.paddingBottom = "0.8em";
						gos[i].parentElement.style.borderBottom = "2px solid rgba(225,225,225,0.5)";
					}
					if(gos[i].textContent == "Linkedin"){
						gos[i].parentElement.style.marginTop = "0.8em";
					}
				};

				var files = document.querySelectorAll(".file");
				for (var i = files.length - 1; i >= 0; i--) {
					if (files[i].textContent == "Watch App design.pdf") {
						console.log("files[i]ssssss", files[i].parentElement);	
						files[i].parentElement.style.marginTop = "0.3em";
						files[i].parentElement.style.paddingBottom = "0.8em";
						files[i].parentElement.style.borderBottom = "2px solid rgba(225,225,225,0.5)";
					};

					if (files[i].textContent == "Case study.pdf") {
						console.log("files[i]ssssss", files[i].parentElement);	
						files[i].parentElement.style.marginTop = "0.8em";
						// files[i].parentElement.style.paddingBottom = "0.3em";
						// files[i].parentElement.style.borderBottom = "3px solid #fff";
					};

					if (files[i].textContent == "Interface critique.pdf") {
						console.log("files[i]ssssss", files[i].parentElement);	
						files[i].parentElement.style.marginTop = "0.3em";
						files[i].parentElement.style.paddingBottom = "0.8em";
						files[i].parentElement.style.borderBottom = "2px solid rgba(225,225,225,0.5)";
					};
					if (files[i].textContent == "Kiosk Design.pdf") {
						console.log("files[i]ssssss", files[i].parentElement);	
						files[i].parentElement.style.marginTop = "0.8em";
					};
				};
			})
			
		};
		console.log("menu.children:", menu);
	},


}
// child of Desktop
var sideMenu = {
	el: document.createElement("div"),
	className: ["slideMenu"],
	addFn: function(){

		this.el.classList.add(this.className[0])
		this.el.innerHTML = "";
		Desktop.el.appendChild(this.el);
		this.el.appendChild(sideMenuTab.addFn());/*<-----------------*/
		var today = document.querySelector(".today");
		var notifications = document.querySelector(".notifications");
		var tabs = [today,notifications];
		today.addEventListener("click", onMouseDownT);
		notifications.addEventListener("click", onMouseDownN);
		function onMouseDownT(){
			console.log("todayContainer.el",todayContainer.el);
			var b = new RegExp("activeTab").test(this.className);
			if(b){
				//when today tab already actived, set light color when active
				if (tabToday) {
					this.addEventListener("mousedown", function(){
						this.classList.add('tabBackgrond')
					})
					this.addEventListener("mouseup", function(){
						this.classList.remove('tabBackgrond')
					})
				}else{
					return
				};
				return
			}else{
				this.classList.add("activeTab");
				notifications.classList.remove("activeTab");
				tabToday = true;
				todayContainer.el.style.display = "block";
				tabNotifications = false;
			}
		}
		function onMouseDownN(){
			var b = new RegExp("activeTab").test(this.className);
			if(b){
				//when today tab already actived, set light color when active
				if (tabNotifications) {
					this.addEventListener("mousedown", function(){
						this.classList.add('tabBackgrond')
					})
					this.addEventListener("mouseup", function(){
						this.classList.remove('tabBackgrond')
					})
				}else{
					return
				};
				return
			}else{
				this.classList.add("activeTab");
				today.classList.remove("activeTab");
				tabToday = false;
				todayContainer.el.classList.add("dispear");
				animated(todayContainer.el, function(){
					todayContainer.el.style.display = 'none';
					todayContainer.el.classList.remove("dispear");
				})
				tabNotifications = true;
			}
		}
		this.el.appendChild(todayContainer.addFn());/*<------------------*/
		/*from child(titlebody)*/
		todayBody.clickQuestionFn();
	}
}

// child of sidemenu
var sideMenuTab = {
	el: document.createElement("div"),
	className : ["sideMenuTab"],
	addFn: function(){
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = "<div class='today activeTab'>Me</div><div class='notifications'>Notifications</div>";
		return this.el;
	}
}

// child of sidemenu
var todayContainer = {
	el: document.createElement("div"),
	className : ["todayContainer"],
	addFn: function(){
		this.el.classList.add(this.className[0]);
		this.el.innerHTML = "<div class='resume-title'><div>Resume</div></div>";
		this.el.appendChild(todayBody.el())
		this.el.appendChild(todayTitle.addFn()) /*<-----------*/
		return this.el;
	}
}
var todayBody = {
	el: function(){
		var el = document.createElement("div");
		el.innerHTML = "<h1>Jason Sheng (Available)</h1>"
		el.innerHTML += "<p>Interdisciplinary Designer <span class='interQuestion' ><img src="+ img.questionMark+ "  /></span></p>"
		el.innerHTML += "<p>Based In Toronto</p>"
		el.classList.add("todayBody");

		return el;
	},
	clickQuestionFn: function(){
		document.querySelector('.interQuestion').addEventListener("click", function	(){
			var infoTemplate = "<div class='title'></div><div class='body'><div><img src="+ img.toolbarInfo +"  /></div><div>\
		<h1>I'm an Interdisciplinary Designer</h1><p>Interdisciplinary designers' areas are never limited, they use design thinking to define and solve problems. They are T-shape designers </p><button>ok</button></div></div>";
			infoWindow.addFn(infoTemplate);
			infoWindow.buttonFn();
			infoWindow.drag();
		})
	}
}

var titles = ["Education","Proficiencies","Personal Skill"];
//child of todayContainer
var todayTitle = {
	el: document.createElement("div"),
	className : ["todayTitle"],
	addFn: function(){
		var resume ;
		this.el.classList.add(this.className[0]);
		var inner;
		this.el.innerHTML = "";
		var _this = this;
		ajax("resume.json", function(xhttp){
			resume = JSON.parse(xhttp.responseText);
			console.log(resume);
			for(var prop in resume){
				var title = document.createElement("div");
				title.classList.add(prop.replace(" ", ''));
				title.classList.add("todayTitles");
				title.innerHTML = "<h1>"+prop+"</h1>";/*<-----------*/
				if(prop == "Education"){
					var text = document.createElement("div");
					resume[prop].map(function(e){
						var eudlists = document.createElement('div');
						// eudlists.textContent = e;
						for(var a in e){
							var li = document.createElement("div");
							li.textContent = e[a];
							eudlists.appendChild(li)
						}
						text.appendChild(eudlists);
					})
					title.appendChild(text);

				}else if(prop == "Proficiencies"){
					console.log("Proficiencies:", resume[prop]);
					var text = document.createElement("div");
					text.classList.add("pros");
					for(var prolist in resume[prop]){
						/*get title of proficiency, eg: Graphic/programming/other*/
						console.log("prolist:", resume[prop][prolist]);
						var prolistEl =  document.createElement("div");
						prolistEl.innerHTML = "<h5>"+prolist+"</h5>";
						resume[prop][prolist].map(function(e){
							var li = document.createElement("div");
							li.textContent = e;
							prolistEl.appendChild(li);
						})
						text.appendChild(prolistEl);
					}
					title.appendChild(text);
				}else{
					for(var sub in resume[prop]){
						var text = document.createElement("div");
						text.textContent = resume[prop][sub];
						title.appendChild(text);
					}	
				}
				
				_this.el.appendChild(title);	
			}
		});

		return this.el;
	}
}

/******************************* winddow ******************************/
var infoWindow = {
	el: document.createElement("div"),
	className: ["window", "info-window"],
	addFn: function(temp){
		this.el.classList.add(this.className[0]);
		this.el.classList.add(this.className[1]);
		this.el.style.top = "30%"
		this.el.style.left = "30%";
		this.el.innerHTML = temp;
		Desktop.el.appendChild(this.el);
	},
	buttonFn: function(){
		this.el.querySelector("button").addEventListener("click", function(){
			this.parentElement.parentElement.parentElement.remove();
		})
	},
	drag: function(){
		var drag = false;
		this.el.querySelector(".title").addEventListener("mousedown", mousedown)
		function mousedown (e) {
			var _this = this; 
			var _width = _this.getClientRects()[0].width;
			var _height = _this.getClientRects()[0].height;
			var _left = _this.getClientRects()[0].left;
			var _top = _this.getClientRects()[0].top;
			var _distanceX = e.clientX-_left;
			var _distanceY = e.clientY-_top;
			console.log(_distanceX);
			console.log(_distanceY);
			this.style.cursor = "default";
			// this.parentElement.style.zIndex += 20;
			window.onmousemove = function(e){
				var _x = Math.max(e.clientX-_distanceX);
				var _y = Math.max(25,e.clientY-_distanceY);
				var _window  = _this.parentElement;
				_window.style.top = _y+ "px";
				_window.style.left = _x + "px";
			}
		}
		this.el.querySelector(".title").addEventListener("mouseup", function(e){
			window.onmousemove = "";
		})
	}
}

// ****************************************************************************
// *                                  render                                  *
// ****************************************************************************

LoadingPage.addFn();



// ****************************************************************************
// *                                  helper                                  *
// ****************************************************************************

function animated(el, fn){
	el.addEventListener("webkitAnimationEnd", fn,false);
	el.addEventListener("animationend", fn,false);
	el.addEventListener("oanimationend", fn,false);
}

function ajax(url, fn){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      	fn(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

