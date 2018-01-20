import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Container from '../components/Container'
import CellTitle from '../components/CellTitle'
import formatDate from '../util/formatDate'
import commaNumber from '../util/commaNumber'
import precedingZero from '../util/precedingZero'
import CellGroup from '../components/CellGroup'
import Cell from '../components/Cell'
import CellRow from '../components/CellRow'
import LargeText from '../components/LargeText'
import { Link } from '../routes'

export default class Launch extends React.Component {

  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launches?flight_number=' + query.launch);
    const data = await call.data;

    return {query, data: data[0]}
  }

  render () {
    const { data } = this.props;
    console.log(data)

    const flightNumber = precedingZero(data.flight_number)
    const date = formatDate(data.launch_date_local);
    const result = data.launch_success === true ? 'Success' : 'Failure';
    const color = data.launch_success === true ? 'green' : 'red';
    const checkNull = (data) => data === null ? 'N/A' : data;
    const nullColor = (data) => data === null ? 'var(--inactive)' : 'inherit';

    return(
      <Layout>
        <Head>
          <title>Flight {flightNumber} - {date} | SpaceX Launch Data</title>
        </Head>
        <Container>

          <CellSection>
            <CellGroup>
              <CellRow>
                <Cell cols={2} style={{paddingTop: '40px', paddingBottom: '32px'}}>
                  <CellTitle>Flight</CellTitle>
                  <Flight>{flightNumber}</Flight>
                </Cell>

                <Cell cols={6} border="left">
                  <CellTitle>Info</CellTitle>
                  <LargeText>{date}</LargeText>
                  <div style={{color: 'var(--gray)', fontSize: '0.875rem', marginTop: '0.5rem'}}>
                    <Link route="pad" params={{site: data.launch_site.site_id}} prefetch>
                      <a>{data.launch_site.site_name_long}</a>
                    </Link>
                  </div>
                </Cell>

                <Cell cols={4} border="left">
                  <CellTitle>Rocket</CellTitle>
                  <LargeText>{data.rocket.rocket_name}</LargeText>
                  <div style={{color: 'var(--gray)', fontSize: '0.875rem', marginTop: '0.5rem'}}>
                    <Link route="rocket" params={{rocket: data.rocket.rocket_id}} prefetch>
                      <a>View {data.rocket.rocket_name}</a>
                    </Link>
                  </div>
                </Cell>
              </CellRow>

              {data.details &&
                <CellRow>
                  <Cell cols={8}>
                    <CellTitle>Details</CellTitle>
                    <p style={{lineHeight: 1.5, margin: '0.75em 0 0 0', fontSize: '0.875rem'}}>{data.details}</p>
                  </Cell>
                  <Cell cols={4} border="left">
                    <CellTitle>Result</CellTitle>
                    <LargeText style={{color: `var(--${color})`}}>{result}</LargeText>
                  </Cell>

                </CellRow>
              }
            </CellGroup>
          </CellSection>

          <CellSection>

            <h2>First Stage</h2>

            <CellGroup>
              {data.rocket.first_stage.cores.map((core, i) =>
                <CellRow key={i}>
                  <Cell cols={4}>
                    <CellTitle>Core Serial</CellTitle>
                    <LargeText>{core.core_serial}</LargeText>
                  </Cell>
                  <Cell cols={4} border="left">
                    <CellTitle>Landing Type</CellTitle>
                    <LargeText style={{color: nullColor(core.landing_type)}}>
                      {checkNull(core.landing_type)}
                    </LargeText>
                  </Cell>
                  <Cell cols={4} border="left">
                    <CellTitle>Landing Vehicle</CellTitle>
                    <LargeText style={{color: nullColor(core.landing_vehicle)}}>
                      {checkNull(core.landing_vehicle)}
                    </LargeText>
                  </Cell>
                </CellRow>
              )}
            </CellGroup>
          </CellSection>

          <CellSection marginTop="4rem">

            <h2>Second Stage</h2>

            <CellGroup>
              {data.rocket.second_stage.payloads.map((load, i) =>
                <CellRow key={i} templateRows={2}>
                  <Cell cols={4} rows={2}>
                    <CellTitle>Payload ID</CellTitle>
                    <LargeText noWrap>{load.payload_id}</LargeText>
                  </Cell>
                  <Cell cols={4} border="left" small>
                    <CellTitle>Customer</CellTitle>
                    <LargeText style={{color: nullColor(load.customers[0])}}>
                      {checkNull(load.customers[0])}
                    </LargeText>
                  </Cell>
                  <Cell cols={4} border="left" small>
                    <CellTitle>Type</CellTitle>
                    <LargeText style={{color: nullColor(load.payload_type)}}>
                      {checkNull(load.payload_type)}
                    </LargeText>
                  </Cell>
                  <Cell cols={4} border="left" small>
                    <CellTitle>Mass (lbs)</CellTitle>
                    <LargeText>
                      {commaNumber(load.payload_mass_lbs)}
                    </LargeText>
                  </Cell>
                  <Cell cols={4} border="left" small>
                    <CellTitle>Orbit</CellTitle>
                    <LargeText style={{color: nullColor(load.orbit)}}>
                      {checkNull(load.orbit)}
                    </LargeText>
                  </Cell>
                </CellRow>
              )}
            </CellGroup>
          </CellSection>

        </Container>
      </Layout>
    )
  }
}

const CellSection = styled.section `
  margin-top: ${props => props.marginTop ? '3rem' : '6rem'};

  &:last-of-type { margin-bottom: 8rem; }

  h2 {
    font-size: 1rem;
    letter-spacing: 0.15em;
    color: var(--gray);
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`

const Flight = styled.h1 `
  margin: 0;
  font-size: 8rem;
  font-family: "Oswald";
  line-height: 1;
  letter-spacing: -0.025em;
`
