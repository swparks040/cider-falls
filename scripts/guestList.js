import { getGuestList, getParkServices, getParkList } from "./database.js"
/*

1. create an HTML dynamic rendering function declared as "Guests", let html = "<ul>", iterate thru all guests and append html (+=) with a list item string with an id of "guest--", string interpolation of ${guest.id}> and string interpolation of ${guest.name}, again append each iterated guest with a closing "</ul>" and return html. 

2. create a function (parkGuestMatch) that lists how many guests are in a park. it should iterate through all PARK AREAS and match GUESTS' parkIds. If the PARK AREA ID matches (===) the GUESTS' parkIds, add one. I'll need data from the guestList array (let guests = guestList()). I'll need data from the parkList array (let parks = getParkList()). I'll declare two variables to use the "state" of those arrays from the database.  I'll set a const of guestCount and set it to 0 (let guestCount = 0). I'll iterate through the parks with a for/of loop (for (const park of parks) {}). For every park I iterate, IF a park.id matches a guests' parkId, add one to guestCount, then return guestCount.

3. create an event listener that displays how many guests are in a given park location. When a PARK AREA is clicked, the current number of park guests should be displayed. 

It will be a click event. The itemCLicked.id.startsWith ("parkService") {
    const []
}


*/

let parks = getParkList()
let guests = getGuestList()
let parkServices = getParkServices()

const parkGuestMatch = (guest) => {
    let guestCount = 0
    for (const park of parks) {
        if (park.id === guest.parkId)
        guestCount += 1
    }
    return guestCount
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("parkService")) {
            const [, parkServiceId] = itemClicked.id.split("--")

            for (const parkService of parkServices) {
                if (parkService.id === parseInt(parkServiceId)) {

                    const guestUse = parkGuestMatch(guests)

                    window.alert(`There are ${guestUse} guests in this area. `)
                }
            }
        }
    }
)

export const Guests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }
    html += "</ul>"
    return html
}