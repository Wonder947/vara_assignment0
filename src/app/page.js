'use client'

import styles from './page.module.css'
import { useEffect, useState } from "react"
import Papa from 'papaparse'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

export default function Home(){
  // const [data, setData] = useState(null)

  // useEffect(()=>{
  //   const fetchData = async ()=>{
  //     const response = await fetch('/data/test_data.csv')
  //     const csvData = await response.text()
  //     // console.log('csv data:', csvData)
  //     const parsedData = Papa.parse(csvData).data.slice(0, -1)
  //     // console.log('parsed data:', parsedData)
  //     const myData = {
  //       dates: parsedData[0].slice(1),
  //       metrics: parsedData.slice(1).map(arr=>arr[0]),
  //       data: parsedData.slice(1).map(arr=>arr.slice(1))
  //     }
  //     // console.log('my data:', myData)
  //     const data = {
  //       labels: myData.dates,
  //       datasets: myData.metrics.map((m, i) => ({
  //         label: m,
  //         data: myData.data[i],
  //         borderWidth: 1
  //       }))
  //     }
  //     setData(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <main className={styles.main}>
      <h3>Current Environmental Metrics of the Plant</h3>
      <div className={styles.dashboardContainer}>
        {/* {data && <Bar data={data}/>} */}
      </div>
    </main>
  )
}
