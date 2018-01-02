import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from '../routes'
import Layout from '../components/Layout'
import Container from '../components/Container'
import formatDate from '../util/formatDate'

export default class Home extends React.Component {
  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launches?order=desc');
    const data = await call.data;

    return {query, data: data}
  }
  render () {
    const { data } = this.props;
    console.log(data);

    return (
      <Layout>
        <Container>
          <h1>SpaceX Launch Data</h1>
          <FlightList>
            {data.map((launch) =>
              <Flight key={Math.random()}>
                <h2 style={{fontSize: '8rem', margin: 0, lineHeight: 1}}>{launch.flight_number}</h2>
                <FlightDate>{formatDate(launch.launch_date_local)}</FlightDate>
                <Location>{launch.launch_site.site_name}</Location>
                <Link route='launch' params={{launch: launch.flight_number}} prefetch>
                  <a><FlightLink>View Flight</FlightLink></a>
                </Link>
              </Flight>
            )}
          </FlightList>
        </Container>
      </Layout>
    )
  }
}

const FlightList = styled.div `
  display: flex;
  border-top: 4px solid var(--black);
  border-bottom: 4px solid var(--black);
  padding: 4rem 0;
  overflow: scroll;
`

const Flight = styled.div `
  flex: 0 0 25%;
  padding: 1.5rem;

  &:first-of-type {
    ${'' /* border-left: 2px solid var(--black); */}
    padding-left: 0;
  }

  &:not(:first-of-type) {
    border-left: 2px solid var(--black);
  }
`

const FlightDate = styled.div `
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 200;
`

const Location = styled.div `
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.75rem;
  font-family: 'Oswald';
  letter-spacing: 0.15em;
  color: var(--gray);
`

const FlightLink = styled.span `
  font-size: 0.875rem;
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover {
    color: var(--gray);
    cursor: pointer;
  }
`
