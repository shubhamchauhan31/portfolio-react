import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/shubhamchauhan31/adsgrocy" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Adsgrocy</h3>
            <p> <a href="http://www.adsgrocy.com/"> Adsgrocy</a>  mobile application is develop in  android .  This application purpose is watching viedo and earn money
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Core Java</li>
              <li>Android</li>
              <li>Nodes</li>
              <li>Mongo DB</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            {/* <div className="project-links">
              <a href="https://github.com/123456shubham" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://github-search-blond.vercel.app/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div> */}
            </header>
            <div className="body">
              <h3>RFID</h3>
              <p>Chainway C72 is an Android rugged mobile computer. It features a quad-core processor and wireless connections of 4G, Bluetooth, and Wi-Fi, 8000mAh powerful battery, barcode scanning, as well as high levels of UHF RFID capability. It can be equipped with R2000 linearly (1.8dBi) or circularly (4.0dBi) polarized antenna.

              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Core Java</li>
                <li>Android</li>
                <li>Nodes</li>
                <li>Mongo DB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://play.google.com/store/apps/details?id=com.payucart.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>PayUcart</h3>
              <p>Need your time and i will pay you <a href="https://play.google.com/store/apps/details?id=com.payucart.app">PayUcart.</a>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Core Java</li>
                <li>Android</li>
                <li>Nodes</li>
                <li>Mongo DB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://play.google.com/store/search?q=loanShala&c=apps" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Loan Shala</h3>
              <p>You need money in emergency please install this application
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Core java</li>
                <li>Android</li>
                <li>Laravel</li>
                <li>My Sql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/123456shubham/ViedoCalling" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Viedo Calling</h3>
              <p>A call made via a mobile phone with a camera and a screen, allowing the participants to see each other as they talk 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Core Java</li>
                <li>Android</li>
                <li>Jit Si</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/shubhamchauhan31/stump11_final_master" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              {/* <a href="https://joaotuliojt.github.io/dv-musica-library-page/" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a> */}
            </div>
            </header>
            <div className="body">
              <h3>Fantasy cricket</h3>
              <p>Fantasy Cricket is a sports game where a user creates a team with 11 players from a total pool of 25 to 30 players from the squad for an upcoming match. Once the match starts, the users get points for their 11 players based on how they perform in the “real match”. Points will be given for runs, wickets, catches etc.,</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Core Java</li>
                <li>Android</li>
                <li>Nodes</li>
                <li>Mongo DB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}