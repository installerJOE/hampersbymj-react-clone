import React from 'react'

const OpeningPageDiv = ({ title, caption }) => {
  const captionBlock = caption.split('\n') 
 
  return (
    <div className="opening-page-div" id="home-intro-div">
      <div className="col-md-10 col-sm-12 col-12" style={{ float: 'none', margin: 'auto' }}>
        <h1 className="xl-header">
          {title}
        </h1>
        <p>
        {captionBlock[0] } <br/> {captionBlock[1]}
        </p>
      </div>
    </div>
  )
}

export default OpeningPageDiv
