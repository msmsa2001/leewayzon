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

    // Add active class to the corresponding tab button
    document.querySelector(".tab-button[data-tab='" + tabName + "']").classList.add("active");
}










var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}