const items = document.querySelectorAll("nav ul li i");
const light = document.querySelector("nav .tubelight");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => {
      i.classList.remove("active");
      i.classList.remove("pd");
    });
    item.classList.add("active");
    item.classList.toggle("pd");
    light.style.left = `${item.offsetLeft + light.offsetWidth / 4}px`;
  });
});
