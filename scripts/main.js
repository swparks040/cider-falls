import { guestsHTML } from "./guestList.js"
import { parksHTML } from "./parkList.js"
import { servicesHTML } from "./serviceList.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<h2>Rivers and Trails</h2>
<article class="details">
    <section class="detail--column list details__guests">
        <h2>Guests</h2>
        ${guestsHTML()}
    </section>
    <section class="detail--column list details__parks">
        <h2>Parks</h2>
        ${parksHTML()}
    </section>
    <section class="detail--column list details__services">
        <h2>Services</h2>
        ${servicesHTML()}
    </section>
`


mainContainer.innerHTML = applicationHTML