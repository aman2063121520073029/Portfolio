window.addEventListener("DOMContentLoaded", () => {
  const sideBar = document.querySelector(".projects-sidebar");
  const projectButton = document.querySelector("#project-button");
  const closeSideBar = document.querySelector(".close-sidebar");

  projectButton.addEventListener("click", () => {
    sideBar.classList.remove("hidden");
    void sideBar.offsetWidth; // Force reflow
    sideBar.classList.remove("slide-out-animation");
    sideBar.classList.add("slide-in-animation");
  });

  closeSideBar.addEventListener("click", () => {
    sideBar.classList.remove("slide-in-animation");
    sideBar.classList.add("slide-out-animation");
    void sideBar.offsetWidth; // Force reflow before transition

    // Ensure transitionend listener is only added once per click
    const transitionEndHandler = () => {
      sideBar.classList.add("hidden");
      sideBar.removeEventListener("transitionend", transitionEndHandler);
    };
    sideBar.addEventListener("transitionend", transitionEndHandler);
  });
});