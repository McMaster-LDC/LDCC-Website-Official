import AboutBg from '/src/assets/about-bg.png';
import AboutImg1 from '/src/assets/about-img1.png';
import AboutImg2 from '/src/assets/about-img2.png';
import AboutImg3 from '/src/assets/about-img3.png';
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { TbMapPin2 } from "react-icons/tb";
import eventInfo from '../data/eventInfo';




const About = () => {

    const eventList = [
        {
            title: 'Networking with colleagues within the McMaster Engineering community, professionals in the field, faculty, and McMaster Engineering alumni'
        },
        {
            title: 'Join interactive presentations from professional engineers and subject matter experts'
        },
        {
            title: 'Learn about the innovative engineering, leadership, and professional development opportunities available to you'
        },
        {
            title: 'Get a LinkedIn headshot taken by a professional photographer!'
        },
        {
            title: 'Participate in a panel discussion with McMaster Engineering alumni and industry professionals'
        },
    ]

    const eventDescription = <p>The Leadership Development Conference (LDC) is McMaster University's annual event dedicated to fostering leadership skills and personal branding, with a focus on empowering students in the field of engineering. 
        <br/><br/>
    Through engaging presentations, speakers, networking opportunities, and linkedin headshots, LDC aims to provide participants with the tools they need to develop their leadership potential and build a strong personal brand aligning with their career goals.
        <br/><br/>
    This year, the theme is <strong><i>Build Your Personal Brand, Shape Your Future</i></strong>
    </p>


    return (
        <main className='flex flex-col gap-24 bg-gradient-to-b from-blue-50 to-orange-50 pt-5 px-10 pb-14'>
            <section className='flex flex-col gap-14 items-center'>
                <h1 className='flex justify-start max-w-screen-xl w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950'>About</h1>
                <article className="flex justify-between max-w-screen-xl w-full items-center -mt-4 gap-4">
                    <div className='flex flex-col text-start'>
                        <h1 className='font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md'>Welcome to McMaster's Annual Leadership Development Conference '27</h1>
                        {/* <p className='font-medium md:text-md lg:text-lg text-sm my-5'>Join McMaster Engineering students in the <strong>largest student run engineering conference!</strong></p> */}

                        <p className='font-medium md:text-md lg:text-lg text-sm my-5 max-w-screen-md' >Join McMaster University's <strong>largest student run engineering conference</strong> featuring co-op pannels, professional speakers, final-year capstone projects, networking opportuinties and Linkedin headshots! Early registeration is now closed! </p>
                        
                        <section className='flex flex-col text-lg font-bold gap-2'>
                            <div className='flex gap-2 items-center'>
                                < FaCalendarAlt />
                                <p>Date: {eventInfo.date}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                < IoMdTime />
                                <p>Timings: {eventInfo.time}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                < TbMapPin2 />
                                <p>{eventInfo.venue}, {eventInfo.location}</p>
                            </div>
                        </section>

                        <p className='font-medium md:text-md lg:text-lg text-sm my-5 max-w-screen-md'>{eventDescription}</p>

                        <div className="md:hidden flex bg-bottom select-none opacity-90 mt-4">
                            <img src={AboutImg1} alt = "Dhruv" className="w-1/2 h-3/4 top-0 border-4 rounded-xl border-red-900 right-0 object-cover transform rotate-[5deg]" />
                            <img src={AboutImg2} alt = "Dhruv" className="w-1/2 h-3/4 bottom-0 border-4 rounded-xl border-red-900 left-0 object-cover transform rotate-[-10deg]" />
                        </div>
            
                    </div>
                    
                    <div className="hidden w-[34rem] h-[26rem] relative md:flex bg-bottom select-none opacity-90">
                        <img src={AboutImg1} alt = "Speakers" className="w-1/2 h-3/4 absolute top-0 border-4 rounded-xl border-red-900 right-0 object-cover transform rotate-[20deg]" />
                        <img src={AboutImg2} alt = "Speaker" className="w-1/2 h-3/4 absolute bottom-0 border-4 rounded-xl border-red-900 left-0 object-cover transform rotate-[-15deg]" />
                    </div>
                </article>

                <article className="flex flex-row-reverse justify-between max-w-screen-xl w-full items-center gap-10">
                    <div className='flex flex-col text-start max-w-screen-xl justify-start items-start '>
                        <h1 className='font-semibold md:text-2xl lg:text-3xl text-xl flex pb-4 text-red-900 max-w-screen-md'>What to expect!</h1>

                        <ul className='font-medium md:text-md lg:text-lg text-sm max-w-screen-md list-disc'>

                            {eventList.map((event, index) => (
                                <li className="py-1" key={index}>{event.title}</li>
                            ))}

                        </ul>
            
                    </div>
                    
                    <div className="hidden md:flex bg-bottom select-none opacity-85">
                        <img src={AboutImg3} alt = "Gears" className="w-full h-full object-cover" />
                    </div>
                </article>

                <article className="flex justify-center max-w-screen-xl w-full items-center">
                    <div className='flex flex-col text-start max-w-screen-xl justify-center items-center '>
                        <h1 className='font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md'>In previous years we've had...</h1>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-5 pt-5 md:text-lg text-md text-center items-center max-w-screen-lg w-full'>
                            <div className='border px-10 py-4 text-orange-50 bg-purple-950 rounded-2xl w-full'>
                                <p className=''>200+ Attendees</p>
                            </div>
                            <div className='border py-4 text-orange-50 bg-purple-950 rounded-2xl w-full'>
                                <p className=''>5+ Presentations</p>
                            </div>
                            <div className='border py-4 text-orange-50 bg-purple-950 rounded-2xl w-full'>
                                <p className=''>10+ Organizations</p>                        
                            </div>
                            <div className='border py-4 text-orange-50 bg-purple-950 rounded-2xl w-full'>
                                <p className=''>Networking Pannels</p>
                            </div>
                        </div>
            
                    </div>
                </article>

                <img src={AboutBg} alt="LDC Banner" className="w-3/4 flex bg-cover bg-bottom select-none opacity-90 -mt-14" />
       

            </section>
            
        </main>


    )

}

export default About;