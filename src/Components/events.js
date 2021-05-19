import React from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles ={
    event:{
        maxWidth:'1300px',
        margin: "auto",
        padding: "10px auto",
        display: 'flex',
        justifyContent: 'space-between',
        height: '200px',
        '& div img':{
            height: '170px',
            width: '260px',
            transition: 'all 0.3s ease-in-out'
        },
        '& div:hover img':{
            transform:'scale(1.2)'
        }
    }

}
const events = (props) => {
    const {classes} = props
    return (
        <div className={classes.event}>
            <div className={classes.box}>
                <img className={classes.img} src="https://tkpc.org/wp-content/uploads/2021/03/300x160-Thumbnail-MorningPrayer.jpg"alt="title"></img>
            </div>
            <div className={classes.box}>
                <img className={classes.img} src="https://tkpc.org/wp-content/uploads/2020/10/300x160-Thumbnail-Jubo.jpg"alt="title1"></img>
            
            </div>
            <div className={classes.box}>
                <img className={classes.img} src="https://tkpc.org/wp-content/uploads/2020/10/300x160-Thumbnail-JBibleStudy.jpg"alt="title2"></img>
        
            </div>
            <div className={classes.box}>
                <img className={classes.img} src="https://tkpc.org/wp-content/uploads/2020/10/300x160-Thumbnail-Audio.jpg"alt="title3"></img>
    
            </div>
        </div>
    )
}

export default withStyles(styles)(events)
