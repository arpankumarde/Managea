import { MdDeleteOutline, MdDone } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { Tooltip } from "react-tooltip";

const EventList = ({ tasks, setTasks }) => {
  const toggleStatus = (id) => {
    let copyTasks = [...tasks];
    let newStatus = !copyTasks[id].status;
    copyTasks[id].status = newStatus;
    setTasks(copyTasks);
  };

  const delTask = (id) => {
    let c = 0;
    setTasks(tasks.filter((item) => c++ !== id));
  };

  return (
    <section className="container mx-auto min-h-[15rem] rounded-lg p-4 backdrop-blur-sm lg:max-h-[86vh] lg:min-h-[10rem] lg:bg-[#ffffff21]">
      <div className="scrollbar-hide flex flex-col gap-4 overflow-auto rounded-lg lg:max-h-[75vh]">
        <h1 className="text-center text-2xl font-bold">Event List</h1>
        {!tasks.length == 0 ? (
          tasks.map((value, key) => (
            <div
              key={key}
              className="flex flex-col justify-between gap-2 rounded-lg bg-white bg-opacity-50 p-4 shadow-lg drop-shadow-lg transition-all ease-in-out hover:bg-opacity-100 lg:flex-row lg:items-center lg:gap-4"
            >
              <div className="lg:w-2/3xtensions > Apps Sc h-full w-full">
                <div className="font-semibold">{value.title}</div>
                <div className="text-justify text-sm text-gray-800">
                  {value.desc}
                </div>
                <div className="text-justify text-sm text-gray-800">
                  {value.date}
                </div>
              </div>
              <div className="flex w-full items-center justify-around lg:w-1/3">
                {/* <span
                  className={`${
                    value.status
                      ? "bg-green-300 text-green-950"
                      : "bg-red-300 text-red-950"
                  } flex w-20 justify-center rounded-full px-2 py-1 text-xs`}
                >
                  {value.status ? "Complete" : "Incomplete"}
                </span>
                 <button
                  type="button"
                  key={`${key}-${value.status2}`}
                  onClick={() => toggleStatus(key)}
                  className={`${
                    value.status
                      ? "bg-red-300 hover:bg-red-400"
                      : "bg-green-300 hover:bg-green-400"
                  } inline-flex h-10 w-10 items-center justify-center rounded-full`}
                  data-tooltip-id="action-tooltip"
                  data-tooltip-variant="dark"
                  data-tooltip-content={
                    value.status ? "Mark as incomplete" : "Mark as complete"
                  }
                >
                  {!value.status ? (
                    <MdDone className="object-contain text-xl text-green-950" />
                  ) : (
                    <GrClose className="text-red-950" />
                  )}
                </button> */}
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700"
                  data-tooltip-id="action-tooltip"
                  data-tooltip-variant="dark"
                  data-tooltip-content="Delete Event"
                  onClick={() => {
                    delTask(key);
                  }}
                >
                  <MdDeleteOutline className="text-xl" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <span className="text-center">No data to show</span>
        )}
        <Tooltip
          id="action-tooltip"
          style={{
            backgroundColor: "#000000cd",
            borderRadius: "0.5rem",
            paddingTop: "2.5px",
            paddingBottom: "2.5px",
          }}
        />
      </div>
    </section>
  );
};

export default EventList;
