import react, { useState } from "react";
import { useForm } from "react-hook-form";

const EntryPage = () => {
    // const [formData, setFormData] = useState();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const jsonData = JSON.stringify(data);
        const fileData = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(fileData);
        const link = document.createElement("a");
        link.href = url;

        const date = new Date();
        const dataString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
            .toISOString()
            .split("T")[0];

        link.download = `current-date-${dataString}.json`;
        link.click();
    };

    return (
        <div className="App-body">
            <h2>10min warmups</h2>
            <form id="warmup" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="current-day">Todays date</label>{" "}
                <input type="date" {...register('current-day')} />
                <ul className="new-entry">
                    <li className="hour" id="10am">
                        {" "}
                        <label htmlFor="10am-hour-type">10 - </label>
                        <select {...register('10am-hour-type')} {...register('10am-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>
                    <textarea
                        type="text"
                        {...register('10am-notes')}
                        rows="2"
                        column="35"
                    ></textarea>
                    <li className="hour" id="11am">
                        {" "}
                        <label htmlFor="11am-hour-type">11 - </label>{" "}
                        <select id="11am-hour-type" {...register('11am-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>
                    <textarea
                        type="text"
                        {...register('11am-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="12pm">
                        {" "}
                        <label htmlFor="12pm-hour-type">12 - </label>
                        <select id="12pm-hour-type" {...register('12am-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('12am-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="1pm">
                        {" "}
                        <label htmlFor="1pm-hour-type">1 - </label>
                        <select id="1pm-hour-type" {...register('1pm-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('1pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="2pm">
                        {" "}
                        <label htmlFor="2pm-hour-type">2 - </label>
                        <select id="2pm-hour-type" {...register('2pm-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('2pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="3pm">
                        {" "}
                        <label htmlFor="3pm-hour-type">3 - </label>
                        <select id="3pm-hour-type" {...register('3pm-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('3pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="4pm">
                        {" "}
                        <label htmlFor="4pm-hour-type">4 - </label>
                        <select id="4pm-hour-type" {...register('4pm-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('4pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="5pm">
                        {" "}
                        <label htmlFor="5pm-hour-type">5 - </label>
                        <select id="5pm-hour-type" {...register('5pm-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('5pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="6pm">
                        {" "}
                        <label htmlFor="6pm-hour-type">6 - </label>
                        <select id="6pm-hour-type" {...register('6pm-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('6pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="7pm">
                        {" "}
                        <label htmlFor="7pm-hour-type">7 - </label>
                        <select id="7pm-hour-type" {...register('7pm-hour-type')} className="hour-type">
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('7pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="8pm">
                        {" "}
                        <label htmlFor="8pm-hour-type">8 - </label>
                        <select id="8pm-hour-type" {...register('8pm-hour-type')} className="hour-type" >
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('8pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="9pm">
                        {" "}
                        <label htmlFor="9pm-hour-type">9 - </label>
                        <select id="9pm-hour-type" {...register('9pm-hour-type')} className="hour-type" >
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('9pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="10pm">
                        {" "}
                        <label htmlFor="10pm-hour-type">10 - </label>
                        <select id="10pm-hour-type" {...register('10pm-hour-type')} className="hour-type" >
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('10pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="11pm">
                        {" "}
                        <label htmlFor="11pm-hour-type">11 - </label>
                        <select id="11pm-hour-type" {...register('11pm-hour-type')} className="hour-type" >
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('11pm-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="12am">
                        {" "}
                        <label htmlFor="12am-hour-type">12 - </label>
                        <select id="12am-hour-type" {...register('12am-hour-type')} className="hour-type" >
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('12am-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="1am">
                        {" "}
                        <label htmlFor="1am-hour-type">1 - </label>
                        <select id="1am-hour-type" {...register('1am-hour-type')} className="hour-type" >
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('1am-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                    <li className="hour" id="2am">
                        {" "}
                        <label htmlFor="2am-hour-type">2 - </label>
                        <select id="2am-hour-type" {...register('2am-hour-type')} className="hour-type" >
                            <option value="Choreograph">Chor</option>
                            <option value="Structured">Struc</option>
                            <option value="Discressionary">Disc</option>
                            <option value="Downtime">DT</option>
                        </select>{" "}
                    </li>{" "}
                    <textarea
                        type="text"
                        {...register('2am-notes')}
                        rows="2"
                        column="25"
                    ></textarea>
                </ul>
                <button type="submit" id="submitButton">Submit</button>
            </form>
        </div>
    );
};

export default EntryPage;