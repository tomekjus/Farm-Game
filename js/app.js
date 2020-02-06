const progress = document.getElementById('progressBar');
const collect = document.getElementById('collect');
const pocket = document.getElementById('pocket');
const level = document.getElementById('level');
const lvlStatus = document.getElementById('lvlStatus');
const fieldBtn = document.getElementById('fieldBtn');
const mainField = document.getElementById('mainField');
const bag = document.getElementById('bag');
const btnClose = document.getElementById('close');
const allFields = [];


let gold = 0;

let plants = [
    {
        name: "grain",
        gold: 10,
        exp: 1,
        img: 'img/rice.svg'
    },
    {
        name: "potato",
        seedCost: 30,
        gold: 20,
        requiredLevel: 2,
        exp: 2,
        img: 'img/potato.svg'
    },
    {
        name: "carrot",
        seedCost: 60,
        gold: 30,
        requiredLevel: 3,
        exp: 3,
        img: 'img/carrot.svg'
    },
    {
        name: "tomato",
        seedCost: 90,
        gold: 40,
        requiredLevel: 4,
        exp: 4,
        img: 'img/tomato.svg'
    }
]

let fieldsNum = 0;

function addField() {
    const field = document.createElement('div');
    mainField.appendChild(field);
    field.classList.add('main__one');
    fieldsNum++;
    field.dataset.number = fieldsNum;
    allFields.push(field);
    allFields.forEach(field => field.addEventListener('click', addSeed));
}

function addSeed(e) {
    let id = e.target.dataset.number;
    bag.style.display = 'block';


    // let timeleft = 1;
    // progress.style.display = 'block';
    // let growTimer = setInterval(function(){
    //     progress.value = 10 - timeleft;
    //     timeleft -= 1;
    //     if(timeleft <= 0){
    //         clearInterval(growTimer);
    //         progress.style.display = 'none';
    //         collect.style.display = 'block';
    //     }
    // }, 1000);
    
}

function closeBag() {
    bag.style.display = 'none';
}



fieldBtn.addEventListener('click', addField);
btnClose.addEventListener('click', closeBag);
