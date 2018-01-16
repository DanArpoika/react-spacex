import React from 'react'
import axios from 'axios'
import styled, {css} from 'styled-components'
import Container from '../components/Container'
import toTitleCase from '../util/toTitleCase'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Item from '../components/Item'
import PageTitle from '../components/PageTitle'

export default class Site extends React.Component {
  static async getInitialProps ({query}) {
    const call = await axios.get('https://api.spacexdata.com/v2/launchpads/' + query.site);
    const data = await call.data;

    return {query, data: data}
  }

  render() {
    const { data } = this.props;

    return (
      <Layout>
        <Container>
          <PageTitle>{data.full_name}</PageTitle>

          <Grid>
            <Item cols={5}>
              <h3>Details</h3>
              <p>{data.details}</p>
            </Item>

            <Item cols={5} start={8}>
              <Grid>
                <Item cols={6} rows={1}>
                  <h3>Status</h3>
                  <div>{toTitleCase(data.status)}</div>
                </Item>

                <Item cols={6} rows={1}>
                  <h3>Vehicles Launched</h3>
                  <div>{data.vehicles_launched.join(', ')}</div>
                </Item>

                <Item cols={6} rows={1}>
                  <h3>Location</h3>
                  <div>{data.location.name}, {data.location.region}</div>
                </Item>

                <Item cols={6} rows={1}>
                  <h3>GPS</h3>
                  <div>{data.location.latitude}, {data.location.longitude}</div>
                </Item>
              </Grid>
            </Item>

          </Grid>

        </Container>
      </Layout>
    )
  }
}
