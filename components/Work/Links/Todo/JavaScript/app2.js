var main = function() {
    var index = 0; //The index variable is used to give each todo item a unique ID
    if (localStorage.length != 0){
        var keys = [];
        keys = Object.keys(localStorage).filter(function(a) {return !isNaN(a)});
        keys.sort(function(a,b) {return parseInt(a)-parseInt(b)}); //Each todo item is a unique localStorage key-value pair, we want to filter for numeric keys

        if (keys.length > 0 && Math.min(...keys) >= 0){
            $(".Placeholder").css("display", "none");
            index = Math.max(...keys) + 1; //If we have items already in storage, set the indexing variable to the next number
        }

        for (var j = 0; j < keys.length; j++){ //List to populate the todoList from localStorage
            $(".List").append('<div class="TodoItem"><span>' + localStorage.getItem(keys[j]) + '</span><button class="todoDelete" id="' + keys[j] + '" type="button">X</button></div>');
        }
    }

    $('#todo').focus(); //Focus into the text box right from the start

    $("#InputButton").click(function() {
        var todo = $('#todo').val().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); //Obtain input from the input field, filtered for html tags
        todo = $.trim(todo);

        if ($(".TodoItem").contents().length == 0 && todo != ""){
            $(".Placeholder").css("display", "none"); //If at least one item is entered, remove that placeholder
        }

        if (todo != ""){
            $(".List").append('<div class="TodoItem"><span>' + todo + '</span><button class="todoDelete" id="' + index + '" type="button">X</button></div>'); //Div creation here, featuring a span for the text and a button with unique id
            $('#todo').val("");
            $('#todo').focus();
            localStorage.setItem(index, todo); //This also updates localStorage and the index
            index++;
        };
    });

    $('#todo').keypress(function(e) { //Replace an enter press with a button click
        if (e.keyCode == 13) {
            $('#InputButton').click();
            e.preventDefault();
        }
    });

    $(document).on('click', '.todoDelete', function() {
        localStorage.removeItem(this.id); //Clicking an X should delete the todo, and remove a corresponding key from localStorage
        $(this).parent().remove();
        if ($(".TodoItem").contents().length == 0){
            $(".Placeholder").css("display", "block"); //We will also put back the placeholder if we are at 0 items in the list
        }
    });
}

$(document).ready(main);
