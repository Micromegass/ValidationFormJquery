 $('form').on('submit', function (e) {
     e.preventDefault(); // previene la acción por defecto (enviar el formulario)

     // escribe  tu solución


     $("button").on('click', validate);


     function terms() {

         if (!$('#terms').is(":checked")) {
             $('.checkbox').addClass('has-error');
         } else {
             $('.checkbox').removeClass('has-error');
         };

     }


     function validateUser() {

         if (($('#username').val().indexOf(" ") > 0) || ($('#username').val().length == 0)) {
             $('.form-group:first').addClass('has-error');
         } else {
             $('.form-group').removeClass('has-error');
         };

     }



     function validatePass() {

         if (($('#password').val().length < 6 || ('#password').val().length > 40)) {
             $('.form-group:nth-child(2)').addClass('has-error');
         } else {
             $('.form-group').removeClass('has-error');
         };
     }



     function validate() {
         validateUser();
         validatePass();
         terms();

     }


 });
