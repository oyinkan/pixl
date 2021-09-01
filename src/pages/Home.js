import React from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import TimelineTab from "../components/TimelineTab";
import Welcome from "../components/Welcome";

export default function Home() {
  return(
    <div className="flex h-screen w-screen px-4 py-5">
      <Sidebar />
      <div className="flex flex-col justify-between w-8/12 md:w-10/12 lg:w-8/12 mx-auto">
        <div className="flex flex-col">
          <Welcome />
          <TimelineTab />
        </div>
        <Footer />
      </div>
    </div>
  )
}
