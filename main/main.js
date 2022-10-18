var navList = ["Journal", "Education", "Contact"];
var device = "pc";
var navList2 = [];
const descList = ["Sharing information", "My study life", "Contact info"];

function removeNavList() {
	for (let i = 0; i < navList.length; i++) {
		var navItem = document.getElementById(navList[i]);
		navItem.style.transition = "all .2s";
		navItem.style.opacity = "0";
		
		setTimeout(function() {
			navItem.remove();
		},200);
	}
}

function makeNavListVisible() {
	for (let i = 0; i < navList.length; i++) {
		var navItem = document.getElementById(navList[i]);
		navItem.style.transition = "all .2s";
		navItem.style.opacity = "1";
	}
}

function makeNavListInvisible() {
	for (let i = 0; i < navList.length; i++) {
		var navItem = document.getElementById(navList[i]);
		navItem.style.transition = "all .2s";
		navItem.style.opacity = "0";
	}
}

currentNavItem = "Journal";
function addCardEvents() {
	document.getElementById('left').onclick = function(e) {
		if (device == "mobile") {
			var close = document.createElement("h1");
			close.style = "opacity: 0; font-weight: 100; cursor: pointer; transition: all .2s; position: absolute; color: white; backgound-color: black; font-size: 50px; right: 50px; top: 20px; font-family: Open Sans";
			close.innerText = "<";
			
			var drawer = document.createElement("div");
			drawer.style = "position: absolute; left: 0; top: 0; bottom: 0; background-color: black; transition: all 1s;";
			drawer.id = "drawer";

			navList2 = [];

			(function () {
				for (let x = 0; x < navList.length; x++) {
					var navItem = document.createElement("h1");
					navItem.style = "opacity: 0; cursor: pointer; position: absolute; padding-left: 20px; font-weight: 300; font-size: 50px; font-family: Catamaran; left: 34px; color: rgba(255,255,255,.5);";
					navItem.style.top = "100px";
					navItem.style.marginTop = (x*75).toString() + "px";
					navItem.id = navList[x].toString();
					navItem.innerText = navList[x];

					if (navItem.id == currentNavItem) {
						navItem.style.color = "white";
					}

					drawer.appendChild(navItem);
					navList2.push(navItem);
				}

				for (let y = 0; y < navList2.length; y++) {
					navList2[y].onclick = function() {
						if (navList2[y].id !== currentNavItem) {
							document.getElementById(currentNavItem).style.color = "rgba(255,255,255,.5)";

							navList2[y].style.color = "white";
							currentNavItem = navList2[y].id;

							document.getElementById('right').innerText = navList2[y].id;
							document.getElementById('desc').innerText = descList[y];

							console.log(navList2[y].id);
							if (navList2[y].id === "Journal") {
								showLoaded();
							}
							else
							{
								var newBody = document.getElementById("body");
								newBody.style.transition = "all .2s";
								newBody.style.opacity = "0";

								setTimeout(function() {a
									newBody.remove();
								},200)
							}
						}
					}
				}
			})();

			document.body.appendChild(drawer);
			document.body.appendChild(close);
			
			setTimeout(function() {
				close.style.opacity = "1";
				makeNavListVisible();
			},1000);			

			setTimeout(function() {
				drawer.style.paddingRight = "100vw";
			},100);

			close.onclick = function() {
				close.style.opacity = "0";
				removeNavList();
				
				setTimeout(function() {
					close.innerHTML = "";
					drawer.style.padding = "0";
					
					setTimeout(function() {
						close.remove();
						drawer.remove();
					},1000);
				},200);
			}
		}
	}
}

function showLockPopup() {
	var blur = document.createElement("div");
	blur.style = "background-color: rgba(0,0,0,.2); position: absolute; top: 0; right: 0; left: 0; bottom: 0; z-index: 99";
	var lockPopup = document.createElement("div");
	lockPopup.stlye = "height: 258px; width: 694px; position: absolute; left: calc(50% - 694px/2); top: calc(50% - 358px/2); background-color: black; color: white; z-index: 100";
	lockPopup.id = "lock";
	
	document.body.appendChild(blur);
	document.body.appendChild(lockPopup);
}

