import { addon, find_me, lastest_ver } from "../addondataa.js"

var hash = window.location.hash.substr(1)
var get = addon.find(key => key.readId.toLocaleLowerCase() === hash.toLowerCase())
if (!get) {
    window.location.href = '../'
}

window.onload = function () {
    document.getElementById('dynamic_text').innerHTML = `เพื่อปลดล็อกแอดออน <a>${get.title} </a> กดติดตามเราหน่อยน้า~!`
    checkSub()
}

document.addEventListener('DOMContentLoaded', (event) => {
    const banner = `../img/stock/${get.imgSrc}`
    const dynamic_banner = document.getElementById('dynamic_banner')
    dynamic_banner.src = banner
    dynamic_banner.classList.add('rounded', 'shadow')
    dynamic_banner.innerHTML = `เพื่อปลดล็อกแอดออน <a>${get.title} </a> กดติดตามเราหน่อยน้า~!`
})

function checkSub() {
    var buttonContainer = document.getElementById("buttonContainer")
    if (document.cookie.includes("subscribed=true")) {
        simulateLoading(1)

        document.getElementById('dynamic_text').innerHTML = `คุณสามารถโหลดแอดออน <a>${get.title}</a> ได้เลย~!`

        buttonContainer.innerHTML = `
            <div class="me-2" style="margin-top: 9px;">
                <a href="../" class="btn btn-outline-secondary btn-lg">
                    <i class="fas fa-arrow-left"></i> ย้อนกลับ
                </a>
            </div>
            <div>
                <button id='subed' class="btn btn-success btn-lg">
                    <i class="fa-solid fa-download"></i> ดาวน์โหลด!
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

        setTimeout(function () {
            if (!document.cookie.includes("subscribed=true")) {
                document.cookie = "subscribed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
            }
            showModal()
            checkSub()
        }, 3000)
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

function showModal() {
    $('body').append(`
        <div class="modal fade" id="subModal" tabindex="-1" role="dialog" aria-labelledby="subModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="subModalLabel">กดติดตามแล้ว!</h4>
              </div>
              <div class="modal-body">
                คุณกดติดตามเรียบร้อยแล้ว! ขอบคุณมาก ตอนนี้โหลดแอดออนได้เลย!
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">เยี่ยมเลย!</button>
              </div>
            </div>
          </div>
        </div>
    `)
    $('#subModal').modal('show')
}

function redirectToAddon() {
    var url = find_me.find(finder => get.readId.toLocaleLowerCase().includes(finder.url.toLowerCase())).link.replace("_ver_", lastest_ver)
    window.location.href = url

    setTimeout(function () {
        window.location.href = `../pages#${get.readId}`
    }, 32000)
}
