(() => {
  // js/collapse-instructions.js
  var branchName = (pathname) => {
    if (pathname.startsWith("/"))
      pathname = pathname.substring(1);
    if (pathname.endsWith("/"))
      pathname = pathname.substring(0, pathname.length - 1);
    return pathname;
  };
  if (document.getElementById("branch-name")) {
    document.getElementById("branch-name").innerText = branchName(window.location.pathname);
  }
  var reflowPlease = new CustomEvent("reflowPlease");
  var instructions = document.getElementById("instructions");
  var hidden = document.getElementById("hidden");
  var hideInstructions = () => {
    hidden.style.display = "block";
    instructions.style.display = "none";
  };
  var showInstructions = () => {
    hidden.style.display = "none";
    instructions.style.display = "block";
    window.dispatchEvent(reflowPlease);
  };
  if (document.getElementById("close")) {
    document.getElementById("close").onclick = hideInstructions;
  }
  if (document.getElementById("open")) {
    document.getElementById("open").onclick = showInstructions;
  }
})();
//# sourceMappingURL=collapse-instructions.js.map
