<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100&family=Fanwood+Text&family=Open+Sans&display=swap');

body {
-webkit-tap-highlight-color: transparent;
}

#card {
position: absolute;
left: 12px;
right: 12px;
height: 176px;
text-align: center;
background-color: #dddddd;
cursor: pointer;
margin-top: 200px;
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
		function openBlog() {
			document.body.style.transition = "all .2s";

			var card = document.getElementById('card');
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
				blog.innerText = "blog text here";

				document.body.appendChild(blog);
				
				card.style.display = "none";

				document.body.style.opacity = "1";
			},300);

			setTimeout(function() {
				menuImage.src = "../../Back.svg";
			},300);
		}

		document.getElementById('card-edit').onclick = function(e) {
			var edit = document.getElementById('card-edit');
			edit.style.opacity = "0";
			edit.style.cursor = "";
			openBlog();
		}

		document.getElementById('card').onclick = function(e) {
			var circle = document.createElement("div");
			var circleX = (e.clientX-12);
			var circleY = (e.clientY-200);

			circle.style = "position: absolute; opacity: 1; background-color: white; z-index: 99; border-radius: 50%; transition: all .4s;";
			circle.style.left = circleX.toString() + "px";
			circle.style.top = circleY.toString() + "px";
			circle.id = "circle";			

			document.getElementById('card').appendChild(circle);
			
			setTimeout(function() {
				circle.style.padding = "100px";
				circle.style.marginLeft = "-100px";
				circle.style.marginTop = "-100px";
				circle.style.opacity = "0";
			},10)
			setTimeout(function() {
				circle.remove();
			},300);
		}
	},
	methods: {

	}
}
</script>

<template>
  <main>
	<div id="card">
		<div id="card-edit"><img src="../../Edit.svg"/></div>
		<div id="card-title">
			1 How we got here
		</div>
	</div>
  </main>
</template>
