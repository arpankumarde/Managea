import React from "react";
import { Navbar } from "../components";
import Cards from "../components/Cards";

const Home = ({ tasks, setTasks }) => {
  return (
    <>
      <main>
        <Navbar />
        <div className="flex flex-wrap justify-center">
          {!tasks.length == 0 ? (
            tasks.map((val, key) => <Cards val={val} key={key} />)
          ) : (
            <div>No Events Found</div>
          )}
        </div>
        {/* <EventList {...{ tasks, setTasks }} /> */}
      </main>
    </>
  );
};

export default Home;
