const faker = require("faker/locale/pt_BR")


const STEPS = ["documents","contract","rejected","archived"]
const getRandomArrayItem = array => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

const generateFakeCompany = () => ({
    name: `${faker.name.firstName()} ${faker.name.lastName()} ${faker.company.companySuffix()}`,
    companyId: faker.random.uuid(),
    step: getRandomArrayItem(STEPS),
    stepSince: faker.date.recent(30)
})



const getRandomCompanies = (length = 500) => {
    const companies = []
    for(let i = 0; i< length;i++){
        companies.push(generateFakeCompany())
    }
    return companies
}

module.exports = getRandomCompanies