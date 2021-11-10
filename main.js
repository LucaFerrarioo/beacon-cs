function thirdPage() {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateItem = function(e) {
        const span = this.querySelector('.hover-this > span');
        const {offsetX: x, offsetY: y} = e,
        {offsetWidth: width, offsetHeight: height} = this,

        move = 25,
        xMove = x/width * (move * 2) - move,
        yMove = y/height * (move * 2) - move;

        span.style.transform = 'translate(${xMove}px, ${yMove}px)';

        if(e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
        const {clientX: x, clientY: y} = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateItem));
    link.forEach(b => b.addEventListener('mouseleave', animateItem));
    window.addEventListener('mousemove', editCursor);
}

//scrollReveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.reveal');

const srd = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 200,
    reset: true,
})

srd.reveal('#delayed');