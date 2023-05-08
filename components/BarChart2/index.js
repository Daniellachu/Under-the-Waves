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
            labels: ['China', 'Indonesia', 'Philippines', 'Vietnam', 'Sri Lanka', 'Egypt', 'Thailand', 'Malaysia', 'Nigeria', 'Bangadesh', 'Brazil', 'United States'],
            datasets: [
                {
                    label: 'Amount (Metric Tons)',
                    data: [8.80, 3.20, 1.90, 1.80, 1.60, 1.00, 1.00, 0.9, 0.9, 0.8, 0.5, 0.30],
                    backgroundColor: 'rgb(80, 15, 235, 0.4)'
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