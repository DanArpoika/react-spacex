import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Container from '../components/Container'

export default class Site extends React.Component {
  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launchpads?flight_number=' + query.site);
    const data = await call.data;

    return {query, data: data[0]}
  }

  render() {
    const { data } = this.props;

    return (
      <main>
        <Container>
          <SiteTitle>{data.full_name}</SiteTitle>

          <div>
            <h3>Details</h3>
            <p>{data.details}</p>
          </div>

          <div>
            <h3>Status</h3>
            <div>{data.status}</div>
          </div>

          <div>
            <h3>Vehicles Launched</h3>
            <div>{data.vehicles_launched.join(', ')}</div>
          </div>

          <div>
            <h3>Location</h3>
            <div>{data.location.name}, {data.location.region}</div>
          </div>

          <div>
            <h3>GPS</h3>
            <div>{data.location.latitude}, {data.location.longitude}</div>
          </div>
        </Container>
      </main>
    )
  }
}

const SiteTitle = styled.h1 `
  font-size: 4.5rem;
  width: ${7 / 12 * 100}%;
  line-height: 1.333;
  margin-bottom: 8rem;
  ${'' /* border-bottom: 4px solid var(--black); */}
`
