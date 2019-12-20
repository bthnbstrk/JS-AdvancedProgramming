
    //es.options[es.selectedIndex].value; seçili değer bu şekilde alınır
    "use strict";
    
    function myNewFunction(medeni) {
        if (medeni.options[medeni.selectedIndex].text === "Evli") {
            esdiv.hidden = false;
        } else {
            esdiv.hidden = true;
        }
    }

    function hesapla() {
        if (medeni.options[medeni.selectedIndex].text === "Bekar") {
            if (cocuk.options[cocuk.selectedIndex].text === "Yok") {
                toplam = 191.85;
            } else if (cocuk.options[cocuk.selectedIndex].text === "1") {
                toplam = 220.63;
            } else if (cocuk.options[cocuk.selectedIndex].text === "2") {
                toplam = 249.41;
            } else if (cocuk.options[cocuk.selectedIndex].text === "3") {
                toplam = 287.78;
            } else if (cocuk.options[cocuk.selectedIndex].text === "4") {
                toplam = 306.96;
            } else {
                toplam = 326.15;
            }
        }
        if (medeni.options[medeni.selectedIndex].text === "Evli" && es.options[es.selectedIndex].text === "Hayır") {
            if (cocuk.options[cocuk.selectedIndex].text === "Yok") {
                toplam = 230.22;
            } else if (cocuk.options[cocuk.selectedIndex].text === "1") {
                toplam = 259.00;
            } else if (cocuk.options[cocuk.selectedIndex].text === "2") {
                toplam = 287.78;
            } else {
                toplam = 326.15;
            }
        }

        if (medeni.options[medeni.selectedIndex].text === "Evli" && es.options[es.selectedIndex].text === "Evet") {
            if (cocuk.options[cocuk.selectedIndex].text === "Yok") {
                toplam = 191.85;
            } else if (cocuk.options[cocuk.selectedIndex].text === "1") {
                toplam = 220.63;
            } else if (cocuk.options[cocuk.selectedIndex].text === "2") {
                toplam = 249.41;
            } else if (cocuk.options[cocuk.selectedIndex].text === "3") {
                toplam = 287.78;
            } else if (cocuk.options[cocuk.selectedIndex].text === "4") {
                toplam = 306.96;
            } else {
                toplam = 326.15;
            }
        }
        out.innerText = toplam + " " + "₺";
    }

    out.innerText = hesapla();
    hesapla();
