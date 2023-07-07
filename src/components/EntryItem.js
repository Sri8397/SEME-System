import CountdownTimer from "./CountdownTimer";
import moment from "moment";

function EntryItem(props) {
    const { entry, index } = props;
    entry.exit = new Date(entry.exit);
    let show = true;
    let remTime = entry.exit - +new Date();
    let alert = 'light'
    if (remTime < 0) {
        alert = 'danger';
    }
    remTime = remTime / (1000 * 60 * 60);
    // if (remTime <= 3) {
    //     show = true;
    // }
    const exitDate = moment(entry.exit).format('D-MM-YYYY');
    const exitTime = moment(entry.exit).format('HH:MM:ss');
    if (show)
        return (
            <tr className={`border-b transition duration-300 ease-in-out hover:bg-neutral-100 alert alert-${alert}`}>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                    {entry.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                    {entry.vehicle_number}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                    {exitDate}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                    {exitTime}
                </td>
                <td>
                    <CountdownTimer countdownTimestampMs={entry.exit} />
                </td>
            </tr>
        );
}

export default EntryItem;
