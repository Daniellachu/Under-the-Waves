import { useState, useEffect } from "react"
import styles from "./BarChart.module.css"
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

export default function BarChart() {
    const router = useRouter()
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect (() => {
        setChartData({
            labels: ['Plastic bags', 'Plastic bottles', 'Food containers/culterly', 'Wrappers', 'Synthetic Rope', 'Fishing Items', 'Plastic caps/lids', 'Industrail packaging', 'Glass bottles', 'Drink cans'],
            datasets: [
                {
                    label: 'Amount %',
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
                    text: "10 Most widespread waste items in the ocean: data from Statista"
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