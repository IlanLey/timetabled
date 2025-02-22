import React from "react";
import Event from "./Event";

const Calendar = () => {
  
    return (
        <>
            <div className="Calendar">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="time">8 am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">9 am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event="Yoga 🧘" color="purple"/>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">10 am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">11 am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">12 pm</td>
                            <td></td>
                            <td></td>
                            <Event event="Library 📚" color="yellow"/>
                            <td></td>
                            <Event event="Library 📚" color="yellow"/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">1 pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">2 pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event="CodePath 🖥️" color="blue"/>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">3 pm</td>
                            <td></td>
                            <Event event="Pharmacy ⚕️" color="green"/>
                            <td></td>
                            <Event event="Pharmacy ⚕️" color="green"/> 
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">4 pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">5 pm</td>
                            <Event event="Relaxation 🌿" color="pink"/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event="Going out 🎉" color="orange"/>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Calendar