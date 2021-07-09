const reunionDate = new Date('Oct 29,  2021 12:00:00').getTime()


const setReunionDate = () => {
    const now = new Date().getTime()
    const gap = reunionDate - now
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let day = Math.floor(gap / (days))
    let hour = Math.floor((gap % (days)) / hours)
    let minute = Math.floor((gap % (hours)) / minutes)
    let second = Math.floor((gap % (minutes)) / seconds)

    day = day >= 10 ? day : `0${day}`
    hour = hour >= 10 ? hour : `0${hour}`
    minute = minute >= 10 ? minute : `0${minute}`
    second = second >= 10 ? second : `0${second}`

    // $('#').text()
    $('#days').text(day)
    $('#hours').text(hour)
    $('#minutes').html(minute)
    $('#seconds').html(second)
}
setReunionDate()
setInterval(() => setReunionDate(), 1000)