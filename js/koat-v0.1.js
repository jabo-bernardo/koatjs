let Koat = {
    _version: "v0.1",
}

elements = document.querySelectorAll(".koat");
data_input_values = {};
data_input = [];
data_output = [];
data_source = [];
data_foreach = [];

elements.forEach(element => {
    if(element.getAttribute('data-source')) {
        data_source.push(element)
    }
    if(element.getAttribute('data-input')) {
        data_input.push(element);
    }

    if(element.getAttribute('data-output')) {
        data_output.push(element);
    }

    if(element.getAttribute('data-foreach')) {
        data_foreach.push(element);
    }

});

let update_data_output = function() {
    data_output.forEach(element => {
        element.innerHTML = data_input_values[element.getAttribute('data-output')];
    });
}

let update_data_input = function() {
    data_input.forEach(element => {
        data_input_values[element.getAttribute('data-input')] = element.value;
    });
}

let update_data_source = function() {
    data_source.forEach(element => {
        if(Strings[element.getAttribute("data-source")] == undefined)
            return
        element.innerHTML = Strings[element.getAttribute('data-source')];
    });
}

let update_data_foreach = function() {
    data_foreach.forEach(element => {
        if(!Arrays[element.getAttribute('data-foreach')])
            return
        let content = "";
        for(let i = 0; i < Arrays[element.getAttribute('data-foreach')].length; i++) {
            // let cln = element.cloneNode(false)
            content += "<p>" + Arrays[element.getAttribute('data-foreach')][i] + "</p>"
            element.innerHTML = content;
        }
    })
}

let updater = function() {
    update_data_input();
    update_data_output();
    update_data_source();
    update_data_foreach();
    requestAnimationFrame(updater);
}

updater();