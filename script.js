function navigationMenu() {
    var x = document.getElementById("navmenu");
    if (x.className === "container") {
      x.className += "  responsive";
    } else {
      x.className = "container";
    }
  }