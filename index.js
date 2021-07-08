function capitalf(){
    let num=Math.floor(Math.random()*26+65);
    return String.fromCharCode(num);

}
function lowerf(){
    let num=Math.floor(Math.random()*26+97);
    return String.fromCharCode(num);
    
}
function caractf(){
    let num=Math.floor(Math.random()*32+1);
    if(num<=15){
        num+=32;
        return String.fromCharCode(num);
    }
    else if(num<=22){
        num=num-15;
        num+=57;
        return String.fromCharCode(num);
    }
    else if(num<=28){
        num=num-22;
        num+=90;
        return String.fromCharCode(num);
    }
    else{
        num=num-28;
        num+=122;
        return String.fromCharCode(num);
    }
 
}
function numbersf(){
    let num=Math.floor(Math.random()*10+48);
    return String.fromCharCode(num);
    
}

function generatepassword(array,tam){
var saida="";
for(let i=0;i<tam;i++){
    let num=Math.floor( Math.random()*(array.length) );
    num=array[num];
    if(num==1){saida+=capitalf();}
    if(num==2){saida+=lowerf();}
    if(num==3){saida+=caractf();}
    if(num==4){saida+=numbersf();}
}
return saida;
}

function workdude(){
let arr=[]
const tamanhoEl=document.getElementById("tamanho");
const capitalEl=document.getElementById("capital");
const lowerEl=document.getElementById("lower");
const caractEl=document.getElementById("caracteres");
const numbersEl=document.getElementById("numbers");
const saidaEl=document.getElementById("senha");
const tamanho=tamanhoEl.value;
const capital=capitalEl.checked;
const lower=lowerEl.checked;
const caract=caractEl.checked
const numbers=numbersEl.checked;
if(capital){
    arr.push(1);
}
if(lower){
    arr.push(2);
}
if(caract){
    arr.push(3);
}
if(numbers){
    arr.push(4);
}
var senha = generatepassword(arr,tamanho);
saidaEl.value=senha;
}

function myFunction(){
    var senhaEl=document.getElementById("senha");
    senhaEl.select();
    senhaEl.setSelectionRange(0,99999);
    document.execCommand("copy");

}