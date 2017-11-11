import Jumbo from '../elements/all-jumbo';

import ContactContent from '../elements/contact-content';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header:'Contact Me',
      sub:"I'm available by phone Monday & Tuesday from 8 AM - 5 PM.",
      
    };
   
    
  }
  
  render() {
    return (
      <div id="page-contact" className="page">
        <Jumbo header={this.settings.header} sub={this.settings.sub}/>
        <ContactContent />
      </div>
    );
  }
}

export default Contact;