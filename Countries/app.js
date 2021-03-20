var countries = [
    {
        id: 1,
        country: 'Portugal',
        capitalCity: 'Lisabon',
        population: 10.28
    },
    {
        id: 2,
        country: 'Spain',
        capitalCity: 'Madrid',
        population: 46.94
    },
    {
        id: 3,
        country: 'Macedonia',
        capitalCity: 'Skopje',
        population: 2.077
    },
    {
        id: 4,
        country: 'Serbia',
        capitalCity: 'Belgrade',
        population: 6.945
    },
    {
        id: 5,
        country: 'Bosnia',
        capitalCity: 'Sarajevo',
        population: 3.301
    },
]

const express = require('express')
const app = express()
app.use(express.json())



app
    .get('/countries', (req, res) => {
        res.send(countries)
    })
    app.post('/countries', (req, res) => {
        countries.push(req.body)

        res.send({
                message:"You added new country",
                country:req.body
        })
    })
    .delete('/countries', (req, res) => {
        countries = countries.filter(coun => {
            return coun.country != req.body.country
        })
        res.send(countries)
    })
    .put('/countries/:id', (req, res) => {
        const countryId = req.params.id
        const index = countries.findIndex((country) => country.id == countryId)

        countries[index].id = req.body.id,
        countries[index].country = req.body.country,
        countries[index].capitalCity = req.body.capitalCity,
        countries[index].population = req.body.population

        res.send({
            message:"Update with PUT Method",
            countries
        })
    })
    .patch('/countries/:id', (req, res) => {
        const countryId = req.params.id
        const index = countries.findIndex((country) => country.id == countryId )

        countries[index].id = req.body.id,
        countries[index].country = req.body.country,
        countries[index].capitalCity = req.body.capitalCity,
        countries[index].population = req.body.population

        res.send({
            message: "Update with PATCH Method",
            countries
        })
    })


app.listen(3001, () => {
    console.log('Aplication work on port 3001')
})