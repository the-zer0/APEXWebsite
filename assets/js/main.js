/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// EVENTS

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');

next.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function () {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})

//cordinators

document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 2000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseleave Event
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseclick Event
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //------ Gesture Tap Event
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  
});


// EMAIL JS
  emailjs.init("InErf_oBuTGnLVBkS");

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_6ffvf0h', 'template_5jyw61e', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Oops, something went wrong. Please try again.');
      });
  });