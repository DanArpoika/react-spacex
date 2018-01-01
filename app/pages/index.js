import React from 'react'
import axios from 'axios'
import { Link } from '../routes'
import Container from '../components/Container'

export default class Home extends React.Component {
  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launches?order=desc');
    const data = await call.data;

    return {query, data: data}
  }
  render () {
    const { data } = this.props;
    const launches = data.slice(0,9);

    return (
      <div>
        <Container>
          <h1>SpaceX Launch Data</h1>
          <div>
            {data.map((launch) =>
              <div key={Math.random()}>
                <Link route='launch' params={{launch: launch.flight_number}}>
                  <a>View Flight &rarr;</a>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </div>
    )
  }
}
