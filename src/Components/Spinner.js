import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { FaFileExcel } from 'react-icons/fa';


export default function CarouselSlide(props) {
    const con= props.content

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            padding: '0px auto',
            margin: '0px',
            width:'200px',
            height: '85px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 0.3s ease-in-out',
            '&:hover':{
                transform: 'scale(1.2)'
            }
        },
        cardcontainer:{
            display: 'flex',
            flexDirection: 'row',
            height: '300px',
            width:"97%",
            justifyContent: 'space-between',
            alignItems: 'center'

        }
    }));

    const classes = useStyles();
    return (
        <div className={classes.cardcontainer}>
            {con.map(x =>(
            <Card className={classes.card}>
                 <img src={x.src} alt={x.title}></img>
             </Card>
            ))}
       </div>
    );
}