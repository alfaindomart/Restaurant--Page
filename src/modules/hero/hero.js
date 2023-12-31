import createElement from "../../create-dom.js"

// create DOM


const home =  function() {
    
const content = document.getElementById('content')

const contentContainer = createElement('div', 'content-container')

contentContainer.innerHTML = `
<header>
            <h1>La Regilia</h1>
            <div id="tabContainer">
                <div id="menu-tab">Menu</div>
                <div id="about-tab">About Us</div>
            </div>
        </header>
        <div id="main-content">
            <div id="hero-copy">
                <div id="big-copy">
                    <p>Best Japanese Bistro in Town, 30 Minutes From Your Place</p>
                </div>
                <div id="small-copy">
                    <p>Join our impact journey to increase coffee farmer income by connecting their
                    sustainability engagement all the way
                     to the coffee in your cup.</p>
                </div>
                <div class="btn-container">
                    <button id="see-offer">See Our Offers</button>
                </div>  
            </div>
            <div id="hero-image">
                <img src="images/stereotypical-italian-man-eating-pizza-and-gesturing-with-hand-B0X2J1.jpg" alt="" srcset="">
            </div>
        </div>
        <div id="bottom-content">
            <h2>Find Your Fate in La Regilia</h2>
            <div id="bottom-copy">
                <p>Enjoy authentic italian bistro experience. Every meal deserve a customary accompainment from a stereotypical italian man</p>
            </div>
            <div id="content-hover-container">
                <div class="content-hover">
                    <img src="images/chef-hands-making-spaghetti-pasta-noodles-fresh-pasta-black-table-flour-chef-hands-making-spaghetti-pasta-noodles-144856209.webp" alt="" srcset="">
                    <div class="hover-text">
                        <p>
                            Making a handmade pasta noodle all-puporse flour. 
                            Image is taken after a 5 minute search in Bing because google is making it harder to save image.</p>
                    </div>
                </div>
                <div class="content-hover">
                    <img src="images/close-up-hands-holding-pasta_23-2148584844.webp" alt="" srcset="">
                    <div class="hover-text">
                        <caption>Size 13 La-Fonte Pasta. This is the only pasta that 95% of indonesian can eat.</caption>
                    </div>
                </div>
                <div class="content-hover">
                    <img src="images/pizza-cut-segments-piece-being-taken-female-hand-98074914.webp" alt="" srcset="">
                    <div class="hover-text">
                        <p>Neapolitan Pizza with extra cheese, the delivery was a bit late but it was still good after a microwave magic</p>
                    </div>
                </div>
                <div class="content-hover">
                    <img src="images/IMG_1603-3.webp" alt="" srcset="">
                    <div class="hover-text">
                        <caption>Frozen al giouli pasta, freshly warmed by the hand of our staff for maximum body salt penetration.</caption>
                    </div>
                </div>
            </div>
        </div>
`

content.appendChild(contentContainer)

console.log(contentContainer)
}

export default home




