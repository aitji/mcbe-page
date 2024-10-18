const faqs = [
    {
        q: "How do I install the addons?",
        a: "To install the addons, simply follow the steps outlined in the installation section for each addon. You'll download a .mcpack file and open it in Minecraft Bedrock Edition."
    },
    {
        q: "What does @stable and @beta mean?",
        a: "@stable means the addon is fully create on minecraft stable api version and ready for use without needing updates. @beta indicates that it may require re-downloading after major Minecraft updates."
    },
    {
        q: "Where can I find the latest version of the addons?",
        a: "The latest version of each addon can be found in the download links provided on their respective pages."
    },
    {
        q: "Do I need to follow you on YouTube to unlock addons?",
        a: "Yes! Following me on <a href='https://youtube.com/@aitji.'><i class='fab fa-youtube'></i> YouTube</a> is required to unlock the addons. It's a way to support my work, and I really appreciate it!"
    },
    {
        q: "Can I suggest new features for the addons?",
        a: "Absolutely! I'm always open to suggestions and feedback. You can reach out via my <a href='https://dsc.gg/aitji'><i class='fab fa-discord'></i> Discord</a> or leave a comment on my YouTube channel."
    },
    {
        q: "What if the addon doesn't work?",
        a: "If you encounter any issues, please check the installation steps and ensure you are using the correct version of Minecraft Bedrock Edition. If it still doesn't work, let me know in my <a href='https://dsc.gg/aitji'><i class='fab fa-discord'></i> Discord</a>, and I'll do my best to help you!"
    },
    {
        q: "Are the addons free?",
        a: "Yes! All addons are free to download and use. However, I appreciate any support on my <a href='https://youtube.com/@aitji.'><i class='fab fa-youtube'></i> YouTube</a>  channel!"
    },
    {
        q: "How can I report bugs or issues?",
        a: "You can report bugs through my <a href='https://dsc.gg/aitji'><i class='fab fa-discord'></i> Discord</a> server or by leaving a comment on the <a href='https://youtube.com/@aitji.'><i class='fab fa-youtube'></i> YouTube</a>  video related to the specific addon. I'll look into it as soon as possible!"
    },
    {
        q: "Can I use these addons on a server?",
        a: "Yes! Most of the addons are compatible with servers. Just make sure your server settings allow for custom addons!"
    },
    {
        q: "Will my progress be saved if I update the addon?",
        a: "In most cases, yes! Your progress should remain intact, but it's always a good idea to back up your worlds just in case."
    },
    {
        q: "What platforms can I use these addons on?",
        a: "These addons are designed for Minecraft Bedrock Edition, which includes devices like Windows 10, Xbox, mobile devices, and more!"
    },
    {
        q: "How can I get support for my specific addon?",
        a: "For support, check the specific addon's page for FAQs or leave a comment on the <a href='https://youtube.com/@aitji.'><i class='fab fa-youtube'></i> YouTube</a>  video. You can also join my <a href='https://dsc.gg/aitji'><i class='fab fa-discord'></i> Discord</a> for more direct assistance!"
    },
    {
        q: "Are there any plans for new addons in the future?",
        a: "Yes! I'm always working on new ideas and improvements for existing addons. Stay tuned to my <a href='https://youtube.com/@aitji.'><i class='fab fa-youtube'></i> YouTube</a>  channel for updates!"
    },
    {
        q: "Can I donate to support your work?",
        a: "While addons are free, if you'd like to support me, you can do so through donations or by following and sharing my <a href='https://youtube.com/@aitji.'><i class='fab fa-youtube'></i> YouTube</a>  content! Every bit helps!"
    },
    {
        q: "Is there a community for addon users?",
        a: "Yes! Join my <a href='https://dsc.gg/aitji'><i class='fab fa-discord'></i> Discord</a> server to connect with other addon users, share experiences, and get the latest news!"
    },
]

document.getElementById('FAQs-counter').innerText = faqs.length

function filterFAQs() {
    const msg = document.getElementById('search-tell')
    const searchValue = document.getElementById('addonSearchBar').value.toLowerCase()
    const faqItems = document.querySelectorAll('.list-group-item')

    faqItems.forEach(item => {
        const questionText = item.querySelector('h5').innerText.toLowerCase()
        item.style.display = questionText.includes(searchValue) ? '' : 'none'
    })
    if (searchValue) msg.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> There are ${faqItems.length} FAQs result has been found`
    else msg.innerHTML = ''
}

function createFAQs() {
    const container = document.createElement('div')
    container.classList.add('container', 'my-5')

    const list = document.createElement('div')
    list.classList.add('list-group')

    faqs.forEach((faq, i) => {
        const items = document.createElement('div')
        items.classList.add('list-group-item', 'list-group-item-action', 'mb-2')

        const question = document.createElement('h5')
        question.classList.add('mb-1', 'd-flex', 'align-items-center')

        const icon = document.createElement('i')
        icon.classList.add('fa-solid', 'fa-angle-up', 'me-2')

        question.appendChild(icon)
        question.appendChild(document.createRange().createContextualFragment(faq.q))

        const answer = document.createElement('p')
        answer.classList.add('mb-1', 'left')
        answer.innerHTML = faq.a

        if (i === 0) {
            answer.classList.toggle('show')
            icon.classList.toggle('fa-angle-up')
            icon.classList.toggle('fa-angle-down')
        }

        items.addEventListener('click', () => {
            answer.classList.toggle('show')
            icon.classList.toggle('fa-angle-up')
            icon.classList.toggle('fa-angle-down')
        })

        items.appendChild(question)
        items.appendChild(answer)
        list.appendChild(items)
    })

    container.appendChild(list)
    document.getElementById('faqs').appendChild(container)
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('addonSearchBar').addEventListener('input', filterFAQs)
    createFAQs()
})

document.querySelector('.scroll-btn').addEventListener('click', function (e) {
    e.preventDefault()
    const explainSection = document.querySelector('#explain')
    explainSection.scrollIntoView({behavior: 'smooth'})

    const faqItems = document.querySelectorAll('.list-group-item')
    faqItems.forEach(item => {
        const answer = item.querySelector('p')
        const icon = item.querySelector('i')
        answer.classList.add('show')
        icon.classList.remove('fa-angle-up')
        icon.classList.add('fa-angle-down')
    })
})