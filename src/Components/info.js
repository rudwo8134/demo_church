import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

const styles = {
    all:{
        display: 'flex',
        maxWidth: '1300px',
        margin: 'auto',
        paddingBottom: '40px',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "500px"
    },
    p1:{
        border: '1px solid grey',
        borderRadius: '35px',
        height: '100%',
        width: '24%',
        padding: '10px 40px',
        '& h1':{
            fontSize: '1.9rem',
            color: '#3366ff'
        },
        '& div':{
            borderBottom: '1px solid rgb(96,125,139)'
        }
    },
    p1_info:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        padding: '30px 0px',
        height:'130px',
        '& h2':{
            fontSize: '1rem',
            color: '#ff0000'
        }
    },
    p1_cal:{
        padding: '20px 0px'
    },
    p1_cal2:{
        padding: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '130px'

    }
    ,
    p2:{
        '& img':{
            width: '340px',
            height: '450px',
            transition: 'all 0.3s ease-in-out'
        },
        border: '1px solid grey',
        borderRadius: '35px',
        height: '100%',
        width: '24%',
        padding: '10px 40px',
        '&:hover img':{
            transform: 'scale(1.2)'
        }
    },
    p2_h:{ 
        '& h1':{
            fontSize: '1.4rem',
            textAlign: 'center',
            color: '#ff00ff'
        },
        padding: '10px',
        borderBottom: '1px solid rgb(96,125,139)',
        
    }
    ,
    p3:{
        '& img':{
            width: '296px',
            height: '135px',
            position: 'relative',
            padding: '10px 0px',
            borderRadius: '20px'
        },
        '& h1':{
            position: 'absolute',
            top: '90px',
            backgroundColor: 'rgba(63,124,205,0.85)',
            color:'white',
            fontSize: '1.8rem',
            borderRadius: '20px',
            padding:'10px 10px'

        },
        position: 'relative',
        border: '1px solid grey',
        borderRadius: '35px',
        height: '420px',
        width: '24%',
        padding: '50px 40px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

}

const info = (props) => {
    const {classes} = props
    return (
        <div className={classes.all}>
            <div className={classes.p1}>
                <div>
                    <h1>교회소식</h1>
                </div>
                <div className={classes.p1_info}>
                    <h2>교회소식</h2>
                    <p>2021년 5월 일정표</p>
                    <p>2021년 성경 읽기표</p>
                    <p>2020년 연말 보고서</p>
                </div>
                <div  className={classes.p1_cal}>
                    <h1>칼럼</h1>
                </div>
                <div className={classes.p1_cal2}>        
                    <p>부모님의 은혜 21-05-09</p>
                    <p>잠언과 함께 하는 5월 21-05-02</p>
                    <p>온라인 공동체 기도회 21-04-18</p>
                    <p>다시 집에 머물라 21-04-11</p>
                </div>
            </div>
            <div className={classes.p2}>
                 <div className={classes.p2_h}>
                    <h1>Children Daily Bible Q.T</h1>
                </div>
                <div>
                    <img src="https://tkpc.org/wp-content/uploads/2021/02/%EC%A0%80%EB%A7%A4%EC%98%81%EC%96%B4%EB%82%B4%EC%A7%80210102-1_0076-1-800x1101.jpg" alt='img'></img>
                </div>
            </div>
            <div className={classes.p3}>
                    <div>
                    <img src="https://live.staticflickr.com/65535/51160925070_91b3493ecc_z.jpg" alt='img'></img>
                    <h1>사진 앨범</h1>
                    </div>
                    <iframe width="296" height="300" src="https://www.youtube.com/embed/0nB5Z2T-tfQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default withStyles(styles)(info)
