import React, { useState } from "react"

export default function WithToggleHoc(OrgComponent) {
  function NewComponent() {
    const [isShow, setIsShow] = useState(false)
    function toggleBtn() {
      setIsShow((prev) => !prev)
    }
    return <OrgComponent toggleBtn={toggleBtn} isShow={isShow}/>
  }
  return NewComponent
}
