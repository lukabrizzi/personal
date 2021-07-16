import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
// import { EditOutlined, EllipsisOutlined, SettingOutlined, DownloadOutlined } from '@ant-design/icons';
import cvImg from '../../assets/img/png/cv.png'
import cvFile from '../../assets/pdf/CVLukaBrizziespañol.pdf'
const { Meta } = Card;

export default function Admin() {
    return (
        <Card
            style={{ width: 500 }}
            cover={
                <img
                    alt="example"
                    src={cvImg}
                />
            }
            actions={[
                <Link to={cvFile} target="_blank" download>Download</Link>
            ]}
        >
            <Meta
                title="Mi Cv"
                description=""
            />
        </Card>
    );
}