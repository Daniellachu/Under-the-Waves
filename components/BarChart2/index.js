import { useState, useEffect } from "react"
import styles from "./BarChart.module.css"
import Image from "next/image"
import { useRouter } from "next/router"

import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
} from 'chart.js'


ChartJS.register (
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title,
    Tooltip, 
    Legend
)




export default function BarChart2() {
    const router = useRouter()
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ['China', 'Indonesia', 'Philippines', 'Vietnam', 'Sri Lanka', 'Egypt', 'Thailand', 'Malaysia', 'Nigeria', 'Drink cans'],
            datasets: [
                {
                    label: 'Amount (Metric Tons)',
                    data: [14.1, 11.9, 9.4, 9.1, 7.9, 7.6, 6.1, 3.4, 3.4, 3.2],
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                }
            ]
        })
        
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                }, 
                title: {
                    display: true, 
                    text: "Top Countries Polluting The Oceans | Data from Condor Ferries"
                }
            }, 
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    return (
        <>
            <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
            </div>

        </>
    )
}