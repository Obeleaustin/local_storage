
//grab all element the js file

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
let modelname = document.getElementById('modelname');
let sm = document.getElementById('select-model')
let sp = document.getElementById('select-price')
let modelValue = [];
let modelData = [];
let priceData = [];
let priceValue = [];
let computer = [];

console.log('hey')
let count;

//when you click the register button 
//grab the content of the form using a constructor
//store each value in your local storage 
Submit.addEventListener('click', (event) =>{
    if (localStorage.getItem("count")){
        count = Number(localStorage.getItem("count"))
    }else{
        count = 0
    }
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
    console.log(count)

    localStorage.setItem(`data${count}`, JSON.stringify(data))
    count++
    localStorage.setItem('count',count);
    console.log(count)
    event.preventDefault();
})

//fetch content of the local storage as page loads
//filter the data and get all unique models and prices and
//push them into a different array 

let modelFunction = () => {
    let Model = model.value;
    for(let j=0; j < localStorage.length; j++){
        let retrieveData = JSON.parse(localStorage.getItem(`data${j}`))
        modelData.push(retrieveData)   
        // console.log(modelData)
       
    }
    for(let j = 0 ; j < modelData.length - 1; j++){

        if(!modelValue) {
            modelValue.push(modelData.Model);
            //console.log(modelValue);
        }

        if(!modelValue.includes(modelData[j].Model)){
           // console.log(`${j} done`)
            modelValue.push(modelData[j].Model);
           // console.log(modelValue);
        }
        
    }

    for(let j = 0; j <= modelValue.length - 1; j++){
        let createOption = document.createElement('option');
        createOption.innerHTML = modelValue[j];
        console.log(modelValue[j]);
        sm.appendChild(createOption);
    }
    //console.log(modelValue);
}

modelFunction()

let priceFunction = () => {
    for (let a = 0; a < localStorage.length; a++){
         let retrieveData = JSON.parse(localStorage.getItem(`data${a}`))
        priceData.push(retrieveData);
       // console.log(priceData)
    }
    for(let a = 0; a < priceData.length - 1; a++){
        if(!priceValue){
            priceValue.push(modelData.Price);
            console.log(priceValue)
        }
        if(!priceValue.includes(priceData[a].Price)){
            // console.log(`${j} done`)
            priceValue.push(priceData[a].Price);
            console.log(priceValue);
         }
    }

    for(let  a = 0; a <= priceValue.length - 1; a++){
        let createOption1 = document.createElement('option')
        createOption1.innerHTML = priceValue[a];
        console.log(priceValue[a]);
        sp.appendChild(createOption1)
    }
}
priceFunction()

//when the value of the select elements changes, filter 
//the received elements array and display all data with 
//matching value

function myFunction(){
    div.innerHTML = ''
    for (let j = 0; j < modelData.length - 1; j++){
        let model = sm.value;
        let price = sp.value;
        if (modelData[j].Model === model && modelData[j].Price === price){
            
            
            console.log('present')
                    let retrieveData = JSON.parse(localStorage.getItem(`data${j}`))
            
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
    }
    // eve.preventDefault()
}
// btn.addEventListener('click', (eve)=>{
//     let Model = model.value;
//      let Price = Number(price.value);
//      for(let i=0; i < localStorage.length; i++){   
//     carData.filter((data)=>{
//        if(data.Model === Model && data.Price === Price){
//         }
//     })   
// }
//  eve.preventDefault();
// })




// carData = []
// for(let i = 0; i< localStorage.length; i++){
//     let retrieveData = JSON.parse(localStorage.getItem(`data${count}`))
//     carData.push(retrieveData)
//     console.log(carData)
// }
// carData = []
// for(let i = 0; i< localStorage.length; i++){
//     let retrieveData = JSON.parse(localStorage.getItem(`data${count}`))
//     carData.push(retrieveData)
//     console.log(carData)
    
// }


// console.log(carData)

//  modelData = [];
//  let Model = model.value
//  for (let i = 0; i=localStorage.length; i++){
//    modelData.filter((Model)=>{
//      let retrieveData = JSON.parse(localStorage.getItem(`data${count}`))
//      modelData.push(Model)
//      console.log()
//    })
    // modelname.innerHTML = modelData.filter(modelValue);
    
    // function modelValue(value){
    //     return value = Model;
    // }
    
    
    // modelname.innerHTML = modelData.filter(modelValue);
    
    // function modelValue(modeldata){
    //     return modeldata = modelData(model.value);
    // }
// //console.log(retrieveData.Model)
// const result = modelData.filter(model => retrieveData < 2);
// console.log(result)
    // for(let m = 0; m = modelData.length; m++){
    //     console.log('I entered here')
    // let retrieveData = JSON.parse(localStorage.getItem(`data${m}`))
    // console.log(retrieveData)
    //     // modelValue.push(retrieveData.Model)       
    //     // console.log(modelValue)
    // }
    
    // var modelName = modelData.filter(function(model){
    //     return model.Model == "dell";
    // })
    // console.log(modelName)
    // var numbers = [1, 3, 6, 8, 11]
    
    // var greaterThanSeven = numbers.filter(function(number){
    //     return number > 7;
    // });
    // console.log(greaterThanSeven)
    
    // var creatures = [
    //     {name: "shark", habitat: "Ocean"},
    //     {name: "whale", habitat: "Ocean"},
    //     {name: "lion", habitat: "savanna"},
    //     {name: "monkey", habitat: "jungle"}
    // ]
    // var aquaticCreatures = creatures.filter(function(creature){
    //     return creature.habitat == "Ocean";
    // });
    // console.log(aquaticCreatures)
// }
        // modelData.forEach((data) => {
        //     for(let i = 0; i < modelValue.length; i++){
        //         if(data.Model === modelData[i].Model) {
        //             check = true
        //             console.log(check)
        //         }
        //     }
        
        //     if (!check === true){
        //         console.log('I entered here')
        //         console.log(data.Model)
        //         modelValue.push(data.Model);
        //         console.log(modelValue)
        //     }
        //     check = false
        //     } 