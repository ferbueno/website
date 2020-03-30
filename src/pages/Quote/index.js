import React from 'react';
import { Row, Col } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi/locale';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={24} style={{ textAlign: 'center' }}>
          <div className={styles.pink}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <div className={styles.content}>
              <Row justify="center" className={styles.icon}>
                <MessageOutlined />
              </Row>
              <Row justify="center">
                <FormattedMessage id="quote.content" />
              </Row>
              <Row justify="end" className={styles.author}>
                <FormattedMessage id="quote.author" />
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
