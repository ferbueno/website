import React from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'umi/locale';
import { CodeOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

import styles from './index.less';

const traits = [
  {
    icon: <CodeOutlined />,
    title: 'passion.coder',
    description: 'lorem.ipsum',
  },
  {
    icon: <DeploymentUnitOutlined />,
    title: 'teamwork',
    description: 'lorem.ipsum',
  },
  {
    icon: <DeploymentUnitOutlined />,
    title: 'teamwork',
    description: 'lorem.ipsum',
  },
];

export default () => {
  return (
    <div className={styles.container}>
      <Row gutter={64}>
        {traits.map(trait => (
          <Col span={8} key={trait.title} className={styles.trait}>
            <Row gutter={16} align="top">
              <Col className={styles.icon} span={2}>{trait.icon}</Col>
              <Col span={22}>
                <Row className={styles.title}>
                  <FormattedMessage id={trait.title} />
                </Row>
                <Row className={styles.description}>
                  <FormattedMessage id={trait.description} />
                </Row>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};
