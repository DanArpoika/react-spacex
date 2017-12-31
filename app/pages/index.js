import React from 'react'
import axios from 'axios'
import { Link } from '../routes'

export default class Home extends React.Component {
  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launches?order=desc');
    const data = await call.data;

    return {query, data: data}
  }
  render () {
    const { data } = this.props;
    const launches = data.slice(-10);

    return (
      <div>
        <h1>index.js</h1>
        <ul>
          {launches.map((launch) =>
            <li key={Math.random()}>
              <Link route='launches' params={{launch: '10'}}>
                <a>Launch {launch.flight_number}</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    )

  }
}
