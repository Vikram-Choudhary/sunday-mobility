import React from "react";

export default function List() {
    let retrievedArray = JSON.parse(localStorage.getItem('inputObj')) ?
        JSON.parse(localStorage.getItem('inputObj'))
        : [];
    return (
        <div className="col-sm -12 col-md-4 p-0">
            <h2 className="card-title text-center">User's List:</h2>
            <div style={{ "overflow": "auto" }}>
                <table>
                    <thead><tr><th>Name</th><th>Email</th></tr></thead>
                    <tbody>
                        {
                            retrievedArray.map((obj, index) => {
                                return <tr key={index}><th>{obj.name}</th><th>{obj.email}</th></tr>
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
}
