const express = require('express')
const morgan = require('morgan')
const moment = require('moment')

const app = express()
const PORT = 3000

app.use(morgan('dev')) 
// middleware parse json
app.use(express.json())

// trả JSON cho mọi request
app.get('/api/vhr/utility/v0/utility/84/booking-time', (req, res) => {
  const { bookingDate } = req.query
  const bd = Number(bookingDate)
  const date = moment(bd).format('DD/MM/YYYY HH:mm:ss')
  console.log('req.query.bookingDate =', date)
  // console.log(moment(1773356400000).format('DD/MM/YYYY HH:mm:ss'), moment(bd).subtract(1, 'hour').valueOf())
  // console.log(moment(1773360000000).format('DD/MM/YYYY HH:mm:ss'))
  // console.log(moment(1773363600000).format('DD/MM/YYYY HH:mm:ss'))
  // console.log(moment(1773367200000).format('DD/MM/YYYY HH:mm:ss'))
  // console.log(moment(1773370800000).format('DD/MM/YYYY HH:mm:ss'))
  res.json({
    message: null,
    code: null,
    data:[
      {"id":631,"utilityId":84,"fromTime": moment(bd).subtract(1, 'hour').valueOf(), "toTime": bd,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 6 - 7
      {"id":632,"utilityId":84,"fromTime": bd,"toTime": moment(bd).add(1, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 7 - 8
      {"id":633,"utilityId":84,"fromTime": moment(bd).add(1, 'hour').valueOf(),"toTime": moment(bd).add(2, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 8 - 9
      {"id":634,"utilityId":84,"fromTime": moment(bd).add(2, 'hour').valueOf(),"toTime": moment(bd).add(3, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 9 - 10
      {"id":635,"utilityId":84,"fromTime": moment(bd).add(3, 'hour').valueOf(),"toTime": moment(bd).add(4, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 10 - 11
      {"id":636,"utilityId":84,"fromTime": moment(bd).add(4, 'hour').valueOf(),"toTime": moment(bd).add(5, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 11 - 12
      {"id":637,"utilityId":84,"fromTime": moment(bd).add(7, 'hour').valueOf(),"toTime": moment(bd).add(8, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 14 - 15
      {"id":638,"utilityId":84,"fromTime": moment(bd).add(8, 'hour').valueOf(),"toTime": moment(bd).add(9, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 15 - 16
      {"id":639,"utilityId":84,"fromTime": moment(bd).add(9, 'hour').valueOf(),"toTime": moment(bd).add(10, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 16 - 17
      {"id":640,"utilityId":84,"fromTime": moment(bd).add(10, 'hour').valueOf(),"toTime": moment(bd).add(11, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 17 - 18
      {"id":641,"utilityId":84,"fromTime": moment(bd).add(11, 'hour').valueOf(),"toTime": moment(bd).add(12, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 18 - 19
      {"id":642,"utilityId":84,"fromTime": moment(bd).add(12, 'hour').valueOf(),"toTime": moment(bd).add(13, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 19 - 20
      {"id":643,"utilityId":84,"fromTime": moment(bd).add(13, 'hour').valueOf(),"toTime": moment(bd).add(14, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}, // 20 - 21
      {"id":644,"utilityId":84,"fromTime": moment(bd).add(14, 'hour').valueOf(),"toTime": moment(bd).add(15, 'hour').valueOf(),"applyAllDays":true,"dayApplied":null,"isFull":false}  // 21 - 22
    ]
    // data:[
    //   {"id":631,"utilityId":84,"fromTime":1773356400000,"toTime":1773360000000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 6 - 7
    //   {"id":632,"utilityId":84,"fromTime":1773360000000,"toTime":1773363600000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 7 - 8
    //   {"id":633,"utilityId":84,"fromTime":1773363600000,"toTime":1773367200000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 8 - 9
    //   {"id":634,"utilityId":84,"fromTime":1773367200000,"toTime":1773370800000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 9 - 10
    //   {"id":635,"utilityId":84,"fromTime":1773370800000,"toTime":1773374400000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 10 - 11
    //   {"id":636,"utilityId":84,"fromTime":1773374400000,"toTime":1773378000000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 11 - 12
    //   {"id":637,"utilityId":84,"fromTime":1773385200000,"toTime":1773388800000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 14 - 15
    //   {"id":638,"utilityId":84,"fromTime":1773388800000,"toTime":1773392400000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 15 - 16
    //   {"id":639,"utilityId":84,"fromTime":1773392400000,"toTime":1773396000000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 16 - 17
    //   {"id":640,"utilityId":84,"fromTime":1773396000000,"toTime":1773399600000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 17 - 18
    //   {"id":641,"utilityId":84,"fromTime":1773399600000,"toTime":1773403200000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 18 - 19
    //   {"id":642,"utilityId":84,"fromTime":1773403200000,"toTime":1773406800000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 19 - 20
    //   {"id":643,"utilityId":84,"fromTime":1773406800000,"toTime":1773410400000,"applyAllDays":true,"dayApplied":null,"isFull":false}, // 20 - 21
    //   {"id":644,"utilityId":84,"fromTime":1773410400000,"toTime":1773414000000,"applyAllDays":true,"dayApplied":null,"isFull":false}  // 21 - 22
    // ]
  })
})

app.get('/api/vhr/utility/v0/utility/84/places', (req, res) => {
  console.log('req.query =', req.query)
  res.json({
  message: null,
  code: null,
  data: [
    { id: 861, placeUtilityId: 692, code: null, name: "Sân Tennis Công Viên số 01", nameEn: null, description: null, monthlyTicket: false, isFull: false, linkDigitalMap: null },
    { id: 862, placeUtilityId: 691, code: null, name: "Sân Tennis Công Viên số 02", nameEn: null, description: null, monthlyTicket: false, isFull: false, linkDigitalMap: null },
    { id: 859, placeUtilityId: 694, code: null, name: "Sân Tennis Vinschool số 01", nameEn: null, description: null, monthlyTicket: false, isFull: false, linkDigitalMap: null },
    { id: 860,  placeUtilityId: 693, code: null, name: "Sân Tennis Vinschool số 02", nameEn: null, description: null, monthlyTicket: false, isFull: false, linkDigitalMap: null }
  ]})
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

