gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero-subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

gsap.from(".section-title", {
    scrollTrigger: ".section-title",
    opacity: 0,
    x: -50,
    duration: 1
});

gsap.from(".service-item, .product-item", {
    scrollTrigger: ".service-item, .product-item",
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1
});
