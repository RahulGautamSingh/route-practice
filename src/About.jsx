import Nav from './Nav'
import {useHistory} from 'react-router-dom';

export default function About()
{   let history = useHistory();
    let  nameOfUser = history.location.state;
    return (
        <>
        <Nav name={nameOfUser.name}/>
        <div className="about-box box"><p>About</p></div>
        </>
    )
}