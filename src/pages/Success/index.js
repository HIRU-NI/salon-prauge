import React from "react"

import "../../assets/styles/success.css"

const Success = () => {
  return (
    <div class="success_main">
      <h1>Thank you for your reservation!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p class="success_text_1">For further information contact us</p>
      <img src={require("../../assets/contact-image.png")} alt="Contact" />
      <p class="success_text_2">(487) 1070 1087</p>
      <p class="success_text_2">sales.salonprauge@sp.com</p>
    </div>
  )
}

export default Success
