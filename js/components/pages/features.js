import Jumbo from "../elements/all-jumbo";

import Carousel from '../elements/carousel-features';

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      header: "Vi Makker Altomatda Kalle og Massa Tekste Æså",
      sub: "Saver tëm bå elëmënatter hædakien åf harer an rækier kontakte idëvëdøallå.Kall-Dem-All™ eller Tekst-Dem-All™",
      
    };
  }

  render() {
    return (
      <div id="page-features" className="page">
        <Jumbo header={this.settings.header} sub={this.settings.sub} />
        <Carousel />
      </div>
    );
  }
}

export default Features;
