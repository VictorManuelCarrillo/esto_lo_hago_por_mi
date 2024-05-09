// MUI components
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material'
// MUI icons
import { Share } from '@mui/icons-material'
// components
import IconButton from '../../01-inputs/button/IconButton'
import ContainedButton from '../../01-inputs/button/ContainedButton'
import PrimaryTooltip from '../../02-data-display/tooltip/PrimaryTooltip'

//* properties:
//# title:         string
//# subtitle:      string
//# image:         string
//# content:       string
//# buttonActions: object   {
//#   text              (string)
//#   color             (string)
//#   start||endIcon    (object<icon>)
//#   onClick           (object<function>)
//#   href              (string)
//#   newTab            (boolean)
//# }

const ComplexCard = (props) => {
  //extraction of properties
  const { title, subtitle, image, content, buttonActions } = props

  return (
    <Card
      sx={{
        m: '0.5em',
        maxWidth: {
          xs: '80vw',
          sm: '40vw',
          md: '30vw',
          lg: '30vw',
          xl: '20vw',
        },
        minHeight: '65vh'
      }}
    >
      {/* Header __________ */}
      <CardHeader
        action={
          <PrimaryTooltip text="compartir" placement="top-start">
            <IconButton icon={<Share />} color="inherit" />
          </PrimaryTooltip>
        }
        // header title element __________//
        title={
          <Typography
            variant="h5"
            textTransform="uppercase"
            fontWeight="bold"
            sx={{
              WebkitLineClamp: 2,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </Typography>
        }
        // header subtitle element __________//
        subheader={<Typography variant="subtitle">{subtitle}</Typography>}
      />
      {/* Media  __________ */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ maxHeight: '40vw' }}
      />
      {/* Content __________ */}
      <CardContent>
        <Typography
          variant="body1"
          sx={{
            WebkitLineClamp: 5,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {content}
        </Typography>
      </CardContent>
      {/* Actions __________ */}
      <CardActions>
        <ContainedButton {...buttonActions} />
      </CardActions>
    </Card>
  )
}

export default ComplexCard
