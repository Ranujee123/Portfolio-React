import React from "react";

function AboutMe() {
  return (
    <section className="container is-fluid pl-0 pr-0 land mt-6">
      <div className="columns mr-6 ml-6">
        <div className="column">
          <div className="text mb-0 mt-0">
            <br />
            <br />
            <br />
            <span className="is-hidden-mobile" style={{ fontSize: "2em" }}>
              Hello, I'm
            </span>
            <br />
            <br />
            <div className="block">
              <span
                style={{
                  fontSize: "4em",
                  color: "rgb(255, 255, 255)",
                  marginBottom: 0,
                }}
              >
                Vidhara Ranujee <br />
                <a
                  className="button is-medium is-discord is-outlined is-rounded mb-6 mt-6 items is-responsive"
                  href="Vidhara.pdf"
                >
                  <span className="icon">
                    <i className="fa-solid fa-download ml-2" />
                  </span>
                  <span>DOWNLOAD RESUME </span>
                </a>
              </span>
              <br />
              <span style={{ fontSize: "2em", marginTop: 0 }}>
                Announcer | Dubbing Artist | Voice Actor
              </span>
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
      <section id="about">
        <div className="container is-fluid box1">
          <h1 className="title is-1 pl-4">About Me</h1>
          <p
            className="mt-4 subtitle is-3 is-spaced"
            style={{ color: "black", fontSize: "18pt" }}
          >
            Friendly and determined performer with a focus on speaking and
            performing to large groups in social environments. Passionate and
            dynamic dubbing artist who adept in making characters come to life
            through powerful voice over work.Strong team player with the desire
            to use my voice as a stellar source of entertainment
          </p>
          <div
            className="box"
            style={{ backgroundColor: "rgba(240, 248, 255, 0)" }}
          >
            <div className="columns">
              <div className="column">
                <h1
                  className="subtitle is-3 pl-4"
                  style={{ color: "black", fontSize: "18pt" }}
                >
                  Name: Vidhara Ranujee
                </h1>
                <h1
                  className="subtitle is-3 pl-4"
                  style={{ color: "black", fontSize: "18pt" }}
                >
                  Age: 21 years
                </h1>
                <h1
                  className="subtitle is-3 pl-4"
                  style={{ color: "black", fontSize: "18pt" }}
                >
                  Address: Maharagama, SriLanka
                </h1>
              </div>
              <div className="column">
                <h1
                  className="subtitle is-3 pl-4"
                  style={{ color: "black", fontSize: "18pt" }}
                >
                  Email: ranu2001vi@gmail.com
                </h1>
                <h1
                  className="subtitle is-3 pl-4"
                  style={{ color: "black", fontSize: "18pt" }}
                >
                  Contact No: +94 771 234 5698
                </h1>
                <h1
                  className="subtitle is-3 pl-4"
                  style={{ color: "black", fontSize: "18pt" }}
                >
                  University: University of Colombo
                </h1>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AboutMe;