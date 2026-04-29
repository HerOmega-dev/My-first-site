export default function navbar() {
    const header = document.querySelector('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const link = ['Your ideas', 'Sign in', 'Sign up']
    link.forEach(text => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.setAttribute('href', '')
        a.textContent = text
        ul.appendChild(li)
        li.appendChild(a)
    })
    //faire les liens
    //intégrer la partie css
    header.appendChild(nav)
    nav.appendChild(ul)
}