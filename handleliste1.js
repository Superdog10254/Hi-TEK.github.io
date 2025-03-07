window.onload = oppstart;

function oppstart() {
    document.getElementById("sigma").onclick = regnUt;
}

function regnUt() {

    let gamingPris = 21499; 
    let laptopPris = 2790;

    let gamingAntall = Number(document.getElementById("GamingAntall").value);
    let laptopAntall = Number(document.getElementById("LaptopAntall").value);

    let totalGaming = gamingAntall * gamingPris;
    let totalLaptop = laptopAntall * laptopPris;
    let total = totalGaming + totalLaptop;

    let oppsummering = "Du har handlet:<br>" +
        "Gaming PC: " + gamingAntall + " stk<br>" +
        "Laptop: " + laptopAntall + " stk<br>";

    document.getElementById("oppsummering").innerHTML = oppsummering;
    document.getElementById("svar").innerHTML = "Totalpris: " + total.toLocaleString() + " kr";
}