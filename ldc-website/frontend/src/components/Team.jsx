import { FaLinkedin, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ComingSoon from "./ComingSoon";

const Team = () => {
    // Add members to this list using the template below:
    // {
    //     name: 'First Last',
    //     position: 'Position',
    //     img: Imported image,
    //     social: {
    //         github: 'Link',
    //         linkedin: 'Link',
    //         instagram: 'Link',
    //         email: 'Link',
    //         website: 'Link'
    //     },
    //     optionalParagraph: 'Optional paragraph'
    // }
    const coordinatorTeamList = [];

    if (coordinatorTeamList.length === 0) {
        return (
            <ComingSoon
                title="Team"
                description="We're preparing the team page so you can meet the people behind the conference."
                message="Check back soon for updates!"
            />
        );
    }

    return (
        <main className="bg-gradient-to-b from-blue-50 to-orange-50 flex flex-col items-center px-10 pt-5 pb-14">
            <section className="flex flex-col justify-between max-w-screen-xl w-full gap-14">
                <h1 className="flex justify-start font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950">Team</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 gap-6 -mt-4">
                    {coordinatorTeamList.map((team, index) => (
                        <div className="flex flex-col justify-center bg-purple-950 rounded-2xl py-2 px-2 pt-28" key={index}>
                            <div className="flex flex-col items-center text-center rounded-2xl bg-white h-full px-2">
                                <img src={team.img} alt={team.name} className="w-36 h-36 rounded-full -mt-20 select-none object-cover bg-purple-50" />
                                <h2 className="font-black text-red-900 text-lg py-2">{team.name}</h2>
                                <p className="text-md font-semibold">{team.position}</p>
                                <div className="flex items-center py-2">
                                    {team.social.github && <a href={team.social.github} target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaGithub /></a>}
                                    {team.social.linkedin && <a href={team.social.linkedin} target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaLinkedin /></a>}
                                    {team.social.instagram && <a href={team.social.instagram} target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-purple-100 text-md transition"><FaInstagram /></a>}
                                    {team.social.email && <a href={team.social.email} target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-purple-100 text-lg transition"><MdEmail /></a>}
                                    {team.social.website && <a href={team.social.website} target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-purple-100 text-lg transition"><FaGlobe /></a>}
                                </div>
                                <p className="text-sm italic font-normal pb-6">{team.optionalParagraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Team;