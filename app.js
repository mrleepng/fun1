const express = require('express')
const morgan = require('morgan')
const moment = require('moment')

const app = express()
const gentimes = require('./gentimes')
const dateformat = require('./dateformat')
const PORT = 80

app.use(morgan('dev')) 
app.use(express.json())


const todaySt = moment().startOf('day').add(7, 'hours').valueOf()
const tomorrowSt = moment().startOf('day').add(1, 'days').add(7, 'hours').valueOf()
gentimes(tomorrowSt)


app.get('/', (req, res) => {
  res.send(`
    <p>To day booking times: ${todaySt} -> ${dateformat(todaySt)}</p>
    <textarea rows="10" cols="50" id="txtarea" onclick="myFunction(this)">${gentimes(todaySt)}</textarea>
    <br><br><br>
    <p>Tomorrow day booking times: ${tomorrowSt} -> ${dateformat(tomorrowSt)}</p>
    <textarea rows="10" cols="50" id="txtarea" onclick="myFunction(this)">${gentimes(tomorrowSt)}</textarea>
    <script type="text/javascript">
      function myFunction(element) {
        navigator.clipboard.writeText(element.value)
          .then(() => {
            // Optional: Alert the user or provide feedback
            alert('Copie');
          })
          .catch(err => {
            alert('Could not copy text: ', err);
          });
      }
    </script>
  `)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
