import React from 'react';
import image from '../images/home/Home-YouCanBe-Transp-143h.png';
import image2 from '../images/home/Home-AllYouNeed-Transp-143h.png';
import image3 from '../images/home/Amanda-Evans-B-Oct2014-1080.jpg';
import image4 from '../images/home/Home-TryMeOut-Transp-143h.png';
import image5 from '../images/home/Home-IveGotYourBk-Transp-143h.png';
import image6 from '../images/home/Pen-Blue-Shpn.jpg';

const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <img src={image} alt="You can be the writer you want to be." />
      <ul>
        <li>The blogger who cranks out engaging content regularly</li>
        <li>The author whose prose flows easily onto the page</li>
        <li>The how-to writer with flawless form and clarity</li>
        <li>The marketing copywriter whose work is eye-catching and compelling</li>
        <li>The songwriter/composer who produces evocative, impeccable scores</li>
        <li>You get the picture...</li>
      </ul>
      <img src={image2} alt="All you need is a little help" />
      <div>
        <p>{`That's where I come in.`}</p>
        <p>An editor can take your fresh, original draft and make it polished, professional, and error-free. The secret is to pour it out of your head, and send it on to a really good editor who will preserve your style.</p>
        <p>This simple change in your writing process will free you up to be more creative and spontaneous. Even with technical or scientific writing, the best and most accurate information is usually what comes out first.</p>
        <p>With an editor on board, you never have to worry about mistakes when you are letting the creative juices flow.</p>
        <img src={image3} alt="Amanda Evans" />
      </div>
      <img src={image4} alt="Try me out - FREE." />
      <div>
        <p>{`I'll edit up to 500 words for you, free of charge.`}</p>
        <p>Just send me a document via Google Docs or email a Word file.</p>
        <p>{`That'll get you a blog post or a short article completely edited`}</p>
        <p><a href="#">Email Me</a></p>
      </div>
      <img src={image5} alt="I've got your back." />
      <div>
        <p>{`When you work with me, I'll bring my decades of experience as an editor and writer to your team.`}</p>
        <p>{`You can count on your finished products being well-written, appropriately structured, and correct. You'll significantly improve the success of your writing.`}</p>
        <p>{`Your writing is your art. Let's get together and make it sing!`}</p>
      </div>
      <img src={image6} alt="pen" />
    </div>
  )
}

export default Home;
