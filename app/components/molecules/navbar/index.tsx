import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link href="/" passHref className="navbar-brand">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/" passHref className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/createData" passHref className="nav-link">
              createdata
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/dashboard" passHref className="nav-link">
              dashboard
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
