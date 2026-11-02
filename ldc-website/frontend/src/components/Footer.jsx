import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Logo from '../assets/2026-icon.png'

const Footer = () => {

    const Links = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/ldc_maceng/'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/mcmaster-engineering-leadership-development-conference-9169aa29b/?originalSubdomain=ca'
        },
        {
            name: 'Email',
            url: 'mailto:ldcc@macengsociety.ca'
        }
    ];

    const navLinks = [
        { 
            title: 'About', 
            path: '/About' 
        },
        { 
            title: 'Agenda', 
            path: '/404' 
        },
        // { 
        //     title: 'Speakers', 
        //     path: '/404' 
        // },
        { 
            title: 'Sponsors', 
            path: '/404' 
        },
        { 
            title: 'Team', 
            path: '/Team' 
        },
        { 
            title: 'FAQ', 
            path: '/FAQ' 
        },
    ]


    return(
        <footer className="p-10 bg-orange-50 flex flex-col items-center justify-center text-center px-5 shadow-inner" style={{boxShadow: '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)' }} >
            <Link to={'/'}><img src={Logo} alt="logo" className="w-16 h-18 select-none cursor-pointer" onClick={() => window.scrollTo(0, 0)}/></Link>
                            
            <div className='flex text-center items-center justify-center mt-4 md:gap-1 px-5'>
                    {Links.map((link, index) => (
                        <a
                            key={index}
                            className="p-2 rounded-full text-lg md:text-xl cursor-pointer hover:bg-purple-100 transition"
                            href={link.url}
                            target="_blank"
                        >
                            {link.name === 'Facebook' && <FaFacebook />}
                            {link.name === 'Instagram' && <FaInstagram />}
                            {link.name === 'Linkedin' && <FaLinkedin />}
                            {link.name === 'Email' && <MdEmail />}
                        </a>
                    ))}
                </div> 

                <div className='flex md:gap-6 gap-2 py-4 md:text-sm lg:text-md text-xs font-semibold items-center'>
                    {navLinks.map((navLinks, index) => (
                        <Link to={navLinks.path} key={index} className="transition hover:text-red-900" onClick={() => window.scrollTo(0, 0)}>
                            <button className=''>{navLinks.title}</button>
                        </Link>

                    ))}
                </div>

                <a className='font-normal md:text-sm text-xs underline' href='mailto:ldcc@macengsociety.ca'>Become a sponsor!</a>

                <p className="text-xs pt-4">Copyright @ {new Date().getFullYear()} Leadership Development Conference</p>
                {/* <p className="text-xs pt-2">Handmade with ❤ using React + Vite & Tailwind</p> */}
        </footer>
    )

}

export default Footer;