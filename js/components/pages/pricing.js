import Jumbo from '../elements/all-jumbo';

import PricingContent from '../elements/pricing-content';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header:'Sëmpel Prëser Planne',
      sub:'Nån long-term kontrakte, nån hëdder koste, og nån fën prënt an makker dig sad. Hvat du ser ar hvat du getter.',
    };
   
    
  }
  
  render() {
    return (
      <div id="page-pricing" className="page">
        <Jumbo header={this.settings.header} sub={this.settings.sub}/>
        <PricingContent />
      </div>
    );
  }
}

export default Pricing;