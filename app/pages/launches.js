import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Container from '../components/Container'
import CellTitle from '../components/CellTitle'
import formatDate from '../util/formatDate'
import CellGroup from '../components/CellGroup'
import Cell from '../components/Cell'
import CellRow from '../components/CellRow'
import LargeText from '../components/LargeText'

export default class Launches extends React.Component {

  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launches?flight_number=' + query.launch);
    const data = await call.data;

    return {query, data: data[0]}
  }

  precendingZero = (num) => num < 10 ? '0' + num.toString() : num;

  render () {
    const { data } = this.props;
    const { precendingZero } = this;
    console.log(data)

    const result = data.launch_success === true ? 'Success' : 'Failure';
    const color = data.launch_success === true ? 'green' : 'red';

    return(
      <main style={{marginTop: '8rem'}}>
        <Container>

          <CellGroup>
            <CellRow>
              <Cell cols={2}>
                <CellTitle>Flight</CellTitle>
                <Flight>{precendingZero(data.flight_number)}</Flight>
              </Cell>

              <Cell cols={7} border="left">
                <CellTitle>Details</CellTitle>
                <LargeText>{formatDate(data.launch_date_local)}</LargeText>
                <div style={{color: 'var(--gray)', fontSize: '0.875rem'}}>{data.launch_site.site_name_long}</div>
              </Cell>

              <Cell cols={3} border="left">
                <CellTitle>Result</CellTitle>
                <LargeText style={{color: `var(--${color})`}}>{result}</LargeText>
              </Cell>
            </CellRow>

            <CellRow>
              <Cell cols={12}>
                <CellTitle>Details</CellTitle>
                <p style={{lineHeight: 1.5, margin: '0.75em 0 0 0'}}>{data.details}</p>
              </Cell>
            </CellRow>

          </CellGroup>

        </Container>
      </main>
    )
  }
}

const Flight = styled.div `
  font-size: 9rem;
  font-family: "Oswald";
  line-height: 1;
  letter-spacing: -0.025em;
`
