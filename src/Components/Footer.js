import React from 'react'
import Map from '../img/map_icon.png'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/Footerstyle'



const Footer = (props) => {
    const {classes} = props
    return (
        <footer>
            <div className={classes.Footer_all}>
                <div className={classes.Footer_top}>
                    <div>
                        <span><i class="fas fa-map-pin"></i>주소</span>
                        <span className={classes.address}>67 Scarsdale Rd,<br></br> North York, Ontario<br></br> M3B2R2</span>
                    </div>
                    <div>
                        <span><i class="fas fa-phone"></i>Phone</span>
                        <span>(416) 447-5963</span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span><i class="fas fa-at"></i>E-mail</span>
                        <span>tkpc100@gmail.com</span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span>오시는길</span>
                        <img src={Map} alt="map"></img>
                    </div>
                </div>
                <div className={classes.Footer_bottom}>
                    <div className={classes.Footer_logo}>
                        <div className="{classes.Footer_logobox1}">
                            <i class="fab fa-facebook-f"></i> 
                        </div>
                        <div className="{classes.Footer_logobox2}">
                        <i class="fab fa-vimeo-v"></i>
                        </div>
                        <div className="{classes.Footer_logobox3}">
                        <i class="fab fa-flickr"></i>
                        </div>
                        <div className="{classes.Footer_logobox4}">
                        <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                    <div className={classes.Footer_copyright}>
                    Copyright © 2021 Toronto Korean Presbyterian Church, All Rights Reserved.
                    </div>                    
                </div>
            </div>            
        </footer>
    )
}

export default withStyles(styles)(Footer)
