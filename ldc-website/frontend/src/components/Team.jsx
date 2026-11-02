import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

// Team component
const Default = '/2026-logo.png';
import Dhruv from '/src/assets/TeamPFP/DhruvPFP.jpg';
import Jackie from '/src/assets/TeamPFP/JackiePFP.png';
import Deea from '/src/assets/TeamPFP/DeeaPFP.png';
import Laiba from '/src/assets/TeamPFP/LaibaPFP.png';
import Deepinder from '/src/assets/TeamPFP/DeepinderPFP.png';
import Gurraj from '/src/assets/TeamPFP/GurrajPFP.png';
import Omar from '/src/assets/TeamPFP/OmarPFP.png';
import Natalie from '/src/assets/TeamPFP/NataliePFP.png';
import Aaditya from '/src/assets/TeamPFP/AadityaPFP.png';
import Trisha from '/src/assets/TeamPFP/TrishaPFP.png';
import Audrey from '/src/assets/TeamPFP/AudreyPFP.png';
import Devin from '/src/assets/TeamPFP/DevinPFP.png';
import Amion from '/src/assets/TeamPFP/AmionPFP.png';
import Buddhisha from '/src/assets/TeamPFP/Buddhisha.png';



const Team = () => {

    // To add members, update team list with the following object; if there is nothing to add, leave it empty:
    // {
    //     name: 'First Last',
    //     position: 'Position',
    //     img: Imported image,
    //     social: { // Can add zero upto five different links.
    //         github: 'Link',
    //         linkedin: 'Link',
    //         instagram: 'Link',
    //         email: 'Link'
    //         website: 'Link'
    //     },
    //     optionalParagraph: 'Optional paragraph
    // },

    const coordinatorTeamList = [
        {
            name: 'Jackie Fisher (she/her)',
            position: 'LDCC Chair/MES VP External',
            img: Jackie,
            social: {
                instagram: 'https://www.instagram.com/jackle_fisher/',
                linkedin: 'https://www.linkedin.com/in/jacqueline-fisher252/',
                email: 'mailto:vp.external@macengsociety.ca'
            },
            optionalParagraph: '3rd year Materials Science and Engineering & Society program'
        },
        {
            name: 'Dhruv Chokshi',
            position: 'LDCC Co-Chair & Website Developer Lead',
            img: Dhruv,
            social: {
                github: 'https://github.com/chokshidhruv',
                linkedin: 'https://www.linkedin.com/in/chokshidhruv/',
                email: 'mailto:chokshid@mcmaster.ca',
                website: 'https://www.dhruvchokshi.co'
            },
            optionalParagraph: 'Second year Software Engineering student at McMaster University'
        },
        {
            name: 'Deea Saha',
            position: 'LDCC Co-Chair',
            img: Deea,
            social: {
                linkedin: 'https://www.linkedin.com/in/deea-saha-036299245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                instagram: 'https://www.instagram.com/d.eeeeea',
                email: 'mailto:sahadeea24@gmail.com'
            },
            optionalParagraph: 'Second year Civil Engineering Student at McMaster University'
        },
        {
            name: 'Laiba Yousafzai',
            position: 'VP Outreach',
            img: Laiba,
            social: {
                linkedin: 'https://www.linkedin.com/in/laiba-yousafzai-8979a8251/',
                instagram: 'https://https://www.instagram.com/laiba_yousafzai24/',
                email: 'mailto:yousafzl@mcmaster.ca'
            },
            optionalParagraph: 'First year Engineering student at McMaster University'
        },
        {
            name: 'Deepinder Kaur',
            position: 'VP Media & Content',
            img: Deepinder,
            social: {
                linkedin: 'https://www.linkedin.com/in/deepinderkaur-dk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                email: 'mailto:deepinderkaur0513@gmail.com',
                website: 'https://dkaur0513.wixsite.com/dkaccessories'
            },
            optionalParagraph: 'Second year Honours Commerce student at McMaster University'
        },
        {
            name: 'Gurraj Grewal',
            position: 'VP Outreach',
            img: Gurraj,
            social: {
                linkedin: 'https://www.linkedin.com/in/gurraj-grewal',
                email: 'mailto:gurrajg16@gmail.com',
                instagram: 'https://www.instagram.com/gurraj0'
            },
            optionalParagraph: 'Second Year Automation Engineering Student at McMaster University'
        },
        {
            name: 'Omar Shafie',
            position: 'VP Finance',
            img: Omar,
            social: {
                linkedin: 'https://www.linkedin.com/in/-omarshafie',
                email: 'mailto:shafieo@mcmaster.ca',
                instagram: 'https://www.instagram.com/omar.shafie/',
                github: 'https://github.com/omar-shafie',
                website: 'https://omarshafie.notion.site/'
            },
            optionalParagraph: 'Level II Mechatronics Engineering and Management student'
        },
        {
            name: 'Natalie Cheung',
            position: 'VP Events',
            img: Natalie,
            social: {
                email: 'mailto:ncheung60@gmail.com',
            },
            optionalParagraph: 'Second year Engineering Physics student at McMaster University'
        },
        {
            name: 'Anas Abdur Rahman',
            position: 'VP Website Developer',
            img: Default,
            social: {
                linkedin: 'https://www.linkedin.com/in/anas-abdur-rahman/',
                email: 'mailto:rahmanabduranas@gmail.com',
                instagram: 'https://www.instagram.com/anas_a.rahman/',
                github: 'https://github.com/AnasR1',
            },
            optionalParagraph: 'Software Engineering student, with a passion for innovation.'
        },
        {
            name: 'Aaditya Anil',
            position: 'VP Sponsorship',
            img: Aaditya,
            social: {
                linkedin: 'https://www.linkedin.com/in/anilaaditya/',
                email: 'mailto:aadianil297@gmail.com',
                github: 'https://github.com/anila4',
            },
            optionalParagraph: 'Computer Engineering student, likes getting things done right.'
        },
        {
            name: 'Trisha Balaji',
            position: 'VP Outreach',
            img: Trisha,
            social: {
                linkedin: 'https://www.linkedin.com/in/trisha-balaji/',
                email: 'mailto:balajt1@mcmaster.ca',
            },
            optionalParagraph: 'B. Tech Automation Software Student, passionate about making connections'
        },
        {
            name: 'Audrey Gamboa',
            position: 'VP Outreach',
            img: Audrey,
            social: {
                linkedin: 'http://www.linkedin.com/in/audreygamboa',
                email: 'mailto:audrey.gamboa@outlook.com',
                instagram: 'https://www.instagram.com/audreyxmaye/'
            },
            optionalParagraph: 'Third year Electrical Engineering student at McMaster University'
        },
        {
            name: 'Devin Racco',
            position: 'VP Finance',
            img: Devin,
            social: {
                linkedin: 'https://www.linkedin.com/in/devin-racco-4a3a652a7/',
                email: 'mailto:devin.racco@gmail.com',
            },
            optionalParagraph: '2nd Year Degroote Commerce Student'
        },
        {
            name: 'Amion Yu',
            position: 'VP Events',
            img: Amion,
            social: {
                linkedin: 'https://www.linkedin.com/in/aimonyu/',
                email: 'mailto:aimonyu7@gmail.com',
                instagram: 'https://www.instagram.com/_aimon_17_/'
            },
            optionalParagraph: 'Level I Engineering Student, Committed to Completion'
        },
        {
            name: 'Buddhisha Amarakoon',
            position: 'VP Media & Content',
            img: Buddhisha,
            social: {
                linkedin: 'https://www.linkedin.com/in/buddhisha2005',
                email: 'mailto:bud.amarakoon@gmail.com',
                instagram: 'https://www.instagram.com/bud.xoxo/'
            },
            optionalParagraph: 'Second Year Honours Health Sciences Student at McMaster University'
        },

    ] 

    return (
        <main className="bg-gradient-to-b from-blue-50 to-orange-50 flex flex-col items-center px-10 pt-5 pb-14">
            <section className="flex flex-col justify-between max-w-screen-xl w-full gap-14">
                <h1 className='flex justify-start font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950'>Team</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-6 -mt-4">

                    {
                        coordinatorTeamList.map((team, index) => (
                            <div className="flex flex-col justify-center bg-purple-950 rounded-2xl py-2 px-2 pt-28 " key={index}>
                                <div className="flex flex-col items-center text-center rounded-2xl bg-white h-full px-2">
                                    <img src={team.img} className="w-36 h-36 rounded-full -mt-20 select-none object-cover bg-purple-50" />
                                    <h2 className="font-black text-red-900 text-lg py-2">{team.name}</h2>
                                    <p className="text-md font-semibold">{team.position}</p>
                                    <div className="flex items-center py-2">
                                        {team.social.github && <a href={team.social.github} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaGithub /></a>}
                                        {team.social.linkedin && <a href={team.social.linkedin} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaLinkedin /></a>}
                                        {team.social.instagram && <a href={team.social.instagram} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaInstagram /></a>}
                                        {team.social.email && <a href={team.social.email} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-lg transition"><MdEmail /></a>}
                                        {team.social.website && <a href={team.social.website} target="_blank" className="rounded-full p-2 hover:bg-purple-100 text-lg transition"><FaGlobe /></a>}
                                    </div>
                                    <p className="text-sm italic font-normal pb-6">{team.optionalParagraph}</p>
                                </div>    
                            </div>
                        ))
                    }

                </div>
            </section>
        </main>
    )

}

export default Team;