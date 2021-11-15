import React from 'react'
import ProfileCard from '../components/ProfileCard'
import MenuContentHeader from '../components/MenuContentHeader'

const Profile = () => {
  const dashBoardContent = [
    {
      id: 1,
      title: "Projects Completed",
      number: "12",
      caption: "Pushed to Git",
      bgColor: "bg-light-blue"
    },
    {
      id: 2,
      title: "Skill Set",
      number: "2",
      caption: "Programming Languages",
      bgColor: "bg-peach"
    },
    {
      id: 3,
      title: "Stack",
      number: "4",
      caption: "React, Laravel, Vue, Node",
      bgColor: "bg-light-blue"
    },
    {
      id: 4,
      title: "Certifications",
      number: "2",
      caption: "Certificates obtained",
      bgColor: "bg-peach"
    },
    {
      id: 5,
      title: "Expert Level",
      number: "85%",
      caption: "Experienced",
      bgColor: "bg-light-blue"
    },
    {
      id: 6,
      title: "Jobs",
      number: "5",
      caption: "Completed",
      bgColor: "bg-peach"
    }
  ].map( card => <ProfileCard key={card.id} card={card}/> )
  return (
    <div className="container">
      <MenuContentHeader 
        title="Dashboard"
        icon=""
      />
      <div className="row">
        {dashBoardContent}
      </div>
    </div>
  )
}

export default Profile
