let images = [
    "https://www.eecs.mit.edu/wp-content/uploads/2021/06/compscihero-1024x545.jpg",
    "https://www.rd.com/wp-content/uploads/2020/01/GettyImages-1131335393-e1580493890249-scaled.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
    "https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-1.jpg"    
];

for (let i = 0; i < images.length; i++) {
    document.querySelectorAll(".image")[i].style.backgroundImage = `url(${images[i]})`;
    document.querySelectorAll(".image")[i].style.backgroundSize = "cover";
}
