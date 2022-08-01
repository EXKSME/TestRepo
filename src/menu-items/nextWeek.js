// assets
import { IconList } from '@tabler/icons';

// constant
const icons = { IconList };

// ==============================|| Next Week To Do MENU ITEMS ||============================== //

const nextweek = {
    id: 'next-week',
    title: '下周计划',
    type: 'group',
    children: [
        {
            id: 'next-week-plan',
            title: '下周计划',
            type: 'item',
            url: '/next-week',
            icon: icons.IconList,
            breadcrumbs: false
        }
    ]
};

export default nextweek;
