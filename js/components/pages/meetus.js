import Jumbo from "../elements/all-jumbo";

import Carousel from '../elements/carousel-meetus';

class MeetUs extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header: "Meet Me",
      sub: "There are a lot of software engineers out there. I'm different because I love programming a little TOO much. Like a lotta too much. P.S. I thought it would be clever to have this page reflect me, and it being in English - because I think it's cool when people can understand what you're saying!",
      
    };
  }

  render() {
    return (
      <div id="page-meetus" className="page">
        <Jumbo header={this.settings.header} sub={this.settings.sub} />
        <Carousel />
      </div>
    );
  }
}

export default MeetUs;
