import React from 'react'
import { Link } from '../routes'

export default class Home extends React.Component {
  // static async getInitialProps ({query}) {
  //   // query.slug
  // }
  render () {

    const launches = [ 1, 2, 3, 4, 5, 6, 7];

    return (
      <div>
        <h1>index.js</h1>
        <ul>
          {launches.map((launch) =>
            <li key={Math.random()}>
              <Link route='launches' params={{launch: launch.toString()}}>
                <a>Launch {launch}</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    )

  }
}
