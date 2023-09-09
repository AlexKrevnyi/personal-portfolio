
//Mobile Nav Menu

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
	document.querySelectorAll('.link-close').forEach(n => n.addEventListener('click', () => {
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

//About Tags Faders Observer

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
	threshold: 1,
	rootMargin: "0px 0px -100px 0px"
};
const blocks = document.querySelectorAll('.blocks');

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

blocks.forEach(block => {
	appearOnScroll.observe(block);
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
const projects = document.querySelectorAll('.fpro');

	
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

	projects.forEach(project => {
		slideOnScroll.observe(project);
	});


//Accordion Observer/My Skills Observer

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

//CircleType Animated Text

const circleType = new CircleType
	(document.getElementById('rotated'));

//Contact Me Pop Up Form
	const openModal = document.querySelector('.cont-btn');
	const closeModal = document.querySelector('.close-btn');
	const submitModal = document.querySelector('.submit-form');


	openModal.addEventListener('click', () => {
		modal.showModal();
	})

	closeModal.addEventListener('click', () => {
		modal.close();
	})

//Sent Message Contact Form

	function alert() {
		var name = document.getElementById('name');
		var email = document.getElementById('email');
		var msg = document.getElementById('message');
		const success = document.getElementById('success');
		const danger = document.getElementById('danger');

		if (name.value === ''|| email.value === '' || msg.value === '') {
			danger.style.display = 'block';
		}
			else {
				setTimeout(() => {
					name.value = '';
					email.value = '';
					msg.value = '';
				}, 2000);

				success.style.display = 'block';
			}

		setTimeout(() => {
			danger.style.display = 'none';
			success.style.display = 'none';
		}, 4000);	

	};

//Email Contact Form























