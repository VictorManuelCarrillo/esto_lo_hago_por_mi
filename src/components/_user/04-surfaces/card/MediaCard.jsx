// Components
import TextButton from '../../01-inputs/button/TextButton'
// MUI components
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material'

//* Component properties ____________________//
//# image:         string
//# title:         string
//# content:       string
//# buttonActions: <object>   {
//#   text              (string)
//#   color             (string)
//#   start||endIcon    (object<icon>)
//#   onClick           (object<function>)
//#   href              (string)
//#   newTab            (boolean)
//# }
const MediaCard = (props) => {
  const { image, title, content, buttonActions } = props

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
        minHeight: '65vh',
      }}
    >
      {/* Media __________ */}
      <CardMedia image={image} title={title} sx={{ height: '20vw' }} />
      {/* Content __________ */}
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '0.8em',
            WebkitLineClamp: 2,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </Typography>
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
        <TextButton {...buttonActions} />
      </CardActions>
    </Card>
  )
}

export default MediaCard
