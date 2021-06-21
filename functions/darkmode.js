  $(document).ready(function () {
    $("#dark").click(function () {
      localStorage.setItem("dark", true);
      localStorage.removeItem("light", false);
      $("body").addClass("dark-mode");
    });
    $("#light").click(function () {
      localStorage.setItem("light", true);
      localStorage.removeItem("dark", false);
      $("body").removeClass("dark-mode");
    });
    var getLocalDarkVar = localStorage.getItem("dark");
    if (getLocalDarkVar == "true") {
      console.log("Dark Theme");
      $("body").addClass("dark-mode");
    } else {
      console.log("Light Theme");
      $("body").removeClass("dark-mode");
    }
  });
