/*
 * @FilePath: /Users/i104/vite3/src/config/config.menu.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React from 'react'
import { AppstoreOutlined } from '@ant-design/icons';

const recursionMenu = (data) => {
    return data?.map(item => {
        const { title, route, iconEl = null, children, disabled } = item;
        if (!children) {
            return {
                label: title,
                key: route,
                icon: iconEl,
                disabled
            };
        }
        return {
            label: title,
            key: route,
            icon: iconEl,
            children: recursionMenu(children),
            disabled
        };
    });
};

const menu = [
    {
        title: 'Memo Test',
        iconEl: <AppstoreOutlined />,
        route: '/memoTest',
    },
    {
        title: 'Context Demo',
        iconEl: <AppstoreOutlined />,
        route: '/contextDemo/1'
    },
    {
        title: 'Request Queue',
        iconEl: <AppstoreOutlined />,
        route: '/requestQueue'
    },
    {
        title: 'Zustand Demo',
        iconEl: <AppstoreOutlined />,
        route: '/zustand'
    },
    {
        title: 'Css Demo',
        iconEl: <AppstoreOutlined />,
        route: '/cssDemo'
    },
    {
        title: 'File & Blob',
        iconEl: <AppstoreOutlined />,
        route: '/file&blob'
    },
    {
        title: 'Dayjs Demo',
        iconEl: <AppstoreOutlined />,
        route: '/dayjsDemo'
    },
];

export { recursionMenu, menu } 