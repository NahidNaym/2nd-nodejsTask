const request = require ("request")

const forecast = require ('./datajs/forecast')


const proLength = process.argv.length

if (proLength == 4) {
    const longitude = process.argv[2]
    const latitude = process.argv[3]
    forecast(longitude , latitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA  : " , data)
          } )
}
else {console.log("YOU SHOULD ENTER LONGITUDE AND LATITUDE VALUES")} 