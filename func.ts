// interface INum {
//     visio: string;
//     operate: number;
// }

class vivod {
    visio: string;
    operate: number;

    constructor(znach: string) {
        this.visio = znach;
        this.operate = (this.visio as unknown as number);
    }
}

let check:vivod = new vivod('0');
let saverp:vivod = new vivod('-000');
let saverm:vivod = new vivod('-000');
let saverd:vivod = new vivod('-000');
let saveru:vivod = new vivod('-000');


function inp(knopka:string):void{
    check.visio += knopka;
    check.operate = (check.visio as unknown as number);
    document.getElementById('res').innerText = check.visio;
}

function chistka():void {
    check.visio = check.visio.slice(0, -1);
    check.operate = (check.visio as unknown as number);
    alert(check.operate);
    document.getElementById('res').innerText = check.visio;
}

function sbros():void {
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}

function plusik():void {
    saverp.operate = check.operate;
    saverp.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}

function umno():void {
    saveru.operate = check.operate;
    saveru.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}

function dele():void {
    saverd.operate = check.operate;
    saverd.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}

function minus():void {
    saverm.operate = check.operate;
    saverm.visio = check.visio;
    document.getElementById('res').innerText = '0';
    check.operate = 0;
    check.visio = '';
}


function ravno():void {
    if(saveru.visio != '-000'){
        let par = document.createElement("p");
        let p = Number(saveru.operate) * Number(check.operate);
        let save = check.operate;
        check.operate = p;
        par.innerText = `${saveru.visio} x ${save} = ${check.operate}`;
        document.getElementById('save').appendChild(par);
        saveru = new vivod('-000');
    }
    else if(saverd.visio != '-000'){
        let p = Number(saverd.operate) / Number(check.operate);
        let par = document.createElement("p");
        let save = check.operate;
        check.operate = p;
        par.innerText = `${saverd.visio} / ${save} = ${check.operate}`;
        document.getElementById('save').appendChild(par);
        saverd = new vivod('-000');
    }
    else if(saverm.visio != '-000'){
        let par = document.createElement("p");
        let p = Number(saverm.operate) - Number(check.operate);
        let save = check.operate;
        check.operate = p;
        par.innerText = `${saverm.visio} - ${save} = ${check.operate}`;
        document.getElementById('save').appendChild(par);
        saverm = new vivod('-000');
    }
    else if(saverp.visio != '-000'){
        let par = document.createElement("p");
        let p = Number(check.operate) + Number(saverp.operate);
        let save = check.operate;
        check.operate = p;
        par.innerText = `${saverp.visio} + ${save} = ${check.operate}`;
        document.getElementById('save').appendChild(par);
        saverp = new vivod('-000');
    }
    else{
        alert("SBOI SISTEMI!");
    }
    check.visio = (check.operate as unknown as string);
    document.getElementById('res').innerText = check.visio;
}









