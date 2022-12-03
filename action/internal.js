
export const Menu = () => {
    const sidePannel = document.getElementById("sidePannel");
    if (sidePannel.classList.value === "SideNavbar") {
      sidePannel.className = "SideNavbar active";
    } else {
      sidePannel.className = "SideNavbar";
    }
  };
  export const DarkMode = () => {
    const mode = document.querySelector("body");
    const dark = document.querySelector("#light-mode i");
    const darktext = document.querySelector("#light-mode span");
    mode.classList.toggle("dark-mode");
    if (dark.classList.value === "fas fa-moon") {
      dark.className = "fas fa-lightbulb";
      darktext.innerHTML = "Light";
    } else {
      darktext.innerHTML = "Dark";
      dark.className = "fas fa-moon";
    }
  };
  
  export const getReport = (type) => {
    return {
      type,
    };
  };
  export const playVideo = () => {
    document.querySelector(".player").style.backgroundImage = "";
    document.querySelector(".player .video_frame").classList.remove("hide");
    document.querySelector(".playBtn").style.display = "none";
  };
  export const info = () => {
    document.getElementById("movie-info").style.display = "block";
    document.getElementById("dwd-link").style.display = "none";
  };
  export const download = () => {
    document.getElementById("dwd-link").style.display = "block";
    document.getElementById("movie-info").style.display = "none";
  };
  
  export const RightPannel = () => {
    let right = document.querySelector(".Right");
    if (window.innerWidth < 892) {
      if (window.location.pathname === "/") {
        right.style.display = "block";
      } else {
        right.style.display = "none";
      }
    } else {
      right.style.display = "block";
    }
  };

  // --------------------------------profile code
  export const playList = (e) => {
    let myfav = document.querySelector(".TwoButton span");
    switch (e) {
      case "Movies":
        myfav.classList.remove("active");
        break;
      case "Music":
        myfav.classList.add("active");
        break;
      default:
        myfav.classList.add("active");
        break;
    }
  };
  