import Jumbo from '../elements/all-jumbo';

import PricingContent from '../elements/pricing-content';

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header:'Våsa Broadkaster og Massa Tekste Servësa',
      sub:'Send ëmportant alerte, notëfëkadje, og remëndrare i yøst mënøte med ör altomatda messadjer servësa.',
      
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