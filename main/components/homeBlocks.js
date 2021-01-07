import React from 'react'
import HomeGiftCategory from './homeGiftCat'
import trendyGiftArray from './trendyGiftArray'
import giftCategoryArray from './giftCategoryArray'
import HomeTrendyGift from './homeTrendyGift'

function HomeBlock(){
  const homeBlockStyle = {
    margin: "auto",
    float: "none",
    padding: "20px",
    backgroundColor: "#fff"
  }
  
  const giftCatBlock = giftCategoryArray.map(category => 
    <HomeGiftCategory 
      key={category.id}
      category={category}
    />)

  const trendyGiftBlock = trendyGiftArray.map(product =>
    <HomeTrendyGift
      key={product.id}
      product={product}
    />)

  return(
    <div className="col-lg-11 col-sm-11 col-xs-12 col-md-11 left-clear" style={homeBlockStyle}>
      <div className="col-12 home-category-list">
        <h1>GIFT CATEGORIES</h1> <hr className="ruler"/>
        {giftCatBlock}
      </div>
      <div className="col-12">
        <h1>TRENDY GIFTS</h1> <hr className="ruler"/>
        <div className="col-12 home-trendy-gifts">
          {trendyGiftBlock}
        </div>
      </div>
    </div>
  )
}

export default HomeBlock