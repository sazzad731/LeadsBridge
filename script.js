const navItems = document.getElementById("nav-items");
const toggleBtn = document.getElementById("nav-toggle-btn");
function toggleNav(){
  if (navItems.className.split(" ").includes("-top-96")) {
    navItems.classList.add("top-[3.75rem]");
    navItems.classList.remove("-top-96");
  }else{
    navItems.classList.remove("top-[3.75rem]");
    navItems.classList.add("-top-96");
  }
}

document.addEventListener("click", (event) => {
  const isClickInsideMenu = navItems.contains(event.target);
  const isClickOnButton = toggleBtn.contains(event.target);
  if (navItems.classList.contains("top-[3.75rem]") && isClickInsideMenu && !isClickOnButton) {
    navItems.classList.remove("top-[3.75rem]");
    navItems.classList.add("-top-96");
  } else if(navItems.classList.contains("top-[3.75rem]") && !isClickInsideMenu && !isClickOnButton){
    navItems.classList.remove("top-[3.75rem]");
    navItems.classList.add("-top-96");
  }
});