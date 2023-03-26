import {urlAdd, urlBase, urlDelete, urlUpdate, urlGet, urlGetAll} from './config.js';
import {btnCreateTask} from './task.js';
import {divBtnAddResident} from './add.js';
import { dellResident, updateResident} from './funct.js';
let container = document.getElementById('container');
let divTitle = document.createElement('div');
divTitle.setAttribute('class', 'title');
let title = document.createElement('h1');
let titleText = document.createTextNode("Liste des résidents")
title.appendChild(titleText);
divTitle.appendChild(title);
container.appendChild(divTitle);
let divBtnCreateTasks = document.createElement('div');
divBtnCreateTasks.setAttribute('class', 'div-form-add');
divBtnCreateTasks.setAttribute('id', 'div-form-add');
divBtnCreateTasks.setAttribute('value', 'test');
divBtnCreateTasks.appendChild(btnCreateTask);
divBtnCreateTasks.appendChild(divBtnAddResident);
container.appendChild(divBtnCreateTasks);
axios.get(urlGetAll, {
    headers: {
        "Content-Type": "multipart/form-data",'Authorization': 'Bearer'+localStorage.getItem('adminToken'),
    }})
    .then(response => {
        console.log(response.data);
        let residentsData = response.data;
        let nbresidents = residentsData.length;
        let container = document.getElementById('container');
        let section = document.createElement('section');
        section.setAttribute('class' , 'section-vue-edit');
        let div = document.createElement('div');
        div.setAttribute('class', 'liste-residents-edit');
        for (let e=0; e<nbresidents; e++ ){
            let carteResident = document.createElement('article');
            carteResident.className = "carte-resident-edit";
            let title = document.createElement("h3");
            carteResident.appendChild(title);
            title.setAttribute('class', 'elem-edit');
            let titleName = document.createTextNode(residentsData[e].residents_name);
            title.appendChild(titleName);
            let btnUpdate = document.createElement('button');
            btnUpdate.setAttribute('class', 'btn-edit');
            btnUpdate.setAttribute('id', e);
            btnUpdate.disabled = false;
            btnUpdate.innerHTML = "modifier le résident"
            btnUpdate.onclick = function() {
                let btnUp = btnUpdate.id;
                for(let btn = 0;btn<nbresidents*2; btn++){
                    let btnAll = document.querySelectorAll('.btn-edit');
                    if (btnAll[btn].id != btnUp){
                        btnAll[btn].disabled = true;
                        
                    }
                    
                }
                let btnReturn = document.createElement('button');
                carteResident.replaceChild(btnReturn, btnDell);
                btnReturn.innerHTML = "Annuler";
                btnReturn.onclick = function(){
                    let isReturn  = confirm("Voulez vous annuller le changement sur le résident "+residentsData[e].residents_name+" ?");
                    alert( isReturn ); 
                    if (alert) {
                        window.location.reload();
                    }
                }
                let nameResident = document.createElement("input");
                carteResident.replaceChild(nameResident, title);
                nameResident.setAttribute('type', 'text')
                nameResident.setAttribute('class', 'elem-edit');
                nameResident.setAttribute('id', 'residents_name');
                nameResident.setAttribute('name', 'residents_name');
                nameResident.setAttribute('placeholder', residentsData[e].residents_name);
                let divGenreResident = document.createElement('div');
                divGenreResident.setAttribute('id', 'divGenreResident');
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
                if (residentsData[e].residents_genre == 1){
                    btnRadioH.setAttribute('checked', "true");
                }if (residentsData[e].residents_genre == 2){
                    btnRadioF.setAttribute('checked', "true");
                }
                divGenreResident.appendChild(labelBtnRadioH);
                divGenreResident.appendChild(btnRadioH);
                divGenreResident.appendChild(labelBtnRadioF);
                divGenreResident.appendChild(btnRadioF);
                let buttonValider = document.createElement('button');
                carteResident.replaceChild(buttonValider, btnUpdate);
                carteResident.insertBefore(divGenreResident, buttonValider);
                buttonValider.type = 'button';
                buttonValider.innerHTML = 'Valider';
                buttonValider.onclick = function () {
                    let Rname; 
                    if (document.getElementById('residents_name').value == ""){
                    Rname = residentsData[e].residents_name;
                    }
                    else {
                        Rname = document.getElementById('residents_name').value;
                    }
                    const updateDataResident = new FormData();
                    updateDataResident.append('residents_name', Rname);
                    updateDataResident.append('residents_genre', document.querySelector('input[name=residents_genre]:checked').value);
                    alert("voulez-vous modifier le résidents : ");
                    let urlUpdateId = urlUpdate+residentsData[e].id;
                    if (alert) {
                        updateResident(urlUpdateId, updateDataResident);
                    
                    }
                }
                
            }
            let btnDell = document.createElement('button');
            btnDell.setAttribute('class', 'btn-edit');
            btnDell.setAttribute('id', e);
            btnDell.disabled = false;
            btnDell.innerHTML = "supprimer le résident"
            btnDell.onclick = function (){
                let idResident = residentsData[e].id;
                let isDelete = confirm("Voulez vous supprimer le résidents?");
                alert( isDelete ); 
                if (alert) {
                    dellResident (idResident, urlDelete);
                }
            }
        carteResident.appendChild(btnUpdate);
        carteResident.appendChild(btnDell);
        div.appendChild(carteResident);
        section.appendChild(div);
        container.appendChild(section);
        
        
    }    
      
    }).catch(error => console.error(error));   


    
      
       
    
    
