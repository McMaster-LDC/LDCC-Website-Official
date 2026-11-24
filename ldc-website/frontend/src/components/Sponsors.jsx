import React from "react";
import MacLogo from "/src/assets/McMaster Uni Logo.png";
import MacFireball from "/src/assets/fireball.png";
import MacEngLogo from "/src/assets/macenglogo.png";
import MacEngSocLogo from "/src/assets/macengsocietylogo.png";

const sponsorshipPackage = `${import.meta.env.BASE_URL}${encodeURIComponent('Leadership Development Conference Sponsorship Package 2027.pdf')}`;

const Sponsors = () => {
  
    const sponsors = [
        {
            image: MacEngLogo,
            link: 'https://www.eng.mcmaster.ca/'
        },
        {
            image: MacEngSocLogo,
            link: 'https://www.macengsociety.ca'
        },
    ]

    return (

    <main className="flex flex-col bg-gradient-to-b from-blue-50 to-orange-50 pt-5 px-10 ">
      <section className="flex flex-col gap-14 items-center">
        <div className="flex flex-col items-start max-w-screen-xl w-full">
          <h1 className="flex justify-start max-w-screen-xl w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950 ">
            Sponsors
          </h1>
        </div>

        <article className="flex flex-col items-center text-center md:max-w-screen-xl max-w-screen-lg w-full -mt-4 gap-14">
            <div className="flex flex-col items-center text-center max-w-screen-lg w-full">
                <h2 className="font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md">
                    Sponsor Us
                </h2>
                <p className="font-medium md:text-md lg:text-lg text-sm mt-5">
                The Leadership Development Conference is a conference for students, run by students - aiming to inspire the next generation of engineers.                 
                Our conference team is dedicated to fostering leadership, growth and meaningfull connections among the Undergraduate Engineering body at McMaster.
                The LDC is only made possible through the generous support of our sponsors - by partnering with us, you directly contribute to empowering future engineers, innovators, and leaders.
                </p>
                <div className="flex items-center text-center md:gap-8 gap-4 pt-6">
                    <a className='bg-purple-950 text-slate-100 font-normal md:text-md px-3 py-2 text-sm rounded-xl hover:bg-red-900 transition' href='mailto:ldcc@macengsociety.ca'>Become a sponsor!</a>
                    <a className='bg-purple-950 text-slate-100 font-normal md:text-md px-3 py-2 text-sm rounded-xl hover:bg-red-900 transition' href={sponsorshipPackage} target="_blank" rel="noopener noreferrer">Open Sponsorship Package</a>
                </div>
            </div>
            <section aria-labelledby="sponsorship-package" className="w-full text-left">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                    <h2 id="sponsorship-package" className="text-xl font-semibold text-red-900 md:text-2xl lg:text-3xl">
                        2027 Sponsorship Package
                    </h2>
                    <a href={sponsorshipPackage} download className="rounded-xl bg-purple-950 px-4 py-2 text-sm text-white transition hover:bg-red-900">
                        Download PDF
                    </a>
                </div>
                <div className="overflow-hidden rounded-2xl border border-purple-950/15 bg-white shadow-sm">
                    <iframe
                        src={sponsorshipPackage}
                        title="2027 Leadership Development Conference Sponsorship Package"
                        loading="lazy"
                        className="h-[100svh] min-h-[360px] w-full border-0"
                    />
                </div>
                <p className="mt-3 text-sm text-slate-600">
                    <a href={sponsorshipPackage} target="_blank" rel="noopener noreferrer" className="font-medium text-purple-950 underline underline-offset-4">
                        Open the PDF in a new tab
                    </a>.
                </p>
            </section>
            <div className="flex flex-col items-center text-center">
          <h2 className="font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md">
            McMaster | Engineering
          </h2>
          <div className="flex justify-between max-w-screen-xl gap-10 w-full">
            <img src={MacFireball} className="w-1/12 h-1/2 md:flex hidden"></img>
            <p className="font-medium md:text-md lg:text-lg text-sm mt-5">
              Ranked among the top 100 schools in the world, McMaster University
              is home to one of the largest engineering programs in Canada and
              has been our partner since 2020. MacEng continues to support the
              Leadership Development Conference - allowing students to gain
              more exposure to the world of Engineering, learn from industry
              professionals and develop the skills they need to thrive as future
              leaders!
            </p>
            <img src={MacLogo} className="w-1/12 h-1/2 md:flex hidden"></img>
          </div>

          <section className="mb-14 mt-10 max-w-screen-lg w-full justify-center grid gap-6 grid-cols-1">
            {sponsors.map((sponsors, index) => (
              <div key={index} className="flex flex-col items-center text-center md:h-48 sm:h-40 h-32 p-10 bg-white rounded-lg shadow-md transition hover:scale-105">
                <a href={sponsors.link} target="_blank" className="h-full w-full flex justify-center">
                <img
                  src={sponsors.image}
                  className="h-full bg-white"
                /></a>
              </div>
            ))}
          </section>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Sponsors;
