const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// middleware parse json
app.use(express.json())

// trả JSON cho mọi request
app.get('/api/vhr/utility/v0/utility/84/booking-time', (req, res) => {
  console.log(req.req.query)
  res.json({
    message: null,
    code: null,
    data:[
      {"id":631,"utilityId":84,"fromTime":1773356400000,"toTime":1773360000000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":632,"utilityId":84,"fromTime":1773360000000,"toTime":1773363600000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":633,"utilityId":84,"fromTime":1773363600000,"toTime":1773367200000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":634,"utilityId":84,"fromTime":1773367200000,"toTime":1773370800000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":635,"utilityId":84,"fromTime":1773370800000,"toTime":1773374400000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":636,"utilityId":84,"fromTime":1773374400000,"toTime":1773378000000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":637,"utilityId":84,"fromTime":1773385200000,"toTime":1773388800000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":638,"utilityId":84,"fromTime":1773388800000,"toTime":1773392400000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":639,"utilityId":84,"fromTime":1773392400000,"toTime":1773396000000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":640,"utilityId":84,"fromTime":1773396000000,"toTime":1773399600000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":641,"utilityId":84,"fromTime":1773399600000,"toTime":1773403200000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":642,"utilityId":84,"fromTime":1773403200000,"toTime":1773406800000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":643,"utilityId":84,"fromTime":1773406800000,"toTime":1773410400000,"applyAllDays":true,"dayApplied":null,"isFull":false},
      {"id":644,"utilityId":84,"fromTime":1773410400000,"toTime":1773414000000,"applyAllDays":true,"dayApplied":null,"isFull":false}
    ]
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})