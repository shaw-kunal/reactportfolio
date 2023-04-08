import React from 'react'
import "./testimonial.scss"

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assest/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assest/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assest/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonial' id='testimonial'>
      <h1>Testimonial</h1>
      <div className="container">
        {
          data.map(d => (
            <div className={d.featured === true? "card active": "card"} key={data.id}>
              <div className="top">
                <img className='left' src="assest/right-arrow.png" alt="" />
                <img className='user'
                src={d.img}
                  alt="not found" />
                <img className='right' src={d.icon} alt="" />
              </div>
              <div className="center">
                <p>{d.desc}</p>
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>

          ))
        }

      </div>




    </div>
  )
}

export default Testimonial