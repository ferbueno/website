import React, { Component, Fragment } from 'react';
import Page from '@/components/Page';
import Home from './Home';
import About from './About';
import Stack from './Stack';
import Quote from './Quote';

const pages = [<Home />, <About />, <Stack />];

export default class Landing extends Component {
  render() {
    return (
      <Fragment>
        {/* {pages.map(page => (
          <Page>{page}</Page>
        ))} */}
        <Home />
        <About />
        <Quote />
        <Stack />
      </Fragment>
    );
  }
}
