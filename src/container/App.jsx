import profileimg from "../assets/olayinka.jpg"
import slacklogo from '../assets/slack.png'
import gitHubLogo from '../assets/Icon.png'
import Zurilogo from "../assets/Vector.png"
import I4Glogo from "../assets/I4G.png"

function App() {
  return (
    <>
    <main className="main-container">
      <section className="profile-section">
        <img
          id="profile_img"
          src={profileimg} 
          alt="profile img" 
        />
        <h1 id="twitter">alameen_quadri</h1>
        <p className="hidden" id="slack">Al-Ameen Quadri</p>
      </section>
      <section className="links-section">
        <a 
          href="https://twitter.com/alameen_quadri" 
          id="twitter-link">
          Twitter Link
        </a>
        <a 
          href="https://training.zuri.team/" 
          id="btn_zuri">
          Zuri Team
        </a>
        <a 
          href="http://books.zuri.team" 
          id="books">
          Zuri Books
        </a>
        <a 
          href="https://books.zuri.team/python-for-beginners?ref_id=al-ameen_quadri" 
          id="book_python">
          Python Books
        </a>
        <a 
          href="https://background.zuri.team" 
          id="pitch">
          Background Check for Coders
        </a>
        <a 
          href="https://books.zuri.team/design-rules" 
          id="book_design">
          Design Books
        </a>
      </section>
      <section className="other-links">
          <img src={slacklogo} alt="Slack logo" />
        <a href="https://github.com/Ari-o12code">
          <img src={gitHubLogo} alt="GitHub logo" />
        </a>
        </section>
    </main>
    <footer id="footer-container">
      <hr />
      <div className="footer-contents">
        <img 
        className="zurilogo"
        src={Zurilogo} 
        alt="Zuri Internship logo" />
        <p 
          className="footer-text">
            HNG Internship 9 Frontend Task
        </p>
        <img 
        className="I4Glogo"
        src={I4Glogo} 
        alt="I4G logo" />
      </div>
    </footer>
    </>
  );
}

export default App;
