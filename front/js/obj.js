
function Lundi (cuisine, salleAManger, salleGt, couloir, cave, poubelle, wc, frigo, ramasse, ext){
    this.cuisine = cuisine;
    this.salleAManger = salleAManger;
    this.salleGt = salleGt;
    this.couloir = couloir;
    this.cave = cave;
    this.poubelle = poubelle;
    this.wc = wc;
    this.frigo = frigo;
    this.ramasse = ramasse;
    this.ext = ext;
}
function Mardi (cuisine, salleAManger, salleGt, couloir,wc, frigo, ramasse){
    this.cuisine = cuisine;
    this.salleAManger = salleAManger;
    this.salleGt = salleGt;
    this.couloir = couloir;
    this.wc = wc;
    this.frigo = frigo;
    this.ramasse = ramasse;
}

function Samedi (cuisine, salleAManger,wc, frigo){
    this.cuisine = cuisine;
    this.salleAManger = salleAManger;
    this.wc = wc;
    this.frigo = frigo;
}

function Day (lundi, mardi, mercredi, jeudi, vendredi,samedi, dimanche ){
    this.lundi = lundi;
    this.mardi = mardi;
    this.mercredi = mercredi;
    this.jeudi = jeudi;
    this.vendredi = vendredi;
    this.samedi = samedi;
    this.dimanche = dimanche;
}
function Three (resident1,resident2,resident3){
    this.resident1 = resident1;
    this.resident2 = resident2;
    this.resident3 = resident3;
}
function Two (resident1, resident2){
    this.resident1 = resident1;
    this.resident2 = resident2;
}
function One (resident){
    this.resident = resident;
}

export {One, Two, Three, Lundi,Mardi,Samedi, Day};