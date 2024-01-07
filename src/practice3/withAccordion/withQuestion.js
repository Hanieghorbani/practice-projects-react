import React, { useState } from "react"
export default function WithQuestion(OrgComponent) {
  function NewComponent({ title, info }) {
    const [showInfo, setShowInfo] = useState(false)
    function toggleBtn() {
      setShowInfo((prev) => !prev)
    }
    return (
      <OrgComponent
        title={title}
        info={info}
        showInfo={showInfo}
        toggleBtn={toggleBtn}
      />
    )
  }
  return NewComponent
}
