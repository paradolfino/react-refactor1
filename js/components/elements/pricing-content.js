import LargeCard from './pricing-content-largecard';
class PricingContent extends React.Component {
  constructor(props) {
    super(props);
    this.leftCard = [['100 - 2,499','9.0 ¢'],['2,500 - 4,999','8.5 ¢'],['5,000 - 9,999','7.5 ¢'],['10,000 - 19,999','7.0 ¢'],['20,000 - 49,999','6.5 ¢'],['50,000 - 99,999','6.0 ¢']];//for those who stumble onto this code - you must define a new array for every different card to have unique data in each. - Viktharien
    this.rightCard = [['1 - 25','$ 7.50'],['26 - 50','$ 15.00'],['51 - 100','$ 35.00'],['101 - 200','$ 55.00'],['201 - 300','$ 75.00'],['301 - 400','$ 85.00']];
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
        <LargeCard
          topHead='MONTHLY'
          topPricePrefix='FROM'
          topPriceLeft='7'
          topPriceRightTop='50  $'
          topPriceRightBot='PER MONTH'
          topPara='When you message the same group of people every month. Each phone number is a contact.
Call and text as much as you need.'
          tableHeadLeft='Phone Numbers'
          tableHeadRight='Price Per Month'
          tableItems={this.rightCard}
          tableBottom='Have more than 400 people?'
          ctaButton='Buy Monthly'
          />
      </div>
    );
  }
}

export default PricingContent;