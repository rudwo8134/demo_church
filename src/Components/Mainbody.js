import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { FaRegIdBadge } from 'react-icons/fa';

const styles ={
    container:{
        margin: "auto",
        maxWidth: "1300px",
        height: "450px",
        padding: "0px auto"
    },
    body_all:{
        position: 'relative',
        width: "100%",
        height: "400px",
        margin: "0",
        '& img':{
            width:"100%",
            height:"100%",
            opacity: "0.9"
        },
        
    },
    names:{
        position:"absolute",
        top:"30px",
        left:"80px",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'space-between'
    },
    nameinfo:{
        border: "1px solid rgb(62,118,204)",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: 'rgba(62,118,204,0.8)',
        color: '#f1f1f1',
        width: '300px',
        height: '70px',
        fontSize:'1.9rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        '& i':{
            paddingRight: '10px'
        }
    },
    nametime:{
        border: "1px solid rgb(4,4,4)",
        borderRadius: "10px",
        backgroundColor: 'rgba(4,4,4,0.7)',
        color: '#f1f1f1',
        width: '420px',
        height: '100px',
        fontSize:'1.2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        fontWeight: 'bold',
        padding: "5px 14px"
    },
    nameyou:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        fontSize: '0.7rem',
        backgroundColor: '#fe712d',
        color: '#f1f1f1',
        height: '90px',
        width: '400px',
    },
    logo:{
        height: '65px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'flex-start'
    },
    youtube:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        '& i':{
            fontSize: '2rem',
            color:'#f1f1f1',
            backgroundColor:'#f92215',
            border: '1px solid red',
            borderRadius: '50%',
            padding: "10px"
        },
        '& h1':{
            color: 'black',
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
       
    }
}

const body = (props) => {
    const {classes} = props
    return (
        <div className={classes.container}>
            <div className={classes.body_all} >
            <img className={classes.image} src="https://i.ytimg.com/vi/cbZxK8HdBXU/maxresdefault.jpg" alt="bg">
            </img>
            <div className={classes.names}>
            <h1 className={classes.nameinfo}> <i class="fas fa-tv"></i> 온라인 예배 안내</h1>
            <p className={classes.nametime}>
                <span>* 주일 예배 : 오전 10시, 오후 12시</span>
                <span>* 수요 예배 : 오후 7시 30분</span>
                <span>* 새벽 기도: 평일 오전 6시, 토요일 오전 6시 30분</span>
                </p>
            <button className={classes.nameyou}>
                <div className={classes.logo}>
                    <h1>온라인 방송 예배</h1>
                    <h1>바로가기 <i class="fas fa-arrow-right"></i></h1>
                </div>
                <div className={classes.youtube}>
                    <i class="fab fa-youtube"></i>
                    <h1>YouTube</h1>
                </div>
            </button>
            </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(body)
