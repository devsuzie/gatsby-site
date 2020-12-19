import React from "react"
import indexStyles from "./index.module.scss"

import Header from "../components/header"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <div className={indexStyles.wrap}>
      <Head title="Home" />
      <Header />

      <div className={indexStyles.bgOne}></div>
      <div className={indexStyles.bgTwo}></div>
      <div className={indexStyles.bgThree}></div>

      <div className={indexStyles.container}>
        <h1>Front End Developer</h1>
        <span className={indexStyles.subTitle}>Programming + Design</span>

        <span className={indexStyles.scroll}></span>

        <ul>
          <li>
            <a href="https://suzie-project.netlify.app/this-music.html">
              TODO APP
            </a>
          </li>
          <li>
            <a href="https://suzie-project.netlify.app/todo-app.html">
              TODO APP
            </a>
          </li>
          <li>
            <a href="https://suzie-project.netlify.app/notes-app.html">
              NOTES APP
            </a>
          </li>
          <li>
            <a href="https://suzie-project.netlify.app/timer-app.html">
              TIMER APP
            </a>
          </li>
          <li>
            <a href="https://suzie-project.netlify.app/weather-app.html">
              WEATHER APP
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IndexPage
