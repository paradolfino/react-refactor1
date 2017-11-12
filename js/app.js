//pages
import Index from './components/pages/index';
import Features from './components/pages/features';
import HowWeHelp from './components/pages/howwehelp';
import Pricing from './components/pages/pricing';
import MeetUs from './components/pages/meetus';
import Contact from './components/pages/contact';
import Thanks from './components/pages/thanks';

//elements
import Navigation from './components/elements/all-navigation';
import Footer from './components/elements/all-footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    //state
    this.state = {
      page: "Index"
    };
    
    //variables
    this.pages = {
      Index: Index,
      Features: Features,
      HowWeHelp: HowWeHelp,
      Pricing: Pricing,
      MeetUs: MeetUs,
      Contact: Contact,
      Thanks: Thanks
    };
    
    //bindings
    this.pageHandler = this.pageHandler.bind(this);
  }
  
  pageHandler(page) {
    this.setState({ page: page });
  }
  
  componentDidMount() {
    let savedPage = localStorage['Page'];
    console.log(savedPage);
    this.setState({ page: savedPage});
    localStorage['Page'] = this.state.page;
    
    let winHeight = $(window).height();
    let adjHeight = winHeight;
    console.log(adjHeight);
    console.log(adjHeight*0.6);
    $('.page').removeClass('animated slideInDown');
    $('.page').addClass('animated slideInDown');
    

  }
  
  componentDidUpdate() {
    localStorage['Page'] = this.state.page;
    
    //check to see if collapsed menu is deployed
    let displayState = $('#nav-btns').hasClass('collapsed-items');
    displayState === true ? $('#jumbo').css('margin-left','200px') : $('#jumbo').css('margin-left','0');
  }
  
  componentDidUnmount() {
    //local memory to save page
    localStorage['Page'] = this.state.page;
  }
  
  render() {
    let ThePage = this.pages[this.state.page];
    return (
      <div id="wrapper">
        <Navigation onClick={this.pageHandler} />
        <ThePage />
        <Footer />
      </div>
    );
  }
  
}

ReactDOM.render(<App />,document.getElementById("app"));