import React, { Component, useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Support from "./components/Support";
import ListCast from "./components/ListCast";
import Modals from "./components/Modals";
import Nav from "./components/Nav";
import "./App.css";
import "./Nav.css";

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Meet the {this.props.name}</h1>;
  }
}

function App() {
  const name = "Dinosaucers";
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    const response = await fetch("cast.json");
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <>
    <Nav cast={cast} onChoice={(info) => { setMemberInfo(info) }} />
      <div className="container">
        <hgroup>
          {/* <img src="images/dinosaucers.jpg" /> */}
          <img src="images/group.svg" />

          {/* <Welcome name="Dinosaucers" />
          <Hello name="Dinoaliens" /> */}

          <h1>Meet the {name}</h1>

          <p>
            Members of an <b>intergalactic alliance</b> paving the way for
            peacebl and benevolence among all species. They are known for their
            enthusiasm for science, for their love of fun, and their dedication
            to education.
          </p>
          <ListCast
            cast={cast}
            onChoice={(info) => {
              setMemberInfo(info);
            }}
          />
          <Support />
          {memberInfo && (
            <Modals
              member={memberInfo}
              handleChange={ (info) => {
                info = info < 0 ? (cast.length - 1) :
                (info >= cast.length ? 0 : info)
                setMemberInfo(cast[info])
              }}
              handleClose={() => {
                setMemberInfo(null);
              }}
            />
          )}
        </hgroup>
      </div>
    </>
  );
}
export default App;
