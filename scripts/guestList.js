import { getGuestList } from "./database.js"

let guests = getGuestList()

export const guestsHTML = () => {
    let html = "<ul>"
        for (const guest of guests) {
            html += `<li id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`
        }
    html += "</ul>"   
    return html
}
