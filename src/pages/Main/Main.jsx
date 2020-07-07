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
import {
  TabsContainer,
  Tab,
  TabLabel,
  Content,
  WhiteLogo,
} from './Main.styles';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import { Profile } from '../Profile/Profile';
import { Invest } from '../Invest/Invest';
import { Suggestions } from '../Suggestions/Suggestions';

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
    component: Invest,
    label: 'Aplicar',
  },
  {
    key: 'profile',
    icon: mdiAccountOutline,
    component: Profile,
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

  const isFirstAccess = location.pathname.includes('firstAccess');
  const title = isFirstAccess ? 'SUGESTOES' : currentTab?.label?.toUpperCase();

  return (
    <>
      <Header backUrl={`${url}/dashboard`} withBack={isFirstAccess}>
        {title}
      </Header>
      <Content>
        <Switch>
          {TABS.map(({ key, component }) => (
            <Route
              key={`route-${key}`}
              path={`${path}/${key}`}
              component={component}
            />
          ))}
          <Route path={`${path}/firstAccess`}>
            <Suggestions />
          </Route>
          <Route exact path={path}>
            <Redirect to={`${url}/dashboard`} />
          </Route>
        </Switch>
      </Content>
      <TabsContainer>
        {TABS.map(({ key, icon, label }) => (
          <Tab
            key={key}
            onClick={() => history.push(`${url}/${key}`)}
            selected={location.pathname.includes(key)}
          >
            <Icon path={icon} size="20px" />
            <TabLabel>{label}</TabLabel>
          </Tab>
        ))}
      </TabsContainer>
      {!isFirstAccess && (
        <FloatingButton onClick={() => history.push('/chat/help')}>
          <WhiteLogo />
        </FloatingButton>
      )}
    </>
  );
};
