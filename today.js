function genSt(bd) {
  const data = []
  let num = 631
  for (let i = -1; i < 15; i++) {
    if (i === 5 || i === 6) continue;
    data.push({
      id: num++,
      utilityId: 84,
      fromTime: bd + i * 3600000,
      toTime: bd + (i + 1) * 3600000,
      applyAllDays: true,
      dayApplied: null,
      isFull: false
    })
  }
  const msg = {
    message: null,
    code: null,
    data
  }
  console.log('\n  ',JSON.stringify(msg), '\n\n')
}

function formatDate(st) {
  const d = new Date(st)
  const pad = n => n.toString().padStart(2, '0')
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ` +
         `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

const now = new Date()
const st = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0, 0).getTime()
console.log(st, formatDate(st))

genSt(st)