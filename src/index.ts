const billTotalInput = document.getElementById('billTotalInput') as HTMLInputElement
const tipInput = document.getElementById("tipInput")  as HTMLInputElement
const perPersonTotal = document.getElementById("perPersonTotal") as HTMLDivElement
const numberOfPeople = document.getElementById("numberOfPeople") as HTMLSpanElement

let totalTip: number;


const calculateBill = () => {
  let billValue = Number(billTotalInput.value);
  let tipValue = Number(tipInput.value);

  let getTip;

  if (billValue && !tipValue) {
    totalTip = billValue;
  } else {
    getTip = billValue * (tipValue / 100);
    totalTip = billValue + getTip;
  }
  perPersonTotal.innerText = `$${totalTip}`;

}
const increasePeople = () => {
    let newPerPersonTotal: any;
    let getPeople: number;
    if (numberOfPeople != null){
        getPeople = Number(numberOfPeople.innerText);      
        getPeople += 1;
        newPerPersonTotal = Math.ceil(totalTip / getPeople).toFixed(2);

        numberOfPeople.innerText = String (getPeople);
    }
    
    if (perPersonTotal !=null)
    perPersonTotal.innerText = "$" + newPerPersonTotal;
};

const decreasePeople = () => {
    let newPerPersonTotal: any;
    let getPeople: number;
    if (numberOfPeople != null) {
        getPeople = Number(numberOfPeople.innerText);
        getPeople -= 1;
        newPerPersonTotal = Math.ceil(totalTip / getPeople).toFixed(2);
        if (getPeople < 1) {
            return;
        }

        numberOfPeople.innerText = String(getPeople);
    }
    if (perPersonTotal != null)
        perPersonTotal.innerText = "$" + newPerPersonTotal;
  }


