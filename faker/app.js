// list of 100 people with faker
const faker = require('faker')

const GenerateFakePeople = () => {
    const person = []

    for (let i = 0; i < 100; i++) {
    
        const name = faker.name.findName()
        const email = faker.internet.email()
        const address = faker.address.city()
        const IdNum = faker.random.uuid()
        const timeZone = faker.date.future()
        const sport = faker.image.sports()
        const company = faker.company.companyName()

        person.push({
            id: i,
            name: name,
            email: email,
            address: address,
            IdNum: IdNum,
            timeZone: timeZone,
            sport: sport,
            company: company
        })
    }
    return person
}

const obj = GenerateFakePeople()

console.log(obj)