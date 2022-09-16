
gsap.from('.rectangles', {
	yPercent: 100,
	ease: "power1.easeInOut",
	duration: 2,
	stagger: {
		amount: 2,
		from: "center"
	},
});

