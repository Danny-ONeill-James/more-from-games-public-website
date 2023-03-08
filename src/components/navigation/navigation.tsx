import Link from "next/link";

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
              <Link href="/" className="sub-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/games" className="sub-menu-item">
                Games
              </Link>
            </li>

            <li className="has-submenu parent-menu-item">
              <Link href="#">Docs</Link>
              <span className="menu-arrow"></span>
              <ul className="submenu">
                <li>
                  <Link href="documentation.html" className="sub-menu-item">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="changelog.html" className="sub-menu-item">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="widget.html" className="sub-menu-item">
                    Widget
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="contact-one.html" className="sub-menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
