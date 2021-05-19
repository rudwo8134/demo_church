import React,{useState} from 'react'
import Spinner from '../Components/Spinner'
import Arrow from '../Components/Selector'
import { SLIDE_INFO } from '../data/slidedata';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container:{
       display: 'flex',
       maxWidth: '1300px',
       margin: 'auto',
       padding: '0 auto',
       alignItems: 'center',
       justifyContent: 'space-between',
       height: '200px'
    },
  
}

const Slidefull = (props) => {
    const {classes} = props
    const [index, setIndex] = useState(0);
    const slidedata = SLIDE_INFO.slice(index,index+5);
    const numSlides = SLIDE_INFO.length;

    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');
  
    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -5 : 5;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };
    return (
        <div className={classes.container}>
        <Arrow
                  direction='left'
                  clickFunction={() => onArrowClick('left')}
              />
                <Spinner content={slidedata} />
              <Arrow
                  direction='right'
                  clickFunction={() => onArrowClick('right')}
              />
        </div>  
            
    )
}

export default withStyles(styles)(Slidefull)
