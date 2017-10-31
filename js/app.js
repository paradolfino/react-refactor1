//pages
import Index from './components/pages/index';
import Features from './components/pages/features';
import HowWeHelp from './components/pages/howwehelp';
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
      HowWeHelp: HowWeHelp
    };
    
    //bindings
    this.pageHandler = this.pageHandler.bind(this);
  }
  
  pageHandler(page) {
    this.setState({ page: page });
  }
  
  componentDidMount() {
    let winHeight = $(window).height();
    let adjHeight = winHeight;
    console.log(adjHeight);
    console.log(adjHeight*0.6);
    $('.page').removeClass('animated slideInDown');
    $('.page').addClass('animated slideInDown');
    //$('.page').css('height',adjHeight);
    //$('.carousel').css('height',adjHeight*.6);
    
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