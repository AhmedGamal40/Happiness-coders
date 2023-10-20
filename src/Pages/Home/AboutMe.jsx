import Zoom from 'react-reveal/Zoom';
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <Zoom>  
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Us</h1>
          <p className="hero--section-description"> <span className='text-warning'>Happiness Coders</span> a 
              leading technology company that
               specializes in website development and mobile 
              application creation. With a team of highly
               skilled professionals,<span className='text-warning'>Happiness Coders</span> to deliver innovative and user-centric
              digital solutions to meet the diverse needs of its clients.
          </p>
        </div>
      </div>
</Zoom>
    </section>
  );
}
