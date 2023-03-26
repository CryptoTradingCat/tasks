import {urlAdd, urlBase, urlDelete, urlUpdate, urlGet, urlGetAll} from './config.js';
import {addResident} from './funct.js';
export let divBtnAddResident = document.createElement('div');
divBtnAddResident.setAttribute('class', 'div-add');
let btnAddResident = document.createElement('button');
divBtnAddResident.appendChild(btnAddResident);
btnAddResident.innerHTML = 'Ajouter un residents';
btnAddResident.onclick = function () {
    divBtnAddResident.removeChild(btnAddResident);
    
    let formAddResidents = document.createElement('form');
    divBtnAddResident.appendChild(formAddResidents);
    formAddResidents.setAttribute('method', 'post');
    formAddResidents.setAttribute('enctype','multipart/form-data');
    formAddResidents.setAttribute('class', 'form-add-residents');

    let divNameResident = document.createElement('div');
    divNameResident.setAttribute('class', 'form-add-resident');
    let labelNameResident = document.createElement('label');
    labelNameResident.setAttribute('class', 'label-input-form');
    labelNameResident.setAttribute('for','residents_name');
    let labelNameResidentText = document.createTextNode("Prénom du résident :");
    labelNameResident.appendChild(labelNameResidentText);

    let inputNameResident = document.createElement('input');
    inputNameResident.setAttribute('class', 'label-input-form');
    inputNameResident.setAttribute('type', 'text');
    inputNameResident.setAttribute('name', 'residents_name');
    inputNameResident.setAttribute('id', 'residents_name');

    let divBtnRadio = document.createElement('div');
    divBtnRadio.setAttribute('id', 'divBtnRadio');
    let labelBtnRadioH = document.createElement('label');
    let textLabelBtnRadioH = document.createTextNode('H');
    labelBtnRadioH.appendChild(textLabelBtnRadioH);
    let btnRadioH = document.createElement('input');
    btnRadioH.setAttribute('type', 'radio');
    btnRadioH.setAttribute('id','residents_genre');
    btnRadioH.setAttribute('name','residents_genre');
    btnRadioH.setAttribute('value',1);
    btnRadioH.onclick = function (){
        if (this.checked){
            btnRadioH.setAttribute('checked', "true");
            btnRadioF.removeAttribute('checked');
        }
    }
    let labelBtnRadioF= document.createElement('label');
    let textLabelBtnRadioF = document.createTextNode('F');
    labelBtnRadioF.appendChild(textLabelBtnRadioF);
    let btnRadioF = document.createElement('input');
    btnRadioF.setAttribute('type', 'radio');
    btnRadioF.setAttribute('id','residents_genre');
    btnRadioF.setAttribute('name','residents_genre');
    btnRadioF.setAttribute('value',2);
    btnRadioF.onclick = function (){
        if (this.checked){
            btnRadioF.setAttribute('checked', "true");
            btnRadioH.removeAttribute('checked');
        }
    }
    divBtnRadio.appendChild(labelBtnRadioH);
    divBtnRadio.appendChild(btnRadioH);
    divBtnRadio.appendChild(labelBtnRadioF);
    divBtnRadio.appendChild(btnRadioF);
    divNameResident.appendChild(labelNameResident);
    divNameResident.appendChild(inputNameResident);
    divNameResident.appendChild(divBtnRadio);

    formAddResidents.appendChild(divNameResident);
    
    



    let submitAddResident = document.createElement('input');
    submitAddResident.setAttribute('class', 'btn-submit');
    submitAddResident.setAttribute('type', 'submit');
    submitAddResident.setAttribute('value', "Ajouter le résident");

    formAddResidents.appendChild(submitAddResident);
    formAddResidents.addEventListener('submit', event => {
        event.preventDefault();
        let  residentsData = new FormData();
        residentsData.append('residents_name', document.querySelector('#residents_name').value);
        residentsData.append('residents_genre', document.querySelector('input[name=residents_genre]:checked').value);
        addResident(residentsData, urlAdd);
    });
    let btnReturn = document.createElement('button');
    formAddResidents.appendChild(btnReturn);
    btnReturn.setAttribute('class', 'btn-submit');
    btnReturn.innerHTML = "Annuler";
    btnReturn.onclick = function(){
        let isReturn  = confirm("Voulez vous annuller l'ajouts d'un résident?");
        alert( isReturn ); 
        if (alert) {
            window.location.reload();
        }
    }
}

