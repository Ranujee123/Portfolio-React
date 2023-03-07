import React from "react";

function NavBar() {
  return (
    <div className="container is-fluid pl-0 pr-0">
      <nav className="navbar is-dark is-fixed-top">
        <div className="navbar-brand ml-4">
          <a className="navbar-item" href="./index.html"></a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu pl-1">
          <div className="navbar-start">
            <a className="navbar-item navtext" href="./index.html">
              Home
            </a>
            <a className="navbar-item navtext" href="#about">
              About me
            </a>
            <a className="navbar-item navtext" href="#education">
              Education
            </a>
            <a className="navbar-item navtext" href="#expirience">
              Experience
            </a>
            <a className="navbar-item navtext" href="#Activities">
              Activities
            </a>
            <a className="navbar-item navtext" href="#git">
              Contact
            </a>
          </div>
          <div className="navbar-end mr-6">
            <span className="navbar-item">
              <a className="button is-light is-inverted">
                <span>Contact Me</span>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default NavBar;
