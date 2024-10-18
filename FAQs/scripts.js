const faqs = [
    {
        q: "What is this Addon Hub made for?",
        a: ""
    }
]

function createFAQs() {
    const container = document.createElement('div')
    container.classList.add('container', 'my-5')

    const list = document.createElement('div')
    list.classList.add('list-group')

    faqs.forEach(faq => {
        const items = document.createElement('div')
        items.classList.add('list-group-item', 'list-group-item-action', 'mb-2')

        const question = document.createElement('h5')
        question.classList.add('mb-1', 'd-flex', 'align-items-center')
        
        const icon = document.createElement('i')
        icon.classList.add('fa-solid', 'fa-angle-up', 'me-2')
        
        question.appendChild(icon)
        question.appendChild(document.createTextNode(faq.q))

        const answer = document.createElement('p')
        answer.classList.add('mb-1')
        answer.textContent = faq.a

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
    document.body.appendChild(container)
}

createFAQs()