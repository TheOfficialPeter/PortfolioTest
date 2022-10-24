var navList = ["Journal", "Education", "Contact"];
var device = "";
var navList2 = [];
var navDrawerDesc = "22. Marketing Student";
var isBlogOpen = false;
var navDrawerGradientDirection = "top";
var navDrawerTextColor = "255,255,255";
var navDrawerImage = "https://images.unsplash.com/photo-1490676174569-1fa40080e712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const descList = ["Sharing information", "My study life", "Contact info"];

// GET DEVICE
if (window.innerWidth < 1200) {
	device = "mobile";
}
else
{
	device = "pc";
}

function checkScroll(newBody) {
	newBody.addEventListener("scroll", (event) => {
		var nav = document.getElementById("nav");
		if (newBody.scrollTop > 10) {
			nav.style.boxShadow = "0 4px 20px rgba(0,0,0,.2)";
		}
		else
		{
			nav.style.boxShadow = "";
		}
	});
}

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
function mobileMode() {
	document.getElementById('left').onclick = function(e) {
		if (device == "mobile" && isBlogOpen == false) {
			var close = document.createElement("h1");
			close.style = "z-index: 1003; opacity: 0; font-weight: 100; cursor: pointer; transition: all .2s; position: absolute; color: white; backgound-color: black; font-size: 50px; right: 50px; top: 20px; font-family: Open Sans";
			close.innerText = "<";
			
			var drawer = document.createElement("div");
			drawer.style = "z-index: 1002; position: absolute; left: 0; top: 0; bottom: 0; background-color: black; transition: all 1s;";
			drawer.id = "drawer";

			navList2 = [];

			(function () {
				for (let x = 0; x < navList.length; x++) {
					var navItem = document.createElement("h1");
					navItem.style = "opacity: 0; cursor: pointer; position: absolute; padding-left: 20px; font-weight: 100; font-size: 50px; font-family: Catamaran; left: 34px; color: rgba(255,255,255,.5);";
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

							nav.style.boxShadow = "";

							navList2[y].style.color = "white";
							currentNavItem = navList2[y].id;

							document.getElementById('right').innerText = navList2[y].id;
							document.getElementById('desc').innerText = descList[y];

							if (navList2[y].id === "Journal") {
								showLoaded();
							}
							else if (navList2[y].id == "Education") {
								var menuImage = document.getElementById("menu-img")
								
								var newBody = document.getElementById("body");

								if (newBody !== null) {
									newBody.style.transition = "all .2s";
									newBody.style.opacity = "0";

									setTimeout(function() {
										newBody = document.getElementById("body");
										newBody.remove();
										
										newBody = document.createElement("div");
										newBody.id = "body";
										document.body.appendChild(newBody);

										checkScroll(newBody);
									},200)
								}
								else
								{
									newBody = document.createElement("div");
									newBody.id = "body";
									document.body.appendChild(newBody);

									checkScroll(newBody);
								}
								
								setTimeout(function() {
									var cvButton = document.createElement("a");
									var previewCV = document.createElement("div");
									/*
									var borderBox = document.createElement("div");
									var borderBoxTitle1 = document.createElement("h1");
									var borderBoxTitle2 = document.createElement("h1");
									var borderBoxBody1 = document.createElement("h1");
									var borderBoxBody2 = document.createElement("h1");
									*/
									var newBody = document.getElementById("body");

									cvButton.href = "";
									cvButton.style = "transition: all .2s; color: black; text-decoration: none; text-align: center; position: absolute; left: 5%; width: 150px; font-size: 20px; font-family: Catamaran; background: transparent; outline: 2px solid gray; height: 40px; padding-top: 10px; top: 208px; cursor: pointer;";
									cvButton.innerText = "download cv";
									cvButton.id = "cvButton";

									cvButton.onmouseover = function() {
										cvButton.style.color = "white";
										cvButton.style.background = "black";
										cvButton.style.outline = "";
									}

									cvButton.onmouseleave = function() {
										cvButton.style.color = "black";
										cvButton.style.background = "transparent";
										cvButton.style.outline = "2px solid gray";
									}

									previewCV.id = "previewCV";
									previewCV.style = "position: absolute; left: 5%; top: 300px; background-color: rgba(100,100,100,.5); width: 300px; height: 750px";

									/*
									borderBox.id = "borderBox";
									borderBox.style = "position: absolute; margin-left: 462px; left: 5%; right: 5%; top: 344px; box-shadow: 0 0 2px black; bottom: 5%;";

									borderBoxTitle1.id = "borderBoxTitle1";
									borderBoxTitle1.style = "position: absolute; top: 22px; margin: 0; left: 30px; font-family: Catamaran; font-size: 45px; font-weight: 400;";
									borderBoxTitle1.innerText = "School";

									borderBoxTitle2.id = "borderBoxTitle2";
									borderBoxTitle2.style = "position: absolute; top: 50%; margin: 0; left: 30px; font-family: Catamaran; font-size: 45px; font-weight: 400;";
									borderBoxTitle2.innerText = "University";

									borderBoxBody1.id = "borderBoxBody1";
									borderBoxBody1.style = "position: absolute; top: 96px; margin: 0; left: 30px; font-family: Catamaran; font-size: 20px; font-weight: 400;";
									borderBoxBody1.innerText = "-Hello\n-World";

									borderBoxBody2.id = "borderBoxBody2";
									borderBoxBody2.style = "position: absolute; top: calc(50% + 75px); margin: 0; left: 30px; font-family: Catamaran; font-size: 20px; font-weight: 400;";
									borderBoxBody2.innerText = "-Hello\n-World";
									
									borderBox.appendChild(borderBoxTitle1);
									borderBox.appendChild(borderBoxTitle2);
									borderBox.appendChild(borderBoxBody1);
									borderBox.appendChild(borderBoxBody2);
									newBody.appendChild(borderBox);
									*/
									newBody.appendChild(cvButton);
									newBody.appendChild(previewCV);
									document.body.appendChild(newBody);

									setTimeout(function() {
										newBody.style.opacity = "1";
									},10);
								},200);
							}
							else if (navList2[y].id == "Contact") {
								var newBody = document.getElementById("body");

								if (newBody !== null) {
									newBody.style.transition = "all .2s";
									newBody.style.opacity = "0";

									setTimeout(function() {
										newBody = document.getElementById("body");
										newBody.remove();
										
										newBody = document.createElement("div");
										newBody.id = "body";

										document.body.appendChild(newBody);

										checkScroll(newBody);
									},200)
								}
								else 
								{
									newBody = document.createElement("div");
									newBody.id = "body";

									document.body.appendChild(newBody);

									checkScroll(newBody);
								}


								// Elements for the Contact form
								setTimeout(function() {
									// grab the new/old newBody
									var newBody = document.getElementById("body");
									
									var isContactSelectOpen = false;
									var mainText = document.createElement("h1");
									var contactTitle = document.createElement("h1");
									var whoToContactBox = document.createElement("div");
									var whoToContactText = document.createElement("h1");
									var messageHeaderBox = document.createElement("input");
									var messageBodyBox = document.createElement("input");
									var sendButton = document.createElement("a");

									mainText.id = "mainText";
									mainText.style = "position: absolute; font-size: 20px; left: 5%; margin-top: 25px; top: 150px; font-family: Fanwood Text;";
									mainText.innerHTML = "Website made by <font style='font-size: 25px; font-weight: 1000;'>Pieter Malan</font> (click on this text for more info)";
									
									contactTitle.id = "contactTitle";
									contactTitle.style = "position: absolute; font-weight: 400; top: 250px; left: 5%; font-size: 40px; font-family: Catamaran;";
									contactTitle.innerText = "Contact Form";

									whoToContactBox.id = "whoToContactBox";
									whoToContactBox.style = "position: absolute; top: 350px; left: 5%;  height: 51px; width: 200px; outline: 2px solid rgba(0,0,0,.5)";
									
									whoToContactBox.onclick = function() {
										if (isContactSelectOpen == false) {
											isContactSelectOpen = true;
											var karla = document.createElement("div");
											var pieter = document.createElement("div");

											karla.style = "cursor: pointer; font-size: 25px; font-family: Open Sans; transition: all .3s; color: white; position: absolute; top: 350px; left: 5%; text-align: center; margin-left: 210px; height: 0px; width: 50px; background-color: black;";
											pieter.style = "cursor: pointer; font-size: 25px; font-family: Open Sans; transition: all .3s; color: white; position: absolute; top: 350px; left: 5%; margin-left: 270px; text-align: center; height: 0px; width: 50px; background-color: black;";

											karla.innerText = "K";
											pieter.innerText = "P";

											newBody.appendChild(karla);
											newBody.appendChild(pieter);

											setTimeout(function() {
												karla.style.paddingTop = "10px";
												pieter.style.paddingTop = "10px";
												karla.style.height = "40px";
												pieter.style.height = "40px";
											},10);

											setTimeout(function() {
												karla.onclick = function() {
													pieter.innerText = "";
													pieter.style.height = "0";
													pieter.style.paddingTop = "0";
													
													karla.innerText = "";
													karla.style.height = "0";
													karla.style.paddingTop = "0";
													
													whoToContactText.innerText = "Karla";
													isContactSelectOpen = false;
												}

												pieter.onclick = function() {
													pieter.innerText = "";
													pieter.style.height = "0";
													pieter.style.paddingTop = "0";
													
													karla.innerText = "";
													karla.style.height = "0";
													karla.style.paddingTop = "0";

													whoToContactText.innerText = "Pieter";
													isContactSelectOpen = false;
												}
											},300)
										}
									}

									whoToContactText.id = "whoToContactText";
									whoToContactText.style = "color: rgba(0,0,0,.6); line-height: 22px; position: absolute; left: 20px; top: 0; bottom: 0; font-size: 20px; font-family: Open Sans; font-weight: 400;";
									whoToContactText.innerText = "Who to contact?";

									messageHeaderBox.id = "messageHeaderBox";
									messageHeaderBox.placeholder = "Message Header";
									messageHeaderBox.style = "padding-left: 20px; color: rgba(0,0,0,1); font-size: 20px; position: absolute; top: 420px; left: 5%; height: 45px; font-family: Open Sans; width: 250px; outline: 1px solid rgba(0,0,0,.5)";

									messageBodyBox.id = "messageBodyBox";
									messageBodyBox.placeholder = "Message Body";
									messageBodyBox.style = "padding-left: 20px; color: rgba(0,0,0,1); font-size: 20px; position: absolute; top: 490px; left: 5%; height: 45px; width: 250px; font-family: Open Sans; outline: 1px solid rgba(0,0,0,.5);";

									sendButton.id = "sendButton";
								
									sendButton.onclick = function() {
										if (whoToContactText.innerText == "Karla") {
											window.location.assign("mailto:karla@gmail.com?subject="+messageHeaderBox.value+"&body="+messageBodyBox.value);
										}
										else if (whoToContactText.innerText == "Pieter")
										{
											window.location.assign("mailto:pieter@gmail.com?subject="+messageHeaderBox.value+"&body="+messageBodyBox.value);
										}
									}
										
									sendButton.style = "position: absolute; text-decoration: none; font-size: 25px; font-family: Catamaran; font-weight: 400; left: 5%; top: 550px; height: 75px; width: 200px; text-align: center; line-height: 75px; cursor: pointer; letter-spacing: 0.2em; color: white; background-color: black;";
									sendButton.innerText = "SEND";

									// Get my personal info
									mainText.onclick = function(e) {
										var background = document.createElement("div");
										var peterBox = document.createElement("div");
										var peterTitle = document.createElement("h1");
										var peterBody = document.createElement("h1");

										background.style = "transition: all .2s; opacity: 0; position: absolute; left: 0; top: 0; bottom: 0; right: 0; background: rgba(0,0,0,.95); z-index: 2000;";
										background.id = "background";

										peterTitle.id = "peterTitle";
										peterTitle.style = "color: white; font-size: 30px; font-family: Catamaran; position: absolute; top: 100px; margin: 0; left: 10px; right: 10px; text-align: center; font-weight: 600;";
										peterTitle.innerText = "Hi there!";
				
										peterBody.id = "peterBody";
										peterBody.style = "color: rgba(255,255,255,.5); font-size: 16px; font-family: Open Sans; position: absolute; top: 150px; text-align: center; left: 10px; right: 10px; font-weight: 400;";
										peterBody.innerHTML = "My name is Pieter Malan. I am a general-purpose programmer meaning I code anything that sounds interesting. This can range from websites to machine learning to custom 3d graphics in openGL/webGL to reverse engineering. <font color=white>( I also do UI design )</font> If you would like to hire me please make use of the contact form on the website and choose my name. <font color=white>Thanks for reading.</font>";

										background.appendChild(peterTitle);
										background.appendChild(peterBody);
										document.body.appendChild(peterBox);
										document.body.appendChild(background);

										setTimeout(function() {
											peterBox.style.opacity = "1";
											background.style.opacity = "1";
										},10);

										setTimeout(function() {
											document.body.onclick = function() {
												var background = document.getElementById("background");

												background.style.opacity = "0";

												setTimeout(function() {
													background.remove();
												},200);
											
												document.body.onclick = function() {

												}
											}
										},200);
									}

									newBody.appendChild(mainText);
									newBody.appendChild(contactTitle);
									newBody.appendChild(whoToContactBox);
									newBody.appendChild(messageHeaderBox);
									newBody.appendChild(messageBodyBox);
									newBody.appendChild(sendButton);
									whoToContactBox.appendChild(whoToContactText);

									setTimeout(function() {
										newBody.style.opacity = "1";
									},10);
								},200);
							}
							else
							{
								var newBody = document.getElementById("body");
								
								if (newBody !== null) {
									newBody.style.transition = "all .2s";
									newBody.style.opacity = "0";

									setTimeout(function() {
										newBody.remove();

										newBody = document.createElement("div");
										newBody.id = "body";
									},200);
								}
								else
								{
									newBody = document.createElement("div");
									newBody.id = "body";
								}
							}

							close.innerHTML = "";
							drawer.style.paddingRight = "0";
							removeNavList();

							setTimeout(function() {
								drawer.remove();
							},1000);
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

	nav.style = "z-index: 1001; position: fixed; left; 0; top: 0; bottom: 0; width: 462px;";

	if (navDrawerGradientDirection == "top") {
		nav.style.background = "linear-gradient(0deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 1) 100%), url("+navDrawerImage+")";
	}
	else if (navDrawerGradientDirection == "bottom")
	{
		nav.style.background = "linear-gradient(180deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 1) 100%), url("+navDrawerImage+")";
	}
	else if (navDrawerGradientDirection == "left")
	{
		nav.style.background = "linear-gradient(270deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 1) 100%), url("+navDrawerImage+")";
	}
	else if (navDrawerGradientDirection == "right") 
	{
		nav.style.background = "linear-gradient(90deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, 1) 100%), url("+navDrawerImage+")";
	}
	else if (navDrawerGradientDirection == "none")
	{
		nav.style.background = "url("+navDrawerImage+")";
	}

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
	var menuImage = document.getElementById("menu-img");

	menuImage.style.marginTop = "50px";

	desc.style.fontSize = "20px";
	desc.style.width = "auto";

	title.style.marginLeft = "462px";
	title.style.left = "5%";
	title.style.fontSize = "60px";

	desc.style.marginLeft = "462px";
	desc.style.left = "5%";
	desc.style.textAlign = "left";
	desc.style.marginTop = "18px";

	var navTitle = document.createElement("h1");
	var navDesc = document.createElement("h1");
	navTitle.id = "newDrawerTitle";
	navDesc.id = "newDrawerDesc";

	navTitle.style = "color: rgba(" + navDrawerTextColor + ",1); top: 22px; position: absolute; left: calc(50% - 462px/2); text-align: center; font-family: Catamaran; font-size: 50px; margin: 0; width: 462px; font-weight: 100;";
	navDesc.style = "color: rgba(" + navDrawerTextColor + ",1); font-family: Fanwood Text; font-size: 20px; left: calc(50% - 462px/2); width: 462px; text-align: center; position: absolute; top: 75px; font-weight: 100;";

	navTitle.innerText = "Karla Malan";
	navDesc.innerText = navDrawerDesc;

	nav.appendChild(navTitle);
	nav.appendChild(navDesc);

	(function () {
		for (let x = 0; x < navList.length; x++) {
			var navItem = document.createElement("h1");
			navItem.style = "cursor: pointer; position: absolute; padding-left: 20px; font-weight: 100; font-size: 50px; font-family: Catamaran; left: 34px; color: rgba(" + navDrawerTextColor + ",.5);";
			navItem.style.transition = "all .2s";

			if (x == 0) {
				navItem.style.color = "rgba(" + navDrawerTextColor + ",1)";
				navItem.style.borderLeft = "10px solid rgba(" + navDrawerTextColor + ",1)";
			}

			navItem.style.top = "200px";
			navItem.style.marginTop = (x*100).toString() + "px";
			navItem.id = navList[x].toString();
			navItem.innerText = navList[x];

			nav.appendChild(navItem);

			if (navItem.id == currentNavItem) {
				navItem.style.color = "rgba(" + navDrawerTextColor + ",1)";
			}

			navList2.push(navItem);
		}

		for (let y = 0; y < navList2.length; y++) {
			navList2[y].onclick = function() {
				document.getElementById("nav").style.boxShadow = "";
				if (navList2[y].id !== currentNavItem) {
					document.getElementById(currentNavItem).style.color = "rgba(" + navDrawerTextColor + ",.5)";
					document.getElementById(currentNavItem).style.borderLeft = "";

					navList2[y].style.color = "rgba(" + navDrawerTextColor + ",1)";
					navList2[y].style.borderLeft = "10px solid rgba(" + navDrawerTextColor + ",1)";
					currentNavItem = navList2[y].id;

					if (navList2[y].id === "Journal") {
						title.style.opacity = "0";
						desc.style.opacity = "0";

						setTimeout(function() {
							title.innerText = navList2[y].id;
							desc.innerText = descList[y];
						},200);

						setTimeout(function() {
							title.style.opacity = "1";
							desc.style.opacity = "1";
						},200);

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
						},200);

						setTimeout(function() {
							title.style.opacity = "1";
							desc.style.opacity = "1";

							title.style.paddingLeft = "0";
							desc.style.paddingLeft = "0";	
						},200);
						
						var blog = document.getElementById("blog");
						if (blog !== null) {
							blog.style.paddingLeft = "0";
							blog.style.opacity = "0";
						}
						
						setTimeout(function() {
							menuImage.src = "./Menu.svg";
							menuImage.style.marginLeft = "0";
							if (blog !== null) {
								blog.innerText = "";
								blog.remove();
							}
						},200);

						var newBody = document.getElementById("body");

						if (newBody !== null) {
							newBody.style.transition = "all .2s";
							newBody.style.opacity = "0";

							setTimeout(function() {
								newBody = document.getElementById("body");
								newBody.remove();
								
								newBody = document.createElement("div");
								newBody.id = "body";
								document.body.appendChild(newBody);

								checkScroll(newBody);
							},200)
						}
						else
						{
							newBody = document.createElement("div");
							newBody.id = "body";
							document.body.appendChild(newBody);

							checkScroll(newBody);
						}
						
						setTimeout(function() {
							var cvButton = document.createElement("a");
							var previewCV = document.createElement("div");
							/*
							var borderBox = document.createElement("div");
							var borderBoxTitle1 = document.createElement("h1");
							var borderBoxTitle2 = document.createElement("h1");
							var borderBoxBody1 = document.createElement("h1");
							var borderBoxBody2 = document.createElement("h1");
							*/
							var newBody = document.getElementById("body");

							cvButton.href = "";
							cvButton.style = "transition: all .2s; color: black; text-decoration: none; text-align: center; position: absolute; left: 5%; margin-left: 462px; width: 255px; font-size: 22px; font-family: Catamaran; background: transparent; outline: 2px solid gray; height: 50px; padding-top: 20px; top: 208px; cursor: pointer;";
							cvButton.innerText = "download cv";
							cvButton.id = "cvButton";

							cvButton.onmouseover = function() {
								cvButton.style.color = "white";
								cvButton.style.background = "black";
								cvButton.style.outline = "";
							}

							cvButton.onmouseleave = function() {
								cvButton.style.color = "black";
								cvButton.style.background = "transparent";
								cvButton.style.outline = "2px solid gray";
							}

							previewCV.id = "previewCV";
							previewCV.style = "position: absolute; left: 5%; margin-left: 462px; top: 300px; background-color: rgba(100,100,100,.5); width: 1000px; height: 1000px";

							/*
							borderBox.id = "borderBox";
							borderBox.style = "position: absolute; margin-left: 462px; left: 5%; right: 5%; top: 344px; box-shadow: 0 0 2px black; bottom: 5%;";

							borderBoxTitle1.id = "borderBoxTitle1";
							borderBoxTitle1.style = "position: absolute; top: 22px; margin: 0; left: 30px; font-family: Catamaran; font-size: 45px; font-weight: 400;";
							borderBoxTitle1.innerText = "School";

							borderBoxTitle2.id = "borderBoxTitle2";
							borderBoxTitle2.style = "position: absolute; top: 50%; margin: 0; left: 30px; font-family: Catamaran; font-size: 45px; font-weight: 400;";
							borderBoxTitle2.innerText = "University";

							borderBoxBody1.id = "borderBoxBody1";
							borderBoxBody1.style = "position: absolute; top: 96px; margin: 0; left: 30px; font-family: Catamaran; font-size: 20px; font-weight: 400;";
							borderBoxBody1.innerText = "-Hello\n-World";

							borderBoxBody2.id = "borderBoxBody2";
							borderBoxBody2.style = "position: absolute; top: calc(50% + 75px); margin: 0; left: 30px; font-family: Catamaran; font-size: 20px; font-weight: 400;";
							borderBoxBody2.innerText = "-Hello\n-World";
							
							borderBox.appendChild(borderBoxTitle1);
							borderBox.appendChild(borderBoxTitle2);
							borderBox.appendChild(borderBoxBody1);
							borderBox.appendChild(borderBoxBody2);
							newBody.appendChild(borderBox);
							*/
							newBody.appendChild(cvButton);
							newBody.appendChild(previewCV);
							document.body.appendChild(newBody);

							setTimeout(function() {
								newBody.style.opacity = "1";
							},10);
						},200);
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
						},200);

						setTimeout(function() {
							title.style.opacity = "1";
							desc.style.opacity = "1";

							title.style.paddingLeft = "0";
							desc.style.paddingLeft = "0";	
						},200);
						
						var blog = document.getElementById("blog");
						if (blog !== null) {
							blog.style.paddingLeft = "0";
							blog.style.opacity = "0";
							blog.innerText = "";

							setTimeout(function() {
								menuImage.src = "./Menu.svg";
								menuImage.style.marginLeft = "0";
								blog.remove();
							},200);
						}

						var newBody = document.getElementById("body");

						if (newBody !== null) {
							newBody.style.transition = "all .2s";
							newBody.style.opacity = "0";

							setTimeout(function() {
								newBody = document.getElementById("body");
								newBody.remove();
								
								newBody = document.createElement("div");
								newBody.id = "body";

								document.body.appendChild(newBody);

								checkScroll(newBody);
							},200)
						}
						else 
						{
							newBody = document.createElement("div");
							newBody.id = "body";

							document.body.appendChild(newBody);

							checkScroll(newBody);
						}


						// Elements for the Contact form
						setTimeout(function() {
							// grab the new/old newBody
							var newBody = document.getElementById("body");
							
							var isContactSelectOpen = false;
							var mainText = document.createElement("h1");
							var contactTitle = document.createElement("h1");
							var whoToContactBox = document.createElement("div");
							var whoToContactText = document.createElement("h1");
							var messageHeaderBox = document.createElement("input");
							var messageBodyBox = document.createElement("input");
							var sendButton = document.createElement("a");

							mainText.id = "mainText";
							mainText.style = "position: absolute; font-size: 25px; left: 5%; margin-left: 462px; margin-top: 25px; top: 150px; font-family: Fanwood Text;";
							mainText.innerHTML = "Website made by <font style='font-size: 35px'>Pieter Malan</font> (hover over this text for more info)";
							
							contactTitle.id = "contactTitle";
							contactTitle.style = "position: absolute; font-weight: 400; top: 275px; left: 5%; margin-left: 462px; font-size: 45px; font-family: Catamaran;";
							contactTitle.innerText = "Contact Form";

							whoToContactBox.id = "whoToContactBox";
							whoToContactBox.style = "position: absolute; top: 405px; left: 5%; margin-left: 462px; height: 85px; width: 225px; outline: 2px solid rgba(0,0,0,.5)";
							
							whoToContactBox.onclick = function() {
								if (isContactSelectOpen == false) {
									isContactSelectOpen = true;
									var karla = document.createElement("div");
									var pieter = document.createElement("div");

									karla.style = "cursor: pointer; font-size: 25px; font-family: Open Sans; transition: all .3s; color: white; position: absolute; top: 405px; left: 5%; text-align: center; margin-left: 700px; height: 0px; width: 150px; background-color: black;";
									pieter.style = "cursor: pointer; font-size: 25px; font-family: Open Sans; transition: all .3s; color: white; position: absolute; top: 405px; left: 5%; margin-left: 860px; text-align: center; height: 0px; width: 150px; background-color: black;";

									karla.innerText = "Karla";
									pieter.innerText = "Pieter";

									newBody.appendChild(karla);
									newBody.appendChild(pieter);

									setTimeout(function() {
										karla.style.paddingTop = "25px";
										pieter.style.paddingTop = "25px";
										karla.style.height = "60px";
										pieter.style.height = "60px";
									},10);

									setTimeout(function() {
										karla.onclick = function() {
											pieter.innerText = "";
											pieter.style.height = "0";
											pieter.style.paddingTop = "0";
											
											karla.innerText = "";
											karla.style.height = "0";
											karla.style.paddingTop = "0";
											
											whoToContactText.innerText = "Karla";
											isContactSelectOpen = false;
										}

										pieter.onclick = function() {
											pieter.innerText = "";
											pieter.style.height = "0";
											pieter.style.paddingTop = "0";
											
											karla.innerText = "";
											karla.style.height = "0";
											karla.style.paddingTop = "0";

											whoToContactText.innerText = "Pieter";
											isContactSelectOpen = false;
										}
									},300)
								}
							}

							whoToContactText.id = "whoToContactText";
							whoToContactText.style = "color: rgba(0,0,0,.25); line-height: 50px; position: absolute; left: 20px; top: 0; bottom: 0; font-size: 22px; font-family: Open Sans; font-weight: 400;";
							whoToContactText.innerText = "Who to contact?";

							messageHeaderBox.id = "messageHeaderBox";
							messageHeaderBox.placeholder = "Message Header";
							messageHeaderBox.style = "padding-left: 20px; color: rgba(0,0,0,.4); font-size: 22px; position: absolute; top: 500px; left: 5%; margin-left: 462px; height: 85px; width: 541px; outline: 1px solid rgba(0,0,0,.5)";

							messageBodyBox.id = "messageBodyBox";
							messageBodyBox.placeholder = "Message Body";
							messageBodyBox.style = "padding-left: 20px; color: rgba(0,0,0,.4); font-size: 22px; position: absolute; top: 600px; left: 5%; margin-left: 462px; height: 85px; width: 541px; outline: 1px solid rgba(0,0,0,.5);";

							sendButton.id = "sendButton";
						
							sendButton.onclick = function() {
								if (whoToContactText.innerText == "Karla") {
									window.location.assign("mailto:karla@gmail.com?subject="+messageHeaderBox.value+"&body="+messageBodyBox.value);
								}
								else if (whoToContactText.innerText == "Pieter")
								{
									window.location.assign("mailto:pieter@gmail.com?subject="+messageHeaderBox.value+"&body="+messageBodyBox.value);
								}
							}
								
							sendButton.style = "position: absolute; text-decoration: none; font-size: 30px; font-family: Catamaran; font-weight: 400; left: 5%; margin-left: 462px; top: 700px; height: 88px; width: 224px; text-align: center; line-height: 90px; cursor: pointer; letter-spacing: 0.2em; color: white; background-color: black;";
							sendButton.innerText = "SEND";

							// Get my personal info
							mainText.onmouseenter = function(e) {
								var peterBox = document.createElement("div");
								var peterTitle = document.createElement("h1");
								var peterBody = document.createElement("h1");

								peterBox.className = "peterBox";
								peterBox.style = "margin-top: 20px; margin-left: 20px; position: absolute; background-color: black; color: white; height: 352px; width: 554px; transition: all .2s; opacity: 0";
								
								peterBox.style.left = e.pageX.toString() + "px";
								peterBox.style.top = e.pageY.toString() + "px";
								
								addEventListener('mousemove', (event) => {
									peterBox.style.transition = "all .1s";
									peterBox.style.left = event.pageX.toString() + "px";
									peterBox.style.top = event.pageY.toString() + "px";
								});

								peterTitle.id = "peterTitle";
								peterTitle.style = "color: white; font-size: 40px; font-family: Catamaran; position: absolute; top: 6px; margin: 0; left: 21px; font-weight: 600;";
								peterTitle.innerText = "Hi there!";
		
								peterBody.id = "peterBody";
								peterBody.style = "color: rgba(255,255,255,.5); font-size: 20px; font-family: Open Sans; position: absolute; top: 65px; left: 21px; right: 90px; font-weight: 400;";
								peterBody.innerHTML = "My name is Pieter Malan. I am a general-purpose programmer meaning I code anything that sounds interesting. This can range from websites to machine learning to custom 3d graphics in openGL/webGL to reverse engineering. <font color=white>( I also do UI design )</font> If you would like to hire me please make use of the contact form on the website and choose my name. <font color=white>Thanks for reading.</font>";

								peterBox.appendChild(peterTitle);
								peterBox.appendChild(peterBody);
								document.body.appendChild(peterBox);

								setTimeout(function() {
									peterBox.style.opacity = "1";
								},10);
							}

							mainText.onmouseleave = function(e) {
								var peterBoxes = document.getElementsByClassName("peterBox");
								
								if (peterBoxes !== null) {
									for (let i = 0; i < peterBoxes.length; i++) {
										peterBoxes[i].style.transition = "all .2s";
										peterBoxes[i].style.opacity = "0";
									
										setTimeout(function() {
											peterBoxes[i].remove();
										},200);
									}
								}
							}

							newBody.appendChild(mainText);
							newBody.appendChild(contactTitle);
							newBody.appendChild(whoToContactBox);
							newBody.appendChild(messageHeaderBox);
							newBody.appendChild(messageBodyBox);
							newBody.appendChild(sendButton);
							whoToContactBox.appendChild(whoToContactText);

							setTimeout(function() {
								newBody.style.opacity = "1";
							},10);
						},200);
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
	
	document.body.appendChild(newBody);
	
	checkScroll(newBody);

	for (let i = 1; i <= 10; i++) {
		var newCard = document.createElement("div");
		newCard.className = "card";

		var newCardImage = document.createElement("div");
		newCardImage.id = "card-image";
		newCardImage.style.backgroundSize = "cover";
		newCardImage.style.backgroundPosition = "50%";
		newCardImage.style.backgroundImage = "url(https://images.unsplash.com/photo-1508020268086-b96cf4f4bb2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)";

		var newCardTitle = document.createElement("div");
		newCardTitle.className = "card-title";
		newCardTitle.style.zIndex = "20"; 
		newCardTitle.innerText = i.toString() + " What I have learned";

		newCard.style.display = "initial";

		if (device == "pc") {
			newCard.style.marginTop = (-73+(175+150)*i).toString() + "px";
		}
		else
		{
			newCard.style.marginTop = (-75+(175+100)*i).toString() + "px";
		}

		newCard.style.opacity = "1";
		
		newBody.appendChild(newCard);
		newCard.appendChild(newCardTitle);
		newCard.appendChild(newCardImage);
	}
	
	if (window.innerWidth < 1200) 
	{
		mobileMode();
	}

	addBlogEvent();

	if (device == "pc") 
	{
		var cards = document.getElementsByClassName("card");
		var cardTitles = document.getElementsByClassName("card-title");
		
		for (let i = cards.length-1; i >= 0; i--) {
			cards[i].style.marginLeft = "462px";
			cards[i].style.height = "284px";
		}

		for (let i = cardTitles.length-1; i >= 0; i--) {
			cardTitles[i].style.fontSize = "30px";
			cardTitles[i].style.padding = "30px";
		}
	}

	setTimeout(function() {
		newBody.style.opacity = "1";
	},200)
}

function addBlogEvent() {
	var cards = document.getElementsByClassName('card');

	for (let x = cards.length-1; x >= 0; x--) {
		cards[x].onclick = function(e) {
			var circle = document.createElement("div");
			var circleX = (e.pageX);
			var circleY = (e.pageY);
			circle.style = "position: absolute; opacity: 1; background-color: white; z-index: 99; border-radius: 50%; transition: all .2s;";
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
			},200);
		}
	}
}

window.onload = function() {
	animateLoading();
	showLoaded();

	if (window.innerWidth >= 1200) 
	{
		pcMode();
	}
	
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
		var newBody = document.getElementById("body");

		// set image before changing position of menu icon
		menuImage.src = "./Back.svg";

		nav.style.boxShadow = "";

		drawerTitle.style.transition = "all .1s";
		drawerDesc.style.transition = "all .1s";

		title.style.opacity = "0";
		desc.style.opacity = "0";

		newBody.style.transition = "all .2s";
		newBody.style.opacity = "0";
		
		setTimeout(function() {
			newBody.remove();
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
		isBlogOpen = true;
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
			
			// This part should change with the cards info
			title.innerText = "What I have learned";
			desc.innerText = "My story";
			desc.style.marginTop = "-20px";
			var blog = document.createElement('div');
			blog.style = "font-family: Fanwood Text; font-size: 20px; color: black; position: absolute; top: 150px; left: 5%; right: 5%;";
			blog.id = "blog";
			blog.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			document.body.appendChild(blog);

			document.getElementById("body").remove();

			document.body.style.opacity = "1";
		},500);
		
		setTimeout(function() {
			nav.style.boxShadow = "";
			nav.style.height = "120px";

			menuImage.src = "./Back.svg";
			title.style.fontSize = "30px";
		},400)
		
		setTimeout(function() {
			menuImage.onclick = function() {
				document.body.style.opacity = "0";
				setTimeout(function() {
					location.reload();
					isBlogOpen = false;
				},400)
			}
		},300);
	}
}