function pcMode() {
	var nav = document.createElement("div");
	nav.id = "navDrawer";
	nav.style = "z-index: 99; position: absolute; left; 0; top: 0; bottom: 0; width: 462px; background: linear-gradient(0deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 1) 100%), url('https://images.unsplash.com/photo-1490676174569-1fa40080e712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');";

	// Extra socials
	/*
	var instagram = document.createElement("div");
	instagram.style = "transition: all .1s; position: absolute; bottom: 50px; width: 50px; height: 50px; border-radius: 50%; outline: 2px solid gray; left: calc(50% - 50px/2); cursor: pointer;";
	instagram.id = "instagram";

	var tiktok = document.createElement("div");
	tiktok.style = "transition: all .1s; position: absolute; bottom: 50px; width: 50px; height: 50px; border-radius: 50%; outline: 2px solid gray; left: calc(50% - 50px/2 - 100px); cursor: pointer;";
	tiktok.id = "tiktok";

	var linkedIn = document.createElement("div");
	linkedIn.style = "transition: all .1s; position: absolute; bottom: 50px; width: 50px; height: 50px; border-radius: 50%; outline: 2px solid gray; left: calc(50% - 50px/2 + 100px); cursor: pointer;";
	linkedIn.id = "linkedIn";

	nav.appendChild(instagram);
	nav.appendChild(tiktok);
	nav.appendChild(linkedIn);
	*/

	var title = document.getElementById('right');
	var desc = document.getElementById('desc');

	desc.style.fontSize = "20px";
	desc.style.width = "auto";

	title.style.marginLeft = "462px";
	title.style.left = "5%";

	desc.style.marginLeft = "462px";
	desc.style.left = "5%";
	desc.style.textAlign = "left";

	var navTitle = document.createElement("h1");
	var navDesc = document.createElement("h1");
	navTitle.id = "newDrawerTitle";
	navDesc.id = "newDrawerDesc";

	navTitle.style = "color: white; top: 22px; position: absolute; left: calc(50% - 462px/2); text-align: center; font-family: Catamaran; font-size: 50px; margin: 0; width: 462px; font-weight: 100;";
	navDesc.style = "color: white; font-family: Fanwood Text; font-size: 20px; left: calc(50% - 462px/2); width: 462px; text-align: center; position: absolute; top: 75px; font-weight: 100;";

	navTitle.innerText = "Karla Malan";
	navDesc.innerText = "Marketing";

	nav.appendChild(navTitle);
	nav.appendChild(navDesc);

	(function () {
		for (let x = 0; x < navList.length; x++) {
			var navItem = document.createElement("h1");
			navItem.style = "cursor: pointer; position: absolute; padding-left: 20px; font-weight: 100; font-size: 50px; font-family: Catamaran; left: 34px; color: rgba(255,255,255,.5);";
			navItem.style.transition = "all .2s";

			if (x == 0) {
				navItem.style.color = "white";
				navItem.style.borderLeft = "10px solid white";
			}

			navItem.style.top = "200px";
			navItem.style.marginTop = (x*100).toString() + "px";
			navItem.id = navList[x].toString();
			navItem.innerText = navList[x];

			nav.appendChild(navItem);

			if (navItem.id == currentNavItem) {
				navItem.style.color = "white";
			}

			navList2.push(navItem);
		}

		for (let y = 0; y < navList2.length; y++) {
			navList2[y].onclick = function() {
				if (navList2[y].id !== currentNavItem) {
					document.getElementById(currentNavItem).style.color = "rgba(255,255,255,.5)";
					document.getElementById(currentNavItem).style.borderLeft = "";

					navList2[y].style.color = "white";
					navList2[y].style.borderLeft = "10px solid white";
					currentNavItem = navList2[y].id;

					if (navList2[y].id === "Journal") {
						title.style.opacity = "0";
						desc.style.opacity = "0";

						setTimeout(function() {
							title.innerText = navList2[y].id;
							desc.innerText = descList[y];
						},100);

						setTimeout(function() {
							title.style.opacity = "1";
							desc.style.opacity = "1";
						},100);

						showLoaded();
					}
					else if (navList2[y].id == "Education") {
						var menuImage = document.getElementById("menu-img")
						menuImage.style.transition = "all .2s";
						menuImage.style.opacity = "0";

						title.style.opacity = "0";
						desc.style.opacity = "0";

						setTimeout(function() {
							title.innerText = navList2[y].id;
							desc.innerText = descList[y];
						},100);

						setTimeout(function() {
							title.style.opacity = "1";
							desc.style.opacity = "1";

							title.style.paddingLeft = "0";
							desc.style.paddingLeft = "0";	
						},100);
						
						var blog = document.getElementById("blog");
						if (blog !== null) {
							blog.style.paddingLeft = "0";
							blog.style.opacity = "0";
							blog.innerText = "";
						}
						
						setTimeout(function() {
							menuImage.src = "./Menu.svg";
							menuImage.style.marginLeft = "0";
							if (blog !== null) {
								blog.remove();
							}
						},200);

						var newBody = document.getElementById("body");

						if (newBody !== null) {
							newBody.style.transition = "all .2s";
							newBody.style.opacity = "0";

							setTimeout(function() {
								var newBody = document.getElementById("body");
								newBody.remove();
								
								var newBody = document.createElement("div");
								newBody.id = "body";

								var cvButton = document.createElement("div");
								var borderBox = document.createElement("div");
								var borderBoxTitle1 = document.createElement("h1");
								var borderBoxTitle2 = document.createElement("h1");
								var borderBoxBody1 = document.createElement("h1");
								var borderBoxBody2 = document.createElement("h1");

								cvButton.id = "cvButton";
								cvButton.style = "text-align: center; position: absolute; left: 5%; margin-left: 462px; width: 255px; font-size: 22px; font-family: Catamaran; background: transparent; box-shadow: 0 0 4px black; border-radius: 50px; height: 50px; padding-top: 20px; top: 208px; cursor: pointer;";
								cvButton.innerText = "download cv";

								newBody.appendChild(cvButton);
								document.body.appendChild(newBody);
							},200)
						}
						else
						{
							var newBody = document.createElement("div");
							newBody.id = "body";

							var cvButton = document.createElement("div");
							var borderBox = document.createElement("div");
							var borderBoxTitle1 = document.createElement("h1");
							var borderBoxTitle2 = document.createElement("h1");
							var borderBoxBody1 = document.createElement("h1");
							var borderBoxBody2 = document.createElement("h1");

							cvButton.id = "cvButton";
							cvButton.style = "text-align: center; position: absolute; left: 5%; margin-left: 462px; width: 255px; font-size: 22px; font-family: Catamaran; background: transparent; box-shadow: 0 0 4px black; border-radius: 50px; height: 50px; padding-top: 20px; top: 208px; cursor: pointer;";
							cvButton.innerText = "download cv";

							newBody.appendChild(cvButton);
							document.body.appendChild(newBody);

						}
					}
					else if (navList2[y].id == "Contact") {
						var menuImage = document.getElementById("menu-img")
						menuImage.style.transition = "all .2s";
						menuImage.style.opacity = "0";

						title.style.opacity = "0";
						desc.style.opacity = "0";

						setTimeout(function() {
							title.innerText = navList2[y].id;
							desc.innerText = descList[y];
						},100);

						setTimeout(function() {
							title.style.opacity = "1";
							desc.style.opacity = "1";

							title.style.paddingLeft = "0";
							desc.style.paddingLeft = "0";	
						},100);
						
						var blog = document.getElementById("blog");
						if (blog !== null) {
							blog.style.paddingLeft = "0";
							blog.style.opacity = "0";
							blog.innerText = "";
						}
						
						setTimeout(function() {
							menuImage.src = "./Menu.svg";
							menuImage.style.marginLeft = "0";
							if (blog !== null) {
								blog.remove();
							}
						},200);

						var newBody = document.getElementById("body");

						if (newBody !== null) {
							newBody.style.transition = "all .2s";
							newBody.style.opacity = "0";

							setTimeout(function() {
								var newBody = document.getElementById("body");
								newBody.remove();
								
								var newBody = document.createElement("div");
								newBody.id = "body";

								document.body.appendChild(newBody);
							},200)
						}
						else 
						{
							var newBody = document.createElement("div");
							newBody.id = "body";

							document.body.appendChild(newBody);
						}
					}
					else
					{
						var menuImage = document.getElementById("menu-img")
						menuImage.style.transition = "all .2s";
						menuImage.style.opacity = "0";

						title.style.opacity = "0";
						desc.style.opacity = "0";

						setTimeout(function() {
							title.innerText = navList2[y].id;
							desc.innerText = descList[y];
						},100);

						setTimeout(function() {
							title.style.opacity = "1";
							desc.style.opacity = "1";

							title.style.paddingLeft = "0";
							desc.style.paddingLeft = "0";	
						},100);
						
						var blog = document.getElementById("blog");
						if (blog !== null) {
							blog.style.paddingLeft = "0";
							blog.style.opacity = "0";
							blog.innerText = "";
						}
						
						setTimeout(function() {
							menuImage.src = "./Menu.svg";
							menuImage.style.marginLeft = "0";
							if (blog !== null) {
								blog.remove();
							}
						},200);

						var newBody = document.getElementById("body");

						if (newBody !== null) {
							newBody.style.transition = "all .2s";
							newBody.style.opacity = "0";

							setTimeout(function() {
								newBody.remove();
							},200)
						}
					}
				}
			}
		}
	})();
	
	document.body.appendChild(nav);
}

