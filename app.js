const express = require('express')
const morgan = require('morgan')
const moment = require('moment')

const app = express()
const gentimes = require('./gentimes')
const dateformat = require('./dateformat')
const PORT = 80

app.use(morgan('dev')) 
app.use(express.json())



app.get('/', (req, res) => {
  const todaySt = moment().startOf('day').add(7, 'hours').valueOf()
  const tomorrowSt = moment().startOf('day').add(1, 'days').add(7, 'hours').valueOf()
  gentimes(tomorrowSt)
  res.send(`
    <p>Today booking times: ${todaySt} -> ${dateformat(todaySt)}</p>
    <textarea id="todaySt" rows="10" cols="50">${gentimes(todaySt)}</textarea>
    <br><br>
    <button onclick="myFunction('todaySt')">Copy</button>
    <br><br><br>
    <p>Tomorrow booking times: ${tomorrowSt} -> ${dateformat(tomorrowSt)}</p>
    <textarea id="tomorrowSt" rows="10" cols="50">${gentimes(tomorrowSt)}</textarea>
    <br><br>
    <button onclick="myFunction('tomorrowSt')">Copy</button>
    <br><br><br>
    <script type="text/javascript">
      function myFunction(id) {
        var element = document.getElementById(id);
        element.select();
        document.execCommand("copy");
      }
    </script>
  `)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
