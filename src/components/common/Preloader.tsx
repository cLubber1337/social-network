import React from "react"
import loading from "../../assets/loading.svg"

const Preloader = () => {
  return (
    <>
      <img
        src={loading}
        alt={"loading"}
        style={{ width: "300px", alignSelf: "center", margin: "200px auto" }}
      />
    </>
  )
}

export default Preloader
