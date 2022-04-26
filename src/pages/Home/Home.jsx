import React from 'react'
import code from '../../assets/code.jpg'

const Home = () => {

  const countEL = document.getElementById('count')
  updateVisitCount();

  function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/preventionwebsite.netlify.app/hogent/?amount=1').then(res =>res.json()).then(res=>{
      countEL.innerHTML=res.value;
    })
  }

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
        <p>U bent niet de enige, er zijn namelijk al <h1 id="count">0</h1>  bezoekers geweest.</p>
      </div>
      <div>
        <h2>Wat is phishing?</h2>
        <p>Phishing is een vorm van internetfraude. Het bestaat uit het oplichten van mensen door ze te lokken naar een valse website, die een kopie is van de echte website, om ze daar – nietsvermoedend – te laten inloggen met hun inlognaam en wachtwoord of hun creditcardnummer.</p>
      </div>
      <div>
        <h2>Meer info omtrent phishing</h2>
        <li>
          <ul><a href="https://nl.wikipedia.org/wiki/Phishing">Ben je zeker dat dit een veilige link is?</a></ul>
          <ul><a href="https://www.vlaanderen.be/consumentenbescherming/phishing">Ben je zeker dat dit een veilige link is?</a></ul>
        </li>
      </div>
    </section>
  )
}

export default Home