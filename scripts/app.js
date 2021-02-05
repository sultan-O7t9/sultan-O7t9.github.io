const loading = document.getElementById("loading");
setTimeout(() => {
  loading.style.opacity = 0;
  setTimeout(() => {
    loading.style.display = "none";
  }, 800);
}, 1000);

// setTimeout(function () {
//   const loading = document.getElementById("loading");
//   setTimeout(function () {
//     // animation:  duration timing-function delay iteration-count direction fill-mode;
//     loading.style.animation = "fade-out 1s ease-out 1 forward";
//     loading.css("display", "none");
//   }, 800);
// }, 1450);
