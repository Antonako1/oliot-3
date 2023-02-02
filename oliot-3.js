class Pelaaja {
    constructor(nimi, pisteet, elamat, taso, kokemuspisteet, x) {
        this.nimi = String(nimi);
        this.pisteet = Number(pisteet);
        this.elamat = Number(elamat);
        this.taso = Number(taso);
        this.kokemuspisteet = Number(kokemuspisteet);
        this.x = Number(x);
    }
    play() {
        this.pisteet += this.x;
        this.kokemuspisteet += (this.x/10);
    }
    loseLife() {
        if((Math.floor(Math.random() *25) + 1) == 1){ // 1/25 mahdollisuus menettää elämä
        this.elamat--;
        }
    }
    nouseTasolle() {
        if(this.kokemuspisteet >= (100 * this.taso)) {
            this.taso++;
        }
    }
    peliLoppui(){
        if(this.elamat == 0){
            var btn = document.getElementById("btn").classList;
            var btn2 = document.getElementById("btn2").classList;
            btn.add("hidden");
            btn2.add("show");
            alert("Hävisit pelin!");
        }
    }
    showInfo() {
        document.getElementById("stats").innerHTML =
        "Pelaajan nimi: " + this.nimi + "<br>" + "Pisteet: " + this.pisteet + "<br>" + "Elämiä jäljellä: " + this.elamat + "<br>" + "Taso: " + this.taso + "<br>" + "Kokemuspisteesi: " + Math.round(this.kokemuspisteet * 10) / 10 + "/" + (this.taso*100);
        // console.log(this.nimi);
        // console.log(this.pisteet);
        // console.log(this.elamat);
        // console.log(this.taso);
        // console.log(this.kokemuspisteet);
    }
    
}

var sigma = new Pelaaja("Pasi", 0, 3, 1, 0, 50)

function restart() {
    location.reload();
}