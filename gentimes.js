const moment = require('moment')
const dateFormat = require('./dateformat')

module.exports = (st) => {
  console.log('-----------\nINPUT:', st, dateFormat(st), '\n')
  const data = []
  let num = 631
  for (let i = -1; i < 15; i++) {
  if (i === 5 || i === 6) continue;
    const id = num++
    const fromTime = moment(st).add(i, 'hour').valueOf()
    const toTime = moment(st).add(i + 1, 'hour').valueOf()
    data.push({id, utilityId: 84, fromTime, toTime, applyAllDays: true, dayApplied: null, isFull: false})
    console.log(id, fromTime, dateFormat(fromTime), toTime, dateFormat(toTime))
  }
  const msg = {
    message: null,
    code: null,
    data
  }
  console.log('\n   ', JSON.stringify(msg), '   \n') 
  return JSON.stringify(msg)
}


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