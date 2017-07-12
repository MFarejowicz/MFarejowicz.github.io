var main = function() {

    $('#todo').focus();

    $("#InputButton").click(function() {
        var todo = $('#todo').val().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/ /g, '');

        if ($(".TodoItem").contents().length == 0 && todo != ""){
            $(".Placeholder").css("display", "none");
        }

        if (todo != ""){
            $(".List").append('<div class="TodoItem"><span>' + todo + '</span><button class="todoDelete" type="button">X</button></div>');
            $('#todo').val("");
            $('#todo').focus();
        };
    });

    $('#todo').keypress(function(e) {
        if (e.keyCode == 13) {
            $('#InputButton').click();
            e.preventDefault();
        }
    });

    $(document).on('click', '.todoDelete', function() {
        $(this).parent().remove();
        if ($(".TodoItem").contents().length == 0){
            $(".Placeholder").css("display", "block");
        }
    });
}

$(document).ready(main);
