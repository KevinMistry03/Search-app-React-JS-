import React, { useState } from "react";
import { FirstName } from "./Data";
import './MainPage.css'
const MainPage = () => {


    const [DataStore, setDataStore] = useState(FirstName);

    const onChange = (event) => {
        if (event.target.value === "") {
            setDataStore(FirstName);
            return
        }
        const Data = FirstName.filter(
            (d) => d.toLocaleLowerCase().indexOf(event.target.value.toLocaleLowerCase())
                !== -1
        )
        setDataStore(Data);
    }





    return (
        <>
            <div className="container main-blue mt-4">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search Users..."
                            aria-label="default input example"
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        DataStore && DataStore.length === 0 ? <h2 className="text-center">No User Found...</h2> :
                            DataStore && DataStore.map((Data, id) =>
                                <div className="col-md-3 mt-4">
                                    <div className="card" key={id}>
                                        <div className="card-body">{Data}</div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>

        </>
    );
};

export default MainPage;
