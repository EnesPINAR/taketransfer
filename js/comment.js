$('.set_comment1').on('click', function(e) {
    e.preventDefault();
    var elem = $(this).parent().find('input[name=comment_input\\[\\]]');

    elem.val( elem.val() + 'add this' );
});