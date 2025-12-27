import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      time: "5 days ago",
      role: "Senior UI/UX Designer",
      tags: ["Full Time", "Senior Level", "Remote"],
      pay: "$120/hr",
      location: "Karachi, Pakistan"
    },
    {
      id: 2,
      logo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      time: "23 hrs ago",
      role: "Frontend Web Developer",
      tags: ["Full Time", "Mid Level", "On-site"],
      pay: "$95/hr",
      location: "Lahore, Pakistan"
    },
    {
      id: 3,
      logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      companyName: "Google",
      time: "2 days ago",
      role: "Junior Web Developer",
      tags: ["Part Time", "Junior Level", "On-site"],
      pay: "$45/hr",
      location: "Islamabad, Pakistan"
    },
    {
      id: 4,
      logo: "https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg",
      companyName: "Microsoft",
      time: "1 week ago",
      role: "Product Designer",
      tags: ["Full Time", "Senior Level", "Hybrid"],
      pay: "$110/hr",
      location: "Dubai, UAE"
    },
    {
      id: 5,
      logo: "https://assets.turbologo.com/blog/en/2019/08/19085031/netflix-short-version-logo.png",
      companyName: "Netflix",
      time: "3 days ago",
      role: "UI Designer",
      tags: ["Contract", "Mid Level", "Remote"],
      pay: "$85/hr",
      location: "Remote"
    },
    {
      id: 6,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
      companyName: "Apple",
      time: "12 hrs ago",
      role: "iOS App Designer",
      tags: ["Full Time", "Senior Level", "On-site"],
      pay: "$130/hr",
      location: "Cupertino, USA"
    },
    {
      id: 7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdvYiApQJofXpIjkMrJgetTXWz5wKapxKeg&s",
      companyName: "Spotify",
      time: "4 days ago",
      role: "UX Researcher",
      tags: ["Full Time", "Mid Level", "Remote"],
      pay: "$90/hr",
      location: "Remote"
    },
    {
      id: 8,
      logo: "https://logosandtypes.com/wp-content/uploads/2020/11/Shopify.png",
      companyName: "Shopify",
      time: "6 days ago",
      role: "Frontend Engineer",
      tags: ["Full Time", "Senior Level", "Remote"],
      pay: "$105/hr",
      location: "Toronto, Canada"
    },
    {
      id: 9,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rh1RsTM_T3Ejj8dnJp0Y0LxMPYDDtLoYwg&s",
      companyName: "Airbnb",
      time: "2 hrs ago",
      role: "Visual Designer",
      tags: ["Part Time", "Mid Level", "On-site"],
      pay: "$70/hr",
      location: "Remote"
    },
    {
      id: 10,
      logo: "https://s3-alpha.figma.com/hub/file/2167104317601928565/6fe8c744-e5e1-40f1-a462-9d1793090d6e-cover.png",
      companyName: "Figma",
      time: "1 day ago",
      role: "UI Engineer",
      tags: ["Full Time", "Senior Level", "Remote"],
      pay: "$115/hr",
      location: "San Francisco, USA"
    }
  ];

  return (
    <>
      <h1>JobScout</h1>
      <div className='parent'>
        {jobOpenings.map(function (e) {
          return <Card key={e.id} logo={e.logo} name={e.companyName} time={e.time} role={e.role} tag1={e.tags[0]} tag2={e.tags[1]} tag3={e.tags[2]} pay={e.pay} location={e.location} />
        })}
      </div>
    </>
  )
}

export default App
