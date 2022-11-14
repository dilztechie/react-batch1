let println = (text, id) => text.toString().startsWith("Error") ?
    document.getElementById(id).innerHTML += "<span style='color:red'>" + text + "</span>" + "<br />" :
    document.getElementById(id).innerHTML += text + "<br />"