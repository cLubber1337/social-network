import React from "react"
import loading from "../../assets/loading.svg"

const Preloader = () => {
  return (
    <>
      <img
        src={loading}
        alt={"loading"}
        style={{
          width: "300px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  )
}

export default Preloader
