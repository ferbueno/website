import React from 'react';
import styles from './index.less';

export default ({children}) => (
  <div className={styles.page}>
    {children}
  </div>
)
