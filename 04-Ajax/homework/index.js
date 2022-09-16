// Utiliza el evento click en un boton para hacer que al hacer click en el mismo aparezca en el DOM una lista con todos los amigos que el servidor nos devolvera al hacer un GET a la ruta http://localhost:5000/amigos


$('#boton').click(function(){
        $.get("http://localhost:5000/amigos", function (data){
            data.forEach(user => {
              const el = document.createElement('li');
              el.innerHTML = `<b>${user.name} X</b>`;
              $('#lista').append(el);    
            });
          });
    });


// Un campo de busqueda (input) que reciba el id de un amigo y un boton "buscar". Al hacer click en el boton, buscaremos el amigo que tiene ese id en el servidor, y lo mostraremos en el DOM. Para conseguir los datos de un amigo en particular del servidor, puedes hacer un GET nuestro servidor concatenando el id del amigo que queremos encontrar, Por ej: http://localhost:5000/amigos/1 le pediria al servidor el amigo con id = 1

$('#search').click(function(){
    $.get(`http://localhost:5000/amigos/${$('#input').val()}`, function (data){
        const el = document.querySelector('#amigo');
        el.innerHTML = `<b> ${data.name}</b>`;
})
});

// Un input que reciba el id de un amigo y un boton "borrar". Al hacer click en el boton, borraremos el amigo del servidor haciendo un DELETE a nuestro servidor, concatenando el id del usuario que queremos borrar. Por ej: http://localhost:5000/amigos/2 le pediria al servidor el amigo con id = 2

$('#delete').click(function(){
    $.ajax(`http://localhost:5000/amigos/${$('#inputDelete').val()}`, {
        method: 'DELETE'
    }).done(function(data){
        const el = document.querySelector('#success');
        el.innerHTML = '<b>Tu amigo fue borrado con exito!</b>'
    })
})


