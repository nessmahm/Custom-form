import React, {useEffect, useState} from 'react'

function Dashboard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('dashboard'));
        if (items) {
            setItems(items);
            console.log("dashboard",items);
        }
    }, []);
    return (
        <div className={"page"}>
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
            <div className={"dash-page"}>
                {items.length>0 ?
                <div className={"dashboard"}>
                    {items.map((item,index) =>
                        (
                            <div onClick={()=>{ window.location.href=`/creatform/${index}`  }} className={"dash"} key={index+item} >
                                <span >{item.tableLabel ? item.tableLabel : "Table" } {index}</span>
                            </div >
                        ))
                    }

                </div>
                :
                <div>
                    <span>No Forms yet</span>
                </div>
                }
            </div>

        </div>
    )
}

export default Dashboard
