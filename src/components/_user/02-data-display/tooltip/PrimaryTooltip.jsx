import { Tooltip } from "@mui/material"

const PrimaryTooltip = (props) => {

  const {text, placement, children} = props

  return (
    <Tooltip title={text} placement={placement} arrow>
      {children}
    </Tooltip>
  )
}

export default PrimaryTooltip
