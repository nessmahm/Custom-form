import React, {useEffect, useState} from 'react'

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('dashboard'));
        if (items) {
            setItems(items);
            console.log("dashboard",items);
        }
    }, []);

    return (
        <div className={"home"}>
            <header >
               <div>
                   <a href={"/creatform"}>
                       <span>Start</span>
                   </a>
                   <a href={"/dashboard"}>
                       <span>Dashboard</span>
                   </a>
               </div>
            </header>
            <h1>Make Your Form Now ! </h1>
            <button  onClick={()=>{ window.location.href="/creatform"}  }className={""}>Start</button>
        </div>
    )
}

export default Home
