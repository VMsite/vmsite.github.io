const title = document.querySelector("#flow");

function move() {
  title.animate(
    [
      { transform: "translateX(0px)" },
      { transform: "translateX(30px)" },
      { transform: "translateX(0px)" },
    ],
    {
      duration: 1000,
    }
  );
}