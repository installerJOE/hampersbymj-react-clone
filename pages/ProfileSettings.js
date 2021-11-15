import React from 'react'
import MenuContentHeader from '../components/MenuContentHeader'
import Passport from "../images/Passport.jpg"
import ProfileOverview from '../components/ProfileOverview'

const ProfileSettings = () => {
  const passportStyle = {
    borderColor: 'rgba(2,13,115,1)',
    backgroundColor: '#fff',
  }

  const advancedProfileDetails = [
    {
      id: 1,
      title: "Core Values",
      value: "Honesty | Transparency | Diligence | Creativity",
      icon: "",
      advanced: true,
    },
    {
      id: 2,
      title: "Experience Level",
      value: "Intermediate",
      icon: "",
      advanced: true,
    },
    {
      id: 3,
      title: "Certificates",
      value: `Bachelors of Computer Engineering | Upwork Readiness Certificate`,
      icon: "",
      advanced: true
    }
  ].map(detail => 
    <ProfileOverview 
      key={detail.id} 
      title={detail.title}
      value={detail.value}
      icon={detail.icon}
      advanced={detail.advanced}
    />
  )

  return (
    <div className="container">
      <MenuContentHeader 
        title="My Profile"
        icon=""
      />
      <div className="row mt-4">
        <div className="col-md-4 col-sm-3 col-3">
          <div className="col-md-12 passport" style={passportStyle}>
            <img src={Passport} alt="Profile Image" height="auto" width="100%"/>
          </div>
        </div>
        <div className="col-md-8 col-sm-9 col-9">
          <ProfileOverview
            title="Full Names"
            value="Justice Igoma"
          />

          <ProfileOverview
            title="Skills/Stack"
            value="React | Laravel | PHP | JavaScript | Bootstrap"
          />
        </div>
      </div>
      <div className="mt-5">
        <MenuContentHeader 
          title="Advanced Profile"
          icon=""
          subheader={true}
        />
      </div>
      <div className="row mt-4">
        {advancedProfileDetails}
      </div>
    </div>
  )
}

export default ProfileSettings