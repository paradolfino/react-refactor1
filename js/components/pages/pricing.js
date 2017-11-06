import Jumbo from '../elements/all-jumbo';

import PricingContent from '../elements/pricing-content';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header:'Simple Pricing Plans',
      sub:'No long-term contracts, no hidden fees, and no fine print to make you cringe. What you see is what you get.',
      
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