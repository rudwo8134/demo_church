const styles ={
    Footer_all:{
        backgroundColor:"#2c2d2f",
        color:"#bfbfbf",
        height: "350px",
        maxWidth: "100%",
        margin: "auto"
    },
    Footer_top:{
        width: "90%",
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px',
        borderBottom: "1px solid #f1f1f1",
        margin: 'auto',
        '& div img':{
            width: "70px",
            height: "70px"
        },
        '& div':{
            height: '90px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-between',
        },
    },
   Footer_bottom:{
       display: "flex",
       flexDirection: "column",
       justifyContent:'center',
       alignItems:'center',
       width: "100%",
       margin: "auto"
   },
   Footer_logo:{
    width: '28%',
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    '& div:nth-of-type(1)':{
        backgroundColor: '#3b5998',
        border: '1px solid #3b5998',
        height: '60px',
        width: '60px',
        borderRadius: "50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1.7rem',
        transition: "all 0.3s ease-in-out"
    },
    '& div:nth-of-type(1):hover':{
        transform: 'scale(1.3)'
    },
    '& div:nth-of-type(2)':{
        backgroundColor: '#1ab7ea',
        border: '1px solid #1ab7ea',
        height: '60px',
        width: '60px',
        borderRadius: "50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1.7rem',
        transition: "all 0.3s ease-in-out"
    },
    '& div:nth-of-type(2):hover':{
        transform: 'scale(1.3)'
    },
    '& div:nth-of-type(3)':{
        backgroundColor: '#0063dc',
        border: '1px solid #0063dc',
        height: '60px',
        width: '60px',
        borderRadius: "50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1.7rem',
        transition: "all 0.3s ease-in-out"
    },
    '& div:nth-of-type(3):hover':{
        transform: 'scale(1.3)'
    },
    '& div:nth-of-type(4)':{
        backgroundColor: '#cd201f',
        border: '1px solid #cd201f',
        height: '60px',
        width: '60px',
        borderRadius: "50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1.7rem',
        transition: "all 0.3s ease-in-out"
    },'& div:nth-of-type(4):hover':{
        transform: 'scale(1.3)'
    }
},
    Footer_copyright:{

    }

}

export default styles