import LargeCard from './pricing-content-largecard';
class PricingContent extends React.Component {
  constructor(props) {
    super(props);
    this.leftCard = [['100 - 2,499','9.0 ore'],['2,500 - 4,999','8.5 ore'],['5,000 - 9,999','7.5 ore'],['10,000 - 19,999','7.0 ore'],['20,000 - 49,999','6.5 ore'],['50,000 - 99,999','6.0 ore']];//for those who stumble onto this code - you must define a new array for every different card to have unique data in each. - Viktharien
    this.rightCard = [['1 - 25','kr 7.50'],['26 - 50','kr 15.00'],['51 - 100','kr 35.00'],['101 - 200','kr 55.00'],['201 - 300','kr 75.00'],['301 - 400','kr 85.00']];
  }
  render() {
    return (
      <div id='pricing-content'>
        <LargeCard
          topHead='KREDËTE'
          topPricePrefix='LOH SOM'
          topPriceLeft='42'
          topPriceRightTop='ore'
          topPriceRightBot='FÅR ON'
          topPara='Nar du behover an kommønëkater med en dëffer eller konstantlå kiandjer gröp. Betaler om du aker.
On 30 sekond kall = 1 kredët
On 160 kiarakter tekst = 1 kredët'
          tableHeadLeft='Kredëte'
          tableHeadRight='Prëser får Kredët'
          tableItems={this.leftCard}
          tableBottom='Behover mor att 100k? Kalla ###-###-####'
          ctaButton='Chopper Kredëte'
          />
        <LargeCard
          topHead='MONDLÅ'
          topPricePrefix='FRÅN'
          topPriceLeft='62'
          topPriceRightTop='64  kr'
          topPriceRightBot='FÅR ON MOND'
          topPara='Nar du messadjer den soma gröp åv popølase everå mond. Får on fon nømbra ar en kontakt. Kalla og teksta som mangi som du behover.'
          tableHeadLeft='Fon Nømbre'
          tableHeadRight='Prëser Får On Mond'
          tableItems={this.rightCard}
          tableBottom='Har mor att 400 popølase?'
          ctaButton='Chopper Mondlå'
          />
      </div>
    );
  }
}

export default PricingContent;