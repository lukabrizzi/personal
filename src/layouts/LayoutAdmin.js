import React from 'react';
import { MediaQuery, useMediaQuery } from 'react-responsive';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Card, Col, Row, Avatar, notification } from 'antd';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';
import { DownloadOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, CodeOutlined } from '@ant-design/icons';

import header from '../assets/img/png/presentacion.png'

import cvImg from '../assets/img/png/cv.png'
import cvFileEsp from '../assets/pdf/cvEspanol.pdf'
import cvFileIng from '../assets/pdf/cvIngles.pdf'
import imgSillon from '../assets/img/png/labu.png'
import kerde from '../assets/img/png/kerde.png'
import marketing from '../assets/img/png/marketing.png'


import './LayoutAdmin.scss'

export default function LayoutAdmin(props) {
    const { Content, Footer } = Layout;
    const { Meta } = Card;

    const pc = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const phone = useMediaQuery({ query: '(max-width: 1224px)' })

    const avatarColor = '#25d366';

    function Instagram() {
        window.open("https://www.instagram.com/lukabrizzi");
    }

    function Twitter() {
        window.open("https://twitter.com/lukabriz");
    }

    function LinkedIn() {
        window.open("https://www.linkedin.com/in/luka-brizzi/");
    }

    function WhatsApp() {
        window.open("https://wa.link/fctepr");
    }

    function Kerde() {
        window.open("https://kerdelabs.com/");
    }

    function Dijon() {
        window.open("https://www.instagram.com/dijoncomidas");
    }

    function American() {
        window.open("https://www.instagram.com/americancarsvm");
    }

    function Ferre() {
        window.open("https://www.instagram.com/ferreteria_elgringo");
    }

    function Spotify() {
        window.open("https://open.spotify.com/user/luukab08");
    }

    function Test() {
        notification["warning"]({
            message: 'Todavia no esta disponible el link'
        });
    }

    function Discord() {
        notification["warning"]({
            message: 'Todavia no esta disponible el link'
        });
    }

    function FadeInSection(props) {
        const [isVisible, setVisible] = React.useState(false);
        const domRef = React.useRef();
        React.useEffect(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            });
            observer.observe(domRef.current);
        }, []);
        return (
            <div
                className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}
            >
                {props.children}
            </div>
        );
    }

    const Mobile = ({ children }) => {
        const phone = useMediaQuery({ maxWidth: 767 })
        return phone ? children : null
    }

    const Desktop = ({ children }) => {
        const desktop = useMediaQuery({ minWidth: 767 })
        return desktop ? children : null
    }

    return (
        <Layout>
            <Helmet>
                <title>Luka Brizzi</title>
            </Helmet>
            <Content className="layoutAdmin__content" style={{ paddingLeft: 30, paddingRight: 30 }}>
                <FadeInSection>
                    <div className="layoutAdmin__header" >
                        <img
                            src={header}
                            alt="Luka Brizzi"
                        />
                    </div >
                </FadeInSection>
            </Content>
            <Mobile>
                <Content className="layoutAdmin__content" style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <FadeInSection>
                        <Row gutter={16}>
                            <Card
                                cover={
                                    <img
                                        alt="example"
                                        src={cvImg}
                                    />
                                }
                                actions={[
                                    <Link to={cvFileEsp} target="_blank" download><DownloadOutlined /> Español</Link>,
                                    <Link to={cvFileIng} target="_blank" download><DownloadOutlined /> Ingles</Link>
                                ]}
                            >
                                <Meta
                                    title="Mi Cv"
                                    description=""
                                />
                            </Card>
                        </Row>
                    </FadeInSection>
                </Content>

                <Content className="layoutAdmin__content" style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <FadeInSection>
                        <Row gutter={16}>
                            <Card
                                cover={
                                    <img
                                        alt="example"
                                        src={imgSillon}
                                    />
                                }
                                actions={[
                                    <Link onClick={Instagram}><InstagramOutlined /></Link>,
                                    <Link onClick={Twitter}><TwitterOutlined /></Link>,
                                    <Link onClick={LinkedIn}><LinkedinOutlined /></Link>
                                ]}
                            >
                                <Meta
                                    title="Redes sociales"
                                    description=""
                                />
                            </Card>
                        </Row>
                    </FadeInSection>
                </Content>

                <Content className="layoutAdmin__content" style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <FadeInSection>
                        <Row gutter={16}>
                            <Card
                                cover={
                                    <img
                                        alt="example"
                                        src={kerde}
                                    />
                                }
                                actions={[
                                    <Link onClick={Kerde}>Kerde Labs <CodeOutlined /></Link>
                                ]}
                            >
                                <Meta
                                    title="Analista IT"
                                    description="Kerde Labs"
                                />
                            </Card>
                        </Row>
                    </FadeInSection>
                </Content>

                <Content className="layoutAdmin__content" style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <FadeInSection>
                        <Row gutter={16}>
                            <Card
                                cover={
                                    <img
                                        alt="example"
                                        src={marketing}
                                    />
                                }
                                actions={[
                                    <Link onClick={Dijon}><InstagramOutlined /> Dijon</Link>,
                                    <Link onClick={American}><InstagramOutlined /> ACars</Link>,
                                    <Link onClick={Ferre}><InstagramOutlined /> EGF</Link>
                                ]}
                            >
                                <Meta
                                    title="Community manager"
                                    description="Dijon - American Cars - EG Ferreteria"
                                />
                            </Card>
                        </Row>
                    </FadeInSection>
                </Content>
            </Mobile>
            <Desktop>
                <Content className="layoutAdmin__content" style={{ paddingLeft: 60, paddingRight: 60 }}>
                    <FadeInSection>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={cvImg}
                                        />
                                    }
                                    actions={[
                                        <Link to={cvFileEsp} target="_blank" download><DownloadOutlined /> Español</Link>,
                                        <Link to={cvFileIng} target="_blank" download><DownloadOutlined /> Ingles</Link>
                                    ]}
                                >
                                    <Meta
                                        title="Mi Cv"
                                        description=""
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={imgSillon}
                                        />
                                    }
                                    actions={[
                                        <Link onClick={Instagram}><InstagramOutlined /></Link>,
                                        <Link onClick={Twitter}><TwitterOutlined /></Link>,
                                        <Link onClick={LinkedIn}><LinkedinOutlined /></Link>
                                    ]}
                                >
                                    <Meta
                                        title="Redes sociales"
                                        description=""
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </FadeInSection>
                </Content>

                <Content className="layoutAdmin__content" style={{ paddingLeft: 60, paddingRight: 60 }}>
                    <FadeInSection>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={kerde}
                                        />
                                    }
                                    actions={[
                                        <Link onClick={Kerde}>Kerde Labs <CodeOutlined /></Link>
                                    ]}
                                >
                                    <Meta
                                        title="Analista IT"
                                        description="Kerde Labs"
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    cover={
                                        <img
                                            alt="example"
                                            src={marketing}
                                        />
                                    }
                                    actions={[
                                        <Link onClick={Dijon}><InstagramOutlined /> Dijon</Link>,
                                        <Link onClick={American}><InstagramOutlined /> ACars</Link>,
                                        <Link onClick={Ferre}><InstagramOutlined /> EGF</Link>
                                    ]}
                                >
                                    <Meta
                                        title="Community manager"
                                        description="Dijon - American Cars - EG Ferreteria"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </FadeInSection>
                </Content>
            </Desktop>

            {/* <FadeInSection>
                    <Carousel autoplay>
                        <div className="carrusel">
                            <img
                                onClick={Spotify}
                                alt="example"
                                src={spotify}
                            />
                        </div>
                        <div className="carrusel">
                            <img
                                onClick={Test}
                                alt="example"
                                src={test}
                            />
                        </div>
                        <div className="carrusel">
                            <img
                                onClick={Discord}
                                alt="example"
                                src={discord}
                            />
                        </div>
                    </Carousel>
                </FadeInSection> */}
            <Footer className="layoutAdmin__footer" style={{ textAlign: 'center' }}>Made with React ©2021 Created by Luka Brizzi a manopla
                <div className="layoutAdmin__wpp" style={{ textAlign: 'right' }}>
                    <Avatar onClick={WhatsApp}
                        style={{
                            backgroundColor: avatarColor,
                            verticalAlign: 'middle',
                        }}
                        size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                        }}
                        icon={<WhatsAppOutlined />} >

                    </Avatar>
                </div>
            </Footer>
        </Layout >
    )
}


function LoadRoutes({ routes }) {

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