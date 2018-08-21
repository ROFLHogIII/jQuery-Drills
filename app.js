// I put the js file in the body so there is no read for a .ready() event

let buttonID = $(btnSubmit);
let textID = $(textBox);
let body = document.body;
//let div = $("<div></div>").appendTo(body)
let ul = $("<ul></ul>").appendTo(body);


$(textID).keypress(function () {
    buttonID.removeAttr("disabled")
});

$(buttonID).click(function (e) {
    e.preventDefault()
    let wordz = $("input[type='text']").val()
    //console.log(wordz)
    //window.alert("You clicked me!");
    $("<li class='clickMe'>" + wordz + "</li>").appendTo(ul);
    $(".clickMe").click(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")")
    });
    $(".clickMe").dblclick(function () {
        $(this).remove();
    });
    //    $("<h2 id='hover'>" + wordz + "</h2>").appendTo(div)
    //    $('#hover').hover(function () {
    //        $(this).css({
    //            'background-color': 'red',
    //            'border-radius': '25px'
    //        });
});