import React from 'react';
import Aventur from "../res/Aventur.jpeg"
import '../App.css'
const Home = () => {
    return (
        <div className='container mt-3-custom'>
            <div className="container-body">
                <div className="content">
                    <h2>Project Details</h2>
                    <p>AVENTUR is a travel assistance application that aims to streamline group trip management for travelers. The project team is currently undertaking a revamp of the existing dashboard based on new Figma designs, in addition to adding new features to enhance the application's functionality. The team is also prioritizing API security, identifying, and fixing bugs, and maintaining test scripts to ensure the application's reliability. To facilitate project management, the team is utilizing the sprint and JIRA methodology, with each sprint lasting a week. Furthermore, the project team is also engaged in business development efforts to expand the application's user base of the mobile application.</p>
                </div>
                <div className="image">
                <img src = {Aventur} alt = ""/>
                </div>
            </div>
            {/* <h1>Project Details</h1> */}
            {/* <div className='clearfix'>
                <div className='row homepage'>
                    <div className='col-md-2'>
                        <div className='homeImg'>
                            <img src = {profile} alt = ""/>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='homebody'>
                            <p>
                            “Travelling is fun and adventurous when you travel in groups, but what if you’re lost   somewhere, in that adventure?”
We have many online and offline travel agencies who can provide services such as accommodations, tours, and transportation services accessible to the customers through various packages. Nevertheless, they don’t provide some of the features that our application can furnish.
AVENTUR is a travel assistance application where travelers can manage their group trips online through digital travel assistance. With this application travelers can create groups, plan a trip, create checklists, schedule events to gather group members, share location to group members and track member’s location individually. This application offers a feature called a guidebook, which not only manifests the tourist place, but also includes additional notes and tips in the application relevant to the place. Moreover, travelers can use the location button which will redirect them to google maps and maps applications for routes to reach a destination.
The application includes an emergency button when clicked, sends a notification to their group members that the person is in need of help. There are more features coming soon such as walkie-talkie feature, weather report and in-app camera.
The application will be available in web and mobile versions and is compatible to both iOS and Android platforms.

                            </p>
                        </div>
                    </div>
                </div>
                
            </div> */}
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
                    {/* <div class="float-container h-100">
                        <div class="float-child" style={{ width: '40%', padding: '0px' }}>
                            <img src = {profile} style={{ width: '100%' }}  alt="profile"></img>
                        </div>

                        <div class="float-child" style={{ width: '60%' }}>
                        <p>We are a unique digital and technology solution provider because we bring the best of both worlds: highly experienced engineers who understand what technical solutions work in challenging field situations and seasoned business consultants who combine their field experience and change management background to help you realize the benefits of a complex technical solution.

What this means is that our consultants have been in the field commissioning equipment, starting-up a plant, working turnarounds, working night shifts or manning an offshore platform. We are field operatives who have rolled up our sleeves and turned valves and troubleshot artificial lift controllers, renewable energy units and control systems in the jungles of Borneo, on remote islands in Europe and Asia, in the deserts of Kuwait and Oman, on the plains of the California Coast, in the West Texas oil patch or on the offshore platforms in Abu Dhabi. We have worked across the globe from Port-of-Spain, Trinidad and Houston, Texas to Portugal, Muscat, Oman and Jakarta, Indonesia.

tQ Automation has delivered projects to major clients throughout the globe. We have been entrusted to solve some of our client’s most difficult issues.</p>
                        </div>

                    </div> */}
                {/* </CardContent>
            </Card> */}
        </div>
    )
}
export default Home;