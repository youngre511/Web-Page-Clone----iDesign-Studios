const menuButton = document.querySelector("#hamMenu");
const nav = document.querySelector("nav");
const serviceDrop = document.querySelector("#servicesDrop");
const serviceList = document.querySelector("#servicesList");
const processDrop = document.querySelector("#processDrop");
const processList = document.querySelector("#processList");
const services = document.querySelector("#services");
const process = document.querySelector("#process");
const toTopBtn = document.querySelector("#back-to-top");

const hamTop = document.querySelector("#hamTop");
const hamMid = document.querySelector("#hamMid");
const hamBottom = document.querySelector("#hamBottom");
const proRight = document.querySelector("#proRight");
const proLeft = document.querySelector("#proLeft");
const servRight = document.querySelector("#servRight");
const servLeft = document.querySelector("#servLeft");

//=========SCROLL TO TOP BUTTON=========//

toTopBtn.addEventListener("click", scrollToTop);
toTopBtn.addEventListener("mouseenter", hover);
toTopBtn.addEventListener("mouseleave", noHover);

function toTopFade() {
	gsap.to(toTopBtn, {
		duration: 0.3,
		opacity: 0,
		ease: "power1.inOut",
		onComplete: toTopDisap,
	});
}

function toTopDisap() {
	toTopBtn.style.display = "none";
}

function toTopAppear() {
	gsap.to(toTopBtn, {
		duration: 0.3,
		opacity: 0.5,
		display: "block",
		ease: "power1.inOut",
	});
}

gsap.to(toTopBtn, {
	scrollTrigger: {
		trigger: document.body,
		start: "top",
		end: "bottom bottom",
		onEnter: toTopAppear,
		onLeaveBack: toTopFade,
	},
	opacity: 0.5,
	duration: 0.5,
	ease: "power1.inOut",
});

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function hover() {
	gsap.to(toTopBtn, { duration: 0.15, opacity: 0.7 });
}

function noHover() {
	gsap.to(toTopBtn, { duration: 0.15, opacity: 0.5 });
}

//=========MOBILE DROPDOWN MENU TOGGLE=========//

menuButton.addEventListener("click", dropdownToggle);

function dropdownToggle() {
	if (window.innerWidth < "1024") {
		if (nav.classList.contains("show")) {
			nav.classList.remove("show");
			serviceList.classList.remove("shown");
			processList.classList.remove("shown");
			gsap
				.timeline()
				.to(hamTop, {
					duration: 0.1,
					transformOrigin: "50% 50%",
					rotation: 0,
					scaleX: 1,
					ease: "power1.out",
				})
				.to(hamTop, {
					duration: 0.2,
					y: 0,
					ease: "back.out(1.7)",
				});
			gsap
				.timeline()
				.to(hamBottom, {
					duration: 0.1,
					transformOrigin: "50% 50%",
					rotation: 0,
					scaleX: 1,
					ease: "power1.out",
				})
				.to(hamBottom, {
					duration: 0.2,
					y: 0,
					ease: "back.out(1.7)",
				});
			gsap.to(hamMid, {
				duration: 0.2,
				strokeWidth: 2,
			});
			gsap
				.timeline()
				.to(nav, {
					duration: 0.3,
					height: "0",
					ease: "power1.inOut",
				})
				.to(serviceList, {
					duration: 0.01,
					height: "0",
				})
				.to(
					processList,
					{
						duration: 0.01,
						height: "0",
					},
					"-+0.01"
				)
				.to(
					servRight,
					{
						duration: 0.01,
						x: 0,
					},
					"-+0.01"
				)
				.to(servLeft, {
					duration: 0.01,
					x: 0,
				})
				.to(
					proRight,
					{
						duration: 0.01,
						x: 0,
					},
					"-+0.01"
				)
				.to(
					proLeft,
					{
						duration: 0.01,
						x: 0,
					},
					"-+0.01"
				);
		} else {
			nav.classList.add("show");
			gsap
				.timeline()
				.to(hamTop, {
					duration: 0.1,
					y: 6,
					ease: "power.in",
				})
				.to(hamTop, {
					duration: 0.2,
					transformOrigin: "50% 50%",
					rotation: 45,
					scaleX: 1.1,
					ease: "back.out(1.7)",
				});
			gsap
				.timeline()
				.to(hamBottom, {
					duration: 0.1,
					y: -6,
					ease: "power.in",
				})
				.to(hamBottom, {
					duration: 0.2,
					transformOrigin: "50% 50%",
					rotation: -45,
					scaleX: 1.1,
					ease: "back.out(1.7)",
				});
			gsap.to(hamMid, {
				duration: 0.2,
				strokeWidth: 0,
			});
			gsap.to(nav, {
				duration: 0.3,
				height: "auto",
				ease: "power1.inOut",
			});
		}
	}
}

