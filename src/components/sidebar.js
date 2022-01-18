import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import GoogleBtn from "./google-btn";
import { ModalContext } from "../context/modal-context";
import { UserContext } from "../context/user-context";
import { Modal } from "./";
import { primaryColor } from "../config";
const NavLink = Link;
const Nav = styled.div`
  left: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  bottom: 0;
  place-items: center stretch;
  top: 0;
  font-size: 0.85em;
  height: 100vh;
  display: grid;
  padding: 0.3em;
  position: fixed;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  background: ${(props) => props.background};
  z-index: 10;
  @media (max-width: 860px) {
    height: 70px;
    width: 100vw;
    top: inherit;
    bottom: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const Sidebar = ({ active, darkMode }) => {
  const { modal, text, closeModal, displayModal } = useContext(ModalContext);
  const { user, setUser } = useContext(UserContext);
  const responseGoogle = (res) => {
    let profile = fit(res.profileObj);
    setUser(profile);
  };

  let fit = (profile) => {
    console.log(profile);
    let {
      givenName: fname,
      familyName: lname,
      email,
      imageUrl: photo,
      googleId: id,
    } = profile;
    return { id, fname, lname, email, photo };
  };

  return (
    <div style={{ position: "absolute" }}>
      <Modal modal={modal} close={closeModal} text={text} />
      <Nav background={darkMode ? "black" : primaryColor}>
        <NavLink className="nav-item txt-md center-items" to="/" 
        style={{  
          
          borderLeft: "3px solid " + (active === "home"? "white": primaryColor)}}
        >
          <i
            className={`material-icons lg-icon ${
              active === "home" ? "active-nav" : ""
            }`}
          >
            home
          </i>
          <div>Home</div>
        </NavLink>
        <NavLink className="nav-item txt-md center-items" to="/Projects"
        style={{  borderLeft: "3px solid " + (active === "project"? "white": primaryColor)}}
        >
          {" "}
          <i
            className={`material-icons lg-icon ${
              active === "project" ? "active-nav" : ""
            }`}
          >
            work
          </i>
          <div>Projects</div>
        </NavLink>
        <a
          className="nav-item txt-md center-items"
          onClick={() => displayModal("Thank you for downloading my Resume")}
          href="https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"
        >
          <i className="material-icons lg-icon ">account_circle</i>
          <div>Resume</div>
        </a>
        <span className="nav-item txt-md center-items">
          {!user ? (
            <GoogleBtn res={responseGoogle} />
          ) : (
            <div
              style={{
                display: "grid",
                placeItems: "center",
                textAlign: "center",
              }}
            >
              <img
                style={{ borderRadius: "50%", width: "3.5em" }}
                src={user.photo}
              />
              <div
                style={{
                  color: "white",
                  textOverflow: "ellipsis",
                  textSize: "1.5em",
                  lineHeight: "100$",
                }}
              >
                {user.fname}
              </div>
            </div>
          )}
        </span>
      </Nav>
    </div>
  );
};

export default Sidebar;
