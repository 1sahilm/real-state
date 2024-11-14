import React from "react";
import "./Weather.css";
import dynamic from "next/dynamic";

const BlackCloudIcon = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.BlackCloudIcon)
);

const WeatherIcon = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.weatherIcon)
);

const CloudLeft = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.cloudLeft)
);

const CloudRight = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.CloudRight)
);

const DoubleCloud = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.DoubleCloud)
);

const SingleCloud = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.singleCloud)
);

const WindIcon = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.WindIcon)
);
const HumidityIcon = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.HumidityIcon)
);
const RainIcon = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.RainIcon)
);

const TempratureSwitch = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.tempratureSwitch)
);

const Weather = () => {
  return (
    <div className="weather-container h-[100vh] md:h-auto">
      <div className="left-section relative">
        <div className="flex justify-end md:justify-between absolute mt-4 w-full">
          <div className="hidden md:block md:ml-32">
            <SingleCloud />
          </div>
          <div className="relative">
            <div className="absolute top-20 md:top-12">
              <TempratureSwitch />
            </div>
            <DoubleCloud />
          </div>
        </div>
        <div className="md:ml-10">
          <WeatherIcon />
        </div>
        <div className="absolute mt-96 md:mt-12">
          <CloudLeft />
        </div>
        <div className="flex absolute justify-end mt-24 w-full">
          <CloudRight />
        </div>
        <div className="md:items-start flex flex-col items-center md:pl-24 absolute">
          <div className="temperature ">27°C</div>
          <div className="date ">17th Jun '21</div>
          <div className="time">Thrusday | 2:45 am</div>
          <div className="flex gap-1 md:gap-4 mt-4">
            <div className="flex">
              <span className="mr-2 mt-1">
                <WindIcon />
              </span>
              Wind: 10 km/h
            </div>
            |
            <div className="flex">
              <span className="mr-2 mt-1">
                <HumidityIcon />
              </span>
              Hum: 54%
            </div>
            |
            <div className="flex">
              <span className="mr-2 mt-1">
                <RainIcon />
              </span>
              Rain: 0.2%
            </div>
          </div>
          <div className="forecast">
            <div className="forecast-item">
              <div>24°C</div>
              <div className="black-cloud-icon">
                <BlackCloudIcon />
              </div>
              <div>Fri</div>
            </div>
            <div className="forecast-item">
              <div>24°C</div>
              <div className="black-cloud-icon">
                <BlackCloudIcon />
              </div>
              <div>Sat</div>
            </div>
            <div className="forecast-item">
              <div>24°C</div>
              <div className="black-cloud-icon">
                <BlackCloudIcon />
              </div>
              <div>Mon</div>
            </div>
            <div className="forecast-item">
              <div>24°C</div>
              <div className="black-cloud-icon">
                <BlackCloudIcon />
              </div>
              <div>Tue</div>
            </div>

            <div className="hidden md:flex md:items-center ml-4">
              <svg
                width="22"
                height="40"
                viewBox="0 0 22 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_84_639)">
                  <path
                    d="M4.02515 31.4902L17.173 14.7153L4.02515 1.11408"
                    stroke="black"
                    stroke-width="0.906751"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_84_639"
                    x="0.0413322"
                    y="0.798828"
                    width="21.3592"
                    height="38.2247"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3.627" />
                    <feGaussianBlur stdDeviation="1.8135" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_84_639"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_84_639"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
