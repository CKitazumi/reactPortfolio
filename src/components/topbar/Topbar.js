import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            full stack student.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(408)368-3428</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>codykitazumi@gmail.com</span>
          </div>
          <div className='logobar'> 
            <a href="https://www.linkedin.com/in/cody-kitazumi-a533ab110/"><img src="assets/linkedin.png" height="30" width="30"/></a>
          </div>
          <div className='logobar'> 
            <a href="https://github.com/CKitazumi"><img src="assets/github.png" height="40" width="70"/></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}