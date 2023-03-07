import React from "react";

function Contact() {
  return (
    <section id="last" className="container-fluid b2   ">
      <section id="expirience">
        <div>
          <h1 className="title is-1 pl-4" style={{ color: "white" }}>
            Experience
          </h1>
          <p
            className="mt-4 ml-6 mr-6 subtitle is-3 is-spaced"
            style={{ color: "white", fontSize: "18px" }}
          >
            “MINEKO” is the Japanese drama I’m currently working as a dubbing
            artist
            <br />
            Hosted events at University of Colombo and Visakha Vidyalaya
          </p>
        </div>
      </section>
      <br />
      <section id="Activities">
        <h1 className="title is-1 pl-4 mt-5" style={{ color: "white" }}>
          Activities
        </h1>
        <div
          className="box ml-6 mr-6"
          style={{
            backgroundColor: "rgba(240, 248, 255, 0.251)",
            color: "aliceblue",
          }}
        >
          <ul>
            <li>
              {" "}
              <p6>Organizer of media club of Visakha Vidyalaya</p6>
            </li>
            <li>
              <p6> Announcer at Visakha Vidyalaya</p6>
            </li>
            <li>
              <p6>
                {" "}
                Member of IEEE Student Branch of University Of Colombo School of
                Computing{" "}
              </p6>
            </li>
            <li>
              <p6> Member of AIESEC in University of Colombo</p6>
            </li>
            <li>
              <p6>
                {" "}
                Organizing committee vice president of RevolUX 2.0 designathon
                organized by AIESEC in University of Colombo
              </p6>
            </li>
            <li>
              <p6> Former Assistant treasurer at Leo Club of Mattegoda</p6>
            </li>
            <li>
              <p6>
                {" "}
                Member of Rotaract club of University Of Colombo School of
                Computing
              </p6>
            </li>
            <li>
              <p6> Member of UNESCO club of Visakha Vidyalaya</p6>
            </li>
          </ul>
        </div>
      </section>
      <br />
      <h1 className="title is-1 pl-4 mt-5" style={{ color: "white" }}>
        Contact
      </h1>
      <div id="cont">
        <div className="field">
          <label className="label1">First and Last Name</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input "
              type="text"
              placeholder="Vidhara Ranujee"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label1">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input "
              type="text"
              placeholder="sample@example.com"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label1">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Text Area"
              defaultValue={""}
            />
          </div>
        </div>
        <br />
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
      <section id="git" className="mt-6">
        <div className="container is-fluid">
          <div className="notification is-dark">
            <h1
              className="subtitle is-5 pl-4 mb-0 pb-0"
              style={{ color: "rgb(255, 255, 255)", fontStyle: "italic" }}
            >
              Get in Touch with me
            </h1>
            <div className="container ml-6">
              <h1 className="text">
                <i className="fa-sharp fa-solid fa-location-arrow" />{" "}
                Maharagama, Sri Lanka
              </h1>
              <h1 className="text">
                <i className="fa-solid fa-at" /> ranu2001vi@gmail.com
              </h1>
              <h1 className="text">
                <i className="fa-solid fa-phone" /> +94 771 234 5698
              </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
