let form = document.getElementById('form');
let color = document.getElementById('color');
let screensize = document.getElementById('screensize');
let model = document.getElementById('model');
let charger = document.getElementById('charger');
let ram = document.getElementById('ram');
let price = document.getElementById('price') ;
let Submit = document.getElementById('submit');
let btn = document.getElementById('btn1')
let data = {};
let div = document.getElementById('display');
let sm = document.getElementById('select-model')
let sp = document.getElementById('select-price')
console.log('hey')
count = 0;

Submit.addEventListener('click', (event) =>{
    let Color = color.value;
    let screenSize = screensize.value;           
    let Model = model.value;
    let Charger = charger.value;
    let Ram = ram.value;
    let Price = price.value;

    data.Color = Color;
    data.screenSize = screenSize;
    data.Model = Model;
    data.Charger = Charger;
    data.Ram = Ram;
    data.Price = Price;

    console.log(data);

    localStorage.setItem(`data${count}`, JSON.stringify(data))
    count++
    event.preventDefault();
})
carData = []

for(let i = 0; i< localStorage.length; i++){

    let retrieveData = JSON.parse(localStorage.getItem(`data${count}`))
    carData.push(retrieveData)
    console.log(carData)
}
let amount1 = document.createElement('option')
let amount2 = document.createElement('option')
let amount3 = document.createElement('option')
let amount4 = document.createElement('option')
let amount5 = document.createElement('option')
let amount6 = document.createElement('option')
let amount7 = document.createElement('option')
let amount8 = document.createElement('option')
let amount9 = document.createElement('option')
let amount10 = document.createElement('option')

amount1.innerHTML = '100,000'
amount2.innerHTML = '150,000'
amount2.innerHTML = '200,000'
amount3.innerHTML = '250,000'
amount4.innerHTML = '300,000'
amount5.innerHTML = 'Dell'
amount6.innerHTML = 'HP'
amount7.innerHTML = 'Accer'
amount8.innerHTML = 'Apple'

sp.appendChild(amount1)
sp.appendChild(amount2)
sp.appendChild(amount3)
sp.appendChild(amount4)

sm.appendChild(amount5)
sm.appendChild(amount6)
sm.appendChild(amount7)
sm.appendChild(amount8)



btn.addEventListener('click', (eve)=>{

    let Model = model.value;
    let Price = Number(price.value);

    for(let i=0; 1 < localStorage.length; i++){
    
    
    carData.filter((data)=>{
        if(data.Model === Model && data.Price === Price){
            let paragraph1 = document.createElement('p');
            let paragraph2 = document.createElement('p');
            let paragraph3 = document.createElement('p');
            let paragraph4 = document.createElement('p');
            let paragraph5 = document.createElement('p');
            let paragraph6 = document.createElement('p');
        
            paragraph1.innerHTML = 'Color: ' + retrieveData.Color;
            paragraph2.innerHTML = 'Screen size: ' + retrieveData.screenSize;
            paragraph3.innerHTML = 'Model: ' + retrieveData.Model;
            paragraph4.innerHTML = 'Charger size: ' + retrieveData.Charger;
            paragraph5.innerHTML = 'Ram size: ' + retrieveData.Ram;
            paragraph6.innerHTML = 'Price: ' + retrieveData.Price + '<br><br>';
        
            div.appendChild(paragraph1)
            div.appendChild(paragraph2)
            div.appendChild(paragraph3)
            div.appendChild(paragraph4)
            div.appendChild(paragraph5)
            div.appendChild(paragraph6)
        }
    })

   

}
 eve.preventDefault();
})