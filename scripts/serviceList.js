import { getServiceList, getParkServices } from "./database.js"
import { getParkList } from "./parkList.js"

/*1. First, declare a variable of "services" and set it equal to the "getServiceList" database export function. This will allow iteration through all services in order to render HTML. 

2. Next, create an EXPORT function "Services", declare "let html = "<ul>" to append each service, write a "for loop" to iterate through all services. In the "for loop", append html with a string `<li id="services--", string interpolation for ${service.id}"> and ${service.name}</li>`, then append with html += "</ul>" and return it.

3. If I want an event listener to iterate through the park locations and alert which services are in each park location... I'd want my itemClicked to... start with "service", iterate through all services, if the service.id mathces parseInt(serviceId)
*/

//Get copy of state for use in this module

const services = getServiceList()
const parks = getParkList()
const parkServices = getParkServices()


export const servicesHTML = () => {
    let html = "<ul>"

    for (const service of services) {
        html += `<li id="service--${service.id}">${service.name}</li>`
    }

    html += "</ul>"

    return html
}
const findParks = (service) => {
    const foundParksArray = []
    for (const parkService of parkServices) {
        if (service.id === parkServices.serviceId)
        for (const park of parks)  {
            if (park.id === parkServices.parkId)
            foundParksArray.push(park.name)
            }
    } 
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("service")) {
      const [, serviceId] = itemClicked.id.split("--");
      
      for (const service of services) {
        
        if (service.id === parseInt(serviceId)) {
          
// calling function to find all parks associated with this service. 

          for (const parkService of parkServices) {
            
            if (service.id === parkService.serviceId) {
              window.alert(`${service.name} is available in ${park.name}`);
            }
          }
        }
      }
    }
  });