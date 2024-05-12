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