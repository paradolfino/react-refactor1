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
    this.showSlides(this.slideIndex += 1);
  }
  
  nextSlide() {
    if (this.slideManuel === 0){
      this.slideManuel = 1;
      console.log(this.slideManuel);
      clearTimeout(auto);
    };
    this.showSlides(this.slideIndex += 1);
  }
  lastSlide() {
    if (this.slideManuel === 0){
      this.slideManuel = 1;
    }
    this.showSlides(this.slideIndex -= 1);
  }
  
  showSlides(n) {
    let i;
    let x = document.getElementsByClassName("slide");
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    };
    for (i = 0; i < x.length; i++) {
      //x[i].style.display = "none";
      $(x[i]).css('display','none');
    }
    //x[this.slideIndex - 1].style.display = "block";
    $(x[this.slideIndex -1]).css('display','block');
    if (this.slideManuel === 0){//may remove entirely
      auto = setTimeout(this.autoSlide,10000);
    };
    
  }
  
  componentDidMount() {
    this.showSlides(this.slideIndex);
    console.log('carousel mounted');
  }
  
  componentDidUpdate() {
    console.log('carousel updated');
  }
  
  componentWillUnmount() {
    clearTimeout(auto);
    console.log('carousel unmounted');
  }
  
  render() {
    return (
      <div className='carousel'>
        
        <div className='slide'>
          <div className='slide-features'>
            <div id='slide-top'>
              <h1>Altomatda Fætøre</h1>
              <h3>Det ar lëthel danene det maker en dëffer. Kall-Dem-All har fætøre an helpper dig kommønëkater ëmportant iformadj tël dine hvol gröp.</h3>
            </div>
            <div id='slide-bot'>
              <div className='card'>
                <div>
                  <div id='c1'><i className="fa fa-line-chart fa-4x" aria-hidden="true"></i></div>
                  <h3>Analåtëke</h3>
                  <p>Rekåver øsaføl, ræl-tëm reporte får everå messadj du sender ut.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c2'><i className="fa fa-usd fa-4x" aria-hidden="true"></i></div>
                  <h3>Fleksëbel Prëser</h3>
                  <p>Vi hæter arer lokkda i tël kontrakte. Det ar hvarfår vi har ikke anå.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c3'><i className="fa fa-life-ring fa-4x" aria-hidden="true"></i></div>
                  <h3>24/7 Stotten</h3>
                  <p>Nar du behover helpper, gotter det kan ikke arer mor æså - yøst kontakter oss, vi vël arer hvarë med en smël.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c4'><i className="fa fa-globe fa-4x" aria-hidden="true"></i></div>
                  <h3>Nadjirvëd</h3>
                  <p>Vi affer servësa tël ØSA'n (m/Alaska & Hawåë), Kanada, og Puerto Rëko.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='slide'>
          <div className='slide-features'>
            <div id='slide-top'>
              <h1>Altomatda Fætøre</h1>
              <h3>Det ar lëthel danene det maker en dëffer. Kall-Dem-All har fætøre an helpper dig kommønëkater ëmportant iformadj tël dine hvol gröp.</h3>
            </div>
            <div id='slide-bot'>
              <div className='card'>
                <div>
                  <div id='c5'><i className="fa fa-id-badge fa-4x" aria-hidden="true"></i></div>
                  <h3>Kallra ËD</h3>
                  <p>Du kan øser din ohn kallra ËD sa rekåvre kan dialer dig bakk ëmmediatlå.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c6'><i className="fa fa-phone fa-4x" aria-hidden="true"></i></div>
                  <h3>Våsamål Detektere</h3>
                  <p>Om vi detekter att en rekåvra anser ikke kallen, vi kan læver din messadj som en våsamål.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c7'><i className="fa fa-comments-o fa-4x" aria-hidden="true"></i></div>
                  <h3>Tekst-Dem-All™</h3>
                  <p>Skiedøler tekst messadje tël dösande åv popølase og sender istantlå.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c8'><i className="fa fa-volume-control-phone fa-4x" aria-hidden="true"></i></div>
                  <h3>Kall-Dem-All™</h3>
                  <p>Rekorder, prevøher og sender din messadj tël din entër gröp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='slide'>
          <div className='slide-features'>
            <div id='slide-top'>
              <h1>Altomatda Fætøre</h1>
              <h3>Det ar lëthel danene det maker en dëffer. Kall-Dem-All har fætøre an helpper dig kommønëkater ëmportant iformadj tël dine hvol gröp.</h3>
            </div>
            <div id='slide-bot'>
              <div className='card'>
                <div>
                  <div id='c9'><i className="fa fa-address-book-o fa-4x" aria-hidden="true"></i></div>
                  <h3>Kontakte</h3>
                  <p>Adder kontakte manøallå, øpload en fël, eller har øsre tekst JÅN tël din nømbra.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c10'><i className="fa fa-question fa-4x" aria-hidden="true"></i></div>
                  <h3>Sørvåjere</h3>
                  <p>Du kan sørvåjerer din kontakte med en frag pa din messadj. Vi vël reporter bakk anserene.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c11'><i className="fa fa-calendar fa-4x" aria-hidden="true"></i></div>
                  <h3>Skiedøler Delëverå</h3>
                  <p>Skiedøler din messadje arer delëverda nar ever du vël ha, råt det sekond eller later pa.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c12'><i className="fa fa-lock fa-4x" aria-hidden="true"></i></div>
                  <h3>Prëvaså Protekter</h3>
                  <p>Ör lëppe ar sælerda. Øntël legallå kompellda, vi vël never charer din iformadj.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='slide'>
          <div className='slide-features'>
            <div id='slide-top'>
              <h1>Altomatda Fætøre</h1>
              <h3>Det ar lëthel danene det maker en dëffer. Kall-Dem-All har fætøre an helpper dig kommønëkater ëmportant iformadj tël dine hvol gröp.</h3>
            </div>
            <div id='slide-bot'>
              <div className='card'>
                <div>
                  <div id='c13'><i className="fa fa-microphone fa-4x" aria-hidden="true"></i></div>
                  <h3>Aldia Lëbrarå</h3>
                  <p>Storer messadje får hvem du behover an sender som broadkasten.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c14'><i className="fa fa-arrow-circle-right fa-4x" aria-hidden="true"></i></div>
                  <h3>Transfrer og Konnekter</h3>
                  <p>Letter din kontakte konnekter med dig dërektlå bå presser en nømbra pa deras kåjepad.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c15'><i className="fa fa-commenting-o fa-4x" aria-hidden="true"></i></div>
                  <h3>Konversadje</h3>
                  <p>Vieher, manadjer og replår hvem kontakte responder tël din tekst broadkaste.</p>
                </div>
              </div>
              <div className='card'>
                <div>
                  <div id='c16'><i className="fa fa-mobile fa-4x" aria-hidden="true"></i></div>
                  <h3>Mobël App</h3>
                  <p>All græt fætørene åv Kall-Em-All, i palmen få din hand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='slide'>
          <div id='slide-top'>
            <h1>Hoh Vorker Det?</h1>
            <h3>Det ar sëmpel. Du kræter en broadkast, og vi delëvrer det kvåkklå, reliablå, og affordablå. Du yøst safda en tonne åv tëm og lëf ar svit.</h3>
          </div>
          <div id='slide-bot'>
            <div className='card'>
              <div>
                <h1>1</h1>
                <span><i className="fa fa-address-card-o fa-3x" aria-hidden="true"></i></span>
                <h3>Add Kontakte</h3>
                <p>Add kontakte manøallå eller øpload en lëst åv nømbre. Æsëlå organësh dem i tël gröppe.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <h1>2</h1>
                <span><i className="fa fa-commenting-o fa-3x" aria-hidden="true"></i></span>
                <h3>Kræt Din Messadj</h3>
                <p>Tåp ut din tekst messadj eller øser ör såstem an kræt en rekordda våsa messadj.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <h1>3</h1>
                <span><i className="fa fa-line-chart fa-3x" aria-hidden="true"></i></span>
                <h3>Send and Analyze</h3>
                <p>Tell us when you want your message to be delivered, now or later, then track the results and analyze.</p>
              </div>
            </div>
          </div>
          <button className='special-btn'>Learn More</button>
        </div>
        <div className='slide'>
          <div id='slide-top'>
            <div className='card'>
              <div>
                <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
                <h3>Using Call-Em-All has been a dream. The experience is super simple; and their support team is incredible!</h3>
                <p>Jason Doe, San Antonio Spurs</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
                <h3>It's so easy, all I have to do is click who I need to contact, record my message, and less than 5 minutes later all my calls are made and I know who was contacted and how.</h3>
                <p>Sonya Bowman, Director Alabama Homeschool Academy</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
                <h3>As a local canine search and rescue unit, our team needs fast reliable communication. Call-Em-All was the best find we’ve ever made.</h3>
                <p>Walter Larkin, Schwenksville, PA</p>
              </div>
            </div>
          </div>
          <div id='slide-bot'>
            <div>
              
              <h1>Ready to get started?</h1>
              <div>
                <i className="fa fa-envelope" aria-hidden="true"></i><input type='email'/>
              </div>
              <button id='signup-btn'><span></span></button>
            </div>
          </div>
        </div>
        <div id='slide-controls'>
          <button id='neg' className='slide-btn' onClick={this.lastSlide}><i className="fa fa-arrow-left fa-3x" aria-hidden="true"></i></button><br/>
          <button id='pos' className='slide-btn' onClick={this.nextSlide}><i className="fa fa-arrow-right fa-3x" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }
}

export default Carousel;