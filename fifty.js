function makeMarquee () {

const title = 'FIFTY Music Festival — November 10–12, Desert Valley'

const marqueeText = new Array(50).fill(title).join(' — ')


const marquee = document.querySelector('.marquee span')

marquee.innerHTML = marqueeText

}

makeMarquee()

//random function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//selects all circles
const circles = document.querySelectorAll('.circle')


//animates each circle
circles.forEach((circle, index) => {
    circle.animate([
        // keyframes
        { transform: 'scale(1)' }, 
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' },
      ], { 
        // timing options - index gets each shape to delay separately
        delay: 300 * index,
        duration: 3000,
        iterations: Infinity
      });

})


const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach((squiggle, index) => {
    //generate random number for degrees between 0 and 45
    const randomNumber = random(0, 45)
    //create randomness for delay
    console.log(randomNumber)

    squiggle.animate([
        // keyframes
        { transform: 'rotate(0deg)' }, 
        //putting in random number
        //{ transform: 'rotate(' + randomNumber + 'deg)' },
        { transform: `rotate(${randomNumber}deg)` },
        { transform: 'rotate(0deg)' },
      ], { 
        // timing options - index gets each shape to delay separately
        delay: 300 * index,
        duration: 5000,
        iterations: Infinity
      });

})


//using github code to change elements as they come into viewport
inView('.section')
    .on('enter', section =>{
        section.classList.add('in-viewport')

    })
    .on('exit', section => {
        section.classList.remove('in-viewport');
    });


//set a delay as you scroll so you can see transition
inView.threshold(0.2)


// select each section on page and loop through
// each section grab artists and shapes to add transition delay
//want to make shapes fade in once after artists

const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
    //using query selector all inside section instead of document
    const artists = section.querySelectorAll('.lineup li')
    const shapes = section.querySelectorAll('.shape')

    artists.forEach((artist,index) => {
        const delay = index * 100
        artist.style.transitionDelay = delay + 'ms'

    })

    shapes.forEach((shape, index) => {
        //using length property to add shapes after artists
        const delay = (artists.length + index) * 100

        shape.style.transitionDelay = delay + 'ms'

    })

})


//smoothscroll between sections 

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {

    link.addEventListener('click', (event) => {

        console.log(event)

        //blocks default browser behavior of link jump
        event.preventDefault()

        //grabs href
        const href = link.getAttribute('href')
        //uses href to scroll to each
        document.querySelector(href).scrollIntoView({

            behavior: 'smooth'

        })

    })


})

