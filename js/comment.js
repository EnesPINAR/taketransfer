$('.button_quick_comment').on('click', function(e) {
    e.preventDefault();
    $("#comment_input").val($("#comment_input").val() + e.target.value+" ")
    e.target.remove()
});