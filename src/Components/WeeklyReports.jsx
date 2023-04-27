import React from 'react'

import "../App.css"
import wr1 from '../Documents/WeeklyReport\ 1.docx'
import wr2 from '../Documents/WeeklyReport2.pdf'
import wr3 from '../Documents/Weeklyreport3.pdf'
import wr4 from '../Documents/WeeklyReport-4.pdf'
import wr5 from '../Documents/Weekly report-5.pdf'
import wr6 from '../Documents/Weekly report-6.pdf'
import wr7 from '../Documents/Weekly report-7.pdf'
import wr8 from '../Documents/Weekly report-8.pdf'
import wr9 from '../Documents/Weekly report-9.pdf'
import wr10 from '../Documents/Weekly report-10.pdf'
const WeeklyReports = () => {
    return (
        <div className='container mt-3-custom'>
            <div>
                <h4>Weekly Reports</h4>
                <ol>
                    <li>
                        <a href = {wr1}>Weekly Report 1</a>
                    </li>
                    <li>
                        <a href = {wr2}>Weekly Report 2</a>
                    </li>
                    <li>
                        <a href = {wr3}>Weekly Report 3</a>
                    </li>
                    <li>
                        <a href = {wr4}>Weekly Report 4</a>
                    </li>
                    <li>
                        <a href = {wr5}>Weekly Report 5</a>
                    </li>
                    <li>
                        <a href = {wr6}>Weekly Report 6</a>
                    </li>
                    <li>
                        <a href = {wr7}>Weekly Report 7</a>
                    </li>
                    <li>
                        <a href = {wr8}>Weekly Report 8</a>
                    </li>
                    <li>
                        <a href = {wr9}>Weekly Report 9</a>
                    </li>
                    <li>
                        <a href = {wr10}>Weekly Report 10</a>
                    </li>
                </ol>
            </div>
            
            
        </div>
    )
}
export default WeeklyReports