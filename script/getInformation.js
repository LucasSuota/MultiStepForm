const nextBtn = document.querySelector('.btn')
const goBackBtn = document.querySelector('.btnBack')

nextBtn.onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    hide.style.display = 'none'
    show.style.display = 'flex'
    show.style.transtion = '0.2s'
}

goBackBtn.onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    hide.style.display = 'flex'
    show.style.display = 'none'
}