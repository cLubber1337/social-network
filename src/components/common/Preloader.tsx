import React from "react"
import loading from "../../assets/loading.svg"

const Preloader = () => {
  return (
    <>
      <img
        src={loading}
        alt={"loading"}
        style={{ width: "500px", alignSelf: "center", margin: "0 auto" }}
      />
    </>
  )
}

export default Preloader
