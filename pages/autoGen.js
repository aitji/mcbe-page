import { addon, find_me, lastest_ver } from "../addondataa.js"
const hash = window.location.hash.substr(1)

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("hashchange", handel)
    handel()
})

const handel = () => {
    const get = addon.reduce((acc, key) => key.readId.toLowerCase() === hash.toLowerCase() ? key : acc, '')
    if (get) gen(`${get.title}`, `${get.description}`, get)
    else window.location.href = '../'
}

/**
 * @param {string} title
 * @param {string} description
 * @param {{
*   title: string;
*   description: string;
*   longDes?: string;
*   imgSrc: string;
*   readId: string;
*   pageHref: string;
*   isStable: boolean;
* }} get
*/
function gen(title, description, get) {
    const container = document.querySelector(".container")
    const stableTag = get.isStable ? "@stable" : "@beta"
    const stableMsg = get.isStable
        ? `<i class="fa-solid fa-circle-info"></i> This addon was written in @stable no need to re-download after minecraft updates`
        : `<i class="fa-solid fa-triangle-exclamation"></i> this addon was written in @beta after minecraft big update you may have to re-download this addon!`
    const betaApiMsg = get.isStable ? "" : "and enabled beta api in experimental features tabs"
    const longDes = get.longDes || "note: in near features each addon will have their own description, but at this moment no sorry!"
    const findAddon = find_me.reduce((acc, finder) => get.readId.toLowerCase().includes(finder.url.toLowerCase()) ? finder.link.replace("_ver_", lastest_ver) : acc, '')
    const url = `../unlock#${get.readId}`
    const git = findAddon.replace('/raw/', '/tree/').replace('Download.mcpack', 'Addon')

    container.innerHTML = `
    <section class="addon-grid container mt-5">
        <div class="hero-banner row justify-content-center">
            <span><br></span>
            <div class="col-md-8 text-center">
                <img class="addon-img img-fluid rounded shadow" src="../img/stock/${get.imgSrc}" alt="${get.title} Image">
            </div>
        </div>
    </section>
    
    <div class="addon-details container mt-4 shadow">
        <h2 class="text-primary">${title}| <span class="tag ${get.isStable ? 'badge bg-success' : 'badge bg-warning'}">${stableTag}</span></h2>
        <a>Addon Version: <strong>${lastest_ver}</strong></a>
        <p>${longDes || description}<br><a class="text-${!get.isStable ? 'warning' : 'info'}">${stableMsg}<br></a></p>
        
        <span<br></span>
        <h2 class="text-secondary">Installation:</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">1. Click on <strong>${get.readId}-addon-${lastest_ver}.mcpack</strong> below</li>
            <li class="list-group-item">2. You will be redirected to <strong>unlock/#${get.readId}</strong></li>
            <li class="list-group-item">3. To unlock my addon, you need to <strong>Follow Me</strong> on YouTube!</li>
            <li class="list-group-item">4. Click on <strong>"<i class="fas fa-plus"></i> Follow</strong>"</li>
            <li class="list-group-item">5. After following me on YouTube, you will unlock the addon!</li>
            <li class="list-group-item">6. Then press <strong><i class="fa-solid fa-download"></i> Download!</strong> You will receive the addon as <strong>Download.mcpack</strong></li>
            <li class="list-group-item">7. Now open <strong>Download.mcpack</strong> in Minecraft Bedrock Edition</li>
            <li class="list-group-item">8. After creating a world, install the addon ${betaApiMsg}</li>
        </ul>
        <br>
        <h2 class="text-secondary">Download:</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <a href="${url}" class="btn-primary fw-bold"><i class="fa-solid fa-file-arrow-down"></i> ${get.readId}-addon-${lastest_ver}.mcpack</a>
            </li>
            <li class="list-group-item">
                <a href="${git}" class="btn-secondary fw-bold"><i class="fa-brands fa-github"></i> GitHub Code</a>
            </li>
            <li class="list-group-item">
                <a href="../" class="btn-secondary fw-bold"><i class="fa-solid fa-backward"></i> Previous</a>
            </li>
        </ul>
        
    </div>
    <span><br></span>`
}