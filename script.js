// coded by Mohammad Zefri
// contact me on mdzefri.code@gmail.com

let wildCard = document.querySelectorAll("*");

wildCard.forEach((e) => e.style.cssText = `-webkit-tap-highlight-color: transparent; margin: 0px; padding: 0px; box-sizing: border-box; user-select: none; font-family: sans-serif;`);

document.body.style.backgroundColor = "#ddd";

let parent = document.createElement("div");

parent.style.cssText = `width: 70%; margin: 0px auto; display: flex; flex-direction: row; justify-content: center; align-items: center; height: 100vh;`;
parent.classList.add("parent");

let fieldSet = document.createElement("fieldset");
fieldSet.style.cssText = "width: fit-content; padding: 13px 17px; border: none; color: rgb(255, 255, 255); background-color: #98d4f3; border-radius: 9px;";

let legend = document.createElement("legend");
legend.appendChild(document.createTextNode(`Calcul de frais de transport`));
legend.style.cssText = "text-align: center; color: gray; word-spacing: 1px; text-shadow: 1px 1px 1px rgb(255, 255, 255); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";

let modeTrpCon = document.createElement("div");

let modeTrLabel = document.createElement("label");
modeTrLabel.appendChild(document.createTextNode(`Mode de transport :`));
modeTrLabel.style.cssText = `white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-left: 9px;`;


let modeNormalCon = document.createElement("div");

let modeNormalInput = document.createElement("input");
modeNormalInput.setAttribute("name", "mode")
modeNormalInput.setAttribute("id", "normal");
modeNormalInput.setAttribute("type", "radio");
modeNormalInput.setAttribute("checked", "checked");
modeNormalInput.style.cssText = `transform: scale(1.3); margin: 0 0.5em 0 0; cursor: pointer;`;

let modeNormalLabel = document.createElement("label");
modeNormalLabel.appendChild(document.createTextNode(`Normal`));
modeNormalLabel.setAttribute("for", "normal");
modeNormalLabel.style.cssText = `display: inline-block;`;
modeNormalLabel.style.cssText = `cursor: pointer;`;

modeNormalCon.append(modeNormalInput, modeNormalLabel);
modeNormalCon.style.cssText = `display: flex; flew-direction: row; justify-content: center; align-items: center;`;



let modeExpressCon = document.createElement("div");

let modeExpressInput = document.createElement("input");
modeExpressInput.setAttribute("name", "mode");
modeExpressInput.setAttribute("type", "radio");
modeExpressInput.setAttribute("id", "express");
modeExpressInput.style.cssText = `transform: scale(1.3); margin: 0 0.5em 0 0; cursor: pointer;`;


let modeExpressLabel = document.createElement("label");
modeExpressLabel.appendChild(document.createTextNode(`Express`));
modeExpressLabel.setAttribute("for", "express");
modeExpressLabel.style.cssText = `display: inline-block;`;
modeExpressLabel.style.cssText = `cursor: pointer;`;

modeExpressCon.append(modeExpressInput, modeExpressLabel);
modeExpressCon.style.cssText = `display: flex; flew-direction: row; justify-content: center; align-items: center;`;


let modesCon = document.createElement("div");
modesCon.style.cssText = `display: flex; flex-direction: row; gap: 23px;`;

modesCon.append(modeNormalCon, modeExpressCon);

modeTrpCon.append(modeTrLabel, modesCon);
modeTrpCon.style.cssText = `margin-bottom: 17px; margin-top: 9px; display: flex; flex-direction: row; gap: 31px; flex-wrap: wrap;`;


let disCon = document.createElement("div");
disCon.style.cssText = `margin-bottom: 17px; display: flex; flex-direction: column; flex-wrap: wrap;`;

let disLabel = document.createElement("label");
disLabel.appendChild(document.createTextNode(`Distance* :`));
disLabel.setAttribute("for", "distance");
disLabel.style.cssText = `display: inline-block; margin-left: 9px; margin-bottom: 7px; width: fit-content;`;

let disInput = document.createElement("input");
disInput.setAttribute("type", "number");
disInput.setAttribute("id", "distance");
disInput.style.cssText = `width: fit-content; height: 33px; border: none; border-radius: 13px; padding-left: 7px; padding-right: 7px;`;
disInput.setAttribute("inputmode", "numeric");
disInput.setAttribute("required", "required");

disInput.onfocus = function() {
    disInput.style.outline = "none";
    disInput.style.border = "2px solid #218bff";
};

