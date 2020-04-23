import React from 'react';
import { Timeline, Row, Col, Divider } from 'antd';
import moment from 'moment';
import styles from './index.less';
import { FormattedMessage } from 'umi/locale';
import LAUNCH from '@/assets/launch.svg';

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
    startDate: moment('2018-12-01'),
    endDate: 'present',
    title: 'factoro.title',
    job: 'cto',
    description: 'factoro.description',
  },
  {
    startDate: moment('2018-09-01'),
    endDate: moment('2018-12-01'),
    title: 'sensai.title',
    job: 'software.architect',
    description: 'sensai.description',
  },
  {
    startDate: moment('2017-04-01'),
    endDate: moment('2018-09-01'),
    title: 'gdx.title',
    job: 'full.stack.developer',
    description: 'gdx.description',
  },
  {
    startDate: moment('2017-01-01'),
    endDate: moment('2017-04-01'),
    title: 'world.software.services.title',
    job: 'software.developer.jr',
    description: 'world.software.services.description',
  },
];

export default () => {
  return (
    <div className={styles.container}>
      <Row className={styles.header}>
        <FormattedMessage id="experience.title" />
        <Divider />
      </Row>
      <Row gutter={64}>
      <Col span={12}>
            <img src={LAUNCH} alt="experience.svg" className={styles.image} />
          </Col>
        <Col span={12}>
          <Timeline mode="right">
            {experience.map(it => (
              <Item key={it.title}>
                <Row className={styles.job} justify="end">
                  <FormattedMessage id={it.job} />
                </Row>
                <Row className={styles.title} justify="end">
                  <FormattedMessage id={it.title} />
                </Row>
                <Row className={styles.date} justify="space-between">
                  <Col span={11}>{it.startDate.format(format)}</Col>
                  <Col span={2}>-</Col>
                  <Col span={11}>
                    {typeof it.endDate === 'string' && <FormattedMessage id={it.endDate} />}
                    {typeof it.endDate !== 'string' && it.endDate.format(format)}
                  </Col>
                </Row>
                <Row className={styles.description}>
                  <FormattedMessage id={it.description} />
                </Row>
              </Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};
