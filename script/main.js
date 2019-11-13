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

    // RISPOSTA AUTOMATICA DEL PC
    var elementmsg = $("#template .containermessaggi").clone();

    // Diamo timeout di 1 sec tutto nella funzione
    setTimeout(function () {
      //Aggiungo la classe received per formattare il messaggio
      elementmsg.addClass('received');
      // modifica questa copia di msgreceived aggiungendogli "Ciao":
      elementmsg.find('.msg').text("Ok");
      // appendiamo una copia con testo valorizzato del div msgreceived
      $(".mainmessaggi").append(elementmsg);
    }, 1000);






  });

//   // Milestone 2

// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta,
// che apparirà dopo 1 secondo.

// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


























});
