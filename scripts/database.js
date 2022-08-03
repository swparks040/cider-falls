/* 
1. Create the different arrays (to match the tables from the ERD). This includes parkList, serviceList, guestList, and parkServices arrays of objects within a "const database" object.

2. export the data to other modules via GETTER functions.
*/

const database = {
    parkList: [ {
        id: 1,
        name: "Chamfort River"

    }, {
        id: 2, 
        name: "Lost Wolf Hiking Trail"

    }, {
        id: 3, 
        name: "Lodge"

    }, {
        id: 4,
        name: "Gander River"

    }, {
        id: 5,
        name: "Campgrounds"

    }, {
        id: 6,
        name: "Pine Bluff Trails"
    } ],

    guestList: [ {
        id: 1,
        firstName: "James",
        lastName: "Scott",
        parkId: 6

    }, {
        id: 2,
        firstName: "Gracie",
        lastName: "Parce",
        parkId: 5

    }, {
        id: 3,
        firstName: "Carly",
        lastName: "Dopps",
        parkId: 4

    }, {
        id: 4,
        firstName: "Scott",
        lastName: "Parks",
        parkId: 4

    }, {
        id: 5,
        firstName: "Johnny",
        lastName: "Siessess",
        parkId: 5

    }, {
        id: 6,
        firstName: "Al",
        lastName: "Gorithmic",
        parkId: 2

    }, {
        id: 7, 
        firstName: "Tony", 
        lastName: "Toetap",
        parkId: 1

    }, {
        id: 8,
        firstName: "Master",
        lastName: "Splinter",
        parkId: 4

    }, {
        id: 9,
        firstName: "Sohrab",
        lastName: "Esfandiari",
        parkId: 3

    }, {
        id: 10,
        firstName: "Zhang",
        lastName: "Shibing",
        parkId: 6
    } ],

    serviceList: [ {
        id: 1,
        name: "Rafting"

    }, {
        id: 2, 
        name: "Canoeing"

    }, {
        id: 3,
        name: "Fishing"

    }, {
        id: 4,
        name: "Hiking"

    }, {
        id: 5,
        name: "Picnicking"

    }, {
        id: 6,
        name: "Rock Climbing"

    }, {
        id: 7, 
        name: "Hotel"

    }, {
        id: 8,
        name: "Restaurant"

    }, {
        id: 9,
        name: "Lodging"

    }, {
        id: 10,
        name: "Parking"

    }, {
        id: 11,
        name: "Information"

    }, {
        id: 12,
        name: "Office Park"

    }, {
        id: 13,
        name: "Play Area"

    }, {
        id: 14,
        name: "Food Vendors"

    }, {
        id: 15,
        name: "Zip Lines"

    } ],

    parkServices: [ {
        id: 1,
        parkId: 1,
        serviceId: 1

    }, {
        id: 1, 
        parkId: 1,
        serviceId: 2

    }, {
        id: 1, 
        parkId: 1,
        serviceId: 3

    }, {
        id: 2,
        parkId: 2,
        serviceId: 4

    }, {
        id: 2, 
        parkId: 2,
        serviceId: 5

    }, {
        id: 2,
        parkId: 2, 
        serviceId: 6

    }, {
        id: 3,
        parkId: 3,
        serviceId: 5

    }, {
        id: 3,
        parkId: 3,
        serviceId: 7

    }, {
        id: 3,
        parkId: 3,
        serviceId: 8

    }, {
        id: 3,
        parkId: 3,
        serviceId: 9

    }, {
        id: 3,
        parkId: 3,
        serviceId: 10

    }, {
        id: 3,
        parkId: 3,
        serviceId: 11

    }, {
        id: 4,
        parkId: 4, 
        serviceId: 3

    }, {
        id: 4,
        parkId: 4, 
        serviceId: 4

    }, {
        id: 5,
        parkId: 5,
        serviceId: 9

    }, {
        id: 5,
        parkId: 5,
        serviceId: 10

    }, {
        id: 5,
        parkId: 5,
        serviceId: 11

    }, {
        id: 5,
        parkId: 5,
        serviceId: 12

    }, {
        id: 5,
        parkId: 5,
        serviceId: 13

    }, {
        id: 6,
        parkId: 6,
        serviceId: 4

    }, {
        id: 6,
        parkId: 6,
        serviceId: 5

    }, {
        id: 6,
        parkId: 6,
        serviceId: 14

    }, {
        id: 6,
        parkId: 6,
        serviceId: 15

    }]
}

export const getParkList = () => {
  return database.parkList.map(park => ({...park}))
}

export const getGuestList = () => {
  return database.guestList.map(guest => ({...guest}))
}

export const getServiceList = () => {
  return database.serviceList.map(service => ({...service}))
}

export const getParkServices = () => {
  return database.parkServices.map(parkService => ({...parkService}))
}