const express = require('express');
const app = express();
const port = 3000;

const https = require('https');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Weather app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
  console.log(req.body.cityName);
  const cityName = req.body.cityName;
  const apiKey = "a469a33d6b6fe57f7c0fac356f1a653c";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + cityName + "&units=" + units + "&appid=" + apiKey;

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=pallavaram&appid=a469a33d6b6fe57f7c0fac356f1a653c&units=metric'
  https.get(url, (resp) => {
    resp.on('data', (data) => {
      Weatherdata = JSON.parse(data);
      var iconimg = '<img src="http://openweathermap.org/img/wn/'+ Weatherdata.weather[0].icon +'@2x.png" >'
      res.write("<h1>" + Weatherdata.name + "</h1>");
      res.write("<h2>Current Weather is " + Weatherdata.weather[0].main + "</h2>" + iconimg);
      res.write("<h3>Current Temperature " + Weatherdata.main.temp + "  Feels Like " + Weatherdata.main.feels_like + "</h3>");
      res.send();
      /*var resOutput = Weatherdata.name + '  Current Weather is ' + Weatherdata.weather[0].main + '   ' + iconimg + '  Current Temperature ' + Weatherdata.main.temp + '  Feels Like ' + Weatherdata.main.feels_like;
      console.log(resOutput);
      res.send('<h3>'+resOutput+'</h3>');*/
    });
    console.log(resp.statusCode);
  })

})




app.get('/contact', (req, res) => {
  res.send('<h1>Contact me at <i>mkumarasundaram@gmail.com </i></h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>This page is created by Kumara Sundaram</h1>')
})
