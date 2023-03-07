import Link from "next/link";
import Image from "next/image";

export default function NavigationComponent() {
  return (
    <nav
      id="topnav"
      className="defaultscroll is-sticky bg-white dark:bg-slate-900"
    >
      <div className="container">
        <div id="navigation">
          <ul className="navigation-menu">
            <li>
              <a href="index.html" className="sub-menu-item">
                Home
              </a>
            </li>

            <li className="has-submenu parent-menu-item">
              <a href="#">Docs</a>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <a href="documentation.html" className="sub-menu-item">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="changelog.html" className="sub-menu-item">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="widget.html" className="sub-menu-item">
                    Widget
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="contact-one.html" className="sub-menu-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
