import { useEffect } from "react";
import * as echarts from 'echarts';
import './index.less';

export function MyEcharts_1() {
    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('MyEcharts_1') as HTMLElement),
            option = {
                title: {
                    text: 'Basic Graph'
                },
                tooltip: {},
                animationDurationUpdate: 1500,
                // 优化：字段不存在、不兼容 —— 故需去掉。
                // animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            show: true
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            fontSize: 20
                        },
                        data: [
                            {
                                name: 'Node 1',
                                x: 300,
                                y: 300
                            },
                            {
                                name: 'Node 2',
                                x: 800,
                                y: 300
                            },
                            {
                                name: 'Node 3',
                                x: 550,
                                y: 100
                            },
                            {
                                name: 'Node 4',
                                x: 550,
                                y: 500
                            }
                        ],
                        // links: [],
                        links: [
                            {
                                source: 0,
                                target: 1,
                                symbolSize: [5, 20],
                                label: {
                                    show: true
                                },
                                lineStyle: {
                                    width: 5,
                                    curveness: 0.2
                                }
                            },
                            {
                                source: 'Node 2',
                                target: 'Node 1',
                                label: {
                                    show: true
                                },
                                lineStyle: {
                                    curveness: 0.2
                                }
                            },
                            {
                                source: 'Node 1',
                                target: 'Node 3'
                            },
                            {
                                source: 'Node 2',
                                target: 'Node 3'
                            },
                            {
                                source: 'Node 2',
                                target: 'Node 4'
                            },
                            {
                                source: 'Node 1',
                                target: 'Node 4'
                            }
                        ],
                        lineStyle: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                ]
            };
        myChart.on('click', (a) => {
            debugger
        })
        // 绘制图表
        myChart.setOption(option);
    }, []);

    return (
        <>
            <div id="MyEcharts_1"></div>
        </>
    )
}
