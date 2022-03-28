anime({
  targets: "nav ul li",
  translateY: 50,
  duration: 1500,
});

anime({
  targets: ".aboutBox h1",
  translateY: 10,
  delay: 100,
});

anime({
  targets: ".aboutBox p",
  translateY: 10,
  delay: 100,
});

anime({
  targets: ".content h1",
  translateY: 50,
  duration: 1500
});

anime.timeline({ loop: false })
.add({
  targets: ".drag path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutQuad",
  fill: "#171818",
  duration: 3000,
  scale: 1.1,
  delay: 1000,
  direction: "alternate",
})
.add({
  targets: ".drag path",
  scale: 1
})