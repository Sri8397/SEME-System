import CountdownTimer from "../CountdownTimer";
import moment from "moment";

const storedData = JSON.parse(localStorage.getItem("entry"));

// Shortest Remaining Time First
for(let i = 1; i < storedData.length;i++){
    for(let j = i - 1; j > -1; j--){
      let x = new Date(storedData[j].exit), y = new Date(storedData[j + 1].exit); 
        if(y < x){
            [storedData[j+1],storedData[j]] = [storedData[j],storedData[j + 1]];
        }
    }
};

const Home = () => {

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
                      Vehicle Number
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
                    item.exit = new Date(item.exit);
                    let show; 
                    let remTime = item.exit - +new Date(); 
                    let color = 'white';
                    if(remTime < 0) {
                      color = 'red';
                    }
                    remTime = remTime/(1000 * 60 * 60);
                    if(remTime <= 3) {
                      show = true;
                    }
                    const styles = {
                      backgroundColor: color,
                    }
                    const exitDate = moment(item.exit).format('D-MM-YYYY');
                    const exitTime = moment(item.exit).format('HH:MM:ss');
                    if(show)
                    return (
                      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100" style={styles}>
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
                          {exitDate}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {exitTime}
                        </td>
                        <td>
                          <CountdownTimer countdownTimestampMs={item.exit} />
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
export default Home; 
