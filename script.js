const container = document.querySelector(".character-container");
const reveal = document.getElementById("revealImage");

if (container && reveal) {

    container.addEventListener("mouseenter", () => {
        reveal.style.opacity = "1";
    });

    container.addEventListener("mouseleave", () => {
        reveal.style.opacity = "0";

        reveal.style.maskImage = "none";
        reveal.style.webkitMaskImage = "none";
    });

    container.addEventListener("mousemove", (e) => {

        const rect = container.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const magicRadius = 220;

        const gradient =
        `radial-gradient(
            circle ${magicRadius}px at ${x}px ${y}px,
            white 0%,
            white 40%,
            transparent 100%
        )`;

        reveal.style.maskImage = gradient;
        reveal.style.webkitMaskImage = gradient;
    });

}