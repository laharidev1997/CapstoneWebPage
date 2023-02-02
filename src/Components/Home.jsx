import React from 'react';
import '../App.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import '../App.css'


const Home = () => {
    return (
        <div className='container mt-3-custom'>
            <h1>Project Details</h1>
            {/* <Card>
                <CardContent> */}
                    {/* <div className='row'>
                    <img src = "/profile.png" style={{width: 50}} alt="profile"></img>
                    <p>
                    We are a unique digital and technology solution provider because we bring the best of both worlds: highly experienced engineers who understand what technical solutions work in challenging field situations and seasoned business consultants who combine their field experience and change management background to help you realize the benefits of a complex technical solution.

                    What this means is that our consultants have been in the field commissioning equipment, starting-up a plant, working turnarounds, working night shifts or manning an offshore platform. We are field operatives who have rolled up our sleeves and turned valves and troubleshot artificial lift controllers, renewable energy units and control systems in the jungles of Borneo, on remote islands in Europe and Asia, in the deserts of Kuwait and Oman, on the plains of the California Coast, in the West Texas oil patch or on the offshore platforms in Abu Dhabi. We have worked across the globe from Port-of-Spain, Trinidad and Houston, Texas to Portugal, Muscat, Oman and Jakarta, Indonesia.

                    tQ Automation has delivered projects to major clients throughout the globe. We have been entrusted to solve some of our client’s most difficult issues.
                    </p>
                    </div> */}
                    <div class="float-container">

                        <div class="float-child">
                            <img src = "/profile.png"  alt="profile"></img>
                        </div>

                        <div class="float-child">
                        <p>We are a unique digital and technology solution provider because we bring the best of both worlds: highly experienced engineers who understand what technical solutions work in challenging field situations and seasoned business consultants who combine their field experience and change management background to help you realize the benefits of a complex technical solution.

What this means is that our consultants have been in the field commissioning equipment, starting-up a plant, working turnarounds, working night shifts or manning an offshore platform. We are field operatives who have rolled up our sleeves and turned valves and troubleshot artificial lift controllers, renewable energy units and control systems in the jungles of Borneo, on remote islands in Europe and Asia, in the deserts of Kuwait and Oman, on the plains of the California Coast, in the West Texas oil patch or on the offshore platforms in Abu Dhabi. We have worked across the globe from Port-of-Spain, Trinidad and Houston, Texas to Portugal, Muscat, Oman and Jakarta, Indonesia.

tQ Automation has delivered projects to major clients throughout the globe. We have been entrusted to solve some of our client’s most difficult issues.</p>
                        </div>

                    </div>
                {/* </CardContent>
            </Card> */}
        </div>
    )
}
export default Home;