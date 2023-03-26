export let btnCreateTask = document.createElement('button');
import {urlAdd, urlBase, urlDelete, urlUpdate, urlGet, urlGetAll} from './config.js';
import {Lundi, Day, Mardi,Samedi} from './obj.js';
import {getRandomInt,createObjetResident} from './funct.js';
btnCreateTask.innerHTML = "Crée le tableau des taches";
btnCreateTask.onclick = function(){
    axios.get(urlGetAll, {
        headers: {
            "Content-Type": "multipart/form-data",'Authorization': 'Bearer'+localStorage.getItem('adminToken'),
        }})
        .then(response => {
            let dataResidents = response.data;
            
            let tabId = [];
            let tabName = [];
            let tabGenre = [];
            let tablundi = [];
            let tabMardi = [];
            let tabMercredi = [];
            let tabJeudi = [];
            let tabVendredi = [];
            let tabSamedi = [];
            let tabDimanche = [];
            let tabCuisine = [];
            let tabSalle = [];
            let tabGt = [];
            let tabCouloir = [];
            let tabCave = [];
            let tabPoubelle = [];
            let tabWc = [];
            let tabFrigo = [];
            let tabRam = [];
            let tabExt = [];
            
            for (let i=0;i<dataResidents.length;i++){
                tabId.push(dataResidents[i].id);
                tabName.push(dataResidents[i].residents_name);
                tabGenre.push(dataResidents[i].residents_genre);
                
            }
            
            let maxRandom = tabId.length;
           
            
            function cuisine (nb, tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabCuisine.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabCuisine.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function salle (nb,tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabSalle.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabSalle.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function gt (nb,tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabGt.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabGt.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function cave (nb,tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabCave.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabCave.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function poubelle (nb,tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabPoubelle.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabPoubelle.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function frigo (nb,tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabFrigo.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabFrigo.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function ramasse (nb,tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabRam.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabRam.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function ext (nb,tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabExt.includes(winner)&& !tabDay.includes(winner)){
                        tab.push(winner);
                        tabExt.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function couloir (nb, tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabCouloir.includes(winner) && tabGenre[winner] == 1 && !tabDay.includes(winner)){
                        tab.push(winner);
                        tabCouloir.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
            function wc (nb, tabDay){
                let tab = [];
                for(let i=0; i<nb; i++){
                    let winner = getRandomInt(0, maxRandom);
                    if(!tab.includes(winner)&& !tabWc.includes(winner) && tabGenre[winner] == 1 && !tabDay.includes(winner)){
                        tab.push(winner);
                        tabWc.push(winner);
                        tabDay.push(winner);
                    }
                    else {
                        i--;
                    }
                }
                return tab;
            }
         
           let lundi = new Lundi (createObjetResident(tabName,cuisine(3,tablundi)),createObjetResident(tabName,salle(1,tablundi)),createObjetResident(tabName,gt(1,tablundi)),createObjetResident(tabName,couloir(2,tablundi)),createObjetResident(tabName,cave(1,tablundi)),createObjetResident(tabName,poubelle(1,tablundi)),createObjetResident(tabName,wc(1,tablundi)),createObjetResident(tabName,frigo(2,tablundi)),createObjetResident(tabName,ramasse(3,tablundi)),createObjetResident(tabName,ext(1,tablundi)));
           let mardi = new Mardi (createObjetResident(tabName,cuisine(3,tabMardi)),createObjetResident(tabName,salle(1,tabMardi)),createObjetResident(tabName,gt(1,tabMardi)),createObjetResident(tabName,couloir(2,tabMardi)),createObjetResident(tabName,wc(1,tabMardi)),createObjetResident(tabName,frigo(2,tabMardi)),createObjetResident(tabName,ramasse(3,tabMardi)));
           let mercredi = new Mardi (createObjetResident(tabName,cuisine(3,tabMercredi)),createObjetResident(tabName,salle(1,tabMercredi)),createObjetResident(tabName,gt(1,tabMercredi)),createObjetResident(tabName,couloir(2,tabMercredi)),createObjetResident(tabName,wc(1,tabMercredi)),createObjetResident(tabName,frigo(2,tabMercredi)),createObjetResident(tabName,ramasse(3,tabMercredi)));
           let jeudi = new Mardi (createObjetResident(tabName,cuisine(3,tabJeudi)),createObjetResident(tabName,salle(1,tabJeudi)),createObjetResident(tabName,gt(1,tabJeudi)),createObjetResident(tabName,couloir(2,tabJeudi)),createObjetResident(tabName,wc(1,tabJeudi)),createObjetResident(tabName,frigo(2,tabJeudi)),createObjetResident(tabName,ramasse(3,tabJeudi)));
           let vendredi = new Lundi (createObjetResident(tabName,cuisine(3,tabVendredi)),createObjetResident(tabName,salle(1,tabVendredi)),createObjetResident(tabName,gt(1,tabVendredi)),createObjetResident(tabName,couloir(2,tabVendredi)),createObjetResident(tabName,cave(1,tabVendredi)),createObjetResident(tabName,poubelle(1,tabVendredi)),createObjetResident(tabName,wc(1,tabVendredi)),createObjetResident(tabName,frigo(2,tabVendredi)),createObjetResident(tabName,ramasse(3,tabVendredi)),createObjetResident(tabName,ext(1,tabVendredi)));
           let samedi = new Samedi(createObjetResident(tabName,cuisine(2,tabSamedi)),createObjetResident(tabName,salle(1,tabSamedi)),createObjetResident(tabName,wc(1,tabSamedi)),createObjetResident(tabName,frigo(1,tabSamedi)));
           let dimanche = new Samedi(createObjetResident(tabName,cuisine(2,tabDimanche)),createObjetResident(tabName,salle(1,tabDimanche)),createObjetResident(tabName,wc(1,tabDimanche)),createObjetResident(tabName,frigo(1,tabDimanche)));
           let semaine = new Day(lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche);
           console.log(semaine);
           let divTitle = document.querySelector('.title');
           let divTable = document.createElement('div');
           divTitle.after(divTable);
           let tab = document.createElement('table');
           divTable.appendChild(tab);
           let thead = document.createElement('thead');
           tab.appendChild(thead);
           let trTitle = document.createElement('tr');
           thead.appendChild(trTitle);
           let tdName = document.createElement('td');
           let textTdName = document.createTextNode('nom');
           tdName.appendChild(textTdName);
           trTitle.appendChild(tdName);
           let tdLundi = document.createElement('td');
           let tdLundiText = document.createTextNode('Lundi');
           tdLundi.appendChild(tdLundiText);
           trTitle.appendChild(tdLundi);
           let tdMardi = document.createElement('td');
           let tdMardiText = document.createTextNode('Mardi');
           tdMardi.appendChild(tdMardiText);
           trTitle.appendChild(tdMardi);
           let tdMercredi = document.createElement('td');
           let tdMercrediText = document.createTextNode('Mercredi');
           tdMercredi.appendChild(tdMercrediText);
           trTitle.appendChild(tdMercredi);
           let tdJeudi = document.createElement('td');
           let tdJeudiText = document.createTextNode('Jeudi');
           tdJeudi.appendChild(tdJeudiText)
           trTitle.appendChild(tdJeudi);
           let tdVendredi = document.createElement('td');
           let tdVendrediText = document.createTextNode('Vendredi');
           tdVendredi.appendChild(tdVendrediText);
           trTitle.appendChild(tdVendredi);
           let tdSamedi = document.createElement('td');
           let tdSamediText = document.createTextNode('Samedi');
           tdSamedi.appendChild(tdSamediText);
           trTitle.appendChild(tdSamedi);
           let tdDimanche = document.createElement('td');
           let tdDimancheText = document.createTextNode('Dimanche');
           tdDimanche.appendChild(tdDimancheText);
           trTitle.appendChild(tdDimanche);
           let tdNbTask = document.createElement('td');
        //    let tdNbTaskText = document.createTextNode('Nombres de tâches');
        //    tdNbTask.appendChild(tdNbTaskText);
        //    trTitle.appendChild(tdNbTask);
           let tbody = document.createElement('tbody');
           tab.appendChild(tbody);
           for (let n=0; n<maxRandom; n++){
            
            let row = document.createElement('tr');
            tbody.appendChild(row)
            let colText1 = document.createTextNode('1');
            let colText2 = document.createTextNode('2');
            let colText3 = document.createTextNode('3+GT');
            let colText4 = document.createTextNode('4');
            let colText5 = document.createTextNode('5');
            let colText6 = document.createTextNode('6');
            let colText7 = document.createTextNode('7');
            let colText8 = document.createTextNode('8');
            let colText9 = document.createTextNode('9');
            let colText10 = document.createTextNode('10');
            for(let cl = 0; cl < 8;cl++){
                let col = document.createElement('td');
                col.setAttribute('id', cl);
                row.appendChild(col);
                if (col.id == 0){
                    let colText = document.createTextNode(dataResidents[n].residents_name);
                    col.appendChild(colText);
                }
                if (col.id == 1){
                    if (semaine.lundi.cave.resident === dataResidents[n].residents_name){
                        col.appendChild(colText5);
                    }
                    if (semaine.lundi.wc.resident === dataResidents[n].residents_name){
                        col.appendChild(colText7);
                    }
                    if (semaine.lundi.salleGt.resident === dataResidents[n].residents_name){
                        col.appendChild(colText3);
                    }
                    if (semaine.lundi.salleAManger.resident === dataResidents[n].residents_name){
                        col.appendChild(colText2);
                    }
                    if (semaine.lundi.poubelle.resident === dataResidents[n].residents_name){
                        col.appendChild(colText6);
                    }
                    if (semaine.lundi.ext.resident === dataResidents[n].residents_name){
                        col.appendChild(colText10);
                    }
                    if (semaine.lundi.couloir.resident1 === dataResidents[n].residents_name || semaine.lundi.couloir.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText4);
                    }
                    if (semaine.lundi.frigo.resident1 === dataResidents[n].residents_name || semaine.lundi.frigo.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText8);
                    }
                    if (semaine.lundi.cuisine.resident1 === dataResidents[n].residents_name || semaine.lundi.cuisine.resident2 === dataResidents[n].residents_name || semaine.lundi.cuisine.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText1);
                    }
                    if (semaine.lundi.ramasse.resident1 === dataResidents[n].residents_name || semaine.lundi.ramasse.resident2 === dataResidents[n].residents_name || semaine.lundi.ramasse.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText9);
                    }
                }
                if (col.id == 2){
                    if (semaine.mardi.wc.resident === dataResidents[n].residents_name){
                        col.appendChild(colText7);
                    }
                    if (semaine.mardi.salleGt.resident === dataResidents[n].residents_name){
                        col.appendChild(colText3);
                    }
                    if (semaine.mardi.salleAManger.resident === dataResidents[n].residents_name){
                        col.appendChild(colText2);
                    }
                    if (semaine.mardi.couloir.resident1 === dataResidents[n].residents_name || semaine.mardi.couloir.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText4);
                    }
                    if (semaine.mardi.frigo.resident1 === dataResidents[n].residents_name || semaine.mardi.frigo.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText8);
                    }
                    if (semaine.mardi.cuisine.resident1 === dataResidents[n].residents_name || semaine.mardi.cuisine.resident2 === dataResidents[n].residents_name || semaine.mardi.cuisine.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText1);
                    }
                    if (semaine.mardi.ramasse.resident1 === dataResidents[n].residents_name || semaine.mardi.ramasse.resident2 === dataResidents[n].residents_name || semaine.mardi.ramasse.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText9);
                    }
                }
                if (col.id == 3){
                    if (semaine.mercredi.wc.resident === dataResidents[n].residents_name){
                        col.appendChild(colText7);
                    }
                    if (semaine.mercredi.salleGt.resident === dataResidents[n].residents_name){
                        col.appendChild(colText3);
                    }
                    if (semaine.mercredi.salleAManger.resident === dataResidents[n].residents_name){
                        col.appendChild(colText2);
                    }
                    if (semaine.mercredi.couloir.resident1 === dataResidents[n].residents_name || semaine.mercredi.couloir.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText4);
                    }
                    if (semaine.mercredi.frigo.resident1 === dataResidents[n].residents_name || semaine.mercredi.frigo.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText8);
                    }
                    if (semaine.mercredi.cuisine.resident1 === dataResidents[n].residents_name || semaine.mercredi.cuisine.resident2 === dataResidents[n].residents_name || semaine.mercredi.cuisine.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText1);
                    }
                    if (semaine.mercredi.ramasse.resident1 === dataResidents[n].residents_name || semaine.mercredi.ramasse.resident2 === dataResidents[n].residents_name || semaine.mercredi.ramasse.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText9);
                    }
                }
                if (col.id == 4){
                    if (semaine.jeudi.wc.resident === dataResidents[n].residents_name){
                        col.appendChild(colText7);
                    }
                    if (semaine.jeudi.salleGt.resident === dataResidents[n].residents_name){
                        col.appendChild(colText3);
                    }
                    if (semaine.jeudi.salleAManger.resident === dataResidents[n].residents_name){
                        col.appendChild(colText2);
                    }
                    if (semaine.jeudi.couloir.resident1 === dataResidents[n].residents_name || semaine.jeudi.couloir.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText4);
                    }
                    if (semaine.jeudi.frigo.resident1 === dataResidents[n].residents_name || semaine.jeudi.frigo.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText8);
                    }
                    if (semaine.jeudi.cuisine.resident1 === dataResidents[n].residents_name || semaine.jeudi.cuisine.resident2 === dataResidents[n].residents_name || semaine.jeudi.cuisine.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText1);
                    }
                    if (semaine.jeudi.ramasse.resident1 === dataResidents[n].residents_name || semaine.jeudi.ramasse.resident2 === dataResidents[n].residents_name || semaine.jeudi.ramasse.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText9);
                    }
                }
                if (col.id == 5){
                    if (semaine.vendredi.cave.resident === dataResidents[n].residents_name){
                        col.appendChild(colText5);
                    }
                    if (semaine.vendredi.wc.resident === dataResidents[n].residents_name){
                        col.appendChild(colText7);
                    }
                    if (semaine.vendredi.salleGt.resident === dataResidents[n].residents_name){
                        col.appendChild(colText3);
                    }
                    if (semaine.vendredi.salleAManger.resident === dataResidents[n].residents_name){
                        col.appendChild(colText2);
                    }
                    if (semaine.vendredi.poubelle.resident === dataResidents[n].residents_name){
                        col.appendChild(colText6);
                    }
                    if (semaine.vendredi.ext.resident === dataResidents[n].residents_name){
                        col.appendChild(colText10);
                    }
                    if (semaine.vendredi.couloir.resident1 === dataResidents[n].residents_name || semaine.vendredi.couloir.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText4);
                    }
                    if (semaine.vendredi.frigo.resident1 === dataResidents[n].residents_name || semaine.vendredi.frigo.resident2 === dataResidents[n].residents_name){
                        col.appendChild(colText8);
                    }
                    if (semaine.vendredi.cuisine.resident1 === dataResidents[n].residents_name || semaine.vendredi.cuisine.resident2 === dataResidents[n].residents_name || semaine.vendredi.cuisine.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText1);
                    }
                    if (semaine.vendredi.ramasse.resident1 === dataResidents[n].residents_name || semaine.vendredi.ramasse.resident2 === dataResidents[n].residents_name || semaine.vendredi.ramasse.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText9);
                    }
                }
                if (col.id == 6) {
                    if (semaine.samedi.wc.resident === dataResidents[n].residents_name){
                        col.appendChild(colText7);
                    }
                    if (semaine.samedi.salleAManger.resident === dataResidents[n].residents_name){
                        col.appendChild(colText2);
                    }
                    if (semaine.samedi.frigo.resident === dataResidents[n].residents_name ){
                        col.appendChild(colText8);
                    }
                    if (semaine.samedi.cuisine.resident1 === dataResidents[n].residents_name || semaine.samedi.cuisine.resident2 === dataResidents[n].residents_name ){
                        col.appendChild(colText1);
                    }
                }
                if (col.id == 7){
                    if (semaine.dimanche.wc.resident === dataResidents[n].residents_name){
                        col.appendChild(colText7);
                    }
                    if (semaine.dimanche.salleAManger.resident === dataResidents[n].residents_name){
                        col.appendChild(colText2);
                    }
                    if (semaine.dimanche.frigo.resident1 === dataResidents[n].residents_name ){
                        col.appendChild(colText8);
                    }
                    if (semaine.dimanche.cuisine.resident1 === dataResidents[n].residents_name || semaine.dimanche.cuisine.resident2 === dataResidents[n].residents_name || semaine.dimanche.cuisine.resident3 === dataResidents[n].residents_name){
                        col.appendChild(colText1);
                    }
                }
            }
            
           }
            
            
            
         

    }).catch(error => console.error(error));   
};