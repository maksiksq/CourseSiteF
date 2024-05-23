document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementsByClassName("darkMode")[0];
  const themeChange = document.getElementsByClassName("themeColor");
  const allInit = document.getElementsByTagName("*");

  const content3 = document.getElementsByClassName("content3")[0];

  let all = [];

  console.log("hai");
  let ifDark = localStorage.getItem("IfDarkMode");

  if (ifDark === "true") {
    darkModify(true);
  }

  for (let i = 0; i < allInit.length; i++) {
    if (!content3.contains(allInit[i])) {
      all.push(allInit[i]);
    }
  }

  function darkModify(auto) {
    darkModeButton.classList.remove("flip")
    darkModeButton.offsetWidth;
    ifDark = localStorage.getItem("IfDarkMode");
    if (ifDark === "true" && auto === false) {
      for (let i = 0; i < themeChange.length; i++) {
        themeChange[i].classList.remove("themeDark");
      }

      for (let i=0, max=all.length; i < max; i++) {
        all[i].style.color = "black";
      }

      darkModeButton.classList.add("flip")
      darkModeButton.classList.remove("darkModeImgSwap")

      localStorage.setItem("IfDarkMode", "false");
    } else {
      for (let i = 0; i < themeChange.length; i++) {
        themeChange[i].className += " themeDark";
      }

      for (let i=0, max=all.length; i < max; i++) {
        all[i].style.color = "white";
      }

      darkModeButton.classList.add("flip")
      darkModeButton.className += " darkModeImgSwap";

      localStorage.setItem("IfDarkMode", "true");
    }


  }

  darkModeButton.addEventListener("click", () => {
    darkModify(false);
  });

  const sub2footer = document.getElementsByClassName("sub2Footer");

  addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
});
