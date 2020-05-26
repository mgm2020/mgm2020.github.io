window.onload = function() {
    
    document.getElementById('savednotes').onclick = function() {
        document.getElementById('container').innerHTML = "";
        document.getElementById('controls').innerHTML = "";
        var container = document.getElementById('container');
        var p = document.createElement('p');
        p.id = 'savednotes';
        container.appendChild(p);
        var text = document.createTextNode("No Notes Created Yet");
        p.appendChild(text);
    }
    var home = document.getElementById('container').innerHTML;
var controls = document.getElementById('controls').innerHTML;
display_saved_note();
document.getElementById('savednote').onclick = function() {
    document.getElementById('container').innerHTML = home;
    document.getElementById('controls').innerHTML = controls;
     display_saved_note();
}
}

function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}
function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}

function clear() {
    document.getElementById('area').value = "";
}
const saveButton = document.querySelector("#save");
const getData = () => {
    var data=console.log("Name of file");
    return data;
  };
  
  saveButton.onclick = event => {
    event.preventDefault();
    data = getData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    const message = "Form draft has been saved!";
    displayAlert(message);
  };