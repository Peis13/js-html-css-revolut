$(document).ready(
  function() {

    // DROPDOWN
    // Apertura del menù a tendina all'entrata del mouse
    // e ruota freccina di 180 gradi
    $('.con-dropdown').mouseenter(
      function() {

        ruotaFreccia($(this), 180);
        $(this).children('.dropdown').addClass('visible');
      }
    );

    // Chiusura del menù a tendina all'uscita del mouse
    // e riposiziona freccina allo stato iniziale
    $('.con-dropdown').mouseleave(
      function() {

        ruotaFreccia($(this), 0);
        $(this).children('.dropdown').removeClass('visible');
      }
    );

    // Al click di un elemento della navbar controlla se ha classe 'con-dropdown'
    //  --> se vero, ruota la sua freccia e chiudi/apri il suo menù a tendina
    //  --> altrimenti rimuovi la classe 'active' dall'elemento precedentemente attivo
    //      e aggiungila all'elemento cliccato
    $('.navbar .menu').children('li').click(
      function() {

        if ($(this).hasClass('con-dropdown')) {
          ruotaFreccia($(this), 0);
          $(this).children('.dropdown').toggleClass('visible');

        } else {
          $('.navbar .menu li').children('.active').removeClass('active');
          $(this).children('a').addClass('active');
        }
      }
    );
  }
);

//          FUNZIONI          //
// Ruota l'icona (freccia) presente nell'elemento antenato della dropdown
// Non ritorna niente, modifica solo il DOM
function ruotaFreccia(elemento, gradi) {
  if (elemento.hasClass('freccia')) {
    elemento.find('i').css({
      'transform':'rotate(' + gradi +'deg)',
      'transition':'0.3s'
    });
  }
}
