import React, { useState } from "react";
import { Tab } from '@headlessui/react';
import arrowUp from "./../images/arrow-up.svg";
import arrowDown from "./../images/arrow-down.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TimelineTab() {
  const [timelines] = useState({
    "Today": [],
    "Yesterday": [],
    "7d": [],
    "14d": [],
    "1M": [],
    "3M": [
      {
        id: 1,
        title: "Revenue",
        amount: "11 897$",
        previousAmount: "9 946$",
        percentage: "12"
      },
      {
        id: 2,
        title: "Cost Per Purchase",
        amount: "14$",
        previousAmount: "24$",
        percentage: "58.33"
      },
      {
        id: 3,
        title: "Online Store Convertion Rate",
        amount: "4.57%",
        previousAmount: "6.62$",
        percentage: "4.05"
      },
    ],
    "More": []
  })

  return(
    <Tab.Group>
      <Tab.List className="flex border border-solid border-primary rounded-full mt-10 p-1 overflow-x-auto sm:overflow-x-hidden">
        {Object.keys(timelines).map((timeline) => (
          <Tab
            key={timeline}
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 px-1 leading-5 rounded-full mr-3 sm:mr-0',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60',
                selected
                  ? 'bg-white shadow font-semibold text-tertiary'
                  : 'font-medium text-black text-sm'
              )
            }
          >
            {timeline}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {Object.values(timelines).map((data, idx) => (
          <Tab.Panel
            key={idx}
            className={classNames(
              'grid md:grid-cols-3 bg-white rounded-3xl shadow divide-y md:divide-x md:divide-y-0 divide-gray-200 px-3 mt-4',
            )}
          >
            {data.map((datum) => (
              <div
                key={datum.id}
                className="p-3 pb-4"
              >
                <p className="text-base text-black font-medium">
                  {datum.title}
                </p>
                <div className="flex justify-between items-end mt-2">
                  <div className="flex items-end">
                    <h6 className="text-2xl text-tertiary font-semibold">{datum.amount}</h6>
                    <p className="text-sm text-secondary font-medium ml-2">From {datum.previousAmount}</p>
                  </div>
                  <div>
                    <div className={`${datum.percentage > 10 ? "bg-green-100" : "bg-red-100"} px-3 py-1 rounded-xl ml-3`}>
                      <p className={`${datum.percentage > 10 ? "text-green-800" : "text-red-800"} font-medium text-sm flex justify-center`}>
                        <img src={datum.percentage > 10 ? arrowUp : arrowDown} className="mr-1" alt="an icon" />
                        {datum.percentage}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
