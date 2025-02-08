document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX + window.scrollX;
        const y = e.clientY + window.scrollY;
        
        // Update cursor position based on mouse position and scroll offset
        cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
    });

    document.addEventListener('scroll', function() {
        // Update cursor position based on scroll offset
        const x = window.scrollX + cursor.offsetWidth / 2;
        const y = window.scrollY + cursor.offsetHeight / 2;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    function setActiveLink() {
        let current = '';

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop - window.innerHeight / 2;
                if (window.scrollY >= sectionTop) {
                    current = link.getAttribute('href');
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });

        if (!current) {
            // If no section is active, default to "ABOUT"
            document.querySelector('.nav-link[href="#about"]').classList.add('active');
        }
    }

    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink); // Ensure it's also set on page load
});



let quotations = ['Designing the future, pixel by pixel.',
    'Building bridges between imagination and technology.',
    'Delivering innovative solutions through web development and desing.',
    'Your vision, our expertise.',
    'Coding my way to better tomorrow.',
    'Bringing digital dreams to life.',
    'Innovating, one line of code at a time.',
    'Developing robust and secure web applications.',
    'I love turning ideas into reality with code.',
    'A full-stack developer with a Security-first mindset.'];

let quotationEl = document.getElementById("quotation");
let randomNumber = Math.floor(Math.random()* quotations.length);

setInterval(function(){
    randomNumber = Math.floor(Math.random()* quotations.length);
    quotationEl.textContent = quotations[randomNumber];
}, 1000);
