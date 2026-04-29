import navbar from '/navbar.js';
navbar()

const main = document.querySelector('main')
const article = document.createElement('article')
const img = document.createElement('img')
const h1 = document.createElement('h1')
const header = document.createElement('header')
const p = document.createElement('p')

async function getArticle() {
    try {
        const response = await fetch('articles.json');
        console.log(response);
        if (!response.ok) {
            throw new Error('ressource non trouvée')
        }
        const data = await response.json()
        console.log(data)
        
        document.title = `${data[0].category} | Doctor Who - The Big Wiki`
        img.setAttribute('src', data[0].img)
        img.setAttribute('alt', data[0].altImg)
        main.appendChild(article)
        article.appendChild(img)
        console.log(main)
    }
    catch (error) {
        console.log(error)
    }
}
getArticle()