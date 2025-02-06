import {Sheet, SheetTrigger, SheetContent} from "./components/ui/Sheet"
import {Button} from "./components/ui/Button"
import {RainbowButton} from "./components/ui/RainbowButton.tsx";

function MenuIcon(props: { className?: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
    )
}


function MountainIcon(props: { className?: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
        </svg>
    )
}

function NavComponent() {
    return (
        <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 border-b border-gray-200 shadow-sm">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6"/>
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <a href="#" className="mr-6 hidden lg:flex">
                        <MountainIcon className="h-6 w-6"/>
                        <span className="sr-only">Acme Inc</span>
                    </a>
                    <div className="grid gap-2 py-6">
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            Home
                        </a>
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            About
                        </a>
                        <a href="#" className="flex w-full items-center py-2 text-lg font-semibold">
                            Contact
                        </a>
                    </div>
                </SheetContent>
            </Sheet>
            <a href="#" className="mr-6 hidden lg:flex">
                <MountainIcon className="h-6 w-6"/>
                <span className="sr-only">Acme Inc</span>
            </a>
            <nav className="ml-auto hidden lg:flex gap-6">
                <a
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"

                >
                    Work
                </a>
                <a
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"

                >
                    About
                </a>
                <a
                    href="#"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                    Contact
                </a>
            </nav>
        </header>
    )
}

const secOne = [
    { title: 'Ridhanya\'s birthday ceremony', link: 'https://www.youtube.com/embed/gqkpOhLK_CQ?si=NYLhP9zt0aimKoAL' },
    { title: 'Raktim & Susmita', link: 'https://www.youtube.com/embed/LWtqRwWFeJI?si=fLvUp_9qEnyh5vhS' },
    { title: 'Dwaipayan & Debarati', link: 'https://www.youtube.com/embed/g2Y16bqr7j0?si=buv0takWdBDwev_Q' },
];

const secTwo = [
    { title: 'Prabarita & Sudip', link: 'https://www.youtube.com/embed/McrHpegOx7Q?si=4iYqH-GSVurP0184' },
    { title: 'Swagata & Pritam', link: 'https://www.youtube.com/embed/8nGqubL1D8k?si=mnowADPn_ccfIdKs' },
    { title: 'Half-Saree Ceremony', link: 'https://www.youtube.com/embed/gMVlWZyoPak?si=FkxnorSpxKYlNHKj' },
];


const VideoBox = ({ title, link }: { title: string; link: string }) => (
    <div className={'aspect-video bg-stone-50 border border-solid border-gray-200 px-1.5 pt-1.5'}>
        <iframe width="100%" height="100%" src={link}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>

        <div className={'flex flex-row items-center justify-center'}>
            <p className={'font-light py-3'}>{title}</p>
        </div>
    </div>
);


function App() {

    return (
        <>
            <NavComponent/>
            <div className={'container h-screen'}>
                <div className={'flex flex-col items-center justify-center mt-12'}>
                    <p className={'font-display text-[36px] pb-2'}>Hi there!</p>
                    <span className={'font-body text-[21px]'}>I'm</span>
                    <h1 className={'text-[75px] leading-[85px] font-bold tracking-tight'}>TANUJA BASU</h1>
                    <p className={'font-light text-[16px] text-[#5f5f5f] tracking-wide pt-3'}>Turning Moments into Forever</p>
                </div>
                <section className={'my-12 sm:columns-3 columns-1'}>
                    {secOne.map((item) => <VideoBox key={item.title} link={item.link} title={item.title} />)}
                </section>

                <section className={'my-12 sm:columns-3 columns-1'}>
                    {secTwo.map((item) => <VideoBox key={item.title} link={item.link} title={item.title} />)}
                </section>

                <section className={'pt-18'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        {/*<div className={'aspect-square'}></div>*/}
                        {/*<div>*/}
                            <h2 className={'text-[36px] font-body font-bold tracking-tight'}>About Me</h2>
                            <p className={'text-[#5f5f5f] text-[16px] my-3 w-2/4 text-center tracking-wide'}>Born and raised in Kolkata, now based in Bangalore, I’m a passionate video editor dedicated to crafting cinematic memories that last a lifetime. With nearly three years of professional experience, I specialize in transforming raw moments into stunning visuals that my clients can cherish forever. Beyond video editing, I have a deep love for photography, capturing emotions and stories in every frame. Let’s create something beautiful together!</p>
                            <RainbowButton className={'text-white mt-6'}>Let's Chat</RainbowButton>
                        {/*</div>*/}
                    </div>
                </section>
            </div>
        </>
    )
}

export default App


