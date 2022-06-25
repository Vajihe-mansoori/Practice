const body = document.body;
const bgColorsBody = ["#8158d3", "#324c57", "#6b6bfa", "#ff96bd", "#ec7358"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menuitem");
const menuBorder = menu.querySelector(".menuborder");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");
  if (activeItem == item) return;
  if (activeItem) {
    activeItem.classList.remove("active");
    const activeIcon = document.querySelector(".pd");
    activeIcon.classList.remove("pd");
    activeIcon.classList.add("pl");
  }
  item.classList.add("active");
  item.childNodes[1].classList.add("pd");
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});
