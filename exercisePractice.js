$('.interface').on("click", function () {
    // console.log(this); //pobieranie wartości klikniętego elemnetu JS
    // console.log($(this)); // pobieranie wartości JS opakowanego przez JQ
    // console.log($(this).attr("class")) // sprawdzenie jaka klasa w JQ
    // console.log(this.className); //sprawdzenie jak klasa w JS

    // console.log($(this).hasClass("orange")); // jeśli znajdzie klasę to zwróci wartośc true

    // if($(this).hasClass("orange")){ //ins trukcja warunkowa if z JQ
    //     console.log("prawda");
    // }

    // if (this.classList.contains("green")) { //instrukcja warunkowa if w JS
    //     console.log("prawda  w zielony");
    // }

    if ($(this).hasClass("orange")) {
        // $(body).toggleClass("orange"); // sprawdza czy dana klasa istniej jak tak to usuwa a jak nie to odejmuje.
        // $(body).css("background-color", "orange"); // .css w jQ zmienia style
        console.log("prawda w pomarańczowy")

        // $('body').css({
        //     "background-color": "orange"
        // })

        $('body').attr("class", "orange");

    }

    if ($(this).hasClass("green")) {

        console.log("prawda w zielony");
        // $('body').css({
        //     // "background-color": " green" // zmiana background w tradycyjny sposób

        // })
        $('body').attr("class", "green"); // jesli klasa nie istnieje to ją stworzymy a jeśli istnieje to nadpiszemy

    }

    if ($(this).hasClass("increase")) {
        console.log("prawda w plus");
        $('.text').animate({
            "font-size": "+=2px"
        }, 500)
    }
    if ($(this).hasClass("move")) { //powiekszenie i przesunięcie w prawo
        console.log("prawda w strzałkę");
        $('.text').animate({
            "left": "+=5px",
            "leter-spacing": "+=2px";
        }, 500)
    }



})