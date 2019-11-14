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


    // MILESTONE 2 //

    // STEP 1: Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
    // l’utente riceverà un “ok” come risposta,
    // che apparirà dopo 1 secondo.

    // STEP 2: Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
    // vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
    // (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


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

  // funzione che Cerca, FILTRO
  // https://api.jquery.com/jquery.each/

  // inserisco il keyup cosi al rilascio del bottone parte la ricerca

  $(".barraricerca").keyup(function(event){

    // mi creo una var e gli do il case insensitive (Portando tutto in minuscolo)
    var cercaNome = $(this).val().toLowerCase();

    // usa each per ciclare e trovare
    $(".utentelaterale").each(function(){

    // crea una var per il nome cercato
      var nomeCercato = $(this).find(".nomeutespec").text().toLowerCase();

      // crea la condizione if se lo trova
        if (nomeCercato.includes(cercaNome)){
          $(this).show();
        } else {
          $(this).hide();
        }
  });
});


// MILESTONE 3

// STEP 1 sarà da lasciare selezionato il contatto, la chat cambia, e cambiano anche le info
// dell’header della chat, e se scrivo un msg, sarà inserito in quella chat e quella solamente;

// STEP 2, bisogna tenere conto che dovrò gestire eventi su elementi inseriti dinamicamente,
// quindi dovrò affidarmi all’event delegation: https://learn.jquery.com/events/event-delegation/,
// e poi facile ci sia anche la questione di risalire al padre da cancellare rispetto
// all’elemento interno che ha dato il comando di delete;

// Scelgo la chat a sinistra e seleziono solo quella cliccata

$(".utentelaterale").click(function() {

      $(".utentelaterale").removeClass("selected")
      $(this).addClass("selected")

      // cambiare il nome on top e l orario

      var cambioNome = $(".selected .nomeutespec").text();
      var cambioOrario = $(".selected .oraMsg").text();

      // console.log(prova);
      // $(".nomeutespectop").hide();
      $(".nomeutespectop").text(cambioNome)
      $(".oraMsgTop").text(cambioOrario)

      // cambiare l immagine on TOP

      //Ottengo l'src dell'immagine
      var srcImmagine = $('.selected img').attr('src');
      //Setto l'src su un'altra immagine
      $('.avatarTop').attr('src', srcImmagine);

      // Se scrivo un msg, sarà inserito in quella chat e quella solamente;
      // al click su selected
      // var srcUtentelaterale = $('.mainmessaggi').attr('src');
      // $('.mainmessaggi').attr('data-ref', clickedUtentelaterale);
      // $(".mainmessaggi.selected").removeClass("selected")
      // $("main[data-ref=" + clickedUtentelaterale +"]").addClass("selected");
      // $('.mainmessaggi .selected').attr('src', srcUtentelaterale);



});

   // trovare un modo per rendere dinamico il div con classe .utenteselezionatotop
   // che ad ogni click cambia

// $(".utentelaterale").click(changeTab);
//
// function changeTab (){
//   var posizioneTab = $(".utenteselezionatotop img.active");
//   posizioneTab.removeClass("active");
// }

// IDEA: Nik
// var srcImmagine = $('selettoreimmagine').attr('src'); //Ottengo l'src dell'immagine
// console.log(srcImmagine); //Fai console.log per capire cosa restituisce ;)
// $('immaginedasostituire').attr('src', srcImmagine); //Setto l'src su un'altra immagine :)







































});
