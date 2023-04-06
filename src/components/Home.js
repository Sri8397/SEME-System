import { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer";

const storedData = JSON.parse(localStorage.getItem("entry"));

storedData?.sort((a, b) => {
  const date1 = new Date(`${a.exitDate} ${a.exitTime}`);
  const date2 = new Date(`${b.exitDate} ${b.exitTime}`);
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
});
console.log("sorted data");
console.log(storedData);

export default function Home() {

  const clearData = () => {
    localStorage.removeItem('entry');
  }

  return (
    <div className="mx-2 shadow-md mt-2">
      <div className="flex flex-col bg-white  h-[90vh]">
        <div className="overflow-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-300">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Vehicle No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Exit Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Exit Time
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Remaining Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {storedData?.map((item, index) => {
                    const timestampMs = new Date(
                      `${item.exitDate} ${item.exitTime}`
                    );
                    return (
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.vehicleNumber}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.exitDate}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.exitTime}
                        </td>
                        <td>
                          <CountdownTimer countdownTimestampMs={timestampMs} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
