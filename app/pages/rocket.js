import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Container from '../components/Container'
import Layout from '../components/Layout'
import formatDate from '../util/formatDate'
import commaNumber from '../util/commaNumber'
import PageTitle from '../components/PageTitle'
import Grid from '../components/Grid'
import Item from '../components/Item'

export default class Rocket extends React.Component {
  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/rockets/' + query.rocket);
    const data = await call.data;

    return {query, data: data}
  }

  render() {
    const { data } = this.props;
    const status = data.active ? 'Active' : 'Inactive';

    const firstFlight = data.first_flight !== 'TBD' ? formatDate(data.first_flight) : data.first_flight;
    const success = data.first_flight !== 'TBD' ? data.success_rate_pct : 'N/A';
    const nullColor = (data) => data === null || data === 'TBD' ? 'var(--inactive)' : 'inherit';

    return (
      <Layout>
        <Container>
          <PageTitle>{data.name}</PageTitle>

          <Grid>
            <Item cols={5}>
              <h3>Description</h3>
              <p>{data.description}</p>
            </Item>

            <Item cols={6} start={7}>
              <Grid>
                <Item cols={4}>
                  <h3>Status</h3>
                  <div>{status}</div>
                </Item>

                <Item cols={4}>
                  <h3>First Flight</h3>
                  <div>{firstFlight}</div>
                </Item>

                <Item cols={4}>
                  <h3>Success Rate</h3>
                  <div style={{color: nullColor(data.first_flight)}}>{success}</div>
                </Item>

                <Item cols={4}>
                  <h3>Diameter</h3>
                  <div>{data.diameter.feet} ft.</div>
                </Item>

                <Item cols={4}>
                  <h3>Height</h3>
                  <div>{data.height.feet} ft.</div>
                </Item>

                <Item cols={4}>
                  <h3>Launch Cost</h3>
                  <div>${commaNumber(data.cost_per_launch)}</div>
                </Item>
              </Grid>
            </Item>

          </Grid>
        </Container>
      </Layout>
    )
  }
}
