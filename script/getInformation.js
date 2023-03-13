const stepNavigation = (stepNumber) => {
    document.querySelectorAll('.formStep').forEach(formStepElement => {
        formStepElement.classList.add('d-none');
    });

    document.querySelector('#step-' + stepNumber).classList.remove('d-none');
}

// document.querySelector('.checkbox').onclick = () => {
// let valueList = document.querySelectorAll('.value')
//     if(document.querySelector('.checkbox').checked == true){
//         valueList.forEach(values => {
//             let valuesArray = []
//             valuesArray = (values.innerHTML.replace('$', '').replace('/mo', ''))
//             values.innerHTML = `$${JSON.parse(valuesArray * 10)}/yr`
//             })
//     } else {
//         valueList.forEach(values => {
//             let valuesArray = []
//             valuesArray = values.innerHTML.replace('$', '').replace('/yr', '')
//             values.innerHTML = `$${valuesArray / 10}/mo`
//             }) 
//     }
// }



