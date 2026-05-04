//---Navbar---

// import navbar from '/navbar.js';
// navbar()

//---Changer le titre---

const webTitle = document.querySelector('title')
webTitle.textContent = "Doctor Who - The Big Wiki"

//---Annimation TARDIS---

let angle = 0;
const box = document.querySelector(".box");
const faces = document.querySelectorAll(".faces");
const images = document.querySelectorAll(".tardis");

box.addEventListener("wheel", (e) => {
    e.preventDefault();
    angle += e.deltaY * 0.1;
    console.log(angle)
    box.style.transform = `rotateY(${angle}deg)`
}, {passive: false});

//---Récupérer l'id de l'article dans l'url de la page---

//  
// console.log(id)

// fetch("../articles/articles.json")
// .then (Response => Response.json())
// .then (data => {
//     // console.log(data)
//     const article = data.filter(art => art.id == id)
//     // console.log(article)
//     id.addEventListener('click', () => {
//         window.location.href = `../articles/article.html?id=${article.id}`
//     })
// });

const imgs = document.querySelectorAll("article img")
console.log(imgs)
imgs.forEach(imgs => {
    imgs.addEventListener('click', () => {
        window.location.href = `../articles/articles.html?id=${imgs.id}`
        console.log(location)
    })
    const imgsID = imgs.id
    console.log(imgsID)
})