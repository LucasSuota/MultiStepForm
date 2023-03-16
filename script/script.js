//next step and previous step

let currentTab = 0;

const nextStepBtn = n => {

    if(currentTab <= 3){

        currentTab = currentTab + n;
        nextTab = currentTab + 1;

        console.log(currentTab, nextTab)

        const currentItem = document.querySelector('.step' + currentTab);
        const nextItem = document.querySelector('.step' + nextTab);

        currentItem.classList.add('d-none');
        nextItem.classList.remove('d-none');

    }

    if(currentTab > 0){

        const goBackBtn = document.querySelector('.goBackBtn');

        goBackBtn.classList.remove('d-none');

    }   

}

const goBackBtn = n => {

    currentTab = currentTab + n;
    previousTab = currentTab + 1;
    nextTab = previousTab + 1;

    console.log(currentTab, previousTab, nextTab)

    const currentItem = document.querySelector('.step' + currentTab);
    const previousItem = document.querySelector('.step' + previousTab);
    const nextItem = document.querySelector('.step' + nextTab);

    currentItem.classList.add('d-none');
    previousItem.classList.remove('d-none');
    nextItem.classList.add('d-none');

}
