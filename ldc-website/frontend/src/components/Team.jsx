import teamMembers from '../data/team.json';

const teamPhotos = import.meta.glob(
    '../assets/TeamPFP/thumbnails/*.jpg',
    { eager: true, import: 'default', query: '?url' },
);

const coChairs = teamMembers.filter(
    (member) => member.position === 'LDC Co-Chair',
);

const executives = teamMembers.filter(
    (member) => member.position !== 'LDC Co-Chair',
);

function SectionHeading({ id, children }) {
    return (
        <div className="mb-6 flex items-center gap-4">
            <h2
                id={id}
                className="text-left text-2xl font-bold tracking-tight text-red-900 md:text-3xl"
            >
                {children}
            </h2>
            <span
                aria-hidden="true"
                className="h-px flex-1 bg-purple-950/20"
            />
        </div>
    );
}

function Portrait({ member, featured = false }) {
    const photo = teamPhotos[`../assets/TeamPFP/thumbnails/${member.image}`];
    const size = featured ? 'h-40 w-40 sm:h-48 sm:w-48' : 'h-40 w-40';

    return (
        <div
            className={`${size} shrink-0 overflow-hidden rounded-full bg-purple-50 shadow-sm ring-4 ring-white`}
        >
            {photo ? (
                <img
                    src={photo}
                    alt=""
                    width={featured ? 192 : 160}
                    height={featured ? 192 : 160}
                    loading={featured ? 'eager' : 'lazy'}
                    decoding="async"
                    style={{ objectPosition: member.objectPosition ?? '50% 65%' }}
                    className="h-full w-full object-cover"
                />
            ) : (
                <span
                    aria-hidden="true"
                    className="flex h-full items-center justify-center text-4xl font-bold text-purple-950"
                >
                    {member.name
                        .trim()
                        .split(/\s+/)
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join('')}
                </span>
            )}
        </div>
    );
}

function ChairCard({ member }) {
    return (
        <article className="flex min-w-0 flex-col rounded-2xl bg-purple-950 p-2 shadow-sm sm:flex-row">
            <div className="flex shrink-0 items-center justify-center p-5 sm:px-4 xl:px-6">
                <Portrait member={member} featured />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center rounded-xl bg-white px-5 py-6 text-center sm:text-left xl:px-8">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-950">
                    {member.position}
                </p>
                <h3 className="mt-2 text-2xl font-black leading-tight text-red-900 xl:text-3xl">
                    {member.name}
                </h3>
                <p className="mt-3 text-sm italic text-slate-600">
                    {member.programAndLevel}
                </p>
            </div>
        </article>
    );
}

function ExecutiveCard({ member }) {
    return (
        <article className="flex flex-col rounded-2xl bg-purple-950 px-2 pb-2 pt-28 shadow-sm">
            <div className="flex flex-1 flex-col items-center rounded-xl bg-white px-4 pb-6 text-center">
                <div className="-mt-20">
                    <Portrait member={member} />
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-red-900">
                    {member.name}
                </h3>
                <p className="mt-1 font-semibold text-purple-950">
                    {member.position}
                </p>
                <p className="mt-2 text-sm italic text-slate-600">
                    {member.programAndLevel}
                </p>
            </div>
        </article>
    );
}

export default function Team() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-50 to-orange-50 px-10 pt-5 pb-14">
            <div className="flex w-full max-w-screen-xl flex-col gap-10">
                <header className="border-b border-purple-950 pb-6">
                    <h1 className="text-2xl font-bold text-red-900 md:text-3xl lg:text-5xl">
                        Team
                    </h1>
                </header>

                <section
                    aria-labelledby="meet-the-team"
                    className="flex flex-col items-center px-2 py-6 text-center sm:py-10"
                >
                    <h2
                        id="meet-the-team"
                        className="text-4xl font-black leading-tight tracking-tight text-purple-950 sm:text-5xl lg:text-6xl"
                    >
                        Meet the{' '}
                        <span className="text-red-900">&rsquo;27 team.</span>
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        The students bringing McMaster&rsquo;s Leadership Development Conference to life.
                    </p>
                </section>

                <section aria-labelledby="co-chairs">
                    <SectionHeading id="co-chairs">Co-Chairs</SectionHeading>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {coChairs.map((member) => (
                            <ChairCard key={member.name} member={member} />
                        ))}
                    </div>
                </section>

                <section aria-labelledby="executive-team">
                    <SectionHeading id="executive-team">
                        Executive Team
                    </SectionHeading>
                    <div className="grid gap-6 min-[560px]:grid-cols-2 lg:grid-cols-3">
                        {executives.map((member) => (
                            <ExecutiveCard key={member.name} member={member} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
