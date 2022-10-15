var navList = ["Journal", "Education", "Contact"];
var navList2 = [];
const descList = ["yes", "yes", "yes"];

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
document.getElementById('left').onclick = function(e) {
	if (document.getElementsByClassName('card')[0].style.display !== 'none') {
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
					document.getElementById(currentNavItem).style.color = "rgba(255,255,255,.5)";

					navList2[y].style.color = "white";
					currentNavItem = navList2[y].id;

					document.getElementById('right').innerText = navList2[y].id;
					document.getElementById('desc').innerText = descList[y];

					drawer.style.paddingRight = "0";
					removeNavList();
					makeNavListInvisible();

					drawer.style.paddingRight = "0";
					
					setTimeout(function() {
						drawer.remove();
					},1000)
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

var card = document.getElementsByClassName('card')[0];

function showLockPopup() {
	var blur = document.createElement("div");
	blur.style = "background-color: rgba(0,0,0,.2); position: absolute; top: 0; right: 0; left: 0; bottom: 0; z-index: 99";
	var lockPopup = document.createElement("div");
	lockPopup.stlye = "height: 258px; width: 694px; position: absolute; left: calc(50% - 694px/2); top: calc(50% - 358px/2); background-color: black; color: white; z-index: 100";
	lockPopup.id = "lock";
	
	document.body.appendChild(blur);
	document.body.appendChild(lockPopup);
}

function getDevice() {
	var nav = document.createElement("div");
	nav.id = "navDrawer";
	nav.style = "z-index: 99; position: absolute; left; 0; top: 0; bottom: 0; width: 462px; background-color: black;";

	var navTitle = document.createElement("h1");
	var navDesc = document.createElement("h1");

	navTitle.style = "color: white; top: 22px; position: absolute; left: calc(50% - 462px/2); text-align: center; font-family: Catamaran; font-size: 50px; margin: 0; width: 462px; font-weight: 100;";
	navDesc.style = "color: white; font-family: Fanwood Text; font-size: 20px; left: calc(50% - 462px/2); width: 462px; text-align: center; position: absolute; top: 75px; font-weight: 100;";

	navTitle.innerText = "Karla Malan";
	navDesc.innerText = "Marketing";

	nav.appendChild(navTitle);
	nav.appendChild(navDesc);

	(function () {
		for (let x = 0; x < navList.length; x++) {
			var navItem = document.createElement("h1");
			navItem.style = "cursor: pointer; position: absolute; padding-left: 20px; font-weight: 300; font-size: 30px; font-family: Catamaran; left: 34px; color: rgba(255,255,255,.5);";
			navItem.style.transition = "all .2s";

			if (x == 0) {
				navItem.style.color = "white";
				navItem.style.borderLeft = "4px solid white";
			}

			navItem.style.top = "200px";
			navItem.style.marginTop = (x*75).toString() + "px";
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
				document.getElementById(currentNavItem).style.color = "rgba(255,255,255,.5)";
				document.getElementById(currentNavItem).style.borderLeft = "";

				navList2[y].style.color = "white";
				navList2[y].style.borderLeft = "4px solid white";
				currentNavItem = navList2[y].id;

				document.getElementById('right').innerText = navList2[y].id;
				document.getElementById('desc').innerText = descList[y];

				drawer.style.paddingRight = "0";
				removeNavList();
				makeNavListInvisible();

				drawer.style.paddingRight = "0";
				
				setTimeout(function() {
					drawer.remove();
				},1000)
			}
		}
	})();

	var cards = document.getElementsByClassName("card");
	
	for (let i = 0; i < cards.length; i++) {
		cards[i].style.marginLeft = "462px";
		cards[i].style.height = "200px";
	}
	
	document.body.appendChild(nav);
}

getDevice();

function getAuth() {
	return true;
}

function checkLoading() {

}

function animateLoading() {

}

function showLoaded() {
	for (let i = 1; i < 4; i++) {
		var newCard = card.cloneNode(true);
		newCard.style.display = "initial";
		newCard.style.marginTop = (-73+(175+42)*i).toString() + "px";
		document.body.appendChild(newCard);
	}
}

function addEvents() {
	var cards = document.getElementsByClassName('card');

	for (let x = 0; x < cards.length; x++) {
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
				
				var device = "pc";
				openBlog(cards[x].id.split("-")[1], device);
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
	addEvents();
	
	document.body.style.opacity = "1";
}

function openBlog(blogId, device) {
	if (device == "pc") {
		document.getElementById("navDrawer").style.opacity = "0";
		document.getElementById("navDrawer").style.transition = "all .2s";
		document.getElementById("navDrawer").remove();
	}

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
		title.innerText = "How we got here";
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
