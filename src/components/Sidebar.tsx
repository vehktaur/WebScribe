import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside>
      <div className="container">
        <div className="sidebar">
          <h2>WebScribe</h2>
          <hr />
          <nav>
            <ul className="nav__list">
              <li>
                <NavLink className="nav__link" to="/">
                  Notes
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to="create-note">
                  Create Note
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}
