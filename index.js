const express = require("express")
const cors = require("cors")
const generateFakeCompanies = require("./fakeCompanies")



const app = express()

app.use(cors())

const companies = generateFakeCompanies(1000)
app.get("/companies",(req,resp,next)=>{
    const {page = 1,items = 10,search = "",step} = req.query
    const companiesMatch = companies.filter((company)=>{
        if(company.step !== step) return false
        if(!search) return true
        return company.name.toUpperCase().includes(search.toUpperCase())
    })
    

    const start = (+page - 1) * 10
    const end = +items * page

    const companiesMatchPage = companiesMatch.slice(start,end)
    resp.json({
        items: companiesMatchPage,
        currentPage: +page,
        totalItems: companiesMatch.length,
        totalPages: Math.ceil(companiesMatch.length / +items)
        
    })
})

const PORT = 7003

app.listen(PORT,()=>console.log("Listening on port ",PORT))