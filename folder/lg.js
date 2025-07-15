const s = document.getElementById("btn");
const counter = document.getElementById("counter");
counter.innerHTML = localStorage.getItem("counter");

s.addEventListener("click", (e) => {
  alert("html element");
});
