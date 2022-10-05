<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100&family=Fanwood+Text&family=Open+Sans&display=swap');

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
right: 0;
top: 0;
width: 41px;
height: 41px;
transition: all .4s;
}

#card-edit:hover {
transition: all .4s;
box-shadow: 0 4px 20px rgba(0,0,0,.4);
}

#card:hover {
transition: .2s;
background-color: #aaaaaa;
}
</style>

<script>
export default {
	data: () => ({

	}),
	mounted() {
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
			},400);
		}
	},
	methods: {

	}
}
</script>

<template>
  <main>
	<div id="card">
		<div id="card-edit"></div>
		<div id="card-title">
			1 How we got here
		</div>
	</div>
  </main>
</template>
