import Nav from './Nav'
import {useHistory} from 'react-router-dom';

export default function Contact()
{   let history = useHistory();
    let  nameOfUser = history.location.state;
    return (
        <>
        <Nav name={nameOfUser.name}/>
        <div className="contact-box box"><p>Contact</p></div>
        </>
    )
}