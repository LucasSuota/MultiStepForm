//jumping through each step.

let stepPosition = [1, 2];

const nextStep = (number) => {  

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
    

    if(stepPosition[0] < 3){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] + number;

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

    if(stepPosition[0] > 1){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] - number;

    }

};