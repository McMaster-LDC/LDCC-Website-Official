import { useState } from 'react';

const FAQ = () => {
  const topics = [
    {
      title: "Who are we?",
      description:
        "A team of like-minded engineering students who have a passion for innovation and a dream to help others reach their engineering goals",
    },
    {
      title: "Who is organizing the event?",
      description:
        "The conference is organized by The LDCC (Leadership Development Conference Committee) under the McMaster Engineering Society (MES), showcasing talent and innovation from the McMaster community.",
    },
    {
      title: "Where and when is the conference",
      description:
        "The event will be held on January 30th at PGCLL, at the McMaster University campus in Hamilton, Ontario.",
    },
    {
      title:
        "Is the conference open to students from all disciplines or only engineering?",
      description:
        "While the conference is tailored for engineering students, attendees from all disciplines interested in engineering, personal branding and career growth are welcome to join.",
    },
    {
      title: "What topics will be covered during the conference?",
      description:
        "Topics include personal branding strategies, leveraging LinkedIn, building a professional portfolio, and effective networking techniques.",
    },
    {
      title:
        "Will there be opportunities to network with industry professionals?",
      description:
        "Yes, there will be dedicated networking sessions with industry professionals, students who have experience in the industry, and recruiters from companies.",
    },
    {
      title:
        "What does 'Exclusive Workshop' mean?",
      description:
        "Our Exclusive Workshop is a unique opportunity for students to engage with our top-tier sponsor in a more intimate setting. This is a chance to ask questions, learn from their experiences, and gain valuable insights. They will be holding a personalized workshop for a select group of students.",
    },
    {
      title:
        "What is a conference? What can I expect?",
      description:
        "The conference is an event that includes keynote speakers, industry professionals, networking sessions, and workshops. Attendees will have the opportunity to learn from industry leaders, connect with peers, and gain valuable insights into personal branding and career growth.",
    },
    {
      title: "Is this the first year LDC is running?",
      description:
        "Nope! This is an annual event hosted by the McMaster Engineering Society and run by the Leadership Development Conference Committee. In fact, this is our fourth year running!",
    },
    {
      title: "Do I have to pay to attend the event?",
      description:
        "Absolutely not. This event is completely free; however, space is limited!",
    },
    {
      title:
        "How can I prepare for the event?",
      description: "Come prepared to network and engage with speakers. Think about what leadership and personal brand mean to you. Dress professionally, especially if you plan on getting a LinkedIn headshot!",
    },
    {
      title:
        "What can I expect from the event?",
      description: 
        <><li>Listen to inspiring keynote speakers and industry professionals.</li>
        <li>Participate in networking sessions to connect with peers and industry leaders.</li>
        <li>Receive professional LinkedIn headshots to enhance their online presence.</li>
        <li>Learn practical skills for personal branding, leadership, and career growth.</li></>
    },
    {
      title:
        "How can I stay updated on event details?",
      description: "Follow the LDC Instagram page or visit our website for updates on registration, speakers, and more details leading up to the conference.",
    },
    {
      title:
        "Are there any giveaways or prizes at the conference?",
      description: "Yes, there will be prizes at the event. More information about the conference prizes will be released soon!",
    },
    {
      title:
        "Will food and beverages be provided?",
      description: "We aim to provide all our attendees with the best experience possible. Thus, food will be provided at the event.",
    },
    {
      title:
        "What is the dress code?",
      description: "Please come dressed in Business Casual or Semi-professional, especially because there will be time to network and take Linkedin headshots!. ",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <main className="flex flex-col bg-gradient-to-b from-blue-50 to-orange-50 pt-5 px-10">
      <section className="flex flex-col gap-14 items-center">
        <div className="flex flex-col items-start max-w-screen-xl w-full">
          <h1 className="flex justify-start max-w-screen-xl w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950 ">
            FAQ
          </h1>
        </div>

        <article className="flex flex-col items-between max-w-screen-xl w-full -mt-4">
          <h2 className="font-semibold md:text-2xl lg:text-3xl text-xl flex text-red-900 max-w-screen-md">
            Answers to some of our most Frequently Asked Questions.
          </h2>
          <p className="font-medium md:text-md lg:text-lg text-sm mt-5">
            Do you have any questions? Well, we have <strong>Answers!</strong>{" "}
            At least to some of the questions.
          </p>
          <p className="font-medium md:text-md lg:text-lg text-sm mt-2">
            Don't see your question? Feel free to send us a message on our any
            of our social platforms and we will get back to you as soon as
            possible!
          </p>

          <section className="mt-10 max-w-screen-xl w-full justify-center grid gap-6 grid-cols-1 md:grid-cols-2 ">
            {topics
            .slice(0, showAll ? topics.length : 6)
            .map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="md:text-lg text-md font-semibold text-red-900">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm md:text-md">{topic.description}</p>
              </div>
            ))}
          </section>

          <button className='mb-14 mt-10'>
            <span
              onClick={() => setShowAll((showAll) => !showAll)}
              className="text-md font-normal text-purple-950 underline cursor-pointer"
            >
              {showAll ? "Show Less" : "Show More"}
            </span>
          </button>
        </article>
      </section>
    </main>
  );
};

export default FAQ;
