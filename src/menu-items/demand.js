// assets
import { IconChartBar, IconCalendarTime, IconGitMerge, IconAlertCircle } from '@tabler/icons';

// constant
const icons = {
    IconChartBar,
    IconCalendarTime,
    IconGitMerge,
    IconAlertCircle
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const demand = {
    id: 'demand',
    title: '项目管理',
    type: 'group',
    children: [
        {
            id: 'count',
            title: '需求统计',
            type: 'item',
            url: '/demand/count',
            icon: icons.IconChartBar,
            breadcrumbs: false
        },
        {
            id: 'delay',
            title: '需求延期',
            type: 'item',
            url: '/demand/delay',
            icon: icons.IconCalendarTime,
            breadcrumbs: false
        },
        {
            id: 'change',
            title: '需求变更',
            type: 'item',
            url: '/demand/change',
            icon: icons.IconGitMerge,
            breadcrumbs: false
        },
        {
            id: 'risk',
            title: '问题&风险',
            type: 'item',
            url: '/demand/risk',
            icon: icons.IconAlertCircle,
            breadcrumbs: false
        }
    ]
};

export default demand;
