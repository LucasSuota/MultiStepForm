//plan selection

const itemOptions = document.querySelectorAll(".planDivision");

itemOptions.forEach(btn => {
    btn.onclick = () => {
        itemOptions.forEach(item => {
            item.style.background = 'white'
        })
        btn.style.background = '#eef5ff'
        console.log(btn.dataset.plan);
    }
})



