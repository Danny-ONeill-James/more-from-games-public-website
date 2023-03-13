import Link from "next/link";
import { useState } from "react";

export default function NavigationComponent() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav
        id="topnav"
        className="defaultscroll is-sticky bg-white dark:bg-slate-900"
      >
        <div className="container">
          <div className="menu-extras">
            <div className="menu-item">
              <a
                className={isOpen ? "navbar-toggle open" : "navbar-toggle"}
                id="isToggle"
                onClick={() => setOpen((current) => !current)}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
          <div
            id="navigation"
            style={isOpen ? { display: "block" } : { display: "none" }}
          >
            <ul className="navigation-menu">
              <li>
                <Link
                  href="/"
                  className="sub-menu-item"
                  onClick={() => setOpen((current) => !current)}
                >
                  Home
                </Link>
              </li>
              <li className="has-submenu parent-menu-item">
                <Link
                  href="/games"
                  onClick={() => setOpen((current) => !current)}
                >
                  Games
                </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link href="/games" className="sub-menu-item">
                      All Games
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-menu-item">
                <Link
                  href="/miniatures"
                  onClick={() => setOpen((current) => !current)}
                >
                  Miniatures
                </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link href="/miniatures" className="sub-menu-item">
                      All Miniatures
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-menu-item">
                <Link
                  href="/articles"
                  onClick={() => setOpen((current) => !current)}
                >
                  Articles
                </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link href="/articles" className="sub-menu-item">
                      All Articles
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <script src="@/assets/js/plugins.init.js"></script>
      <script src="@/assets/libs/shufflejs/shuffle.min.js"></script>
      <script src="@/assets/libs/feather-icons/feather.min.js"></script>

      <script src="@/assets/js/app.js"></script>
    </>
  );
}
