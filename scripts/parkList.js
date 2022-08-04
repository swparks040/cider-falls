import { getParkList } from "./database.js"

const parks = getParkList()

export const Parks = () => {
    let html = "<ul>"

    for (const park of parks) {
        html += `<li id="park--${park.id}">${park.name}</li>`
    }
    html += "</ul>"
    return html
}

