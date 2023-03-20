//jumping through each step.

let stepPosition = [1, 2];

const nextStep = (number) => {  

    const previousTab = document.querySelector('.step' + stepPosition[0]);
    const currentTab = document.querySelector('.step' + stepPosition[1]);

    previousTab.classList.add('d-none');
    currentTab.classList.remove('d-none');

    if(stepPosition[0] < 4){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] + number;

    }

};

const previousStep = (number) => {

    const previousTab = document.querySelector('.step' + stepPosition[0]);
    const currentTab = document.querySelector('.step' + stepPosition[1]);

    previousTab.classList.remove('d-none');
    currentTab.classList.add('d-none');

    if(stepPosition[0] > 1){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] - number;

    }

};