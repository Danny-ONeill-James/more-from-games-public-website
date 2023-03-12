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
            <li className="has-submenu parent-menu-item">
              <Link href="/games">Games</Link>
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
              <Link href="/miniatures">Miniatures</Link>
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
              <Link href="/articles">Articles</Link>
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
  );
}
