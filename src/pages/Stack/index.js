import React from 'react';
import { Row, Col, Divider } from 'antd';
import { FormattedMessage } from 'umi/locale';
import HoverBox from '@/components/HoverBox';
import styles from './index.less';

const stack = [
  {
    title: 'back.end',
    stack: [
      {
        name: 'rails',
        image: 'rails.png',
      },
      {
        name: 'node',
        image: 'node.png',
      },
      {
        name: 'grails',
        image: 'grails.png',
      },
      {
        name: 'flask',
        image: 'flask.png',
      },
    ],
  },
  {
    title: 'front.end',
    stack: [

    ]
  }
];

export default props => {
  return (
    <div style={{ width: '100%' }}>
      {stack.map(it => (
        <div key={it.title} className={styles.container}>
          <Row>
            <h3>
              <FormattedMessage id={`tech.stack.titles.${it.title}`} />
            </h3>
            <Divider />
          </Row>
          <Row gutter={[16, 32]}>
            {it.stack.map(tech => (
              <Col span={6}>
                <HoverBox {...tech} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};
