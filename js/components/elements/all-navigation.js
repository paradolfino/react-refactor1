class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    let page = e.target.value;
    $('.page').addClass('animated fadeIn');
    this.props.onClick(page);
  }
  
  componentDidMount() {
    let clicked = 0;
    $('#navigation').click(()=>{
      //this.props.onClick('Index');
    });
  
    $('#collapse').click(()=>{
      if (clicked === 0) {
        $('#nav-btns').removeClass('animated slideOutLeft');
        $('#nav-btns').css('display','flex');
        $('#nav-btns').addClass('collapsed-items');
        $('#nav-btns').addClass('animated slideInLeft');
        //.nav-btn
        $('.nav-btn').css('color','white');
        //jumbo
        $('#jumbo').css('margin-left','200px');
        clicked = 1;
        console.log(clicked);
      } else {
        $('#nav-btns').removeClass('animated slideInLeft');
        $('#nav-btns').addClass('animated slideOutLeft');
        //jumbo
        $('#jumbo').css('margin-left','0');
        setTimeout(()=>{
          $('#nav-btns').css('display','none');
          $('#nav-btns').removeClass('collapsed-items');
          $('#nav-btns').removeClass('animated slideInLeft');
          $('#nav-btns').removeClass('animated slideOutLeft');
          //.nav-btn
          $('.nav-btn').css('color','gray');
        },300); 
        clicked = 0;
        console.log(clicked);
      }
    });
    
    //special button hover functions
    
    $('#MeetMe').bind('mouseenter',function(){
      $(this).html('Meet Me');
      $(this).css('color','#ff3300');
    });
    
    $('#ContactMe').bind('mouseenter',function(){
      $(this).html('Contact Me');
    });
    
    $('#Thanks').bind('mouseenter',function(){
      $(this).html('Thanks!');
      $(this).css('color','#ff3300');
    });
    
    //
    
    $(window).resize(()=>{
      let winWidth = $(window).width();
      if (winWidth >= 1010 && clicked === 1) {
        $('#nav-btns').removeClass('animated slideInLeft');
        $('#nav-btns').removeClass('animated slideOutLeft');
        $('#nav-btns').css('display','flex');
        //jumbo
        $('#jumbo').css('margin-left','0');
        clicked = 0;
      } else if (winWidth <= 1010 && clicked === 0) {
        $('#nav-btns').css('display','none');
        clicked = 0;
      } else if (clicked === 0) {
        $('#nav-btns').css('display','flex');
      }
    });
  }
  
  render() {
    return (
      <div id='navigation'>
        <div id='nav-logo'>
          <i className='fa fa-volume-control-phone fa-2x'></i>
          <span> Kall-Dem-All|<strong>NR</strong></span>
          
        </div>
        <div id='collapse'>
          <span><i className="fa fa-bars fa-2x" aria-hidden="true"></i></span>
        </div>
        <div id='nav-btns'>
          <button value='Features' onClick={this.handleClick} className='nav-btn'>Fætøre</button>
          <button value='HowWeHelp' onClick={this.handleClick} className='nav-btn'>Hoh Vi Help</button>
          <button value='Pricing' onClick={this.handleClick} className='nav-btn'>Prëser</button>
          <button id='MeetMe' value='MeetUs' onClick={this.handleClick} className='nav-btn'>Mitter Oss</button>
          <button id='ContactMe' value='TryIt'  onClick={this.handleClick} className='nav-btn special-btn'>Trå Det</button>
          <button id='Thanks' value='SignIn' onClick={this.handleClick} className='nav-btn'>Sån I</button>
        </div>
        
      </div>
    );
  }
}

export default Navigation;