import { addon, find_me, lastest_ver } from "../addondataa.js"

var hash = window.location.hash.substr(1)
var get = addon.find(key => key.readId.toLocaleLowerCase() === hash.toLowerCase())
if (!get) {
    window.location.href = '../'
}

window.onload = function () {
    document.getElementById('unsub-previous').innerHTML = `
    <div class="me-2">
        <a href="../pages/#${get.readId}" class="btn btn-outline-secondary btn-lg">
            <i class="fas fa-arrow-left" id="unsub-previous"></i> Previous
        </a>
    </div>`
    document.getElementById('dynamic_text').innerHTML = `To unlock <a>${get.title} </a> add-on, follow me in youtube~!`
    checkSub()
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#warp').scrollIntoView({ behavior: 'smooth' })
    const banner = `../img/stock/${get.imgSrc}`
    const dynamic_banner = document.getElementById('dynamic_banner')
    dynamic_banner.src = banner
    dynamic_banner.classList.add('rounded', 'shadow')
    dynamic_banner.innerHTML = `To unlock <a>${get.title} </a> add-on, follow me in youtube~!`
})

function checkSub() {
    var buttonContainer = document.getElementById("buttonContainer")
    if (document.cookie.includes("subscribed=true")) {
        simulateLoading(1)

        document.getElementById('dynamic_text').innerHTML = `You can download <a>${get.title}</a> add-on now~!`

        buttonContainer.innerHTML = `
            <div class="me-2" style="margin-top: 9px;">
                <a href="../pages/#${get.readId}" class="btn btn-outline-secondary btn-lg">
                    <i class="fas fa-arrow-left"></i> Previous
                </a>
            </div>
            <div>
                <button id='subed' class="btn btn-success btn-lg">
                    <i class="fa-solid fa-download"></i> Download!
                </button>
            </div>
        `

        const button = document.getElementById("subed")
        button.addEventListener("click", () => redirectToAddon())
    }
}


document.getElementById("subscribeBtn").addEventListener("click", function () {
    if (!document.cookie.includes("subscribed=true")) {
        simulateLoading()
        document.cookie = "subscribed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
        window.location.href = 'https://www.youtube.com/@aitji.?sub_confirmation=1'
        checkSub()
    }
})

function simulateLoading(de = 95) {
    var loadingBar = document.querySelector(".loading-bar")
    loadingBar.style.width = "0%"
    var width = 0
    var interval = setInterval(function () {
        width += (100 - width) / de
        if (width >= 100) clearInterval(interval)
        loadingBar.style.width = width + "%"
    }, 10)
}

function redirectToAddon() {
    var url = find_me.find(finder => get.readId.toLocaleLowerCase().includes(finder.url.toLowerCase())).link.replace("_ver_", lastest_ver)
    window.location.href = url

    setTimeout(function () {
        window.location.href = `../pages#${get.readId}`
    }, 32000)
}