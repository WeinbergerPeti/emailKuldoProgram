class FajlKivalasztView {

    constructor(szuloElem) {
        this.divElem = szuloElem
        this.fajlElem = this.divElem.children("last-child");
        this.#megjelenit();

        //console.log(this)
        //this.#fajlnev();

    }

    #megjelenit() {
        let txt = "";
        txt += `<span class="kivalaszt"><input type="file" id="myfile" name="myfile" multiple>`
        //txt += `</span><span id="valasztottfajl"><button id="kuldGomb" onclick="uploadFiles()">Küldés</button>`
        txt += `</span><input type="submit" value="Küldés" id="kuldgomb">`
        this.divElem.append(txt);
    }

    /**
    #fajlnev() {
        $("#myfile").change(function (event) {
            //console.log(event.target.files[0].name)
            let fajlneve = (event.target.files[0].name)
            let feldolgozottFajl = fajlneve.split(' ')
            let kod = "";
            //ez végig fut a keletkezett tömbön, ami a 'feldolgozottFajl'
            for (let index = 0; index < feldolgozottFajl.length; index++) {
                //itt megnézi, hogy az adott elem tartalmazza-e a karaktert
                //bízunk benne, hogy mindenkinek az egyedi kódja lesz csak zárójelben :D
                if (feldolgozottFajl[index].indexOf("(") > -1) {
                    //console.log(feldolgozottFajl[index])
                    kod += feldolgozottFajl[index]
                }

            }
            $("#fajlnevKiir").text(fajlneve)
            //$("#kiiras").text(kod)
        })
    }
     */
}

export default FajlKivalasztView;