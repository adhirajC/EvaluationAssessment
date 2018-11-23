const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);
 
const cars = [ 
    {id: 1, img: "https://bit.ly/2r0Ua5A", name: "Camry", make: "Toyota", model: "XL", year: 2019, availability: "Out of Stock"},
    {id: 2, img: "https://bit.ly/2QhY486", name: "Dogde Charger", make: "Dogde", model: "LE", year: 2019, availability: "Out of Stock"},
    {id: 3, img: "https://bit.ly/2r0Ua5A", name: "Jetta", make: "Volkswagen", model: "SE", year: 2018, availability: "In Dealership"},
    {id: 4, img: "https://bit.ly/2S1fF1i", name: "Benz", make: "Mercedes", model: "E class", year: 2018, availability: "In Dealership"},
    {id: 5, img: "https://bit.ly/2KoXgsJ", name: "BMW M5", make: "BMW", model: "M5", year: 2016, availability: "Unavailable"},
    {id: 6, img: "https://bit.ly/2DDLFof", name: "Avalon", make: "Toyota", model: "LE", year: 2017, availability: "In Dealership"},
    {id: 7, img: "https://bit.ly/2R4Kd27", name: "Kia Forte", make: "Kia", model: "SE", year: 2014, availability: "In Dealership"},
    {id: 8, img: "https://bit.ly/2PLGGcw", name: "Honda Accord", make: "Honda", model: "LE", year: 2015, availability: "Unavailable"},
    {id: 9, img: "https://bit.ly/2Krp4g0", name: "Camry Hybrid", make: "Toyota", model: "Hybrid", year: 2019, availability: "Unavailable"},
    {id: 10, img: "https://bit.ly/2zm9mP1", name: "Malibu", make: "Chevrolet", model: "ML", year: 2019, availability: "In Dealership"},

]

// Mock GET request to /users when param `searchText` is 'John' 
// arguments for reply are (status, data, headers)
mock.onGet('/cars').reply(200, {
  cars
});

 
exports.axios  = axios