function checkLoading() {

}

function animateLoading() {

}

function showLoaded() {
	var newBody = document.getElementById("body");
	if (newBody !== null) {
		newBody.remove();
	}

	var newBody = document.createElement("div");
	newBody.id = "body";
	newBody.style.transition = "all .2s";
	newBody.style.opacity = "0";
	
	document.body.appendChild(newBody);
	setTimeout(function() {
		newBody.style.opacity = "1";
	},10)

	for (let i = 1; i < 6; i++) {
		var newCard = document.createElement("div");
		newCard.className = "card";

		var newCardImage = document.createElement("div");
		newCardImage.id = "card-image";
		newCardImage.style.backgroundSize = "100%";
		newCardImage.style.backgroundImage = "url(https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)";

		var newCardTitle = document.createElement("div");
		newCardTitle.className = "card-title";
		newCardTitle.style.zIndex = "20"; 
		newCardTitle.innerText = "1 What I have learned";

		newCard.style.display = "initial";
		newCard.style.marginTop = (-73+(175+75)*i).toString() + "px";
		newCard.style.opacity = "1";
		
		newBody.appendChild(newCard);
		newCard.appendChild(newCardTitle);
		newCard.appendChild(newCardImage);
	}
	addCardEvents();
	addBlogEvent();

	if (device == "pc") 
	{
		var cards = document.getElementsByClassName("card");
		var cardTitles = document.getElementsByClassName("card-title");
		
		for (let i = cards.length-1; i >= 0; i--) {
			cards[i].style.marginLeft = "462px";
			cards[i].style.height = "200px";
		}

		for (let i = cardTitles.length-1; i >= 0; i--) {
			cardTitles[i].style.fontSize = "25px";
		}
	}
}

