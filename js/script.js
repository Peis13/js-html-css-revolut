$(document).ready(
  function() {

    // DROPDOWN
    // Apertura del menù a tendina all'entrata del mouse
    // e ruota freccina di 180 gradi
    $('.con-dropdown').mouseenter(
      function() {

        if ($(this).parent().hasClass('mobile')) {
          ruotaFreccia($(this), 90);
          $(this).children('a').addClass('active');
          $(this).children('.dropdown').addClass('visible');

        } else {
          ruotaFreccia($(this), 180);
          $(this).children('a').addClass('active');
          $(this).children('.dropdown').addClass('visible');
        }
      }
    );

    // Chiusura del menù a tendina all'uscita del mouse
    // e riposiziona freccina allo stato iniziale
    $('.con-dropdown').mouseleave(
      function() {

        if ($(this).parent().hasClass('mobile')) {
          ruotaFreccia($(this), 270);
          $(this).children('a').removeClass('active');
          $(this).children('.dropdown').removeClass('visible');

        } else {

          ruotaFreccia($(this), 0);
          $(this).children('a').removeClass('active');
          $(this).children('.dropdown').removeClass('visible');
        }
      }
    );

    // Al click di un elemento della navbar controlla se ha classe 'con-dropdown'
    //  --> se vero, ruota la sua freccia e chiudi/apri il suo menù a tendina
    //  --> altrimenti rimuovi la classe 'active' dall'elemento precedentemente attivo
    //      e aggiungila all'elemento cliccato
    $('.navbar .menu').children('li').click(
      function() {

        if ($(this).parent().hasClass('mobile')) {
          ruotaFreccia($(this), 270);
          $(this).children('.dropdown').toggleClass('visible');

        } else {
          if ($(this).hasClass('con-dropdown')) {
            ruotaFreccia($(this), 0);
            $(this).children('.dropdown').toggleClass('visible');

          } else {
            $('.navbar .menu li').children('.active').removeClass('active');
            $(this).children('a').addClass('active');
          }
        }
      }
    );

    // Al click sul burger visualizza il menù navigazione
    $('.burger').click(
      function() {
        $('.navigazione').addClass('mobile');
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
      'transition':'0.2s'
    });
  }
}
