// function to get current date in 'hh:mm dd-mm-yyyy' format
export function NOW() {
  let date = new Date()
  let yyyy = date.getFullYear()
  let dd = date.getDate()
  let mm = (date.getMonth() + 1)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let cur_day = `${dd}-${mm}-${yyyy}`

  return `${hours}:${minutes} ${cur_day}`
}

// function to formate date in 'dd-mm-yyyy' format
export function birthdayFormat(date) {
  const newDate = date.split('T').shift()
  const formatedDate = newDate.toString().split('-').reverse().join('-')
  return formatedDate
}

// function to formate date in 'hh:mm dd-mm-yyyy' format
export function timeDateFormat(date) {
  const newDayFormat = birthdayFormat(date)
  const time = date.split('T').pop()
  const formatedTime = time.toString().split('.').shift().slice(0, 5)
  const newTimeDay = formatedTime.concat(` ${newDayFormat}`)
  return newTimeDay
}
