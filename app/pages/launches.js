import React from 'react'
import axios from 'axios'

export default class Launches extends React.Component {

  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launches?flight_number=' + query.launch);
    const data = await call.data;

    return {query, data: data[0]}
  }

  render () {
    const { data } = this.props
    const precendingZero = (num) => num < 10 ? '0' + num.toString() : num;

    return(
      <h1>Launch {precendingZero(data.flight_number)}</h1>
    )
  }
}
