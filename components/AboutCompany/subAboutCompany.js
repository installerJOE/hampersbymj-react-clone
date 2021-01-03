import React, { Component } from 'react'
import SubAboutList from './subAboutList'


class SubAboutCompany extends Component{
    
  render(){
    
    let newArray = this.props.aboutList.body
    
    let aboutCompanyBodyBlock = !this.props.aboutList.inputField &&
      newArray.map(item =>
        <SubAboutList 
          key={item.id}
          list={item}
        />
      )
   
    return(
      <div className="col-lg-3 col-sm-3 col-md-3 col-xs-12 about-company">
        <h2>
          {this.props.aboutList.header}
        </h2>
        {
          !this.props.aboutList.inputField ? 
          <ul>{aboutCompanyBodyBlock}</ul> :
          <div className="col-12">
            <input type="email" className="input-fields col-10"/>
            <p>{this.props.aboutList.body}</p>
          </div>
        }
      </div>
    )
  }
}

export default SubAboutCompany