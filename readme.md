Task 1
Individuare i bug:

1. Il font Family è importato all'interno di un tag style inline. La procedura migliore sarebbe quella di utilizzare un <link
     href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
     rel="stylesheet"
   /> pittosto che <style type="text/css">@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700,900);</style> ed inoltre lo style contenente @import non dovrebbe essere preceduto da altri tag style mentre in questo caso è preceduto da un tag style che è altresì privo dell' attributo type.

2. Trattandosi di una navbar sarebbe preferibile posizionarla alll'interno del tag semantico 'header'.

3. Gli attributi width all'interno dei tag img presentano la desinenza px la quale non è necessaria. ad esempio:
   <img src="https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png" width="25px" alt=""> , l'attributo width dovrebbe quindi essere scritto in questa forma width="25"

4. Il sito non è responsive, le icone di user, heart e cart vanno a capo ma le voci del menu no. Così facendo diminuendo la width il container restringe in maniera non proporzionale rispetto al nav-container finendo in questo modo fuori dal div container principale. Di seguito la soluzione più immediata, ovvero modificare la width del nav-container in max-width.

   .container > .nav-container{
   display: block;
   float: left;
   max-width: 700px;
   }

Task 2
open the file task2.html

Task 3

All' interno della cartella task3 aprire il file index.html
Ho effettuato l'installazione di laravel mix per la compilazione del js.

il codice javascript si trova all'interno della cartella src in app.javascriptle operazioni effettuate sono le seguenti:

  1- selezione tutti gli elementi con classe 'specialDiv'
  2- il metodo closest restituisce il primo elemento che corrisponde al selettore.
  3- il metodo find cerca tra tutti gli elementi discendenti da 'specialDiv' e seleziona tramite :first il primo elemento con classe specialChildren.
  4- All'elemento così trovato  tramite il metodo toggleClass assegno e rimuovo una classe active ad ogni click.
  5- tramite il metodo each ciclo all'interno dell'oggetto Jquery ed eseguo una funzione che effettui il console log del valore del data-specialvalue tramite il metodo data  e l'indicazione del selettore