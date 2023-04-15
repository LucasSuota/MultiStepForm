//jumping through each step.

let stepPosition = [1, 2];

const nextStep = (number) => {  

    //updating information

    const rightTab = document.querySelector('.step3')

    if(!rightTab.classList.contains('d-none')){

        selectPlan.displayingPlan();
        selectPlan.updateFinal();

    }

    const userName = document.querySelector('.userName');
    const userEmail = document.querySelector('.userEmail');
    const userPhoneNumber = document.querySelector('.userPhoneNumber');

    if(userName.value == '' || userEmail.value == '' || userPhoneNumber.value == ''){
        alert('You must fill the required fields!');
    }else{
        
    //right area / user Area

        const previousTab = document.querySelector('.step' + stepPosition[0]);
        const currentTab = document.querySelector('.step' + stepPosition[1]);

        previousTab.classList.add('d-none');
        currentTab.classList.remove('d-none');

        //left area / step number

        const previousStep = document.querySelector('.step-' + stepPosition[1]);
        const currentStep = document.querySelector('.step-' + stepPosition[0]);

        previousStep.classList.add('stepActive');
        currentStep.classList.remove('stepActive');
    
        //get the number position to show the confirmation button

        if(stepPosition[1] == 4){

        const nextStepBtn = document.querySelector('.nextStepBtn');
        const confirmationBtn = document.querySelector('.confirmationBtn');

        nextStepBtn.classList.add('d-none');
        confirmationBtn.classList.remove('d-none');

        }

        //show go back button

        if(stepPosition[0] >= 1){

        const goBackBtn = document.querySelector('.goBackBtn');
        goBackBtn.classList.remove('d-none');

        }

        if(stepPosition[0] < 3){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] + number;

        }

    }

};

const previousStep = (number) => {

    //right area / user Area

    const previousTab = document.querySelector('.step' + stepPosition[0]);
    const currentTab = document.querySelector('.step' + stepPosition[1]);

    previousTab.classList.remove('d-none');
    currentTab.classList.add('d-none');

    //left area / step number

    const previousStep = document.querySelector('.step-' + stepPosition[1]);
    const currentStep = document.querySelector('.step-' + stepPosition[0]);

    previousStep.classList.remove('stepActive');
    currentStep.classList.add('stepActive');

    //get the number position to show the confirmation button

    if(stepPosition[1] <= 4){

        const nextStepBtn = document.querySelector('.nextStepBtn');
        const confirmationBtn = document.querySelector('.confirmationBtn');

        nextStepBtn.classList.remove('d-none');
        confirmationBtn.classList.add('d-none');

    }

    //hide go back button

    if(stepPosition[0] == 1){

        const goBackBtn = document.querySelector('.goBackBtn');
        goBackBtn.classList.add('d-none');

    }

    if(stepPosition[0] > 1){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] - number;

    }

};

//confirmation area

const sendInformation = () => {

    const lastTab = document.querySelector('.lastStep');
    const lastButOne = document.querySelector('.step' + stepPosition[1]);
    const btnArea = document.querySelector('.btnArea');

    lastTab.classList.remove('d-none');
    lastButOne.classList.add('d-none');
    btnArea.classList.add('d-none')

}


