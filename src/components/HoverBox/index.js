import React from 'react';
import { Row } from 'antd';
import { FormattedMessage } from 'umi/locale';
import styles from './index.less';

export default ({ name, image }) => {
  return (
    <div className={styles.box}>
      <Row justify="center">
        <img className={styles.image} alt={name} src={require(`@/assets/stack/${image}`)} />
      </Row>
      <Row justify="center" >
        <FormattedMessage id={`tech.stack.${name}`} />
      </Row>
    </div>
  );
};
