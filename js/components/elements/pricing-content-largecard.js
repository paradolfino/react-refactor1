function LargeCard(props) {
    return (
      <div className='largecard'>
        <div className='largecard-left'>
          <div className='lc-head'>
            <h1>{props.topHead}</h1>
          </div>
          <div className='lc-price'>
            <div className='lc-price-left'>
              <span>{props.topPricePrefix}</span>
              <h2>{props.topPriceLeft}</h2>
            </div>
            <div className='lc-price-right'>
              <div className='lc-price-right-top'>
                <h3>{props.topPriceRightTop}</h3>
              </div>
              <div className='lc-price-right-bot'>
                <h4>{props.topPriceRightBot}</h4>
              </div>
            </div>
          </div>
          <div className='lc-para'>
            <p>{props.topPara}</p>
          </div>
        </div>
        
        <div className='largecard-right'>
          <div className='largecard-table'>
          </div>
        </div>
      </div>
    );
  }

export default LargeCard;