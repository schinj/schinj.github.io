import { Component } from "react"
import React from "react"
import Layout from "../components/layout"
import TicTacToe from '../tutorial_tictactoe/tictactoe'

export default function Work() {
  return (
    <Layout>
      <h1>Work</h1>
      <div style={{display: `grid`}}>
        <h1 style={{width:250}}>TicTacToe</h1>
        <TicTacToe />
      </div>
    </Layout>
  )
}