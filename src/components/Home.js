const storedData = JSON.parse(localStorage.getItem('entry'));
console.log(storedData)


export default function Home() {
  return (
    <div class="mx-2 shadow-md mt-2">
      <div class="flex flex-col bg-white  h-[90vh]">
        <div class="overflow-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-300">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Vehicle No.
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Exit Date
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Remaining time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    storedData?.map((item, index) => (
                        <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                          <td class="whitespace-nowrap px-6 py-4">{item.name}</td>
                          <td class="whitespace-nowrap px-6 py-4">{item.vehicleNumber}</td>
                          <td class="whitespace-nowrap px-6 py-4">{item.exitDate}</td>
                          <td class="whitespace-nowrap px-6 py-4">{item.exitTime}</td>
                        </tr>
                      ))
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
