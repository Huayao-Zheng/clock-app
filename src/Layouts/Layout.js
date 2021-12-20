import React from 'react';
import BGImage from '../Components/BGImage';
import Quote from '../Components/Quote';
import WorldTime from '../Components/WorldTime';

import './Layout.Style.scss';

const Layout = () => {
    return (
        <main>
            <BGImage />
            <Quote />
            <WorldTime />
        </main>
    );
};

export default Layout;
