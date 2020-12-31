import React, { Component } from 'react'
import SubAboutList from './subAboutList'


class SubAboutCompany extends Component{
    
  render(){
    console.log(this.props.aboutList)
    const aboutCompanyBodyBlock = this.props.aboutList.body.map(item =>
      <SubAboutList 
        key={item.id}
        list={item}
      />
    )
    return(
      <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12">
        <h1>
          {this.props.aboutList.header}
        </h1>
        <ul>
          {/* {aboutCompanyBodyBlock} */}
        </ul>
      </div>
    )
  }
}

export default SubAboutCompany