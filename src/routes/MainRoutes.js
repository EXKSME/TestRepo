import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// 测试分页
const TestOne = Loadable(lazy(() => import('views/TestPages/testOne')));
const TestTwo = Loadable(lazy(() => import('views/TestPages/testTwo')));

// 测试周报 分页
const TestSchedule = Loadable(lazy(() => import('views/TestRepo/TestSchedule')));
const UAT = Loadable(lazy(() => import('views/TestRepo/UAT')));
const Prod = Loadable(lazy(() => import('views/TestRepo/Prod')));
const BugCount = Loadable(lazy(() => import('views/TestRepo/bugCount')));

// 需求统计 分页
const DemandCount = Loadable(lazy(() => import('views/TestRepo/DemandCount')));
const Delay = Loadable(lazy(() => import('views/TestRepo/Delay')));
const Change = Loadable(lazy(() => import('views/TestRepo/Change')));
const Risk = Loadable(lazy(() => import('views/TestRepo/Risk')));

// 下周计划 分页
const NextWeek = Loadable(lazy(() => import('views/TestRepo/nextWeek')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />,
            title: '测试标题'
            // 主页
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                    // 数据可视化
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'test',
            children: [
                {
                    path: 'test-1',
                    element: <TestOne />
                    // 测试页面 - 1
                }
            ]
        },
        {
            path: 'test',
            children: [
                {
                    path: 'test-2',
                    element: <TestTwo />
                    // 测试页面 - 2
                }
            ]
        },
        {
            path: 'repo',
            children: [
                {
                    path: 'test-schedule',
                    element: <TestSchedule />
                    // 测试进度
                }
            ]
        },
        {
            path: 'repo',
            children: [
                {
                    path: 'bug-count',
                    element: <BugCount />
                    // 缺陷统计
                }
            ]
        },
        {
            path: 'repo',
            children: [
                {
                    path: 'uat',
                    element: <UAT />
                    // UAT问题
                }
            ]
        },
        {
            path: 'repo',
            children: [
                {
                    path: 'prod',
                    element: <Prod />
                    // 线上问题
                }
            ]
        },
        {
            path: 'demand',
            children: [
                {
                    path: 'count',
                    element: <DemandCount />
                    // 需求统计
                }
            ]
        },
        {
            path: 'demand',
            children: [
                {
                    path: 'delay',
                    element: <Delay />
                    // 需求延期
                }
            ]
        },
        {
            path: 'demand',
            children: [
                {
                    path: 'change',
                    element: <Change />
                    // 需求变更
                }
            ]
        },
        {
            path: 'demand',
            children: [
                {
                    path: 'risk',
                    element: <Risk />
                    // 问题&风险
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
            // sample 页
        },
        {
            path: 'next-week',
            element: <NextWeek />
            // 下周计划
        }
    ]
};

export default MainRoutes;
