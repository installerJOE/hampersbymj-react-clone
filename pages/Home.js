import React from 'react'
import HomeCoreValue from "../components/HomeCoreValue"
import CoreValueList from "../components/coreValueList"
import "../css/index.css"
import Passport from "../images/Passport.jpg"
import OpeningPageDiv from '../components/OpeningPageDiv'

const Home = () => {
  const HomeCoreValues = CoreValueList.map(coreValue => <HomeCoreValue key={coreValue.id} value={coreValue} />);
  return (
    <div className="main">
        <OpeningPageDiv
          title="Build Professional and Interactive Website"
          caption={"Increase traffic to your website through great content \n and awesome user experience"}
        />
        
        <div className="sub-divs">
          {/* About the Developer */}
          <div className="home-about">
            <div className="col-md-7 col-sm-9 col-9">
              <h1 className="sub-header">
                About Developer
              </h1>
              <p>
                Hello, I am Justice Igoma, a full stack developer  that
                combines the use of <span className="text-light-blue"> HTML, CSS, Javascript and PHP </span>
                in building interactive websites and web applications.

                I specialize in the use of Laravel in developing simple and
                complex websites and web applications, including API
                development and documentation.
              </p>
            </div>
            <div className="col-md-5 col-sm-3 col-3">
              <div className="col-md-9 col-sm-12 passport">
                <img src={Passport} alt="Profile Image" height="auto" width="100%"/>
              </div>
            </div>
          </div>

          {/* Core values of the developer */}
          <div className="home-core-values">
            <div className="col-md-12">
              <h1 className="sub-header">
                Core Values
              </h1>
              <div>
                {HomeCoreValues}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
