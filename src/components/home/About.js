import React from "react"
import "./about.css"

const About = () => {
  return (
    <div class="about_main">
      <img
        src={require("../../assets/about_background.png")}
        alt="BackgroundImage"
      />
      <div class="about_content">
        <h1 class="about_title">About us</h1>
        <p class="about_text_1">
          Named “Best Salon” by Main Line Magazine & The Philadelphia Inquirer,
          Prauge Salon & Style Bar has been committed to “raising the bar ”
          since opening our doors in 2014. Our mission is simple, give every
          guest an excellent experience by providing them with a warm, inviting
          culture & results that surpass expectations. At Privé we are
          passionate about making people feel good while looking their best.
          Attending advanced education allows us to keep up with the latest
          trends and provide each guest with a unique & customizable result. For
          your convenience, we are open 7 days a week & offers online booking 24
          hours a day.
        </p>
        <p class="about_text_2">Schedule your reservation today!</p>
      </div>
    </div>
  )
}

export default About
