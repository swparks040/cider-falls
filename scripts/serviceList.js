import { getServiceList, getParkList } from "./database.js"

/*1. First, declare a variable of "services" and set it equal to the "getServiceList" database export function. This will allow iteration through all services in order to render HTML. 

2. Next, create an EXPORT function "Services", declare "let html = "<ul>" to append each service, write a "for loop" to iterate through all services. In the "for loop", append html with a string `<li id="services--", string interpolation for ${service.id}"> and ${service.name}</li>`, then append with html += "</ul>" and return it.

3. If I want an event listener to iterate through the park locations and alert which services are in each park location... I'd want my itemClicked to... start with "service", iterate through all services, if the service.id mathces parseInt(serviceId)
*/

/*let availableServices = getServiceList()*/




const services = getServiceList()

export const Services = () => {
    let html = "<ul>"

    for (const service of services) {
        html += `<li id="service--${service.id}">${service.name}</li>`
    }

    html += "</ul>"

    return html
}

