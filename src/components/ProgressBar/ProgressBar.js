/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const ProgressBase = styled.div`
  background: ${COLORS.transparentGray15};
  max-width: 370px;
  height: 8px;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 4px;
  overflow: hidden;
`

const Bar = styled.div`
  background: ${COLORS.primary};
  width: ${(props) => props.progress}%;
  height: 100%;
`

const MediumProgressBar = styled(ProgressBase)`
  height: 12px;
`

const LargeProgressBar = styled(ProgressBase)`
  height: 20px;
  padding: 4px;
  border-radius: 8px;
`

const Sizes = {
  medium: MediumProgressBar,
  large: LargeProgressBar,
}

const ProgressBar = ({ value, size }) => {
  const StyledProgressBar = Sizes[size] ?? ProgressBase

  return (
    <div>
      <VisuallyHidden>
        <span id="loadinglabel">Loading:</span>
      </VisuallyHidden>
      <StyledProgressBar
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
      >
        <Bar progress={value} />
      </StyledProgressBar>
    </div>
  )
}

export default ProgressBar
