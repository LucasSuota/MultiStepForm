//next step and previous step buttons

currentTab = 0;

function nextStepBtn(n){

    if(currentTab <= 3){

        currentTab = currentTab + n;
        nextTab = currentTab + n;

        const currentItem = document.querySelector('.step' + currentTab);
        const nextItem = document.querySelector('.step' + nextTab);

        currentItem.classList.add('d-none')
        nextItem.classList.remove('d-none')

    }

    if(currentTab > 0){

        const goBackBtn = document.querySelector('.goBackBtn')

        goBackBtn.classList.remove('d-none')

    }

} 


