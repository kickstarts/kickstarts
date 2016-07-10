(function($) {

    'use strict';

    var $user = JSON.stringify({

        idUser: $('#idUser').val(),
        idSingup: $('#idSingup').val(),
        name: $('#name').val(),
        email: $('#email').val(),
        login: $('#login').val(),
        password: $('#password').val(),
        cpf: $('#cpf').val()

    });

    $('#submit').on('click', function() {
        console.log($user);
    });


})(jQuery);
