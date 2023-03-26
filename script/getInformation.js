//plan selection

class SelectPlan{

    itemOptions = document.querySelectorAll(".planDivision");
    billingBtn = document.querySelector('.checkboxItem');

    //check checkbox

    checkbox(){

            if(this.billingBtn.checked == true){
                return true;
            } else {
                return false;
            }
        
    }

    //change background color

    backgroundColorSelection(){

        this.itemOptions.forEach(btn => {
            btn.onclick = () => {
                this.itemOptions.forEach(item => {
                    item.style.background = 'white';
                });
                btn.style.background = '#eef5ff';
            }
        });

    }

    //updates values monthly and yearly and add text '2 months free'

    updateValues(){

        this.billingBtn.onclick = () => {

            this.itemOptions.forEach(item => {

                const freeMonthsMessage = document.createElement('p');

                freeMonthsMessage.innerHTML = '2 months free';
                freeMonthsMessage.classList.add('freeMonthsText');
            
                if(this.checkbox() == true){

                    item.appendChild(freeMonthsMessage);

                } else {

                    document.querySelector('.freeMonthsText').remove()

                }

            });
        }
    }
}

const selectPlan = new SelectPlan;

selectPlan.backgroundColorSelection();
selectPlan.updateValues();