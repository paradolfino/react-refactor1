import LargeCard from './pricing-content-largecard';
class PricingContent extends React.Component {
  constructor(props) {
    super(props);
    this.leftCard = [['100 - 2,499','9.0 ¢'],['2,500 - 4,999','8.5 ¢'],['5,000 - 9,999','7.5 ¢'],['10,000 - 19,999','7.0 ¢'],['20,000 - 49,999','6.5 ¢'],['50,000 - 99,999','6.0 ¢']];//for those who stumble onto this code - you must define a new array for every different card to have unique data in each. - Viktharien
    this.rightCard = [];
  }
  render() {
    return (
      <div id='pricing-content'>
        <LargeCard
          topHead='CREDITS'
          topPricePrefix='LOW AS'
          topPriceLeft='5'
          topPriceRightTop='¢'
          topPriceRightBot='EACH'
          topPara='When you need to communicate with a different or constantly changing group. Pay as you go.
One 30 second call = 1 credit
One 160 character text = 1 credit'
          tableHeadLeft='Credits'
          tableHeadRight='Price Per Credit'
          tableItems={this.leftCard}
          tableBottom='Need more than 100k? Call 877-226-3080'
          ctaButton='Buy Credits'
          />
      </div>
    );
  }
}

export default PricingContent;