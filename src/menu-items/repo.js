// assets
import { IconUsers, IconAlertTriangle, IconChartBar, IconClipboardList } from '@tabler/icons';

// constant
const icons = {
    IconUsers,
    IconAlertTriangle,
    IconChartBar,
    IconClipboardList
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const repo = {
    id: 'dashboard',
    title: '测试周报',
    type: 'group',
    children: [
        {
            id: 'repo-schedule',
            title: '测试进度',
            type: 'item',
            url: '/repo/test-schedule',
            icon: icons.IconClipboardList,
            // 目前路径
            breadcrumbs: false
        },
        {
            id: 'repo-count',
            title: '缺陷统计',
            type: 'item',
            url: '/repo/bug-count',
            icon: icons.IconChartBar,
            breadcrumbs: false
        },
        {
            id: 'uat-bugs',
            title: 'UAT问题',
            type: 'item',
            url: '/repo/uat',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'prod-bugs',
            title: '生产问题',
            type: 'item',
            url: '/repo/prod',
            icon: icons.IconAlertTriangle,
            breadcrumbs: false
        }
    ]
};

export default repo;
