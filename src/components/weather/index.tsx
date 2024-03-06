import React, { useEffect, useState } from 'react'
import { ReactComponent as IconClose } from '../../assets/icons/close.svg';
import axios from 'axios';
import { convertDTToHour, convertDateTimeToText } from '../../utils/common';
import Nodata from '../no-data';

const API_key = "1c5da32bd6a0d1c4c017b21b49833c7f"

function Weather() {

  const [location, setLocation] = useState<any>({
    lat: 0,
    lon: 0
  });

  const [weather, setWeather] = useState<any>(null)
  const [dayActive, setDayActive] = useState<any>(null);
  const [tempStatus, setTempStatus] = useState<string>("F");
  const [country, setCountry] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      if (location.lat && location.lon) {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=alerts&appid=${API_key}`)
        const weather = res.data;
        setWeather(weather)
        setDayActive(weather?.daily[0])
      }
    }
    fetchData()
  }, [location])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const getLocation = async () => {
      try {
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${API_key}`)
        const loca = res.data[0];
        setLocation({
          ...location, lat: loca.lat, lon: loca.lon, country: loca.country, name: loca.name
        })
      } catch (error) {
        setWeather(null)
      }
    }
    getLocation()
  }


  return (
    <div className='w-[680px] bg-white shadow px-[70px] py-[45px]'>
      <div >
        <form onSubmit={e => handleSubmit(e)} className='relative'>
          <input type="text" value={country} onChange={e => setCountry(e.target.value)} className='py-[10px] w-full px-5 outline-none border-solid border-[1px] border-[#969696] rounded' style={{ boxShadow: "0px 1px 1px 0px #00000040" }} required />
          <IconClose className='absolute right-1 top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer' onClick={() => setCountry("")} />
          <input type="submit" className='hidden' />
        </form>
      </div>


      <div className='border-solid border-[1px] border-[#969696] rounded mt-[11px]' style={{
        boxShadow: "0px 2px 2px 0px #00000040"
      }}>

        {weather ? <div>
          <div className='p-5'>
            <h6 className='text-[#333333] font-bold'>{location?.name}, {location?.country}</h6>
            <span className='font-normal text-sm'>
              {convertDTToHour(weather?.current?.dt) + "• Overcast clouds"}
            </span>
          </div>
          <div className='p-5 grid grid-cols-2'>
            <div className='flex gap-[6px] items-center'>
              <div className='w-[64px] h-[64px]'>
                <img src={`https://openweathermap.org/img/wn/${dayActive?.weather[0]?.icon}@2x.png`} alt="" />
              </div>
              <div className='flex gap-[6px]'>
                <h2 className='font-bold text-[44px]'>{tempStatus === "C" ? Math.floor(+dayActive?.temp?.day / 10) : Math.floor(+dayActive?.temp?.day / 10 * 9 / 5) + 32}°</h2>
                <div className='flex gap-1'>
                  <span className={`cursor-pointer ${tempStatus === "F" ? "font-bold underline" : ""}`} onClick={() => setTempStatus("F")}>
                    F
                  </span>
                  <span>/</span>
                  <span className={`cursor-pointer ${tempStatus === "C" ? "font-bold underline" : ""}`} onClick={() => setTempStatus("C")}>C</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>Humidity: </span>
                <span>{weather?.current?.humidity}%</span>
              </div>
              <div>
                <span>Wind: </span>
                <span>{weather?.current?.wind_speed}</span>
              </div>
              <div>
                <span>Air Quality: </span>
                <span>{weather?.current?.uvi}</span>
              </div>
            </div>
          </div>

          <div>
            <ul className='grid grid-cols-8'>
              {
                weather?.daily && weather?.daily.map((item: any, index: number) => (
                  <li key={index} className={`flex flex-col items-center py-5 border-solid border-[1px] border-[#969696] gap-[2px] ${item === dayActive ? "bg-[#f5f5f5]" : ""}`} onClick={() => setDayActive(item)}>
                    <p className='font-bold text-sm'>{convertDateTimeToText(item?.dt)}</p>
                    <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`} alt="" />
                    <p className='font-bold text-lg'>{tempStatus === "C" ? Math.floor(+item?.temp?.day / 10) : Math.floor(+item?.temp?.day / 10 * 9 / 5) + 32}°</p>
                    <span className='text-sm'>{tempStatus === "C" ? Math.floor(+item?.temp?.day / 10) : Math.floor(+item?.temp?.day / 10 * 9 / 5) + 32}°</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div> : <Nodata />}
      </div>

    </div>
  )
}

export default Weather