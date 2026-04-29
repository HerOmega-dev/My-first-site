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

//---Appel des articles---

// const classic = document.querySelector("#classic");
// const newWho = document.querySelector("#new");
// const disney = document.querySelector("#disney");

// classic.addEventListener('click', () => {
//     window.location.href = '../classic.html'
// })

const param = new URLSearchParams(window.location.search)
const id = param.get('id')
console.log(typeof(id))

fetch("../articles.json")
.then (Response => Response.json())
.then (data => {
    console.log(data)
    const article = data.filter(art => art.id == id)
    console.log(article)
    id.addEventListener('click', () => {
        window.location.href = `../article.html?id=${article.id}`
    })
})


// //---Cours - fetch---
// fetch('home.json',{})
// //{method : 'GET'} implicite
// .then(response => response.json())
// .then(article => {
//     console.log(article)
//     const h1 = document.createElement('h1')
//     h1.textContent = article.titre
//     document.body.appendChild(h1)
// });

// // ---Cours - Méthode post avec headers--- 
// // const token que j'ai pas récupéré
// fetch('home.js', {
//     method :'POST',
//     headers : {
//     "Content-Type" : "application/json",
//     "Authorization" : `Bearer ${token}`
//     },
//     body : JSON.stringify(article)
// })
// then(res => {
//     if (res.ok && res.status === 200) {
//         console.log("L'article a été ajouté")
//     }
// })

// // ---Cours---
// async function getArticle() {
//     try {
//         const response = await fetch('home.js');
//         console.log(response);
//         if (response.ok) {
//             const data = await response.json()
//             console.log(data)
//         }
//         if (!response.ok) {
//             throw new Error('ressource non trouvée')
//         }
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// getArticle()