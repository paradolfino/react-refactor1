import Jumbo from '../elements/all-jumbo';

import Carousel from '../elements/carousel-howwehelp';

class HowWeHelp extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header:'Delëver Din Messadj Med Vere Tekst & Fon Blaster Servësa',
      sub:'Vi makker lëf en lille mor æså får gröppe, fårtage, og kompanåje everåhvar. Kipper din gröp upperdatda får ore får on messadj.',
      
    };
   
    
  }
  
  render() {
    return (
      <div id="page-howwehelp" className="page">
        <Jumbo header={this.settings.header} sub={this.settings.sub}/>
        <Carousel />
      </div>
    );
  }
}

export default HowWeHelp;