document.body.addEventListener("mousemove", event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
    })

    gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
    })
});

const cont = document.getElementById('contact-body');

cont.addEventListener("mousemove", event => {
    const mouseX2 = event.clientX;
    const mouseY2 = event.clientY;

    gsap.set(".cursor-cont", {
        x: mouseX2,
        y: mouseY2,
    })
});