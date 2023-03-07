const nextBtn = document.querySelector('.btn')
const goBackBtn = document.querySelector('.btnBack')

nextBtn.onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    hide.style.display = 'none'
    show.style.display = 'flex'
}

goBackBtn.onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    hide.style.display = 'flex'
    show.style.display = 'none'
}

function changePrices(){
    if(document.querySelector('.checkbox').checked = true){
        let value = document.querySelector('.value').value
        value.innerHTML = value * 10
    }
}
