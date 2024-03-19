import React from "react";
import "./App.css";
import EntryPage from "./pages/EntryPage/EntryPage";

function App() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
    };

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <button>Menu</button>
                    <button>Records</button>
                </header>
                {/* <div className="App-body">
                    <h2>10min warmups</h2>
                    <form id="warmup">
                        <label htmlFor="current-day">Todays date</label>{" "}
                        <input type="date" id="current-day" name="current" />
                        <ul className="new-entry">
                            <li>
                                {" "}<label>10 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>11 - </label> 
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>12 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>1 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}

                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>2 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>3 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>4 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>5 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>6 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>7 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>8 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>9 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>10 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>11 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>12 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>1 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                
                                <textarea rows="2" column="25"></textarea>
                            </li>
                            <li>
                                {" "}<label>2 - </label>
                                <select>
                                    <option value="Choreograph">Chor</option>
                                    <option value="Structured">Struc</option>
                                    <option value="Discressionary">Disc</option>
                                    <option value="Downtime">DT</option>
                                </select>{" "}
                                2 -
                                <textarea rows="2" column="25"></textarea>
                            </li>
                        </ul>
                        <button>Submit</button>
                    </form>
                </div> */}
                <EntryPage />
            </div>
        </>
    );
}

export default App;
