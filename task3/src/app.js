//Handler Metod,tutto il codice JS racchiuso all'interno di questa funzione anonima verra caricato solo dopo il caricamento della DOM.
$(function () {
  // La funzione nell'ordine:
  // 1- selezione tutti gli elementi con classe 'specialDiv'
  // 2- il metodo closest restituisce il primo elemento che corrisponde al selettore.
  // 3- il metodo find cerca tra tutti gli elementi discendenti da 'specialDiv' e seleziona tramite :first il primo elemento con classe specialChildren.
  // 4- All'elemento così trovato  tramite il metodo toggleClass assegno e rimuovo una classe active ad ogni click.
  // 5- tramite il metodo each ciclo all'interno dell'oggetto Jquery ed eseguo una funzione che effettui il console log del valore del data-specialvalue tramite il metodo data  e l'indicazione del selettore

  $(".specialDiv").click(function () {
    $(this)
      .closest(".specialDiv")
      .find(".specialChildren:first")
      .toggleClass("active")
      .each(function () {
        console.log($(this).data("specialvalue"));
      });
  });
});
