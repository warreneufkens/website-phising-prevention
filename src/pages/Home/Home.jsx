import React from 'react'
import code from '../../assets/code.jpg'

const Home = () => {
  return (
    <section>
      <div>
        <h1>Proficiat, u bent gephised :)</h1>
        <img src={code} alt="code" />
      </div>
      <div>
        <p>Maar geen paniek! Wij zijn Jarno Reynaert en Warre Neufkens, studenten Toegepaste Informatica aan HoGent. We zijn bezig aan een opdracht omtrent phising en onderzoeken hoe effectief dit is.
        Aan de hand van deze website willen wij er u ook van bewust maken dat het internet en alles in de cyberwereld niet zo veilig is als men denkt.</p>
      </div>
      <div>
        <h2>Wat is phishing?</h2>
        <p>Phishing is een vorm van internetfraude. Het bestaat uit het oplichten van mensen door ze te lokken naar een valse website, die een kopie is van de echte website, om ze daar – nietsvermoedend – te laten inloggen met hun inlognaam en wachtwoord of hun creditcardnummer.</p>
      </div>
      <div>
        <h2>Tips om phishing the vermijden</h2>
        <ol>
          <li>Check de link/ email van de afzender. Kijk na of er geen vreemde tekens tussen de letters staan of letters van plaats zijn verwisseld.</li>
          <li>Kijk na of het logo (indien aanwezig) wel het correcte logo is.</li>
          <li>Wanneer je een phishing sms ontvangt komt dit van een 06-nummer.</li>
          <li>Klik nooit op een link van een vreemde afzender (zonder te controleren)</li>
        </ol>
      </div>
      <div>
        <h2>Waarom is phishing zo gevaarlijk</h2>
        <ul>
          <li>Via phishing kunnen de criminelen account gegevens verzamelen, zoals een login van Facebook maar dat kunnen ook bankgegevens zijn. (Dit is ook de reden waarom je beter niet overal hetzelfde passwoord neemt.)</li>
          <li>Je kan hierdoor ook slachtoffer worden van ransomware. Dit zorgt ervoor dat bestanden geëncrypteerd worden, en enkel terug worden vrijgegeven na betalen (van een grote som geld of crypto).</li>
        </ul>
      </div>
      <div>
        <h2>Meer info omtrent phishing</h2>
        <ul>
          <li><a href="https://nl.wikipedia.org/wiki/Phishing">Wikipedia</a></li>
          <li><a href="https://www.vlaanderen.be/consumentenbescherming/phishing">Vlaanderen</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Home