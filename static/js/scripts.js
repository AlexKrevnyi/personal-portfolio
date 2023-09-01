const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');
	
	if (visibility === "false") {
		primaryNav.setAttribute('data-visible', true);
		navToggle.setAttribute('aria-expanded', true);
	} else if (visibility === "true") {
		primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}
});

//Links
	document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
		primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
	}))

//Accordions

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
	accordion.addEventListener('click', e => {
		accordion.classList.toggle('active');
	})
});

//Intersectional Observer

/*
const images = document.querySelectorAll('.about-tag');


observer = new IntersectionObserver((entries) => {

	entries.forEach(entry => {
		if(entry.intersectionRatio > 0) {
			entry.target.style.animation = 'anim1 2s forwards'
		}
		else {
			entry.target.style.animation = 'none';
		}

	})

	
})

images.forEach(image => {
	observer.observe(image)
})

*/

/*
const sectionOne = document.querySelector('.about-tag');
const sections = document.querySelectorAll('p');

const options = {
	root: null,
	threshold: 0,
	rootMargin: "-200px"
 };

const observer = new IntersectionObserver(function(entries, observer) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			return;
		}
		console.log(entry.target);
		entry.target.classList.toggle('inverse');
		observer.unobserve(entry.target);
	});
}, options);

sections.forEach(section => {
	observer.observe(section);
});

*/

//About Tags Faders Observer

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
	threshold: 1,
	rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
	(function(
		entries, 
		appearOnScroll
		) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target);
			}
		});
	}, 
	appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});


//My Story Fader Observer

const typewriter = document.querySelectorAll('.anim1');
const fadeOptions = {
	threshold: 1,
	rootMargin: "0px 0px -100px 0px"
};

const appearTypewriter = new IntersectionObserver
	(function(
		entries,
		appearTypewriter
		) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('fade');
				appearTypewriter.unobserve(entry.target);
			}
		});
	},
	fadeOptions);

	typewriter.forEach(typewriter => {
		appearTypewriter.observe(typewriter);
	});

//Sliders Observer 

const sliders = document.querySelectorAll('.edelement');
const slideOptions = {
	threshold: 0,
};
const images = document.querySelectorAll('.image-card');
const aboutImages = document.querySelectorAll('.about'); 
	
const slideOnScroll = new IntersectionObserver
	(function(
		entries, 
		slideOnScroll
		) {
		entries.forEach(entry => {
			if(!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				slideOnScroll.unobserve(entry.target);
			}
		});
	},
	slideOptions);

	sliders.forEach(slider => {
		slideOnScroll.observe(slider);
	});

	images.forEach(image => {
		slideOnScroll.observe(image);
	});

	aboutImages.forEach(aboutImage => {
		slideOnScroll.observe(aboutImage);
	});

//Accordion Observer

	const workExs = document.querySelector('.accord-container');
	const workSlideOptions = {
		rootMargin: "-100px"
	};
	const mySkills = document.querySelector('.my-skills-container');

	const workSlide = new IntersectionObserver 
	(function(
		entries, 
		workSlide){
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			} else {
				entry.target.classList.add('appear');
				workSlide.unobserve(entry.target);
			}
		});
	},
	workSlideOptions);

	workSlide.observe(workExs);
	workSlide.observe(mySkills);



















