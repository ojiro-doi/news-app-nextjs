import React from 'react'
import WeatherWidget from '../../molecules/weatherWidget/WeatherWidget'
import Props from '@/app/types/types'

const SidePanel = ({weather}:Props) => {
  return (
    <div><WeatherWidget weather={weather}/></div>
  )
}

export default SidePanel