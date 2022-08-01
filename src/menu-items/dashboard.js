// assets
import { IconChartInfographic } from '@tabler/icons';

// constant
const icons = { IconChartInfographic };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '主页',
    type: 'group',
    children: [
        {
            id: 'default',
            title: '数据可视化',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconChartInfographic,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
