import React from 'react'
import Logo from '../img/church_logo.png'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/Navbarstyle'

const Navbar = (props) => {
    const {classes} = props
    return (
        <nav className={classes.Navbar}>
            <div className={classes.Navbar_all}>
                <div className={classes.Navbar_logo}>
                    <img src={Logo} alt="church_logo"></img>
                    <div className={classes.Navbar_title}>
                        <div className={classes.Navbar_kotitle}>토론토한인장로교회</div>
                        <div className={classes.Navbar_entitle}>TORONTO KOREAN <p></p>PRESBYERIAN CHURCH</div>
                    </div>
                </div>
               
                <div className={classes.Navbar_list}>
                    <ul className={classes.Navbar_list_all}>
                        <li>교회소개</li>
                        <li>사역</li>
                        <li>국내선교</li>
                        <li>양육</li>
                        <li>교회학교</li>
                        <li>교제</li>
                        <li>방송</li>
                        <li>현금안내</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withStyles(styles)(Navbar) 
