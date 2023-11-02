import React from "react";
import Nav from "./components/nav"
import Head from "./components/head"
import Card from "./components/card"
import data from "./data.js" // fetching the array of objects 

export default function Apps() {
  let newData = data.map(item => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    )
  })
  console.log(newData)
  return (<>
    <Nav />
    <Head />
    <section className="card-section">
      {newData}
    </section>
  </>)
}