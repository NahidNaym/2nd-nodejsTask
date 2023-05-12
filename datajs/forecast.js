
const request = require ('request')

const forecast = (latitude , longitude , callback ) => {

  const url = "https://api.weatherapi.com/v1/current.json?key=af1e1f4d54b6441899d25634231005&q=" + latitude + "," + longitude
  
  request ({url, json : true} , (error , response) => {
       
      if(error) {
           callback ("Unable to connect TO weather service" , undefined)
      } else if(response.body.error){
           callback (response.body.error.message , undefined)
      } else {
        
              callback (undefined ,response.body.location.name + ' IT  IS  ' + response.body.current.condition.text 
              + " And Temp   " + response.body.current.temp_c +"   IN "+ response.body.location.country   )
             
      }
  })
  }

module.exports = forecast;