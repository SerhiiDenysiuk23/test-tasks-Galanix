const images = document.getElementsByTagName("img")
const countElem = document.getElementById("img-count")
const dataTimeElem = document.getElementById("current-time")


countElem.innerHTML += images.length

setInterval(()=> {
    const now = new Date()
    const str = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
    dataTimeElem.innerHTML = str
}, 1000)