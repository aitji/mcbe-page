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
    function markdownToHTML(markdown) {
        const rootStyle = getComputedStyle(document.documentElement)
        const defaultColor = rootStyle.getPropertyValue('--text-color').trim() || '#FFFFFF'

        const colorMap = {
            '0': '#000000', // Black
            '1': '#0000AA', // Dark Blue
            '2': '#00AA00', // Dark Green
            '3': '#00AAAA', // Dark Aqua
            '4': '#AA0000', // Dark Red
            '5': '#AA00AA', // Dark Purple
            '6': '#FFAA00', // Gold
            '7': '#AAAAAA', // Gray
            '8': '#555555', // Dark Gray
            '9': '#5555FF', // Blue
            'a': '#55FF55', // Green
            'b': '#55FFFF', // Aqua
            'c': '#FF5555', // Red
            'd': '#FF55FF', // Light Purple
            'e': '#FFFF55', // Yellow
            'f': '#FFFFFF',  // White
            'h': '#383534',  // quartz
            'i': '#333232',  // iron
            'j': '#110E0E',  // netherite
            'm': '#971607',  // redstone
            'n': '#2D1A13',  // copper
            'p': '#372C0B',  // gold
            'q': '#04280D',  // emerald
            'q': '#0B2E2A',  // diamond
            't': '#08121E',  // lapis
            'u': '#9a5cc6',  // amethyst
            'g': '#DDD605',  // mine-coin
        }

        const replaceColorCodes = (text) => {
            let coloredText = ''
            let currentColor = defaultColor
            let isBold = false
            let isItalic = false

            const parts = text.split(/(§[0-9a-zlor])/g)

            parts.forEach(part => {
                const colorCodeMatch = part.match(/^§([0-9a-z])/)
                const boldCodeMatch = part.match(/^§l/)
                const italicCodeMatch = part.match(/^§o/)
                const resetCodeMatch = part.match(/^§r/)

                if (colorCodeMatch) return currentColor = colorMap[colorCodeMatch[1]] || defaultColor
                else if (boldCodeMatch) return isBold = true
                else if (italicCodeMatch) return isItalic = true
                else if (resetCodeMatch) {
                    isBold = false
                    isItalic = false
                    currentColor = defaultColor
                    coloredText += '</span>'
                    return
                }

                let formattedPart = part
                if (isBold) formattedPart = `<strong>${formattedPart}</strong>`
                if (isItalic) formattedPart = `<em>${formattedPart}</em>`
                coloredText += `<span style="color: ${currentColor};">${formattedPart}</span>`
            })

            if (!coloredText.endsWith('</span>')) coloredText += '</span>'
            return coloredText
        }

        return replaceColorCodes(markdown)
            // images
            .replace(/\[img="(.*?)"\]/g, '<div class="parent-container"><img src="$1" alt="img" class="responsive-img"/></div>')

            // headings
            .replace(/###### (.*?)$/gm, '<h6>$1</h6>')
            .replace(/##### (.*?)$/gm, '<h5>$1</h5>')
            .replace(/#### (.*?)$/gm, '<h4>$1</h4>')
            .replace(/### (.*?)$/gm, '<h3>$1</h3>')
            .replace(/## (.*?)$/gm, '<h2>$1</h2>')
            .replace(/# (.*?)$/gm, '<h1>$1</h1>')

            // bold, italics, and underlines
            .replace(/~~(.*?)~~/g, '<del>$1</del>')
            .replace(/__\*\*\*(.*?)\*\*__/g, '<strong><em>$1</em></strong>')
            .replace(/__\*\*(.*?)\*\*__/g, '<strong>$1</strong>')
            .replace(/__\*(.*?)\*__/g, '<em>$1</em>')
            .replace(/__(.*?)__/g, '<u>$1</u>')
            .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/_(.*?)_/g, '<em>$1</em>')

            // lists
            .replace(/^\s*-\s+(.*)$/gm, '<li>$1</li>')
            .replace(/^\s*\*\s+(.*)$/gm, '<li>$1</li>')
            .replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>')

            // code blocks
            .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')

            // quotes
            .replace(/^>\s*(.*)$/gm, '<blockquote>$1</blockquote>')
    }

    const container = document.querySelector(".container")
    const stableTag = get.isStable ? "@stable" : "@beta"
    const stableMsg = get.isStable
        ? `<i class="fa-solid fa-circle-info"></i> This addon was written in @stable no need to re-download after minecraft updates`
        : `<i class="fa-solid fa-triangle-exclamation"></i> this addon was written in @beta after minecraft big update you may have to re-download this addon!`
    const betaApiMsg = get.isStable ? "" : "and enabled beta api in experimental features tabs"
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
        <p>${get?.longDes ? markdownToHTML(get?.longDes?.split('\n').join('\n') || '') : 'note: in near features each addon will have their own description, but at this moment no sorry!'}<br><a class="text-${!get.isStable ? 'warning' : 'info'}">${stableMsg}<br></a></p>
        
        <span<br></span>
        <h2 class="text-secondary">Installation:</h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">1. Click on <strong>${get.readId}-addon-${lastest_ver}.mcpack</strong> below</li>
            <li class="list-group-item">2. You will be redirected to <strong>unlock#${get.readId}</strong></li>
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