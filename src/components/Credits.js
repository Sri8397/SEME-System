const Credits = () => {
    const styles = {
        margin: "10% auto 10% auto", 
        maxWidth: "480px", 
    }
    return (

        <div className="rounded-b border-2 border-slate-400 text-center" style={styles}>
            <header className="font-mono text-xl font-semibold" style={{backgroundColor: "#61C0BF"}}> 
                <div className=' border-b-2 border-slate-600 p-3'>CREDITS</div>
            </header>
            <div className="text-lg font-mono"> 
                <div className="my-4">Srikant Agrawal</div>
                <div className="my-4">Srishti Tiwari</div>
                <div className="my-4">Spandan Kundu</div>
                <div className="my-4">Srijal Rai</div>
            </div>
        </div>
    );
}

export default Credits; 