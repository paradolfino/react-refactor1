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
            <h3>Om du har 50 eller dösande åv popølase pa din lëst, ör fon blaster servësa alloher dig an rækier everå kontakt i sekonde.</h3>
          </div>
          <div id='slide-bot'>
            <div className='card'>
              <div>
                <span><i className="fa fa-medkit fa-4x" aria-hidden="true"></i></span>
                <h3>Health Care</h3>
                <p>Flu Shot and appointment reminders, staff nurses, and send patients health care announcements.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-bus fa-4x" aria-hidden="true"></i></span>
                <h3>Schools</h3>
                <p>Send parents emergency alerts, reminders about report cards, field trips & school events.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-university fa-4x" aria-hidden="true"></i></span>
                <h3>Higher Education</h3>
                <p>Deadline Reminders, campus events, send out weather alerts and emergency notifications.</p>
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
                <span><i className="fa fa-building fa-4x" aria-hidden="true"></i></span>
                <h3>Property Managers</h3>
                <p>Send rent reminders, maintenance notifications, & coordinate staff.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-bolt fa-4x" aria-hidden="true"></i></span>
                <h3>Waste & Utility</h3>
                <p>Send shut down notices, payment reminders, and emergency notifications.</p>
              </div>
            </div>
          </div>
        </div>
        

          <div id='slide-howwehelp' className='slide'>
            <div id='slide-top'>
              <h1>Hvem Vi Helpper</h1>
              <h3>Om du har 50 eller dösande åv popølase pa din lëst, ör fon blaster servësa alloher dig an rækier everå kontakt i sekonde.</h3>
            </div>
            <div id='slide-bot'>
              <div className='card'>
              <div>
                <span><i className="fa fa-heart-o fa-4x" aria-hidden="true"></i></span>
                <h3>Non-profit</h3>
                <p>Coordinate upcoming events, send donors a thank you, and send meething reminders.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-star-o fa-4x" aria-hidden="true"></i></span>
                <h3>Religious Groups</h3>
                <p>Send out prayer & volunteer requests, event reminders, schedule changes.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-briefcase fa-4x" aria-hidden="true"></i></span>
                <h3>Business</h3>
                <p>Appointment reminders, notify staff about office closings, make important announcements.</p>
              </div>
            </div>
            <div className='card'>
              <div>
                <span><i className="fa fa-futbol-o fa-4x" aria-hidden="true"></i></span>
                <h3>Sports Teams</h3>
                <p>Rain delays, last minute field changes, and game cancellations.</p>
              </div>
            </div>
            </div>
          </div>
        
        <div className='slide'>
          <div id='slide-top'>
            <h1>Case Studies</h1>
            <h3>You're in good company. Our customers share a few of their success stories below.</h3>
          </div>
          <div id='slide-bot'>
            <img src='https://cdn.call-em-all.com/assets/sprite-company-logos-black.png'/>
          </div> 
        </div>

        
        <div className='slide'>
          <div id='slide-top'>
            <div id='no-spam-left' className='card'>
              <div>
                <h3>No Spam Policy</h3>
                <p>We hate unwanted robo calls — all those annoying spam calls you get during dinner about debt refinancing, credit card offers, cruise deals, a once-in-a-lifetime business opportunity in Nigeria from people you've never heard of. That's the exact opposite of what Call-Em-All stands for. We use our powers for good, not evil. In fact, we support the push to end unwanted calls and texts forever.</p>
              </div>
            </div>
            <div id='no-spam-right' className='card'>
              <div>
                <p>To stop receiving calls from our customers, click here to OPT OUT</p>
                <p>To stop receiving text message from our customers, text:
                  STOP, QUIT, END, CANCEL, OR UNSUBSCRIBE TO 292929.</p>
                <p>Have any questions, feel free to CONTACT US anytime day or night</p>
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