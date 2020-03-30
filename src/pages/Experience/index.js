import React from 'react';
import { Timeline, Row, Col } from 'antd';
import moment from 'moment';
import styles from './index.less';

const format = 'DD/MMM/YYYY';

const { Item } = Timeline;

const experience = [
  {
    startDate: moment(),
    endDate: 'present',
    title: 'ditmac.title',
    job: 'full.stack.developer',
    description: 'ditmac.description',
  },
  {
    startDate: moment(),
    endDate: 'present',
    title: 'factoro.title',
    job: 'cto',
    description: 'factoro.description',
  }
]

export default () => {
  return (
    <div>

    </div>
  )
}
