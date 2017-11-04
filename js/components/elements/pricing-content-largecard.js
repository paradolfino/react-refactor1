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
          <div className='lc-table-head'>
            <div><span>{props.tableHeadLeft}</span></div>
            <div><span>{props.tableHeadRight}</span></div>
          </div>
          <div className='lc-table-body'>
            <div className='table-container'>
            {props.tableItems.map((item,index)=>{
              
                return (
                  <div id={index}>
                    
                    <div className='left'><span>{item[0]}</span></div><div className='right'><span>{item[1]}</span></div>
                    
                  </div>
                );
            })}
            </div>
            
          </div>
          <div className='lc-table-bottom'>
              <h4>{props.tableBottom}</h4>
          </div>
          <div className='lc-call-to-action'>
              <button>{props.ctaButton}</button>
          </div>
        </div>
      </div>
    );
  }

export default LargeCard;