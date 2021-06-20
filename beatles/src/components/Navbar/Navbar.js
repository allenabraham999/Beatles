function NavBar(props) {
  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a
            href="#!"
            class="brand-logo"
            onClick={() => {
              props.p("Brand");
            }}
          >
            The Beatles
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("album");
                }}
              >
                Album
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("news");
                }}
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => {
                  props.p("store");
                }}
              >
                Store
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
