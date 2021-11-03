gsap.set('.follower', {xPercent: -42.5, yPercent: -42.5});
gsap.set('.cursor', {xPercent: -10, yPercent: -10});

var follow = document.querySelector('.follower');
var cursor = document.querySelector('.cursor-abt');
var bd = document.querySelector('#body-abt');

window.addEventListener('mousemove', e => {
    gsap.to(cursor, 0.2, {x:e.clientX, y:e.clientY});
    gsap.to(follow, 0.9, {x:e.clientX, y:e.clientY});
})
