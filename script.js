var sideNav = document.getElementById("side-bar");
sideNav.style.display = "none";
function sidebar() {
    sideNav.style.display = sideNav.style.display === "none" ? "block" : "none";
}
document.querySelectorAll(".side-bar a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("side-bar").style.display = "none";
    });
});







function openTab(tabName) {
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    document.querySelector(".tab-button[data-tab='" + tabName + "']").classList.add("active");
}










var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function openmodal(){
  modal.style.display = "block";
  sideNav.style.display = "none";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



let calScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let pos = document.documentElement.scrollTop;
  let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calHeight);

  if (pos > 100) {
      scrollProgress.style.display = 'grid';
  } else {
      scrollProgress.style.display = 'none';
  }

  scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
};

let PercentageValue = () => {
  let scrollProgress = document.getElementById('progressbar');
  let pos = document.documentElement.scrollTop;
  let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scroll = Math.round((pos * 100) / calHeight);
  let progressValue = document.querySelector('.progressValue');

  if (pos > 100) {
      scrollProgress.style.display = 'grid';
  } else {
      scrollProgress.style.display = 'none';
  }

  progressValue.textContent = `${scroll}%`;
  scrollProgress.style.background = `conic-gradient(#194eb9 ${scroll}%, #67ccff ${scroll}%)`;
};

let combinedScrollHandler = () => {
  calScrollValue();
  PercentageValue();
};

window.onscroll = combinedScrollHandler;
window.onload = combinedScrollHandler;

document.getElementById('progress').addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
 

function country(){
  const menuList = document.getElementById('menuList');
  menuList.style.display = menuList.style.display === "none" ? "block" : "none";
}
window.onclick = function(event) {
  if (event.target == menuList) {
    menuList.style.display = "none";
  }
}