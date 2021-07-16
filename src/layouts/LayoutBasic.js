import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// import './LayoutBasic.scss'

export default function LayoutBasic(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <Header >Header basicccccooooo</Header>
            <Layout>
                <Content>
                    <LoadRouters routes={routes} />
                </Content>
            </Layout>
            <Footer>Footer paaa</Footer>
        </Layout>
    )
}

function LoadRouters({ routes }) {

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}