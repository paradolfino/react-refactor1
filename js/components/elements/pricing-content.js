import LargeCard from './pricing-content-largecard';
class PricingContent extends React.Component {
  constructor(props) {
    super(props);
    this.leftItems = [['100-2499','9.0C'],['2500-4999','8.5C']];
  }
  render() {
    return (
      <div id='pricing-content'>
        <LargeCard
          topHead='CREDITS'
          topPricePrefix='LOW AS'
          topPriceLeft='5'
          topPriceRightTop='C'
          topPriceRightBot='EACH'
          topPara='When you need to communicate with a different or constantly changing group. Pay as you go.
One 30 second call = 1 credit
One 160 character text = 1 credit'
          tableHeadLeft='Credits'
          tableHeadRight='Price Per Credit'
          tableItems={this.leftItems}
          tableBottom='Need more than 100k? Call 877-226-3080'
          ctaButton='Buy Credits'
          />
        
        
      </div>
    );
  }
}

export default PricingContent;