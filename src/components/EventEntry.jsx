import React, { useState } from "react";

const EventEntry = ({ tasks, setTasks }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name.replace(/\s{2,}/g, " ").trim();
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs((inputs.status = false));
    // console.log(inputs);
    setTasks((prev) => [...prev, inputs]);
    setInputs({});
    Navigate;
    // console.log(tasks);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto flex w-full items-center justify-center rounded-lg bg-white px-4 shadow-2xl lg:w-1/3 lg:px-0">
        <div className="min-h-screen w-full rounded-lg p-4 backdrop-blur-sm lg:min-h-min lg:w-3/4 lg:bg-[#ffffff21]">
          <h2 className="text-center text-xl font-bold text-black">
            Add tasks
          </h2>
          <hr className="my-2 h-px border-0 bg-slate-300" />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            autoComplete="disabled"
          >
            <fieldset className="flex flex-col">
              <span className="font-semibold text-black">Event Title</span>
              <input
                type="text"
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
                placeholder="Title"
                autoComplete="disabled"
                className="w-full rounded-md border border-[#00000088] px-2 py-1"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <span className="font-semibold text-black">Description</span>
              <textarea
                type="text"
                name="desc"
                value={inputs.desc || ""}
                onChange={handleChange}
                placeholder="Event description"
                className="h-36 w-full resize-none rounded-md border border-[#00000088] p-2"
                autoComplete="disabled"
              ></textarea>
            </fieldset>
            <fieldset className="flex flex-col">
              <span className="font-semibold text-black">Date</span>
              <input
                type="date"
                name="date"
                value={inputs.date || ""}
                onChange={handleChange}
                className="w-full rounded-md border border-[#00000088] px-2 py-1"
                autoComplete="disabled"
              />
            </fieldset>
            {/* <fieldset className="flex flex-col">
            <span className="font-semibold text-black">Date and Time</span>
            <input
              type="datetime-local"
              name="datetime"
              value={inputs.datetime || ""}
              onChange={handleChange}
              className="w-full rounded-md px-2 py-1"
              autoComplete="disabled"
            />
          </fieldset> */}
            <fieldset className="flex flex-col">
              <span className="font-semibold text-black">Event Banner URL</span>
              <input
                type="url"
                name="url"
                value={inputs.url || ""}
                onChange={handleChange}
                className="w-full rounded-md border border-[#00000088] px-2 py-1"
                placeholder="Event Banner URL"
                autoComplete="disabled"
              />
            </fieldset>
            {/* <fieldset className="flex flex-col">
              <span className="font-semibold text-black">
                Registration Link
              </span>
              <input
                type="url"
                name="formlink"
                value={inputs.formlink || ""}
                onChange={handleChange}
                className="w-full rounded-md px-2 py-1"
                placeholder="Event Registration Form Link"
                autoComplete="disabled"
              />
            </fieldset> */}
            <button
              type="submit"
              className="rounded-md bg-pink-300 py-2 font-semibold"
            >
              Add to list
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventEntry;
