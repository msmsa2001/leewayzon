function sidebar() {
  var sideNav = document.getElementById("side-bar");
  var icon = document.getElementById("sidebar");
  
  if (sideNav.style.display === "none" || sideNav.style.display === "") {
      sideNav.style.display = "block";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
  } else {
      sideNav.style.display = "none";
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
  }
}

document.querySelectorAll(".side-bar a").forEach(link => {
  link.addEventListener("click", () => {
      document.getElementById("side-bar").style.display = "none";
      var icon = document.getElementById("sidebar");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
  });
});

function toggleMenu(chevron, menu) {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    chevron.classList.add("up");
    chevron.classList.remove("down");
  } else {
    menu.style.display = "none";
    chevron.classList.add("down");
    chevron.classList.remove("up");
  }
}
document.querySelectorAll('.navs a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    let href = this.getAttribute('href'); // Get the href attribute value
    window.location.href = href; // Redirect to the href value
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
      scrollProgress.style.display = 'grid';
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
      scrollProgress.style.display = 'grid';
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
 

const menuList = document.getElementById('menuList');
function country(){
  menuList.style.display = menuList.style.display === "none" ? "block" : "none";
}
function global(){
  menuList.style.display="none";
}
window.onclick = function(event) {
  if (event.target == menuList) {
    menuList.style.display = "none";
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav1 ul li');
  const subMenus = document.querySelectorAll('.services_nav ul');

  let currentSubMenu = null;

  navItems.forEach(navItem => {
    navItem.addEventListener('mouseover', () => showSubMenu(navItem));
    navItem.addEventListener('focus', () => showSubMenu(navItem), true);
    navItem.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      showSubMenu(navItem);
    });
  });

  subMenus.forEach(subMenu => {
    subMenu.addEventListener('mouseover', () => keepSubMenuVisible(subMenu));
    subMenu.addEventListener('mouseout', (event) => {
      if (!event.relatedTarget || !event.relatedTarget.closest('.services_nav ul') && !event.relatedTarget.closest('.nav1 ul li')) {
        subMenu.classList.remove('active');
      }
    });
    subMenu.addEventListener('click', () => keepSubMenuVisible(subMenu));
  });

  function showSubMenu(navItem) {
    hideAllSubMenus();
    if (navItem.id === 'service_nav1') {
      document.querySelector('.service_nav1').classList.add('active');
      currentSubMenu = document.querySelector('.service_nav1');
    } else if (navItem.id === 'service_nav2') {
      document.querySelector('.service_nav2').classList.add('active');
      currentSubMenu = document.querySelector('.service_nav2');
    } else if (navItem.id === 'service_nav3') {
      document.querySelector('.service_nav3').classList.add('active');
      currentSubMenu = document.querySelector('.service_nav3');
    }
  }

  function hideAllSubMenus() {
    subMenus.forEach(subMenu => {
      subMenu.classList.remove('active');
    });
    currentSubMenu = null;
  }

  function keepSubMenuVisible(subMenu) {
    hideAllSubMenus();
    subMenu.classList.add('active');
    currentSubMenu = subMenu;
  }

  document.querySelector('.nav1').addEventListener('mouseleave', (event) => {
    if (!event.relatedTarget || !event.relatedTarget.closest('.services_nav ul')) {
      hideAllSubMenus();
    }
  });
});


