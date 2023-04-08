import React, { useState } from 'react'
import "./work.scss"

const Work = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const data = [
    {
      id: "1",
      icon: "assest/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "assest/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "assest/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "4",
      icon: "assest/writing.png",
      title: "Content",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://images.unsplash.com/photo-1679896230078-b99bd7305d3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "5",
      icon: "assest/writing.png",
      title: "Style",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://images.unsplash.com/photo-1677848103508-e443dfedf8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
  ];



  // handle click
  const handleClick = (way) => {
    if (way === "left") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1);
    }
    else {
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)

    }

  }

  return (
    <div className='work' id='work'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {
          data.map(d => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="not found" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>

                    <span>project</span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img}
                    alt="" />
                </div>

              </div>

            </div>
          ))
        }
      </div>
      <img src="assest/arrow.png" alt="" className='arrow left' onClick={() => { handleClick("left") }} />
      <img src="assest/arrow.png" alt="" className='arrow right' onClick={() => { handleClick() }} />

    </div>
  )
}

export default Work