const myContainer = document.querySelector(".my-container");
const myContainer2 = document.querySelector(".my-container2");
const myContainer3 = document.querySelector(".my-container3");
const myContainer4 = document.querySelector(".my-container4");

myContainer.insertAdjacentHTML("beforebegin", "<span>bajskorv</span>");
myContainer2.insertAdjacentHTML("afterbegin", "<span>bajskorv</span>");
myContainer3.insertAdjacentHTML("beforeend", "<span>bajskorv</span");
myContainer4.insertAdjacentHTML("afterend", "<span>bajskorv</span>");