disInput.onblur = function() {
    disInput.style.border = "none";
};

disCon.append(disLabel, disInput);


let poidsCon = document.createElement("div");
poidsCon.style.cssText = `margin-bottom: 17px; display: flex; flex-direction: column; flex-wrap: wrap;`;


let poidsLabel = document.createElement("label");
poidsLabel.appendChild(document.createTextNode(`Poids* :`));
poidsLabel.setAttribute("for", "poids");
poidsLabel.style.cssText = `display: inline-block;  margin-left: 9px; margin-bottom: 7px; width: fit-content;`;


let poidsInput = document.createElement("input");
poidsInput.setAttribute("id", "poids");
poidsInput.setAttribute("type", "number");
poidsInput.style.cssText = `width: fit-content; height: 33px; border: none; border-radius: 13px; padding-left: 7px; padding-right: 7px;`;
poidsInput.setAttribute("required", "required");

poidsInput.onfocus = function() {
    poidsInput.style.outline = "none";
    poidsInput.style.border = "2px solid #218bff";
};
poidsInput.onblur = function() {
    poidsInput.style.border = "none";
};


poidsCon.append(poidsLabel, poidsInput);

let coutCon = document.createElement("div");
coutCon.style.cssText = `margin-bottom: 27px; display: flex; flex-direction: column; flex-wrap: wrap;`;



let coutLabel = document.createElement("label");
coutLabel.appendChild(document.createTextNode(`Cout total :`));
coutLabel.setAttribute("for", "cout");
coutLabel.style.cssText = `display: inline-block;  margin-left: 9px; margin-bottom: 7px; width: fit-content;`;


let coutInput = document.createElement("input");
coutInput.setAttribute("type", "number");
coutInput.setAttribute("id", "cout");
coutInput.setAttribute("readonly", "readonly");


coutInput.style.cssText = `width: fit-content; height: 33px; border: none; border-radius: 13px; padding-left: 7px; padding-right: 7px; background-color: #eee;`;
coutInput.onfocus = function() {
    coutInput.style.outline = "none";
};



coutCon.append(coutLabel, coutInput);


let BtnsCon = document.createElement("div");

let calculerBtn = document.createElement("button");
calculerBtn.setAttribute("type", "button");
calculerBtn.appendChild(document.createTextNode(`Calculer`));
calculerBtn.style.cssText = `cursor: pointer; margin-right: 13px; padding: 9px 13px; border: none; border-radius: 7px; background-color: orange; color: rgb(255, 255, 255);`;

calculerBtn.onmouseenter = function() {
    calculerBtn.style.fontSize = "15px";
    calculerBtn.style.transition = "100ms";
};
calculerBtn.onmouseleave = function() {
    calculerBtn.style.fontSize = "revert";
};

let effacerBtn = document.createElement("button");
effacerBtn.setAttribute("type", "button");
effacerBtn.appendChild(document.createTextNode(`Effacer`));
effacerBtn.style.cssText = `cursor: pointer; padding: 9px 13px; border: none; border-radius: 7px; background-color: gray; color: rgb(255, 255, 255);`;
effacerBtn.onmouseenter = function() {
    effacerBtn.style.fontSize = "15px";
    effacerBtn.style.transition = "100ms";
};
effacerBtn.onmouseleave = function() {
    effacerBtn.style.fontSize = "revert";
};


function calculerCoutTotal() {
    if (disInput.value !== "" && poidsInput.value !== "") {
        let coutTotal = 0;
    
        if (poidsInput.value < 10) {
            coutTotal = disInput.value * 0.5;
        } else if (poidsInput > 10) {
            coutTotal = disInput.value * ( poidsInput.value / 10 ) * 0.3;
        };
    
        if (modeExpressInput.checked) {
            coutTotal += ( coutTotal * 20 ) / 100;
        };
    
        coutInput.value = coutTotal;
    };
};

function vider() {
    disInput.value = ``;
    poidsInput.value = ``;
    coutInput.value = ``;
}

calculerBtn.addEventListener("click", calculerCoutTotal);
effacerBtn.addEventListener("click", vider);

BtnsCon.append(calculerBtn, effacerBtn);
BtnsCon.style.cssText = `text-align: center;`;



fieldSet.append(legend, modeTrpCon, disCon, poidsCon, coutCon, BtnsCon);
parent.appendChild(fieldSet);
document.body.appendChild(parent);