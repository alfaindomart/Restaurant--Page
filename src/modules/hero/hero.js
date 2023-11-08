import createElement from "../../create-dom.js"

import restostock from "../image/restostock.jpg"

// create DOM


const home =  function() {
    
const content = document.getElementById('content')

//header
const header = createElement('header')
const h1 = createElement('h1')
const tabContainer = createElement('div', 'tab-container')
const menuTab = createElement('div', 'menu-tab')
const contactTab = createElement('div', 'contact-tab')

//header content
menuTab.innerHTML = 'Menu'
contactTab.innerHTML = 'Contact Us'

//append Header
header.appendChild(h1)
header.appendChild(tabContainer)
tabContainer.appendChild(menuTab)
tabContainer.appendChild(contactTab)


const section = createElement('section')
const heroImage = createElement('img', 'hero-image')
const copy = createElement('div', 'copy')


//append DOM
section.appendChild(heroImage)
section.appendChild(copy)

content.appendChild(header)
content.appendChild(section);

copy.innerHTML = "La Famiglia: The Italian Restaurant with a Twist At La Famiglia, \n youll enjoy authentic Italian food and a thrilling atmosphere. Our dishes are made with fresh ingredients and love, and our customers are loyal and armed. Don’t worry, \n they won’t hurt you unless you disrespect the family. \n Come dine with us today and join the adventure!"


heroImage.src = restostock
}

export default home




