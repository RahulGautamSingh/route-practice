import Nav from './Nav'
import {useHistory} from 'react-router-dom';

export default function Home()
{let history = useHistory();
    let  nameOfUser = history.location.state;
console.log(nameOfUser.name)
    return (
        <>
      <Nav name={nameOfUser.name}/>
        <div className="home-box box"><p>Home</p></div>
        </>
    )
}