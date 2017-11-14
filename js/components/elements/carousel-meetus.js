let auto;
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.slideIndex = 1;
    this.slideManuel = 0;
    this.showSlides = this.showSlides.bind(this);
    this.autoSlide = this.autoSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.lastSlide = this.lastSlide.bind(this);
  }

  autoSlide() {
    this.showSlides((this.slideIndex += 1));
  }

  nextSlide() {
    if (this.slideManuel === 0) {
      this.slideManuel = 1;
      console.log(this.slideManuel);
      clearTimeout(auto);
    }
    this.showSlides((this.slideIndex += 1));
  }
  lastSlide() {
    if (this.slideManuel === 0) {
      this.slideManuel = 1;
    }
    this.showSlides((this.slideIndex -= 1));
  }

  showSlides(n) {
    let i;
    let x = document.getElementsByClassName("slide");
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      //x[i].style.display = "none";
      $(x[i]).css("display", "none");
    }
    //x[this.slideIndex - 1].style.display = "block";
    $(x[this.slideIndex - 1]).css("display", "block");
    if (this.slideManuel === 0) {
      //may remove entirely
      auto = setTimeout(this.autoSlide, 10000);
    }
  }

  componentDidMount() {
    this.showSlides(this.slideIndex);
    console.log("carousel mounted");
  }

  componentDidUpdate() {
    console.log("carousel updated");
  }

  componentWillUnmount() {
    clearTimeout(auto);
    console.log("carousel unmounted");
    //https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAv9AAAAJDc1NGQ2M2RmLTQzYWMtNDgyMS1iOWNmLTRjOTVlZWRmZTE4MA.jpg
  }

  render() {
    return (
      <div className="carousel">
        <div className="slide">
          <div id="slide-top" />
          <div id="slide-bot">
            <div>
              <div id='container'>
                <div id="box-head">
                  <p>Viktharien Volander</p>
                </div>
                <div id="box-container">
                  <div id='circle-container'>
                    <div/>
                    <img src="ss.jpg"/>
                  </div>
                  <div id="text-container">
                    <p>Software Engineer</p>
                    <p>React/Node/MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1>Meet Me - My Story</h1>
                <p>
                  I've been coding since high school, where I learned how to
                  build desktop applications with VB.NET and drive robot engines
                  with Java. It took around 3 months to complete, and then I
                  started looking around for a way I could turn coding into an
                  actual career. Fast forward to 2017, I attended an 8 week
                  coding Bootcamp at Tech Talent South and ignited an intense
                  interest in programming for the web. I've enjoyed the journey
                  so far, and when I discovered React I just fell in love with
                  JavaScript all over again.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div id="slide-top">
            <div><h2>Want to see my resume? <a href="http://www.viktharienvolander.com/resume.pdf" target="_blank">Check It Out</a></h2></div>
          </div>
          <div id="slide-bot">
            <div>
              <i className="fa fa-quote-left fa-3x" aria-hidden="true" />
              <h3>
                I have a very simple approach to work. Let's call it my "work (design) pattern". I first ask, "What am I doing?", "How can I do it?", and "How soon must it be done?". Then I begin to work and I ask, "What can I do to make it better?", "How can I simplify doing it?", and "How can it be done quicker?". When the work is finished, I only have two more questions: "Did I learn something?" and "Did I love making it?"
              </h3>
              
            </div>
          </div>
        </div>

        <div id="slide-controls">
          <button id="neg" className="slide-btn" onClick={this.lastSlide}>
            <i className="fa fa-arrow-left fa-3x" aria-hidden="true" />
          </button>
          <br />
          <button id="pos" className="slide-btn" onClick={this.nextSlide}>
            <i className="fa fa-arrow-right fa-3x" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
