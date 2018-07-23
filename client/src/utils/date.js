// function to get current date in 'hh:mm dd-mm-yyyy' format
export default function NOW() {
  let date = new Date()
  let yyyy = date.getFullYear()
  let dd = date.getDate()
  let mm = (date.getMonth() + 1)
  let hours = date.getHours()
  let minutes = date.getMinutes()

  let cur_day = `${dd}-${mm}-${yyyy}`

  return `${hours}:${minutes} ${cur_day}`
}
