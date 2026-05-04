import navbar from '/navbar.js';
navbar()

const main = document.querySelector('main')
const article = document.createElement('article')
const img = document.createElement('img')
const h1 = document.createElement('h1')
const div = document.createElement('div')
const p1 = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const content = document.createElement('p')

async function getArticle() {
    try {
        const response = await fetch('articles.json');
        console.log(response);

        if (!response.ok) {
            throw new Error('ressource non trouvée')
        }

        const data = await response.json()
        console.log(data)

        const param = new URLSearchParams(window.location.search)
        const getId = param.get('id')
        console.log(getId)

        let num = 0
        switch (getId) {
            case "classic":
                num = 0
                break;
            case "newWho":
                num = 1
                break;
            case "whoniverse":
                num = 2
                break;
        }

        console.log(num)
        console.log(data[num])

        document.title = `${data[num].category} | Doctor Who - The Big Wiki`
        img.setAttribute('src', data[num].img)
        img.setAttribute('alt', data[num].altImg)
        main.appendChild(article)
        article.appendChild(img)
        h1.textContent = data[num].title
        article.appendChild(h1)
        div.setAttribute('id', 'info')
        article.appendChild(div)
        p1.textContent = data[num].lectureTime
        p2.textContent = data[num].author
        p3.textContent = data[num].date
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        content.textContent = data[num].content
        content.setAttribute('id', 'content')
        article.appendChild(content)
        // console.log(main)
    }
    catch (error) {
        console.log(error)
    }
}
getArticle()