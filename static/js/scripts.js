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

//Faders 

const images = document.querySelector('.about-tag');


observer = new IntersectionObserver((entries) => {

	console.log(entries);

	if(entries[0].intersectionRatio > 0) {
		entries[0].target.style.animation = 'anim1 2s forwards'
	}
	else {
		entries[0].target.style.animation = 'none';
	}
})

observer.observe(images)







