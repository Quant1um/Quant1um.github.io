[...document.querySelectorAll(".product-card-wrapper")].forEach((card) => {
    let image = card.querySelector(".card__inner");
    let bounds;
    card.addEventListener("mouseleave", () => image.style.transform = "");
    card.addEventListener("mouseenter", () => bounds = image.getBoundingClientRect());
    card.addEventListener("mousemove", (e) => {
        const x = e.clientX - bounds.x - bounds.width / 2;
        const y = e.clientY - bounds.y - bounds.height / 2;
        const d = Math.hypot(x, y) + 1;

        image.style.transform = `
          scale3d(1.03, 1.03, 1.03)
          perspective(1200px) 
          rotate3d(
            ${-y / 200},
            ${x / 200},
            0,
            ${Math.log(d) * 2}deg
          )
        `;
    });
});