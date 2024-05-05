import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material'

const ActionCard = (props) => {
  const { image, title, content } = props
  return (
    <Card
      className="card"
      sx={{
        m: '0.5em',
        maxWidth: {
          xs: '80vw',
          sm: '40vw',
          md: '30vw',
          lg: '30vw',
          xl: '30vw',
        },
        minHeight: '65vh',
        transition: '0.5s ease',
        '&:hover': {
          opacity: 0.5,
        },
      }}
    >
      {/* Actions __________ */}
      <CardActionArea>
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
      </CardActionArea>
    </Card>
  )
}

export default ActionCard
