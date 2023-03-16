currentTab = 0

//jump through each step
function nextStepBtn(n){
    if(currentTab < 5){
        currentTab = currentTab + n
        let currentItem = document.querySelector('.step' + currentTab)
        currentItem.classList.add('d-none')
        nextTab = currentTab + 1
        let nextItem = document.querySelector('.step' + nextTab)
        nextItem.classList.remove('d-none')
    }
    
    //show goBackBtn
    if(currentTab > 0){
        const goBackBtn = document.querySelector('.goBackBtn')
        goBackBtn.classList.remove('d-none')
    }
}

function goBackBtn(n){
    const currentItem = document.querySelector('.step' + currentTab)
    currentItem.classList.remove('d-none')
    const nextItem = document.querySelector('.step' + n)
    nextItem.classList.add('d-none')
}