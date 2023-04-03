function EntryData(props) {
    return (
      <tr>
        {props}
        <td>{props.fname}</td>
        <td>{props.lname}</td>
      </tr>
    );
  }
  
  function VideoList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? "Videos" : "Video";
      heading = count + ' ' + noun;
    }
    return (
        <section>
            <h1> 
                {heading}
            </h1>
        {videos.map((videos) => (
          <EntryData fname={videos.fname} lname={videos.lname} />
        ))}
      </section>
    );
  }
  
  export default function Home() {
    let obj = JSON.parse(localStorage.getItem("entries"));
    if (obj == null) obj = { entry: [] };
  
    const entries = obj["entry"];
  
    function eraseData() {
      localStorage.clear();
    }
  
    const styles = {
      margin: "5% auto 5% auto",
      maxWidth: "480px",
    };
  
    return (
      <div className="rounded border-2 border-slate-400" style={styles}>
        <div className="font-mono">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <VideoList videos={entries} emptyHeading="Hello guys" />
            </tbody>
          </table>
        </div>
        <div className="grid justify-items-center">
          <button
            onClick={eraseData}
            class="hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none border-spacing-2 border-2 bg-stone-700 text-stone-100 px-3 py-2 mt-4 rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
  