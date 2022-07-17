const hourPointer = document.querySelector(".hour");
const minutePointer = document.querySelector(".minute");
const secondPointer = document.querySelector(".second");
const transform = getTransform();
const datePointer = document.querySelector(".date");

function updateClock() {
  let now = new Date(),
    second = now.getSeconds() * 6,
    minute = now.getMinutes() * 6 + second / 60,
    hour = ((now.getHours() % 12) / 12) * 360 + minute / 12;
  datePointer.innerHTML = now.getDate();
  hourPointer.style[transform] = `rotate(${hour}deg)`;
  minutePointer.style[transform] = `rotate(${minute}deg)`;
  secondPointer.style[transform] = `rotate(${second}deg)`;
}
setInterval(updateClock, 1000);

function getTransform() {
  let style = document.createElement("div").style,
    transform,
    vendor;
  if (undefined !== style[(vendor = "webkitTransform")]) {
    transform = vendor;
  }
  if (undefined !== style[(vendor = "msTransform")]) {
    transform = vendor;
  }
  if (undefined !== style[(vendor = "transform")]) {
    transform = vendor;
  }
  return transform;
}
