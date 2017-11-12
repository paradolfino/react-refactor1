let auto;
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.slideIndex = 1;
    this.slideManuel = 1;
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
        <div id='slide-howwehelp' className='slide'>
          <div id='slide-top'>
            <h1>Hvem Vi Helpper</h1>
            <h3>Om du har 50 eller dösande åv popølase pa din lëst, vere fon blaster servësa alloher dig an rækier everå kontakt i sekonde.</h3>
          </div>
          <div id='slide-bot'>
            <div className='card'>
              <div>
                <span><i className="fa fa-medkit fa-4x" aria-hidden="true"></i></span>
                <h3>Hæler Kærer</h3>
                <p>Flø Chot og appåjontment remëndre, staff kærere, og sender patiente hæler kærer annönsamente.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-bus fa-4x" aria-hidden="true"></i></span>
                <h3>Skiule</h3>
                <p>Send parente emergenså alerte, remëndre om report karde, field trëpe & skiul evente.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-university fa-4x" aria-hidden="true"></i></span>
                <h3>Håjer Edøkadjer</h3>
                <p>Dædlën Remëndre, kampøs evente, send ut vædra alerte og emergenså notëfikadjer.</p>
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
                <span><i className="fa fa-building fa-4x" aria-hidden="true"></i></span>
                <h3>Propertå Manadjere</h3>
                <p>Send rent remëndre, måjintenansa notëfikadjer, & kurdënater staff.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-bolt fa-4x" aria-hidden="true"></i></span>
                <h3>Væst & Øtëlitå</h3>
                <p>Send chøt dohnner notëse, betaler remëndre, og emergenså notëfikadjer.</p>
              </div>
            </div>
          </div>
        </div>
        

          <div id='slide-howwehelp' className='slide'>
            <div id='slide-top'>
              <h1>Hvem Vi Helpper</h1>
              <h3>Om du har 50 eller dösande åv popølase pa din lëst, vere fon blaster servësa alloher dig an rækier everå kontakt i sekonde.</h3>
            </div>
            <div id='slide-bot'>
              <div className='card'>
              <div>
                <span><i className="fa fa-heart-o fa-4x" aria-hidden="true"></i></span>
                <h3>Nån-profëtter</h3>
                <p>Kurdënater upperkommer evente, send donatere en takk dig, og send mitter remëndre.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-star-o fa-4x" aria-hidden="true"></i></span>
                <h3>Relëgiösa Gröppe</h3>
                <p>Send ut pråjer & voløntirer rekveste, event remëndre skiedøl kiandje.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-briefcase fa-4x" aria-hidden="true"></i></span>
                <h3>Fårtag</h3>
                <p>Appåjintment remëndre, notëfå staff om offësa kloser, makka ëmportant annönsamente.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-futbol-o fa-4x" aria-hidden="true"></i></span>
                <h3>Sprete Tæme</h3>
                <p>Råjin delåje, last mënøt field kiandje, og gam kansellere..</p>
              </div>
            </div>
            </div>
          </div>
        
        <div className='slide'>
          <div id='slide-top'>
            <h1>Kasa Stødiere</h1>
            <h3>Du ar i gud kompanå. Vere køstomere charer en fø åv dere søxessa tæle beloh.</h3>
          </div>
          <div id='slide-bot'>
            <img src='https://cdn.call-em-all.com/assets/sprite-company-logos-black.png'/>
          </div> 
        </div>

        
        <div className='slide'>
          <div id='slide-top'>
            <div id='no-spam-left' className='card'>
              <div>
                <h3>Nån Spam Polëså</h3>
                <p>Vi hæter ikke vël harda robo kalle - all dette fel spam kalle du getter under efterdåjmæt om debit refënanser, kredët kard afre, chëptrëpper dæle, en on-i-en-lëftëm fårtag opportønëtå i Nigeria från popølase du harda never hërun åv. Det ar den eksakt opposët åv hvat Kall-Dem-All stander får. Vi øser vere pöere får gud, ikke fel. I fakt, vi stotter pøchen an ender ikke vël harda kalle og tekste fårever.</p>
              </div>
            </div>
            <div id='no-spam-right' className='card'>
              <div>
                <p>An sluter rekåjever kalle från vere køstomere, klëkker hvarë an OPTIDJER UT</p>
                <p>An sluter rekåjever tekste messadje från vere køstomere, teksta:
                  SLUTER, KVÅJUTER, ENDER, KANSELLER, ELLER IKKESØBSKRËBER TËl 383838.</p>
                <p>Har sporgsmal, filler fri an KONTAKTER OSS alltëme dåj eller nåt.</p>
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