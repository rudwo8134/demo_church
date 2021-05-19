import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles= {
    container:{
        maxWidth: '1300px',
        margin: 'auto',
        height:'300px',
    },
    inner:{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'space-between',
        '& iframe':{
            padding: '0 40px'
        }
    }
}

const video = (props) => {
    const {classes} = props
    return (
        <div className={classes.container}>
        <div className={classes.inner}>
          
          <div>
          <iframe src="https://player.vimeo.com/video/551233833?title=0&byline=0&portrait=0" width="350" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
          
          <div><iframe src="https://player.vimeo.com/video/551233833?title=0&byline=0&portrait=0" width="350" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
         <div>
         <iframe src="https://player.vimeo.com/video/551233833?title=0&byline=0&portrait=0" width="350" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
         </div>
          </div>
        </div>
    )
}

export default withStyles(styles)(video)
