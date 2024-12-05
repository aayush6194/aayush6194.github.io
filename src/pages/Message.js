import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import posed from "react-pose";
import { Loader, Sidebar, DarkMode, SEO, Header } from "../components/";
import api from "../api";
import { ModalConsumer } from "../context/modal-context";
import { safeSetLocalStorage, safeGetLocalStorage } from "../utils/localstorage";

const Box = styled(
  posed.div({
    start: { scale: 0, opacity: 0.6 },
    end: { scale: 1, opacity: 1 },
    transition: {
      duration: 210,
      ease: "linear",
    },
  })
)``;

const Grid = styled.form`
  display: grid;
  grid-template-columns: 60px auto;
  color: white;
  font-weight: bold;
  width: 60%;
  max-width: 1000px;
  margin: auto;
  @media (max-width: 1600px) {
    grid-template-columns: 85px auto;
  }
  @media (max-width: 720px) {
    width: 95%;
    grid-template-columns: 100px auto;
  }
`;

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
      file: null,
      fileNum: 0,
      stage: "start",
      darkMode: false,
      loading: false,
    };
  }

  getDarkMode() {
    let mode =
      (safeGetLocalStorage("dark-mode")
        ? safeGetLocalStorage("dark-mode")
        : false) === "true"
        ? true
        : false;
    this.setState({ darkMode: mode });
  }

  componentDidCatch(error, errorInfo) {
    console(error);
    console(errorInfo);
  }

  toggleDarkMode = (mode) => {
    safeSetLocalStorage("dark-mode", mode === "dark" ? true : false);
    this.setState({ darkMode: mode === "dark" ? true : false });
  };

  submit(displayModal) {
    const { name, email, message, subject } = this.state;
    const messageObj = { name, email, subject, message };
    if (!name || !email || !message)
      return displayModal("Enter all the fields");
    this.setState({ loading: true });
    api
      .message(messageObj)
      .then((res) => {
        if (res.success) displayModal("Sucessfully Submitted your Message");
        else displayModal("Could not Submit your Message. Please Try again");
        this.setState({ name: "", email: "", message: "", subject: "" });
      })
      .catch((e) => displayModal("Error. Please Try Again Later"))
      .finally(() => this.setState({ loading: false }));
  }


  componentDidMount() {
    this.getDarkMode();
    //  this.load();
    this.setState({ stage: "end" });
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { darkMode } = this.state;
    const { name, email, message, subject } = this.state;
    return (
      <Layout darkMode={darkMode}>
        <ModalConsumer>
          {({ displayModal }) => (
            <>
              <SEO
                title="Message"
                keywords={[`gatsby`, `application`, `react`]}
              />
              <div className="container">
                <Sidebar active={"message"} darkMode={darkMode} />
                <Header active={"message"} darkMode={darkMode} />
                <Box pose={this.state.stage}>
                  <div>
                    {this.state.loading && <Loader />}
                    <Grid
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.submit(displayModal);
                      }}
                    >
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="input"
                        id="name"
                        name="name"
                        onChange={this.change}
                        value={name}
                      />
                      <label htmlFor="email">Email: </label>
                      <input
                        type="email"
                        className="input"
                        id="email"
                        name="email"
                        onChange={this.change}
                        value={email}
                      />
                      <label htmlFor="subject">Subject: </label>
                      <input
                        type="text"
                        className="input"
                        id="text"
                        name="subject"
                        onChange={this.change}
                        value={subject}
                      />
                      <label htmlFor="messagel">Message: </label>
                      <input
                        type="text"
                        className="input"
                        id="text"
                        name="message"
                        onChange={this.change}
                        value={message}
                      />
                      <button
                        className={`input bt bt-custom row btt ${
                          darkMode && "dark-btn"
                        }`}
                        onClick={() => this.submit(displayModal)}
                      >
                        Submit
                      </button>
                    </Grid>
                  </div>
                </Box>
                <DarkMode
                  toggleDarkMode={this.toggleDarkMode}
                  darkMode={darkMode}
                />
              </div>
            </>
          )}
        </ModalConsumer>
      </Layout>
    );
  }
}
export default Message;
