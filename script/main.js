// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde


$( document ).ready(function() {

  // fx di callback sul buttone
  $(".sendmsg").click(function(){

    // Ci salviano il volore dell input inserito dall utente
    var messaggio = $(".message").val();
    // console.log(messaggio);

    // $(".mainmessaggi").append(
    //   // passare il messaggio all interno del riquadro
    //   "<div class='msgsent'>" + messaggio + "</div>"
    // );

    // tecnica di TEMPLATE
    // cloniamo (facciamo una copia) del div con classe msgsent che sta dentro un div con id template
    var elementmsg = $("#template .containermessaggi").clone();
    console.log(elementmsg);
    //Aggiungo la classe send per formattare il messaggio
    elementmsg.addClass('send');
    // modifica questa copia di msgsent aggiungendogli il testo del messaggio:
    elementmsg.find('.msg').text(messaggio);
    // appendiamo una copia con testo valorizzato del div msgsent
    $(".mainmessaggi").append(elementmsg);

    // miglior user experience, ripuliamo il contenuto riga x scrivere
    $(".message").val("");


  });


























});
