import React from "react";

const Register = () => {
  return (
    <div class="flex h-screen w-full items-center justify-center bg-indigo-100">
      <form class="w-full rounded-lg md:w-1/3">
        <div class="mt-6 flex justify-center font-bold">Register</div>
        <h2 class="mb-8 text-center text-2xl text-gray-200">Register</h2>
        <div class="px-12 pb-10">
          <div class="mb-2 w-full">
            <div class="flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                class="
              w-full
              rounded
              border
              px-3
              py-2
              text-gray-700
              focus:outline-none
            "
              />
            </div>
          </div>
          <div class="mb-2 w-full">
            <div class="flex items-center">
              <input
                type="tel"
                placeholder="Phone Number"
                class="
              w-full
              rounded
              border
              px-3
              py-2
              text-gray-700
              focus:outline-none
            "
              />
            </div>
          </div>
          <button
            type="submit"
            class="
          mt-8
          w-full
          rounded-full
          bg-black
          py-2
          text-gray-100
          focus:outline-none
        "
          >
            Register for Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
