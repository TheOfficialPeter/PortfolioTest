<style>
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@600&family=Fanwood+Text&family=Open+Sans&display=swap');

body {
overflow: hidden;
}

#nav {
margin: 0;
font-family: 'Catamaran';
font-weight: 600;
font-size: 50px;
}

#left {
float: left;
width: max-content;
position: absolute;
left: 23px;
top: 20px;
cursor: pointer;
font-family: 'Open Sans';
}

#right {
font-weight: 600;
font-family: 'Catamaran';
float: right;
position: absolute;
right: 34px;
width: max-content;
top: 20px;
}

</style>

<script>
export default {
	data: () => ({

	}),
	mounted() {
		document.getElementById('left').onclick = function(e) {
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
	},
	methods: {

	}
}
</script>

<template>
  <main>
	<div id="nav">
		<div id="left">
			<img id="menu-img" src="../../Menu.svg"/>
		</div>
		<div id="right">
			Journal
		</div>
	</div>
  </main>
</template>

