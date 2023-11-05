const content = document.getElementById('content')

//create DOM
const header = document.createElement('header')
const h1 = document.createElement('h1')
const section = document.createElement('section')
const heroImage = document.createElement('div')
heroImage.id = 'hero-image'
const copy = document.createElement('pre')
copy.id = 'copy'

copy.textContent = "TEst"

//append DOM
content.appendChild(header)
content.appendChild(section)
header.appendChild(h1)
section.appendChild(heroImage)
section.appendChild(copy)
