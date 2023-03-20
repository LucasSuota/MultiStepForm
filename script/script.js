//jumping through each step.

let stepPosition = [1, 2];

const nextStep = (number) => {  

    changeStepBackgroundColor()

    const previousTab = document.querySelector('.step' + stepPosition[0]);
    const currentTab = document.querySelector('.step' + stepPosition[1]);

    previousTab.classList.add('d-none');
    currentTab.classList.remove('d-none');

    if(stepPosition[0] < 3){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] + number;

    }

};

const previousStep = (number) => {

    changeStepBackgroundColor()

    const previousTab = document.querySelector('.step' + stepPosition[0]);
    const currentTab = document.querySelector('.step' + stepPosition[1]);

    previousTab.classList.remove('d-none');
    currentTab.classList.add('d-none');

    if(stepPosition[0] > 1){

        stepPosition[0] = stepPosition[0] + number;
        stepPosition[1] = stepPosition[0] - number;

    }

};

//changing steps color

const changeStepBackgroundColor = () => {
    
    const previousStep = document.querySelector('.step-' + stepPosition[0])
    const currentStep = document.querySelector('.step-' + stepPosition[1])

    previousStep.style.backgroundColor = 'white'
    previousStep.style.color = '#174a8b'

    currentStep.style.backgroundColor = 'white'
    currentStep.style.color = '#174a8b'

}