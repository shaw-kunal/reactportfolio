import React, { useEffect, useState } from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList'
import { featuredPortfolio,contentPortfolio,designPortfolio,mobilePortfolio,webPortfolio } from '../../data'


const Portfolio = () => {

  const [selected, setSelected] = useState("featured");
  const [data,setData] =useState([]);

  useEffect(() => {

    console.log("use effect method")
    switch (selected) {
      case "featured": 
      setData(featuredPortfolio);
      break;
      case "web": 
      setData(webPortfolio);
      break;
      case "mobile": 
      setData(mobilePortfolio);
      break;
      case "design": 
      setData(designPortfolio);
      break;
      case "branding": 
      setData(contentPortfolio);
      break;
      default:
      setData(featuredPortfolio);
         
    }

  }, [selected])

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },

  ]
  return (

    <div className='portfolio' id='portfolio'>
      <h1>PortFolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected} />
        ))}
      </ul>
      <div className="container">
   {
    data.map((d)=>(
      <div className="item"> 
          <img 
          src={d.img}
           alt="img " />
          <h3>{d.title}</h3>
        </div>
    ))
   }

      </div>

    </div>
  )
}

export default Portfolio