import Jumbo from '../elements/all-jumbo';

import ThanksContent from '../elements/thanks-content';

class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header:'Thanks!',
      sub:"I really appreciate you stopping by. This was half fun and half serious. I'll be making improvements over time. Check back once in a while."
      
    };
   
    
  }
  
  render() {
    return (
      <div id="page-thanks" className="page">
        <Jumbo header={this.settings.header} sub={this.settings.sub}/>
        <ThanksContent />
      </div>
    );
  }
}

export default Thanks;