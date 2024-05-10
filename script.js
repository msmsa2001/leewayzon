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
}