import React from "react";
import logo from "./../images/logo.svg";
import pixels from "./../images/pixels.svg";
import builder from "./../images/builder.svg";
import circle from "./../images/circle.svg";
import settings from "./../images/settings.svg";
import user from "./../images/user.svg";

const data = [
  {
    id: 1,
    src: pixels,
    name: "Pixels"
  },
  {
    id: 2,
    src: builder,
    name: "Builder"
  },
  {
    id: 1,
    src: circle,
    name: "Circle"
  },
  {
    id: 1,
    src: settings,
    name: "Settings"
  },
]

export default function Sidebar() {
  return(
    <>
      <div className="flex flex-col justify-between items-center border border-solid border-primary rounded-full">
        <div className="flex flex-col items-center justify-center">
          <div className="w-20">
            <img 
              src={logo} 
              className="max-w-none" 
              alt="pixl logo" 
              style={{ 
                marginLeft: "-36px",
                marginBottom: "-9.5rem"
              }}
            />
          </div>
          <nav>
            {data.map(datum => (
              <a href="" key={datum.id} className="font-plex flex flex-col items-center mb-8">
                <img src={datum.src} alt={`${datum.name} icon`} />
                <span className="text-xs font-semibold text-secondary">{datum.name}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="pb-7">
          <img 
            src={user} 
            alt="user icon" 
          />
        </div>
      </div>
    </>
  );
}
