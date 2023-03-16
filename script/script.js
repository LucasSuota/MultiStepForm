currentTab = 0

function nextStepBtn(n){
    currentTab = currentTab + n
    let items = document.querySelector('.step' + currentTab)
    items.classList.add('d-none')

    if(currentTab > 0){
        const goBackBtn = document.querySelector('.goBackBtn')
        goBackBtn.classList.remove('d-none')
    }
}