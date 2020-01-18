//Pääfunktio, jossa tarkistetaan mitä input-laatikkoon on kirjoitettu ja tehdään elementit
function Tutki()
{
	let teksti = document.getElementById("txtbox").value; //Haetaan kirjoitus tekstilaatikosta
	
  	if (teksti == "google") //Jos teksti on google, oikeaan kolumniin tulee linkki, joka ohjaa sinne
	{
  		let teksti = "Siirrytäänkö googleen?"; //Linkin nimi
  		let linkki = teksti.link("https://www.google.com"); //Linkin osoite
  		document.getElementById("osa3").innerHTML = linkki; //viedään linkki kolumniin
  		
  	}

  	if (teksti == "listaa") //Vasempaan kolumniin ilmestyy listaus kaikista mahdollisista komennoista
  	{
  		let teksti2 = "1.google<br>2.lista<br>3.Hanna<br>4.numero (1-10)<br>5.soita<br>6.tee popup<br>7.kello<br>8.random<br>9.array<br>10.hyppää"; //Määritetään teksti
  		document.getElementById("osa2").innerHTML = teksti2; //Viedään teksti kolumniin
  	}

  	if (teksti == "Hanna") //Oikeaan kolumniin kuva
  	{
  		let kuva = document.createElement ("img"); //Luodaan elementti
        kuva.src = "fibonacci.jpg" //Kansiopolku
        osa3.appendChild(kuva); //Viedään kuva kolumniin
  	}
  	
  	if (teksti >0 && teksti <11) //tutkitaan onko syöte numero väliltä 1-10
    {
    	let tarina = document.createElement('div'); //luodaan divi johon teksti sijoitetaan
        let teksti1 = "1. Olipa kerran prinsessa, <br>";
        let teksti2 = "2. jolla oli lemmikkipeikko. <br>";
        let teksti3 = "3. Lemmikkipeikko joi aivan liian paljon kombutchaa, <br>";
        let teksti4 = "4. ja tämän takia prinsessasta tuli köyhä. <br>";
        let teksti5 = "5. Heidät häädettiin ulos kauniista linnastaan, <br>";
        let teksti6 = "6. ja he joutuivat muuttamaan vuorille asumaan. <br>";
        let teksti7 = "7. Vuorilla he kuitenkin tapasivat kivan karhun, <br>";
        let teksti8 = "8. joka piti kovasti marjoista. <br>";
        let teksti9 = "9. Karhu näytti heille miten marjoista voi tehdä mehua, <br>";
        let teksti10 = "10. ja he kaikki pitivät mehusta ja joivat sitä tyytyväisinä elämänsä loppuun saakka.<br>";
        let i; //apuelementti for-looppiin
        for (i = 1; i <= teksti; i++)
        {
            if (i == 1)
            {
            tarina.innerHTML = teksti1;
            }
            if (i == 2)
            {
            tarina.innerHTML = teksti2;
            }
            if (i == 3)
            {
            tarina.innerHTML = teksti3;
            }
            if (i == 4)
            {
            tarina.innerHTML = teksti4;
            }
            if (i == 5)
            {
            tarina.innerHTML = teksti5;
            }
            if (i == 6)
            {
            tarina.innerHTML = teksti6;
            }
            if (i == 7)
            {
            tarina.innerHTML = teksti7;
            }
            if (i == 8)
            {
            tarina.innerHTML = teksti8;
            }
            if (i == 9)
            {
            tarina.innerHTML = teksti9;
            }
            if (i == 10)
            {
            tarina.innerHTML = teksti10;
            }
        tarina.id = 'ilmestynyt2'; //lisätään id diviin
        osa3.appendChild(tarina); // lisätään divi haluttuun kolumniin
        }
    }
  	
  	if (teksti == "soita") //Ohjelma soittaa tiedoston
  	{
  		let aani = new Audio('gabe.mp3'); //Kansiopolku
        aani.play(); //Soitetaan ääni
  	}

  	if(teksti == "tee popup") //Oikeanpuoleiseen kolumniin ilmestyy div-elementti
  	{		
   		let pop = document.createElement('div'); //Tehdään elementti div
   		pop.innerHTML = "Tässä <b>pyydetty</b> popup"; //Määritetään teksti diviin ja lihavoidaan teksti pyydetty
   		pop.id = 'ilmestynyt'; //Tehdään elementille id ilmestynyt
   		osa3.appendChild(pop); //Viedään div haluttuun kolumniin
   		
  	}

  	if (teksti == "kello") //Oikeanpuoleiseen kolumniin ilmestyy kellon aika ja vuosi
  	{
  		let pvm = new Date(); //Tehdään pvm-muuttuja
		document.getElementById("osa3").innerHTML = "On vuosi " + pvm.getFullYear() + " ja kello on " + pvm.getHours() + ":" + pvm.getMinutes(); //Viedään lauseke haluttuun kolumniin
  	}

  	if (teksti == "random") //Tehdään tekstianimaatio
  	{
  		let numero2 = Math.floor(Math.random() * 11); //Arvotaan numero
  		let teksti4 = "Henkinen ikäsi on " + numero2 + "!"; //Määritetään teksti
		let merkit = teksti4.split(""); //Jaetaan merkit osiin
		let elem = document.getElementById('osa3'); // Viedään kolumniin
		(function animaatio() //Tehdään animaatio ja määritetään aika
		{
		merkit.length > 0 ? elem.innerHTML += merkit.shift() : clearTimeout(running); 
		let running = setTimeout(animaatio, 100);
		})();
  	}

  	if (teksti == "array") //Oikeanpuoleiseen kolumniin ilmestyy Array
  	{
  		let vuodenajat = ["Kevät", " Kesä", " Syksy", " taka-taka-taka-talvi!"]; //Määritetään mitä kuuluu listaan
		document.getElementById("osa3").innerHTML = vuodenajat + "<br>Vuodenaikoja yhteensä: " + vuodenajat.length; //Tulostetaan lista sekä sen pituus oikeaan kolumniin
  	}

  	if (teksti == "hyppää") //sivu hyppää<3
  	{
  		let aani = new Audio('nauru.mp3'); //Kansiopolku
        aani.play(); //Soitetaan ääni
  		(function hyppää() //lisää bodyyn classin, jotta css-tyyli kytkeytyy oikeaan paikkaan
  		{
  		document.body.className = "vartalo"; 
  		})();
  	}

  	if (teksti == "")
  	{
  		alert("Muista kirjoittaa jotain :)"); //Varoitusteksti 
  	}
}


//Enteriä painamalla suoritetaan Tutki-funktio, joka taas suorittaa funktion elementit
document.getElementById('txtbox').onkeydown = function(en)
{
	if(en.keyCode == 13)
		{Tutki();}
}

