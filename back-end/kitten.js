
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function  main() {
    await mongoose.connect('mongodb+srv://jonscrp:Kaishot170@nailsalon.zynxwpz.mongodb.net');
    
    const kittenSchema = new mongoose.Schema({
        name: String,
        age: Number
    });

    
    const Kitten = mongoose.model('Kitten', kittenSchema);
    /*
    const fluffy = new Kitten({ name: 'fluffy', age: 3 });
    const Luffy = new Kitten({ name: 'Luffy', age: 5 });

    await fluffy.save();
    await Luffy.save();

    console.log(fluffy.name);
    */

    const kittens = await Kitten.find();
    console.log(kittens);

}

