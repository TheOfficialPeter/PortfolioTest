document.getElementById('left').onclick = function(e) {
	if (document.getElementsByClassName('card')[0].style.display !== 'none') {
		var close = document.createElement("h1");
		close.style = "opacity: 0; font-weight: 100; cursor: pointer; transition: all .2s; position: absolute; color: white; backgound-color: black; font-size: 50px; right: 50px; top: 10px; font-family: Open Sans";
		close.innerText = "Close";
		
		var drawer = document.createElement("div");
		drawer.style = "position: absolute; left: 0; top: 0; bottom: 0; background-color: black; transition: all 1s;";
		drawer.id = "drawer";

		document.body.appendChild(drawer);
		document.body.appendChild(close);
		
		setTimeout(function() {
			close.style.opacity = "1";
		},1000);			

		setTimeout(function() {
			drawer.style.paddingRight = "100vw";
		},100);

		close.onclick = function() {
			close.style.opacity = "0";
			
			setTimeout(function() {
				close.innerHTML = "";
				drawer.style.padding = "0";
			},200);
		}
	}
}

var card = document.getElementsByClassName('card')[0];

function getDevice() {
	return 'pc'
}

function getDeviceId() {

}

function getAuth() {
	return true;
}

function checkLoading() {

}

function deviceComp() {

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
			console.log(e.clientX, e.clientY);
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
				openBlog();
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

function openBlog() {
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
document.getElementById('card-edit').onclick = function(e) {
	if (getAuth() == true) {
		var edit = document.getElementById('card-edit');
		edit.style.opacity = "0";
		edit.style.cursor = "";
		openBlog();
	}
}
