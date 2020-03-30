import React, { PureComponent } from 'react';
import { Row, Button } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';
import ReactTypingEffect from 'react-typing-effect';
import { formatMessage, FormattedMessage } from 'umi/locale';
import styles from './index.less';

const properties = [
  'coder',
  'designer',
  'videogame.enthusiast',
  'full.stack.developer',
  'basketball.fan',
];

export default class Home extends PureComponent {
  render() {
    return (
      <Row className={styles.background} type="flex" justify="center" align="middle">
        <div className={styles.display}>
          <Row type="flex" justify="center">
            <ReactTypingEffect
              className={styles.typewriter}
              text={properties.map(property => formatMessage({ id: `properties.${property}` }))}
            />
          </Row>
          <Row type="flex" justify="center" className={styles.meet}>
            <Button type="primary" shape="round" icon={<DownCircleOutlined />} size="large">
              <FormattedMessage id="home.get.to.know.me" />
            </Button>
          </Row>
        </div>
      </Row>
    );
  }
}
