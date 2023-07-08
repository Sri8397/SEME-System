import { vehicleContext } from "../context/VehicleState";
import { useContext, useEffect } from "react";
import EntryItem from "../components/EntryItem";
import { useNavigate } from "react-router-dom";

// const storedData = JSON.parse(localStorage.getItem("entry"));

const Home = () => {
    const context = useContext(vehicleContext);
    const { entries, getEntries } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token'))
            getEntries();
        else {
            navigate('/login');
        }
    }, []);

    // Shortest Remaining Time First
    const sortedEntries = entries.sort((a, b) => a.exit > b.exit); 

    return (
        <div className="mx-2 shadow-md mt-2">
            <div className="flex flex-col">
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
                                    {sortedEntries.map((entry, index) => {
                                        if (entry)
                                        return <EntryItem key={entry._id} entry={entry} index={index}></EntryItem>
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
