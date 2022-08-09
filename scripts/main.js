import { guestsHTML } from "./guestList.js"
import { parksHTML } from "./parkList.js"
import { servicesHTML } from "./serviceList.js"

// const guestList = document.querySelector('#guest-list');
// const parkList = document.querySelector('#park-list');
// const serviceList = document.querySelector('#service-list')




const mainContainer = document.querySelector("#container")


const applicationHTML = `

    <section id="service-list">
        <h2>List of Cider Falls Services</h2>
        ${servicesHTML()}
    </section>
    <section id="guest-list">
        <h2>Distinguished Guests</h2>
        ${guestsHTML()}
    </section>
    <section id="park-list">
        <h2>Park Sections</h2>
        ${parksHTML()}
    </section>
`


mainContainer.innerHTML = applicationHTML