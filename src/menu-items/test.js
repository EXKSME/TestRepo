// assets
import { IconList } from '@tabler/icons';

// constant
const icons = { IconList };

// ==============================|| TEST PAGES MENU ITEMS ||============================== //

const test = {
    id: 'myTest',
    title: '测试页面',
    type: 'group',
    children: [
        {
            id: 'test-1',
            title: '测试页面-1',
            type: 'item',
            url: '/test/test-1',
            icon: icons.IconList,
            breadcrumbs: false
        },
        {
            id: 'test-2',
            title: '测试页面-2',
            type: 'item',
            url: '/test/test-2',
            icon: icons.IconList,
            breadcrumbs: false
        }
    ]
};

export default test;
