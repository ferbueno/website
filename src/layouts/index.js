import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import styles from './index.less';
import { formatMessage, FormattedMessage } from 'umi/locale';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

const keys = [
  {
    key: 'home',
    icon: <HomeOutlined />,
  },
];

function Landing(props) {
  const { theme, locale } = props;
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header} >
        <Menu
          theme={theme}
          mode="horizontal"
          defaultSelectedKeys={'home'}
          style={{ lineHeight: '64px' }}
        >
          {keys.map(key => (
            <Item key={key.key}>
              {key.icon}
              {formatMessage({ id: `menu.${key.key}` })}
            </Item>
          ))}
        </Menu>
      </Header>
      <Content>{props.children}</Content>
      {/* <Footer style={{ textAlign: 'center' }} className={styles.footer}>
        <FormattedMessage id="footer.content.copyright" />
      </Footer> */}
    </Layout>
  );
}

export default connect(({ theme, locale, loading }) => ({
  theme: theme.theme,
  locale: locale.locale,
  changingTheme: loading.effects['theme/changeTheme'],
  changingLocale: loading.effects['theme/changeLocale'],
}))(Landing);
