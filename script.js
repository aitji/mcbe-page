/**
 * @author aitji
 */
import { addon } from "./addondataa.js"

document.addEventListener("DOMContentLoaded", function () {
    generate()
})

let currentItems = 0
const itemsToShow = window.innerWidth < 768 ? 10 : 20

function create(
    title = "unrecorded title",
    des = "unrecorded des",
    imgSRC = "_missing.png",
    readId = 0,
    pageHref = "#",
    isStable = false
) {
    var card = document.createElement("div")
    card.classList.add("addon-card", "col-6", "col-md-4", "col-lg-3", "mb-4", "position-relative")

    card.style.opacity = "0"
    card.style.transform = "translateY(100px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    var img = document.createElement("img")
    img.classList.add("addon-img", "img-fluid", "rounded")
    img.src = `../img/stock/${imgSRC}`
    img.alt = title + " Image"
    card.appendChild(img)

    var hTitle = document.createElement("h3")
    hTitle.innerHTML = `<h3 class="addon-title mt-3 strong">${title.split(' (')[0]} <a class="un-strong"> (${title.split(' (')[1]}</a><h3>`
    card.appendChild(hTitle)

    var aDes = document.createElement("p")
    aDes.classList.add("addon-description", "text-muted")
    aDes.textContent = des
    card.appendChild(aDes)

    var md = document.createElement("a")
    md.classList.add("read-more", "btn", "btn-outline-primary", "mt-2", "position-absolute")
    md.href = `../pages#${readId}`
    md.textContent = "(อ่านเพิ่มเติม)"
    md.id = readId

    md.style.bottom = "10px"
    md.style.left = "10px"
    card.appendChild(md)

    var tagR = document.createElement("span")
    tagR.classList.add("badge", "position-absolute")
    if (isStable) {
        tagR.classList.add("addon-stable-tag", "bg-success")
        tagR.textContent = "@stable"
    } else {
        tagR.classList.add("addon-beta-tag", "bg-warning")
        tagR.textContent = "@beta"
    }

    tagR.style.bottom = "10px"
    tagR.style.right = "10px"

    card.appendChild(tagR)

    var addonGrid = document.querySelector(".row")
    addonGrid.appendChild(card)

    setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
    }, 100)
}

function generate(stableFirst = false) {
    var addonGrid = document.querySelector(".addon-grid")
    while (addonGrid.firstChild) addonGrid.removeChild(addonGrid.firstChild)

    var addons = addon
    if (stableFirst) addons.sort((a, b) => a.isStable === b.isStable ? 0 : (a.isStable ? -1 : 1))
    
    const addonsToDisplay = addons.slice(0, itemsToShow)
    addonsToDisplay.forEach((addon) => create(addon.title, addon.description, addon.imgSrc, addon.readId, addon.pageHref, addon.isStable))
    currentItems = addonsToDisplay.length

    if (addons.length > currentItems) loadMoreBtn(addons)
    else noContent()
}

function loadMoreBtn(addons) {
    const loadMoreBtn = document.createElement("button")
    loadMoreBtn.classList.add("btn", "btn-outline-primary", "mt-3", "load-more", "mx-auto", "d-block")
    loadMoreBtn.innerHTML = `<i class="fas fa-plus"></i> Load More`
    loadMoreBtn.onclick = () => loadMore(addons)

    const addonGrid = document.querySelector(".addon-grid")
    addonGrid.appendChild(loadMoreBtn)
}

function loadMore(addons) {
    const nextItems = currentItems + itemsToShow
    const addonsToDisplay = addons.slice(currentItems, nextItems)
    addonsToDisplay.forEach((addon) => create(addon.title, addon.description, addon.imgSrc, addon.readId, addon.pageHref, addon.isStable))

    currentItems += addonsToDisplay.length

    if (currentItems >= addons.length) {
        const loadMoreBtn = document.querySelector(".load-more")
        if (loadMoreBtn) loadMoreBtn.remove()
        noContent()
    }
}

function noContent() {
    const div = document.createElement("div")
    div.classList.add("no-content-message", "text-center", "mt-3", "col-12")

    div.innerHTML = `<i class="fas fa-ghost fa-3x"></i><br><span style="font-size: 1.2rem;">No more content...</span>`
    const btn = document.createElement("button")
    btn.classList.add("btn", "btn-outline-secondary", "mt-3", "disabled", "mx-auto", "d-block")
    btn.textContent = "Load More"
    btn.disabled = true

    div.appendChild(btn)

    const row = document.querySelector(".row")
    row.appendChild(div)
}

if (window.location.hostname !== '127.0.0.1') {
    document.body.classList.add('no-select')
    setTimeout(() => document.querySelectorAll('img').forEach(img => img.draggable = false), 300)
    window.addEventListener('contextmenu', ev => ev.preventDefault())
    document.addEventListener('dragstart', event => event.target.tagName.toLowerCase() === 'a' && event.preventDefault())
}