let Koat = {
    _version: "v0.1",
}

elements = document.querySelectorAll(".koat");
inputTexts = {};
inputs = [];
outputs = [];

elements.forEach(element => {
    if(element.getAttribute('data-text:source')) {
        if(Strings[element.getAttribute("data-text:source")] == undefined)
            return
        element.innerHTML = Strings[element.getAttribute('data-text:source')];
    }
    if(element.getAttribute('data-input')) {
        inputs.push(element);
    }

    if(element.getAttribute('data-output')) {
        outputs.push(element);
    }

    if(element.getAttribute('data-foreach')) {
        if(!Arrays[element.getAttribute('data-foreach')])
            return
        for(let i = 0; i < Arrays[element.getAttribute('data-foreach')].length; i++) {
            let cln = element.cloneNode(false)
            let clnd = element.appendChild(cln);
            clnd.innerHTML = Arrays[element.getAttribute('data-foreach')][i];
            clnd.removeAttribute('data-foreach');
        }
    }

});

let updateOutputs = function() {
    outputs.forEach(element => {
        element.innerHTML = inputTexts[element.getAttribute('data-output')];
    });

    requestAnimationFrame(updateOutputs)
}

updateOutputs();

let updateInputs = function() {

    inputs.forEach(element => {
        inputTexts[element.getAttribute('data-input')] = element.value;
    });
    requestAnimationFrame(updateInputs);
}

updateInputs();