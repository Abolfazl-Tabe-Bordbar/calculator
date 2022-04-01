var show_operation = document.getElementById("show_operation");
var text = "";
show_operation.innerHTML = text;
var btn_c = document.getElementById("btn_c");
btn_c.addEventListener("click", function () {
    text = "";
    show_operation.innerHTML = text;
});
var btn_0 = document.getElementById("btn_0");
btn_0.addEventListener("click", function () {
    text += "0";
    show_operation.innerHTML = text;
});
var btn_1 = document.getElementById("btn_1");
btn_1.addEventListener("click", function () {
    text += "1";
    show_operation.innerHTML = text;
});
var btn_2 = document.getElementById("btn_2");
btn_2.addEventListener("click", function () {
    text += "2";
    show_operation.innerHTML = text;
});
var btn_3 = document.getElementById("btn_3");
btn_3.addEventListener("click", function () {
    text += "3";
    show_operation.innerHTML = text;
});
var btn_4 = document.getElementById("btn_4");
btn_4.addEventListener("click", function () {
    text += "4";
    show_operation.innerHTML = text;
});
var btn_5 = document.getElementById("btn_5");
btn_5.addEventListener("click", function () {
    text += "5";
    show_operation.innerHTML = text;
});
var btn_6 = document.getElementById("btn_6");
btn_6.addEventListener("click", function () {
    text += "6";
    show_operation.innerHTML = text;
});
var btn_7 = document.getElementById("btn_7");
btn_7.addEventListener("click", function () {
    text += "7";
    show_operation.innerHTML = text;
});
var btn_8 = document.getElementById("btn_8");
btn_8.addEventListener("click", function () {
    text += "8";
    show_operation.innerHTML = text;
});
var btn_9 = document.getElementById("btn_9");
btn_9.addEventListener("click", function () {
    text += "9";
    show_operation.innerHTML = text;
});
var btn_mosavi = document.getElementById("btn_mosavi");
var last_index = text.charAt(text.length - 1);
btn_mosavi.addEventListener("click", function () {
    if (last_index == "/" || last_index == "%" || last_index == "*" || last_index == "-" || last_index == "+" || last_index == ".") {
        text = text.slice(0, -1);
        var result = eval(text);
        show_operation.innerHTML = result;
    } else {
        var result = eval(text);
        show_operation.innerHTML = result;
    }
    
});
var btn_dot = document.getElementById("btn_dot");
btn_dot.addEventListener("click", function () {
    var last_index = text.charAt(text.length - 1);
    if (last_index == "/" || last_index == "%" || last_index == "*" || last_index == "-" || last_index == "+" || last_index == ".") {
        text = text.slice(0, -1);
        text += ".";
    } else {
        text += ".";
    }
    show_operation.innerHTML = text;
});
var btn_plus = document.getElementById("btn_plus");
btn_plus.addEventListener("click", function () {
    var last_index = text.charAt(text.length - 1);
    if (last_index == "/" || last_index == "%" || last_index == "*" || last_index == "-" || last_index == "+" || last_index == ".") {
        text = text.slice(0, -1);
        text += "+";
    } else {
        text += "+";
    }
    show_operation.innerHTML = text;
});
var btn_mines = document.getElementById("btn_mines");
btn_mines.addEventListener("click", function () {
    var last_index = text.charAt(text.length - 1);
    if (last_index == "/" || last_index == "%" || last_index == "*" || last_index == "-" || last_index == "+" || last_index == ".") {
        text = text.slice(0, -1);
        text += "-";
    } else {
        text += "-";
    }
    show_operation.innerHTML = text;
});
var btn_X = document.getElementById("btn_X");
btn_X.addEventListener("click", function () {
    var last_index = text.charAt(text.length - 1);
    if (last_index == "/" || last_index == "%" || last_index == "*" || last_index == "-" || last_index == "+" || last_index == ".") {
        text = text.slice(0, -1);
        text += "*";
    } else {
        text += "*";
    }
    show_operation.innerHTML = text;
});
var btn_taghsim = document.getElementById("btn_taghsim");
btn_taghsim.addEventListener("click", function () {
    var last_index = text.charAt(text.length - 1);
    if (last_index == "/" || last_index == "%" || last_index == "*" || last_index == "-" || last_index == "+" || last_index == ".") {
        text = text.slice(0, -1);
        text += "/";
    } else {
        text += "/";
    }
    show_operation.innerHTML = text;
});
var btn_baghimandeh = document.getElementById("btn_baghimandeh");
btn_baghimandeh.addEventListener("click", function () {
    var last_index = text.charAt(text.length - 1);
    if (last_index == "/" || last_index == "%" || last_index == "*" || last_index == "-" || last_index == "+" || last_index == ".") {
        text = text.slice(0, -1);
        text += "%";
    } else {
        text += "%";
    }
    show_operation.innerHTML = text;
});