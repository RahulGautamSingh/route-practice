import { useHistory } from "react-router-dom";
export default function Nav(props) {
  let history = useHistory();
  function loadNewPage(src) {
    history.push({ pathname: src, state: {name:props.name} })
  }
  return (
    <nav>
   
      <button className="main" onClick={() => loadNewPage("/")}>
      {"Hi, " + props.name}
      </button>
      <div className="buttons">
      <button className="home btn" onClick={() => loadNewPage("/home")}>
        Home
      </button>
      <button className="about btn" onClick={() => loadNewPage("/about")}>
        About
      </button>

      <button className="contact btn" onClick={() => loadNewPage("/contact")}>
        Contact
      </button>
      </div>
   
    </nav>
  );
}
