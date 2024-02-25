$(document).ready(function () {
    $('.options').hide();

    $('a').on('click', function () {
        $('.container').addClass('is-active');
        $(this).remove();
        setTimeout(function () {
            $('.paper').html('<div class="page">LET\'S GO OUT! Tomorrow!!</div>');
            $('.options').show();
        }, 2000);
    });

    $('.btn-no').on('mouseenter', function () {
        var mLeft = Math.random() * 300;
        var mTop = Math.random() * 300;
        $(this).css('margin-left', mLeft);
        $(this).css('margin-top', mTop);
    });

    $('.btn-no').on('click', function () {
        alert('Good reflexs! Now Choose "Yes"');
    });

    $('.btn-yes').on('click', function () {
        alert('Waiting for your reply!');
        window.location.href = 'mailto:recipient@example.com?subject=Let\'s%20Go%20Out%20Tomorrow&body=Hi%20there,%0A%0AI%20am%20excited%20to%20go%20out%20with%20you%20tomorrow!';
    });
});