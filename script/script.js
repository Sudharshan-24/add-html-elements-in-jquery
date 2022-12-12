$(document).ready(function () {
    $('#btn').click(function () {
        var message = '<p id="mes">Hi, welcome to learn jQuery!</p>';
        $('html').append(message);
    });
});