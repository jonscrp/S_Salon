const mongoose = require('mongoose');
const staff = require('../../models/appModels/staff.js');



main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://jonscrp:Kaishot170@nailsalon.zynxwpz.mongodb.net');
    const s = new staff({
        fname: "Melisa",
        lname: "Morales",
        speciality: "Nails",
        email: "joeSam@NailSalon.com",
        schedule: [{
            avilable: true,
            day: "Monday",
            time: {
                start: "09:00",
                end: "17:00"
            }
        }]
    });
    s.save().then(console.log("saved"))

    const p = new staff({
        fname: "Jacqueline",
        lname: "Fuenzalida",
        speciality: "Nails",
        email: "joeSam@NailSalon.com",
        schedule: [{
            avilable: true,
            day: "Monday",
            time: {
                start: "07:00",
                end: "12:00"
            }
        }]
    });
    p.save().then(console.log("saved"))

    const l = new staff({
        fname: "Avia",
        lname: "Perez",
        speciality: "Nails",
        email: "joeSam@NailSalon.com",
        schedule: [{
            avilable: true,
            day: "Friday",
            time: {
                start: "15:00",
                end: "20:00"
            }
        }]
    });
    l.save().then(console.log("saved"))


}

