let println = (text, id) => document.getElementById(id).innerHTML +=
    (text.toString().startsWith('Error') ||
        text.toString().startsWith('TypeError') ||
        text.toString().startsWith('ReferenceError') ?
        "<span style='color:red'>" + text + "</span>" : text) + "<br />"