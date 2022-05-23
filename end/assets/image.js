let images = [
    "../photos/code.jpg",
    "../photos/plane.jpg",
    "../photos/sunset.jpg",
    "../photos/car.jpg",
    "../photos/nature.jpg",
    "../photos/beach.jpg",
];

for (let i = 0; i < images.length; i++) {
    document.querySelectorAll(".image")[i].style.backgroundImage = `url(${images[i]})`;
    document.querySelectorAll(".image")[i].style.backgroundSize = "cover";
}
