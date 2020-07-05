import React from 'react';
import Icon from '@mdi/react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { mdiHomeOutline, mdiAccountOutline, mdiFinance } from '@mdi/js';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../../components/Header/Header';
import { TabsContainer, Tab, TabLabel, Content } from './Main.styles';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import logo from '../../assets/Investable.svg';

const TABS = [
  {
    key: 'dashboard',
    icon: mdiHomeOutline,
    component: Dashboard,
    label: 'Home',
  },
  {
    key: 'invest',
    icon: mdiFinance,
    component: Dashboard,
    label: 'Aplicar',
  },
  {
    key: 'profile',
    icon: mdiAccountOutline,
    component: Dashboard,
    label: 'Perfil',
  },
];

export const Main = () => {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [currentTab] = TABS.filter(({ key }) =>
    location.pathname.includes(key),
  );

  return (
    <>
      <Header withBack={false}>{currentTab?.label?.toUpperCase()}</Header>
      <Content>
        <Switch>
          {TABS.map(({ key, component }) => (
            <Route path={`${path}/${key}`} component={component} />
          ))}
          <Route exact path={path}>
            <Redirect to={`${url}/dashboard`} />
          </Route>
        </Switch>
      </Content>
      <TabsContainer>
        {TABS.map(({ key, icon, label }) => (
          <Tab
            onClick={() => history.push(`${url}/${key}`)}
            selected={location.pathname.includes(key)}
          >
            <Icon path={icon} size="20px" />
            <TabLabel>{label}</TabLabel>
          </Tab>
        ))}
      </TabsContainer>
      <FloatingButton>In</FloatingButton>
    </>
  );
};
