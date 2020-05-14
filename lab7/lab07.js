const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let container = document.getElementsByClassName("flex-container justify")[0];

for(let i=0;i<works.length;i++){

    let box =document.createElement("div");
    box.setAttribute("class","item")
    let tips = document.createElement("h4");
    tips.innerHTML = "Genre : " + works[i].tips;
    box.appendChild(tips);

    let box1 = document.createElement("div");
    box1.setAttribute("class","inner-box");

    let author = document.createElement("h3");
    author.innerHTML = works[i].author;
    author.setAttribute("style","display:inline-block;");
    box1.appendChild(author);

    let lifetime = document.createElement("p");
    lifetime.innerHTML = "lifetime:" + works[i].lifetime;
    lifetime.setAttribute("style","display:inline-block; width:30%; font-size:9pt;font-weight:bold; margin-left:10pt;");
    //确保author和lifetime能在同一行显示
    box1.appendChild(lifetime);

    box.appendChild(box1);

    let box2 = document.createElement("div");
    box2.setAttribute("class","inner-box");

    let photos = document.createElement("h3");
    photos.innerHTML = "Popular Photos";

    box2.appendChild(photos);

    for(let j = 0;j<works[i].photos.length;j++) {
        let photo = document.createElement("img");
        photo.setAttribute("class", "photo");
        photo.setAttribute("src",works[i].photos[j]);
        box2.appendChild(photo);
    }
    box.appendChild(box2);

    let button = document.createElement("button");
    button.innerHTML = "Visit";
    button.setAttribute("style","text-align:center");
    box.appendChild(button);

    container.appendChild(box);
}