//=========MOBILE SUB-MENU TOGGLES=========//

serviceDrop.addEventListener("click", serveDropToggle);
processDrop.addEventListener("click", processDropToggle);

function serveDropToggle() {
	if (window.innerWidth < "1024") {
		if (serviceList.classList.contains("shown")) {
			serviceList.classList.remove("shown");
			gsap.to(servRight, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(servLeft, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(serviceList, {
				duration: 0.2,
				height: "0",
				ease: "power1.inOut",
			});
		} else {
			serviceList.classList.add("shown");
			processList.classList.remove("shown");
			gsap.to(servRight, { duration: 0.2, x: -200, ease: "power1.inOut" });
			gsap.to(servLeft, { duration: 0.2, x: 200, ease: "power1.inOut" });
			gsap.to(proRight, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(proLeft, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(serviceList, {
				duration: 0.2,
				height: "auto",
				ease: "power1.inOut",
			});
			gsap.to(processList, {
				duration: 0.2,
				height: "0",
				ease: "power1.inOut",
			});
		}
	}
}

function processDropToggle() {
	if (window.innerWidth < "1024") {
		if (processList.classList.contains("shown")) {
			processList.classList.remove("shown");
			gsap.to(proRight, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(proLeft, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(processList, {
				duration: 0.2,
				height: "0",
				ease: "power1.inOut",
			});
		} else {
			processList.classList.add("shown");
			serviceList.classList.remove("shown");
			gsap.to(proRight, { duration: 0.2, x: -200, ease: "power1.inOut" });
			gsap.to(proLeft, { duration: 0.2, x: 200, ease: "power1.inOut" });
			gsap.to(servRight, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(servLeft, { duration: 0.2, x: 0, ease: "power1.inOut" });
			gsap.to(processList, {
				duration: 0.2,
				height: "auto",
				ease: "power1.inOut",
			});
			gsap.to(serviceList, {
				duration: 0.2,
				height: "0",
				ease: "power1.inOut",
			});
		}
	}
}

//========WIDE-SCREEN NAV RULES========//

services.addEventListener("mouseenter", serveSubShow);
process.addEventListener("mouseenter", processSubShow);
services.addEventListener("mouseleave", serveSubHide);
process.addEventListener("mouseleave", processSubHide);

function serveSubShow() {
	if (window.innerWidth >= "1024") {
		servicesList.classList.remove("hide");
		servicesList.classList.add("show");
		gsap.to(servicesList, { duration: 0.3, opacity: 1 });
	}
}

function serveSubHide() {
	if (window.innerWidth >= "1024") {
		gsap.to(serviceList, { duration: 0.3, opacity: 0 });
		setTimeout(serveSubDisplay, 300);
	}
}

function serveSubDisplay() {
	serviceList.classList.remove("show");
	serviceList.classList.add("hide");
}

function processSubShow() {
	if (window.innerWidth >= "1024") {
		processList.classList.remove("hide");
		processList.classList.add("show");
		gsap.to(processList, { duration: 0.3, opacity: 1 });
	}
}

function processSubHide() {
	if (window.innerWidth >= "1024") {
		gsap.to(processList, { duration: 0.3, opacity: 0 });
		setTimeout(processSubDisplay, 300);
	}
}

function processSubDisplay() {
	processList.classList.remove("show");
	processList.classList.add("hide");
}

//========SCREEN-SIZE RESET========//

//Removes the effects of rules for screen-widths other than the current width.

window.addEventListener("resize", screenAdjust);

function screenAdjust() {
	if (window.innerWidth < "1024") {
		serviceList.style.opacity = null;
		processList.style.opacity = null;
	}
	if (window.innerWidth >= "1024") {
		nav.removeAttribute("style");
		nav.removeAttribute("class");
		serviceList.style.height = null;
		processList.style.height = null;
		serviceList.classList.remove("shown");
		processList.classList.remove("shown");
		gsap.to(hamTop, {
			duration: 0.01,
			transformOrigin: "50% 50%",
			rotation: 0,
			scaleX: 1,
			y: 0,
		});
		gsap.to(hamBottom, {
			duration: 0.01,
			transformOrigin: "50% 50%",
			rotation: 0,
			scaleX: 1,
			y: 0,
		});
		gsap.to(hamMid, { duration: 0.01, strokeWidth: 2 });
		gsap.to(servRight, { duration: 0.01, x: 0 });
		gsap.to(servLeft, { duration: 0.01, x: 0 });
		gsap.to(proRight, { duration: 0.01, x: 0 });
		gsap.to(proLeft, { duration: 0.01, x: 0 });
	}
}
