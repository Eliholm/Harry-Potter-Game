goToPage('Start');
function goToPage(page) {

    let textbox = model.textbox;

    if (page == 'Start') {
        textScroll('Du står foran plattform 9¾ atter en gang. Klar for et nytt skoleår, og du ser frem til å møte vennene dine igjen. Du tar en rask kikk rundt deg, passer på at det ikke er noen gomper i nærheten, før du setter retning mot mursteinveggen. Setter opp farten, løper noen steg - og øyeblikket etter står du foran Galtvortekspressen.');
        textbox.type = 'text';
        textbox.nextPage = 'Toget';
        model.background = backgroundImages.station;
        textbox.background = scrollImages.mainScroll;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Toget') {
        textScroll('Plattformen er tom. Det går opp for deg at de andre sannsynligvis er på toget allerede, så du kaster deg inn dørene som lukker seg øyeblikkelig etter. Puster lettet ut. Du begynner å gå nedover korridoren mens du leter etter kjente ansikter.');
        textbox.type = 'text';
        textbox.nextPage = 'Se venner';
        model.background = backgroundImages.train;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Se venner') {
        textScroll('Da ser du Hermine og Ron. De oppdager deg, smiler og vinker. <br> Harry, der er du! Kom og sett deg med oss da, sier Hermine.');
        textbox.type = 'text';
        textbox.nextPage = 'Togvalg';
        model.background = backgroundImages.traininside;
        textbox.characterOne = firstCharacter.hermione;
        textbox.characterTwo = secondCharacter.ron;
    }
    else if (page == 'Togvalg') {
        textbox.type = 'choice';
        textScroll('Hvem vil du sitte ved siden av?');
        textbox.choices = ['<li onclick="goToPage(`Hermine`)">Hermine</li>', '<li onclick="goToPage(`Ron`)">Ronny</li>']
        model.background = backgroundImages.traininside;
        textbox.characterOne = firstCharacter.hermione;
        textbox.characterTwo = secondCharacter.ron;
    }
        else if (page == 'Hermine') {
            textbox.type = 'text';
            textScroll('Du setter deg ved siden av Hermine. Hun dulter vennskapelig til deg før hun utbryter; Det er så godt å se deg! Det føles ut som en evighet siden sist. Hvordan har sommeren din vært? <br><br> Det føles bra å være tilbake, og ikke minst få være med dere alle igjen! Svarer du. Sommeren har vært helt grei. Du vet hvordan det er hos Dumlingene. Dere småprater resten av turen til Galtvort');
            textbox.nextPage = 'Galtvort'
            model.background = backgroundImages.traininside;
            textbox.characterOne = firstCharacter.hermione;
            textbox.characterTwo = '';
    }
        else if (page == 'Ron') {
            textbox.type = 'text';
            textScroll('Du setter deg ved siden av Ronny. Han gliser og sier; Hey! Det var like før du ikke rakk det, ble nesten nervøs jeg. Kjøpte litt godteri mens vi ventet da, har du lyst på noe? Tør du å prøve deg på en allsmakbønne kanskje? <br><br> Ja, det oppstod noen forsinkelser på veien, men det gikk heldigvis bra, svarer du. Du nøler litt, med forrige gang du fikk en bønne med ørevokssmak friskt i minne, men nikker til slutt.');
            textbox.nextPage = 'Beans'
            model.background = backgroundImages.traininside;
            textbox.characterOne = firstCharacter.ron;
            textbox.characterTwo = '';
    }
    else if (page == 'Beans') {
        textbox.type = 'choice';
        textScroll('Får tilbud om godteri. Hvilken farge velger du?');
        textbox.choices = ['<li onclick="goToPage(`Yellow`)">Gul</li>',
        '<li onclick="goToPage(`Green`)">Grønn</li>', '<li onclick="goToPage(`Red`)">Rød</li>']
        model.background = backgroundImages.beans;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Yellow') {
        textbox.type = 'text';
        textScroll('Du velger en gul, og putter den i munnen. Tygger forsiktig, før du identifiserer smaken... Såpe. Æsj. Du svelger den fort unna. <br><br>Tror ikke jeg vil ha noen flere, flirer du.');
        textbox.nextPage = 'Galtvort';
        model.background = backgroundImages.beans;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Green') {
        textbox.type = 'text';
        textScroll('Du velger grønn, og putter den i munnen. Tygger forsiktig, før du identifiserer smaken... Oppkast. Du brekker deg litt, før du spytter den ut igjen. <br><br> Hold de der unna meg, utbryter du, mens du ser Ronny og Hermine flire litt av opptrinnet.');
        textbox.nextPage = 'Galtvort';
        model.background = backgroundImages.beans;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Red') {
        textbox.type = 'text';
        textScroll('Du velger rød, og putter den i munnen. Du merker fort at du har vært heldig, denne gangen ble det kirsebær. Nam! <br><br> Kirsebær, min favoritt! Kan jeg få en til? Spør du med et glis.');
        textbox.nextPage = 'Galtvort';
        model.background = backgroundImages.beans;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Galtvort') {
        textbox.type = 'text';
        textScroll('Toget ankommer Galtvort. Du går ut, og ser opp på det store bygget. Kjenner følelsen av spenning og glede bygge seg opp. Selv med alle bekymringer og utfordringer dere har opplevd i det siste er det Galtvort som føles ut som hjemme for deg. Du plukker opp tingene dine, og rusler inn etter de andre.');
        textbox.nextPage = 'Oppholdsrom';
        model.background = backgroundImages.hogwarts;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Oppholdsrom') {
        textbox.type = 'text';
        textScroll('Senere den kvelden sitter du på Griffing sitt fellesrom med de andre elevene, dere spøker og ler. Så ser du Hedvig komme flyvende gjennom et åpent vindu, og med seg har hun et brev. Du tar det forsiktig, og vandrer bort til en mer privat krok før du åpner det.');
        textbox.nextPage = 'Få brev';
        model.background = backgroundImages.commonroom;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Få brev') {
        textbox.type = 'text';
        textScroll('Kjære Harry, <br>Jeg beklager å måtte forstyrre deg allerede første dag tilbake på Galtvort. Nå er det slik at Føniksordenen har fått et svært viktig tips om at det kan skjule seg en malacrux på Galtvort. Mer spesifikt i Rowena Ravnklos diadem. Vi vet ikke hvor dette befinner seg lenger, men det er grunn til å tro at det fremdeles er gjemt et sted på skolen. Humlesnurr kan dessverre ikke hjelpe dere før han selv er tilbake, når det blir er noe usikkert, men forhåpentligvis innen noen dager. I mellomtiden stoler jeg på at du vil undersøke dette etter beste evne, men vær forsiktig. <br>- Sirius');
        textbox.nextPage = 'Oppholdsrom 2';
        model.background = backgroundImages.letter;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Oppholdsrom 2') {
        textbox.type = 'text';
        textScroll('Du bestemmer deg for å fortelle Hermine og Ronny om brevet du nettopp fikk, og trekker dem til side. Hermine foreslår at det kanskje kan være lurt å starte letingen på Humlesnurrs kontor, da han har mange bøker om Galtvorts historie. Kanskje det står mer om diademet i en av de? Dere avtaler at dere skal snike dere inn dit litt senere i kveld, når alle de andre elevene må befinne seg på oppholdsrommene sine, så dere forhåpentligvis kan snike dere usett i gangene.');
        textbox.nextPage = 'Let i gangen';
        model.background = backgroundImages.commonroom;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
    else if (page == 'Let i gangen') {
        textbox.type = 'text';
        textScroll('Senere den kvelden lister dere dere stille ut av rommet. Dere er helt stille, sier ikke et ord. Etter litt er dere rett ved Humlesnurrs kontor, og Ronny og Hermine smetter inn døren. Selv stopper du opp når du ser et bilde av Rowena Ravnklo på veggen. Hun har på diademet. Om du bare visste hvor dere skulle begynne å lete... <br><br> Så hører du en lyd. Du hopper inntil veggen, titter rundt hjørnet, og oppdager professor Slur. Selvsagt det siste mennesket du ville treffe på, tenker du oppgitt.');
        textbox.nextPage = 'Gjem deg';
        model.background = backgroundImages.hallway;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
     else if (page == 'Gjem deg') {
        textbox.type = 'choice';
        textScroll('Du forstår at du må gjemme deg, og det raskt. Hvor gjemmer du deg?');
        textbox.choices = ['<li onclick="goToPage(`Usynlighetskappe`)">Ta på deg usynlighetskappen du var lur nok til å ta med i tilfelle det var behov for den.</li>',
                           '<li onclick="goToPage(`Kontor`)">Løp så raskt du kan tvers over gangen, inn den halvåpne døren til Humlesnurrs kontor.</li>',
                           '<li onclick="goToPage(`Dør`)">Snik deg ut døren litt bak deg, som leder ut til Galtvorts uteområde.</li>'];
        model.background = backgroundImages.hallway;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
           else if (page == 'Usynlighetskappe') {
             textbox.type = 'text';
             textScroll('Du tar på deg usynlighetskappen i full fart, mens du hører Slurs steg rett rundt hjørnet. Pulsen stiger og du strever med å puste rolig. Stegene opphører. Snape har stoppet opp, ser seg mistenksomt rundt. <br><br> Hvem er der? Kom frem øyeblikkelig! Sier han med streng stemme. <br><br> Nervøs tar du et steg bakover, og sparker borti en løs sten på bakken. Et lite gisp glipper, og du ser at Slur snur seg rett mot deg. Han tar et par raske steg fremover med hånden fremfor seg, og så fort kommer borti deg med fingertuppene drar han av deg kappen.');
             textbox.nextPage = 'Avslutning usynlighetskappe';
             model.background = backgroundImages.hallway;
             textbox.characterOne = firstCharacter.snape;
             textbox.characterTwo = '';
    }
           else if (page == 'Avslutning usynlighetskappe') {
            textbox.type = 'text';
            textScroll('Mr. Potter! Selvsagt er det deg. Du har knapt rukket å komme tilbake før du bryter skolens regler, og oppsøker ting som du utvilsomt burde holde deg unna. Han stirrer hardt på deg. <br><br> Dette kan jeg selvsagt ikke la gå uten konsekvenser. Utvisning er ikke umulig. Nå, gå tilbake til rommet ditt øyeblikkelig, så hører du fra meg i morgen.');
            textbox.nextPage = 'Start';
            model.background = backgroundImages.hallway;
            textbox.characterOne = firstCharacter.snape;
            textbox.characterTwo = '';
    }
    else if (page == 'Kontor') {
        textbox.type = 'text';
        textScroll('Du ser Hermine og Ron i døråpningen, de vinker deg mot seg med stressede håndbevegelser. Du løper så raskt og stille du klarer, og lukker døren forsiktig bak deg. Et par sekunder senere åpnes døren brått igjen. <br><br> Så barn, hva gjør dere utenfor rommene deres på denne tiden? På rektor Humlesnurrs private kontor? Spør Slur, og legger trykk på ordet "private".');
        textbox.nextPage = 'Hvem skal forklare';
        model.background = backgroundImages.office;
        textbox.characterOne = firstCharacter.snape;
        textbox.characterTwo = '';
    }
         else if (page == 'Hvem skal forklare') {
             textbox.type = 'choice';
             textScroll('Vi var her bare for å... Begynner du, før det stopper opp litt, og du dulter til;');
             textbox.choices = ['<li onclick="goToPage(`Hermine forklarer`)">Hermine</li>', '<li onclick="goToPage(`Ronny forklarer`)">Ronny</li>']
             model.background = backgroundImages.office;
             textbox.characterOne = '';
             textbox.characterTwo = '';
    }
         else if (page == 'Hermine forklarer') {
            textbox.type = 'text';
            textScroll('Vi gikk hit for å levere tilbake en bok vi fikk låne av Humlesnurr. Vi vet det er sent, beklager. Men jeg hadde lovet å levere den tilbake når jeg kom hit igjen første skoledag, og jeg hadde helt glemt det frem til like før leggetid, og så tenkte jeg at det var best å få det unnagjort i dag selv om det var blitt litt sent... <br><br> Slur avbryter plapringen hennes. Greit, greit, denne gangen får det gå. Men gå tilbake til rommet deres øyeblikkelig, og ikke gå som dere vil rundt på skolen på denne tiden igjen.');
            textbox.nextPage = 'Start';
            model.background = backgroundImages.office;
            textbox.characterOne = firstCharacter.hermione;
            textbox.characterTwo = '';
    }
         else if (page == 'Ronny forklarer') {
            textbox.type = 'text';
            textScroll('Jeg måtte gå hit... Fordi. Øhm. Jeg hadde mistet noe! Her. Eller glemt... Øh. Ronny stotrer. Slur avbryter han med et stoppende håndtegn.<br><br>Jeg har åpenbart ikke gitt dere god nok tid til å finne på en troverdig unnskyldning. Kanskje dere vil tenke på det til i morgen, når vi møtes for å diskutere hva passende straff for å bryte skolens regler er. ');
            textbox.nextPage = 'Avslutning kontor 2';
            model.background = backgroundImages.office;
            textbox.characterOne = firstCharacter.ron;
            textbox.characterTwo = '';
    }
    else if (page == 'Dør') {
        textbox.type = 'text';
        textScroll('Du tar noen raske skritt bakover, og smetter ut døren som leder ut til uteområdet. Du stopper rett utenfor, holder pusten og beveger ikke en muskel mens du prøver å høre hva som skjer på den andre siden av veggen. Du hører Slurs steg, og stemmen hans som sier "Er det noen der? Kom frem øyeblikkelig!". Du hører han gå litt frem og tilbake, før lyden opphører.<br><br>Hva skal du gjøre nå? Er det trygt å gå inn igjen, eller risikerer du å møte på Slur om du forsøker å snike deg inn på rommet igjen, undrer du. Så ser du noen kjente skikkelser på andre siden av uteområdet, og bestemmer deg for å oppsøke dem.');
        textbox.nextPage = 'Gygrid';
        model.background = backgroundImages.hogwartsoutside;
        textbox.characterOne = '';
        textbox.characterTwo = '';
    }
        else if (page == 'Gygrid') {
            textbox.type = 'text';
            textScroll('Harry! Hyggelig å se deg. Vi var bare her en tur for å hente mer fisk til Buckbeak, men du kjenner meg, blir fort stående litt vel lenge og prate når jeg møter kjente. Men... Hva i all verden gjør her du ute så sent? Hagrid ser på deg med spørrende blikk, men smiler i neste øyeblikk stort.<br><br> Buckbeak er i hvert fall glad for å se deg! Sier han, og peker mot Buckbeak som har gått helt bort til deg for å hilse på.');
            textbox.nextPage = 'Gygrid 2';
            model.background = backgroundImages.hogwartsoutside;
            textbox.characterOne = firstCharacter.hagrid;
            textbox.characterThree = thirdCharacter.buckbeak;
    }
    else if (page == 'Gygrid 2') {
        textbox.type = 'text';
        textScroll('Vi så etter en malacrux. Lang historie, men professor Snape oppdaget meg nesten... Nå vet jeg ikke om det er trygt å snike seg inn på rommet eller ikke. Skjønner, svarer Gygrid mens han nikker. Kanskje du vil bli med oss til hytten min for i natt, så kan du heller snike deg tilbake når elevene begynner å gå til klassene sine i morgen? Spør han. Takk Gygrid, gjerne det, svarer du. Sleng deg opp på Buckbeak da, så kommer vi oss hjem før det er midt på natten! Sier Gygrid mens han klapper Buckbeak på ryggen.');
        textbox.nextPage = 'Fly';
        model.background = backgroundImages.hogwartsoutside;
        textbox.characterOne = firstCharacter.hagrid;
        textbox.characterThree = thirdCharacter.buckbeak;
}
        else if (page == 'Fly') {
            textbox.type = 'text';
            textScroll('Buckbeak kneler, og dere setter dere oppå. Flink gutt! Nå skal vi hjem, sier Gygrid, og klapper han kjærlig på nakken. <br><br>Så flyr dere gjennom nattehimmelen, dekket av stjerner. Du tar et dypt pust, og lar spenningen som har bygget seg opp i kroppen slippe taket.');
            textbox.nextPage = 'Avslutning hytte';
            model.background = backgroundImages.stars;
            textbox.characterOne = firstCharacter.buckbeak;
            textbox.characterTwo = '';
            textbox.characterThree = '';
    }
        else if (page == 'Avslutning hytte') {
            textbox.type = 'text';
            textScroll('Vel fremme åpner Gygrid døren til hytta, og peker på en stol. Sett deg, så skal jeg lage litt te til oss. Vi får få litt søvn snart, men først må du fortelle litt om denne malacruxen. Det kan jo hende det er noe jeg kan hjelpe deg med, vet du, sier Gygrid med et lite smil. Du smiler tilbake, setter deg ned, og kjenner at du endelig slapper av igjen.');
            textbox.nextPage = 'Start';
            model.background = backgroundImages.hut;
            textbox.characterOne = '';
            textbox.characterTwo = '';
            textbox.characterThree = '';
    }
    else {
        textbox.type = 'choice';
        textbox.text = `Du prøvde å gå til en side som ikke eksisterer. Siden du prøvde å gå til het: ${page}`;
        textbox.choices = [];
    }
    updateView();
}


function nextPage() {
    goToPage(model.textbox.nextPage)
}

function textScroll(text, curText = ''){
	curText += text[0];

	if(!text) return;

	model.textbox.text = curText;
	updateView();
	setTimeout(textScroll, 15, text.slice(1), curText);
}
