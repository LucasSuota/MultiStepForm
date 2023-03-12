document.querySelector('.btn').onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    hide.style.display = 'none'
    show.style.display = 'flex'
}

document.querySelector('.btnBack').onclick = () => {
    const hide = document.querySelector('.personalInfo')
    const show = document.querySelector('.planSelection')
    hide.style.display = 'flex'
    show.style.display = 'none'
}

document.querySelector('.checkbox').onclick = () => {
    let valueList = document.querySelectorAll('.value')
    if(document.querySelector('.checkbox').checked == true){
        valueList.forEach(values => {
            let valuesArray = []
            valuesArray = (values.innerHTML.replace('$', '').replace('/mo', ''))
            values.innerHTML = `$${JSON.parse(valuesArray * 10)}/yr`
        })
    } else {
        valueList.forEach(values => {
            let valuesArray = []
            valuesArray = values.innerHTML.replace('$', '').replace('/yr', '')
            values.innerHTML = `$${valuesArray / 10}/mo`
        })
    }
}