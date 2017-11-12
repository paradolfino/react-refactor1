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
    if (this.slideManuel === 0){
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
          <div id='slide-top'>
            <h1>Hoh Vorker Det?</h1>
            <h3>Det ar sëmpel. Du kræter en broadkast, og vi delëvrer det kvåkklå, reliablå, og affordablå. Du yøst safda en tonne åv tëm og lëf ar svit.</h3>
          </div>
          <div id='slide-bot'>
            <div className='card'>
              <div>
                <h1>1</h1>
                <span><i className="fa fa-address-card-o fa-3x" aria-hidden="true"></i></span>
                <h3>Adda Kontakte</h3>
                <p>Adda kontakte manøallå eller upperload en lëst åv nømbre. Æsëlå organësh dem i tël gröppe.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <h1>2</h1>
                <span><i className="fa fa-commenting-o fa-3x" aria-hidden="true"></i></span>
                <h3>Krætta Din Messadj</h3>
                <p>Tåppa ut din tekst messadj eller øser vere såstem an kræt en rekordda våsa messadj.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <h1>3</h1>
                <span><i className="fa fa-line-chart fa-3x" aria-hidden="true"></i></span>
                <h3>Send og Analåssa</h3>
                <p>Tella oss nar du vël har din messadj får delëver, narë eller later, narda trakka resøltene og analåssa.</p>
              </div>
            </div>
          </div>
          <button className='special-btn'>Lærna Mor</button>
        </div>
        
        <div className='slide'>
          <div id='slide-top'>
            <h1>Our Customers</h1>
            <h3>People use Call-Em-All for all kinds of good reasons. It's the fastest way to deliver important communication to large groups.</h3>
          </div>
          <div id='slide-bot'>
            <div className='card'>
              <div>
                <span><i className="fa fa-star fa-3x" aria-hidden="true"></i></span>
                <h3>Relëgiösa Gröppe</h3>
                <p>Send ut pråjer & voløntirer rekveste, event remëndre skiedøl kiandje.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-bus fa-3x" aria-hidden="true"></i></span>
                <h3>Skiule</h3>
                <p>Send parente emergenså alerte, remëndre om report karde, field trëpe & skiul evente.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-users fa-3x" aria-hidden="true"></i></span>
                <h3>Staffer</h3>
                <p>Notëfå popølase åv jobba opennere, annönsa chëft kiandje, og rekvesta mësser tëmchite.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-university fa-3x" aria-hidden="true"></i></span>
                <h3>Håjer Edøkadjer</h3>
                <p>Dædlën Remëndre, kampøs evente, send ut vædra alerte og emergenså notëfikadjer.</p>
              </div>
            </div>
          </div>
          <button className='special-btn'>Lærna Mor</button>
        </div>
        
        <div className='slide'>
          <div id='slide-top'>
            <h1>En Fø Glad Køstomere</h1>
            <h3>Du ar i gud kompanå. Mor att 40,000 køsomere ar part åv den Kall-Dem-All famëlå. Hvarë ar samlig famëlier fase!</h3>
          </div>
          <div id='slide-bot'>
            <img src='https://cdn.call-em-all.com/assets/sprite-company-logos-black.png'/>
          </div>
          
        </div>
        
        <div className='slide'>
          <div id='slide-top'>
            <div className='card'>
              <div>
                <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
                <h3>Øser Kall-Dem-All harda arun en dræm. Eksperiensen ar søpra sëmpel; og deres stotter tæm ar ikredëbel!</h3>
                <p>Yasen Doe, Såjinter Andonå Spøre</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
                <h3>
Det ar sa æså, all jeg har an gor ar klëkker hvem jeg behover an kontakter, rekorder min messadj, og i lessa att 5 mënøte later all min kalle ar makda og jeg vet hvem arun kontaktda og hoh.</h3>
                <p>Sonja Bohman, Dërekter åv Homskiul Akademå</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <i className="fa fa-quote-left fa-3x" aria-hidden="true"></i>
                <h3>Som en lokel hund særkier og reskø ønët, vere tæm behover fast reliabel kommønëkadjer. Kall-Dem-All arda den best fënd vi harun ever makda.</h3>
                <p>Valter Larki, Skivenkevëlladj, PA</p>
              </div>
            </div>
          </div>
          <div id='slide-bot'>
            <div>
              
              <h1>Rædå an getter startda?</h1>
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