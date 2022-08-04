import { Guests } from "./guestList.js"
import { Parks } from "./parkList.js"
import { Services } from "./serviceList.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<h2>Rivers and Trails</h2>
<article class="details">
    <section class="detail--column list details__guests">
        <h2>Guests</h2>
        ${Guests()}
    </section>
    <section class="detail--column list details__parks">
        <h2>Parks</h2>
        ${Parks()}
    </section>
    <section class="detail--column list details__services">
        <h2>Services</h2>
        ${Services()}
    </section>
`


mainContainer.innerHTML = applicationHTML