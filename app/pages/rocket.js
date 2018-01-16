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
                  <div>{formatDate(data.first_flight)}</div>
                </Item>

                <Item cols={4}>
                  <h3>Success Rate</h3>
                  <div>{data.success_rate_pct}</div>
                </Item>

                <Item cols={4}>
                  <h3>Diameter</h3>
                  <div>{data.diameter.feet}</div>
                </Item>

                <Item cols={4}>
                  <h3>Height</h3>
                  <div>{data.height.feet}</div>
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
