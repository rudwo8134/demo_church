import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft style={{backgroundColor:'rgba(0,0,0,0.7)', fontSize:'2rem', color:'white'}} /> : <FaChevronRight style={{backgroundColor:'rgba(0,0,0,0.7)', fontSize:'2rem', color:'white'}}/>;

    return <div onClick={clickFunction}>{icon}</div>;
}