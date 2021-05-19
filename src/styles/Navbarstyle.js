const styles= {
    Navbar:{
        maxWidth: '1300px',
        padding: '1rem auto',
        margin: 'auto',
        height: '132px',
        position: 'sticky',
        top: '0px',
        left: '0px',
        zIndex: '50',
        backgroundColor: 'white'
    },
    Navbar_all:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    Navbar_logo:{
        flex: '2',
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        '& img':{
            width:'80px',
            height: '80px'
        }
    },
    Navbar_title:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        alignItems: "center",
    },
    Navbar_kotitle:{
        fontSize:'2rem',
        fontWeight: 'bold',
        paddingBottom: '3px'
    },
    Navbar_entitle:{
        fontSize:'1.1rem',
        fontWeight: '300'
    },
    Navbar_list:{
        flex: '4',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Navbar_list_all:{
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& li':{
            width:"auto",
            fontSize: '1.3rem',
            listStyle: 'none',
            paddingLeft: '32px',
            transition: 'all 0.3s ease-in-out'
        },
        '& li:hover':{
            color: '#0259f9',
            transform: 'scale(1.2)'
        }
    }
}

export default styles