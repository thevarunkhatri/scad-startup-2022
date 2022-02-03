import React from "react";
import { Link } from "gatsby";


const ScheduleControls = ({activeCalendar}) => (
    <div className="scheduleControls">
        <ul className="controlHolder">
        <Link to="/schedule"><li className={ activeCalendar ? "active activeLeft controls" : "activeLeft controls" }>Required</li></Link>
        <Link to="/sessions"><li className={ activeCalendar ? "activeRight controls" : "active activeRight controls" }>Sessions</li></Link>
        </ul>
    </div>
);

export default ScheduleControls;
