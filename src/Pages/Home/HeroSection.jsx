import Typed from 'react-typed';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <Typed
            className='section--title'
                strings={[
                    'Welcome',
                    'to Happiness Coders Company'
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop  />
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web & Applications</span>{" "}
            <br />
            Developer
          </h1>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section"  />
      </div>
    </section>
  );
}
