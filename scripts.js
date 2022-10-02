const ventilador = {
    powerAspas: document.getElementById("power"),
    aspas: document.getElementById("aspas"),
    powerRejilla: document.getElementById("rejilla"),
    rejilla: document.getElementById("tapa")
}

let i = 0;

let j = 0;

class artefacto{
    encendido = false;
    rejillaEncendida = false;
    constructor(powerAspas, aspas, powerRejilla, rejilla){
        this.powerAspas = powerAspas;
        this.aspas = aspas;
        this.powerRejilla = powerRejilla;
        this.rejilla = rejilla;
    }
    $girarAspas(){
        this.encendido = true;
        if(this.rejillaEncendida) {
            j = 0;
            this.$powerRejilla();
        }
        if (i == 0){
            ventilador.powerAspas.style.transform = "rotate(60deg)"
            ventilador.aspas.style.animationDuration = "2s";
            i = 1;
        }
        else if (i == 1){
            ventilador.powerAspas.style.transform = "rotate(120deg)"
            ventilador.aspas.style.animationDuration = "1s";
            i = 2;
        }
        else if (i == 2){
            ventilador.powerAspas.style.transform = "rotate(180deg)"
            ventilador.aspas.style.animationDuration = ".5s";
            i = 3;
        }
        else if (i == 3){
            ventilador.powerAspas.style.removeProperty("transform");
            ventilador.aspas.style.animationDuration = "0s";
            i = 0;
            j = 1;
            this.$powerRejilla();
            this.encendido = false;
        }
    }
    $powerRejilla(){
        if(!this.encendido) {
        	return;
        }
        if (j == 0){
            ventilador.powerRejilla.style.transform = "rotate(90deg)";
            ventilador.rejilla.style.animationDuration = "32s";
            j = 1;
            this.rejillaEncendida = true;
        }
        else if (j == 1){
            if(i !== 0) {
                this.rejillaEncendida = false;
            }
			ventilador.powerRejilla.style.removeProperty("transform");
            ventilador.rejilla.style.animationDuration = "0s";
            j = 0;
        }
    }
}

const Ventilador = new artefacto(ventilador.powerAspas, ventilador.aspas, ventilador.powerRejilla, ventilador.rejilla)

ventilador.powerAspas.addEventListener("click", function(){Ventilador.$girarAspas()});

ventilador.powerRejilla.addEventListener("click", function(){Ventilador.$powerRejilla()});