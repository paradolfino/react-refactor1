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
            <h1>Our Customers</h1>
            <h3>People use Call-Em-All for all kinds of good reasons. It's the fastest way to deliver important communication to large groups.</h3>
          </div>
          <div id='slide-bot'>
            <div className='card'>
              <div>
                <span><i className="fa fa-star fa-3x" aria-hidden="true"></i></span>
                <h3>Religious Groups</h3>
                <p>Send out prayer requests, event reminders, volunteer requests, schedule changes, and special events.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-bus fa-3x" aria-hidden="true"></i></span>
                <h3>Schools</h3>
                <p>Send parents emergency alerts, reminders about report cards, field trips & school events.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-users fa-3x" aria-hidden="true"></i></span>
                <h3>Staffing</h3>
                <p>Notify people of job openings, announce shift changes, and request missing timesheets.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-university fa-3x" aria-hidden="true"></i></span>
                <h3>Universities</h3>
                <p>Deadline Reminders, campus events, send out weather alerts and emergency notifications.</p>
              </div>
            </div>
          </div>
          <button className='special-btn'>Learn More</button>
        </div>
        
        <div className='slide'>
          <div id='slide-top'>
            <h1>A Few Happy Customers</h1>
            <h3>You're in good company. More than 40,000 customers are part of the Call-Em-All family. Here are some familiar faces!</h3>
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