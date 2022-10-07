<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100&family=Fanwood+Text&family=Open+Sans&display=swap');
body {
-webkit-tap-highlight-color: transparent;
}
.card {
display: none;
position: absolute;
left: 12px;
right: 12px;
height: 175px;
text-align: center;
background-color: #dddddd;
cursor: pointer;
margin-top: 144px;
transition: .2s;
}
#card-title {
position: absolute;
background-color: black;
width: max-content;
height: auto;
padding: 10px;
left: 0;
bottom: 0;
color: white;
}
#card-edit {
background-color: black;
position: absolute;
color: white;
text-align: center;
padding-top: 10px;
right: 0;
top: 0;
width: 41px;
height: 30px;
transition: all .4s;
}

</style>

<script>
export default {
	data: () => ({

	}),
	mounted() {
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
		}

		function openBlog() {
			document.body.style.transition = "all .2s";
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
			},300);
			setTimeout(function() {
				menuImage.src = "../../Back.svg";
				
				menuImage.onclick = function() {
					
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
	},
	methods: {
	}
}
</script>

<template>
  <main>
	<div class="card">
		<div id="card-edit"><img src="../../Edit.svg"/></div>
		<div id="card-title">
			1 How we got here
		</div>
	</div>
  </main>
</template>
