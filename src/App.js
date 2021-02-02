import React from 'react';
import Row from "./Row";
import api from "./api";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner url={api.netflix_originals}/>
      <Row title="Netflix Originals" url={api.netflix_originals}/>
      <Row title="Trending Now" url={api.trending_now}/>
      <Row title="Comedy" url={api.comedy}/>
      <Row title="Horror" url={api.horror}/>
      <Row title="Romance" url={api.romance}/>
      <Row title="Documentries" url={api.doc}/>
    </div>
  );
}

export default App;