function addBlogEvent() {
	var cards = document.getElementsByClassName('card');

	for (let x = cards.length-1; x >= 0; x--) {
		cards[x].onclick = function(e) {
			var circle = document.createElement("div");
			var circleX = (e.clientX);
			var circleY = (e.clientY);
			circle.style = "position: absolute; opacity: 1; background-color: white; z-index: 99; border-radius: 50%; transition: all .4s;";
			circle.style.left = circleX.toString() + "px";
			circle.style.top = circleY.toString() + "px";
			circle.id = "circle";
			document.body.appendChild(circle);

			setTimeout(function() {
				circle.style.padding = "100px";
				circle.style.marginLeft = "-100px";
				circle.style.marginTop = "-100px";
				circle.style.opacity = "0";
				// ex: card-5 -> openBlog('5') 
				
				//openBlog(cards[x].id.split("-")[1], device);
				openBlog(1, device);
			},10)
			setTimeout(function() {
				circle.remove();
			},300);
		}
	}
}

window.onload = function() {
	console.log("loading...");
	animateLoading();
	showLoaded();
	pcMode();
	
	document.body.style.opacity = "1";
}

function openBlog(blogId, device) {
	if (device == "pc") {
		var nav = document.getElementById('nav');
		var menu = document.getElementById('left');
		var menuImage = document.getElementById('menu-img');
		var title = document.getElementById('right');
		var desc = document.getElementById('desc');
		var drawerTitle = document.getElementById("newDrawerTitle");
		var drawerDesc = document.getElementById("newDrawerDesc");

		drawerTitle.style.transition = "all .1s";
		drawerDesc.style.transition = "all .1s";

		// call one line to remove body
		document.getElementById("body").remove();

		title.style.opacity = "0";
		desc.style.opacity = "0";

		setTimeout(function() {
			title.innerText = "What I have learned";
			desc.innerText = "My story";
			title.style.opacity = "1";
			desc.style.opacity = "1";
		},200);

		setTimeout(function() {
			var blog = document.createElement('div');
			blog.style = "font-family: Fanwood Text; font-size: 25px; color: black; position: absolute; top: 233px; margin-left: 462px; left: 5%; right: 5%;";
			blog.id = "blog";
			blog.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			document.body.appendChild(blog);

			title.style.paddingLeft = "5%";
			desc.style.paddingLeft = "5%";
			blog.style.paddingLeft = "5%";
			menuImage.style.opacity = "1";
			menuImage.style.marginLeft = "462px";
			menuImage.src = "./Back.svg";

			setTimeout(function() {
				menuImage.onclick = function() {
					menuImage.style.opacity = "0";
					
					title.style.opacity = "0";
					desc.style.opacity = "0";

					title.style.paddingLeft = "0";
					desc.style.paddingLeft = "0";
					blog.style.paddingLeft = "0";
					blog.style.opacity = "0";
					blog.innerText = "";
					
					setTimeout(function() {
						title.style.opacity = "1";
						desc.style.opacity = "1";

						menuImage.src = "./Menu.svg";
						title.innerText = navList[0];
						desc.innerText = descList[0];
						menuImage.style.marginLeft = "0";
						blog.remove();
						showLoaded();
					},200);
				}
			},200);
		},200);
	}
	else
	{
		blogId = parseInt(blogId);
		var cards = document.getElementsByClassName('card');
		var nav = document.getElementById('nav');
		var menu = document.getElementById('left');
		var menuImage = document.getElementById('menu-img');
		var title = document.getElementById('right');
		var desc = document.getElementById('desc');

		setTimeout(function() {
			document.body.style.opacity = "0";
		},100);

		setTimeout(function() {
			title.style.fontSize = "30px";

			// This part should change with the cards info
			title.innerText = "What I have learned";
			desc.innerText = "My story";
			desc.style.marginTop = "-20px";
			var blog = document.createElement('div');
			blog.style = "font-family: Fanwood Text; font-size: 25px; color: black; position: absolute; top: 233px; left: 10%; right: 15%;";
			blog.id = "blog";
			blog.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			document.body.appendChild(blog);

			for (let x = 0; x < cards.length; x++) {
				cards[x].style.display = "none";
			}

			document.body.style.opacity = "1";
		},500);
		
		setTimeout(function() {
			menuImage.src = "./Back.svg";
		},400)
		
		setTimeout(function() {
			menuImage.onclick = function() {
				document.body.style.opacity = "0";
				setTimeout(function() {
					location.reload();
				},400)
			}
		},300);
	}
}
