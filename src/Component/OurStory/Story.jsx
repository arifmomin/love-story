import { FaHeart } from 'react-icons/fa';
import FirstMeet from './OurStoryImage/first-meet.jpg';
import FirstTalk from './OurStoryImage/first-talk.jpg';
import Engegment from "./OurStoryImage/engagement.jpg";
import marrigeProposal from "./OurStoryImage/promise.jpg"
const Story = () => {
  return (
    <div className='py-16'>
        <div className='container'>
            <div>
                <h2 className='heading'>Our Love Story</h2>
                <div className='flex justify-center items-center gap-x-4'>
                    <span className='w-[50px] h-[1px] bg-fontColor inline-block'></span>
                    <span className='text-base text-fontColor inline-block'><FaHeart/></span>
                    <span className='w-[50px] h-[1px] bg-fontColor inline-block'></span>
                </div>
            </div>
            <div className='max-w-[1250px] m-auto mt-10'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <img className='story-image' src={FirstTalk} alt="first-talk.jpg" />
                    </div>
                    <div className='md:pl-[30px] flex-1'>
                        <div className='flex flex-col justify-center w-full h-full'>
                        <h2 className='story-title'>First time we Talk</h2>
                        <h3 className='text-sm sm:text-base md:text-xl text-black font-medium font-caps md:mt-2 mb-2 md:mb-3'>29 September 2024</h3>
                        <p className='text-sm sm:text-base md:text-[18px] text-gray-500 font-normal font-roboto mb-5 md:mb-0'>
                            It all started with a simple message.
                            I didn’t know exactly what to say, so I sent just three dots: “...”. It may not seem like much, but to me, it was a quiet way of reaching out — hoping she would notice, hoping she would reply.
                            
                            And she did.
                            
                            Her reply was a simple “Kico Bolben Vahiya”, but in that small word, something felt different. That one message broke the silence between us and opened a door we never knew existed. From that moment, our conversation began — slowly, naturally, and beautifully.
                            
                            What followed were long chats filled with laughter, stories, and a growing connection. Every word felt special. Every reply brought us closer. We weren’t just talking anymore — we were understanding each other in a way we hadn’t before.
                        </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row'>
                    <div className='md:pr-[30px] flex-1'> 
                        <div className='flex flex-col justify-center w-full h-full items-start md:items-end'>
                        <h2 className='story-title'>A Promise of Forever</h2>
                        <h3 className='text-sm sm:text-base md:text-xl text-black font-medium font-caps md:mt-2 mb-2 md:mb-3'>1 October 2024</h3>
                        <p className='text-sm sm:text-base md:text-[18px] text-gray-500 font-normal font-roboto text-start md:text-end mb-5 md:mb-0'>
                        There came a moment when our hearts spoke louder than words. It wasn’t just about feeling close or sharing smiles anymore — it was about choosing each other, no matter what the future held.
                           
                           We made a promise — a promise of forever.
                           To stand by each other through every joy and challenge,
                           To grow together with love, trust, and patience,
                           To build a life filled with memories, laughter, and endless support.
                           And above all, to be loyal to each other for a lifetime —
                           two souls, two hearts, forever faithful and true.
                           
                           This promise wasn’t just spoken; it was felt deeply in our souls — a silent vow that whatever comes, we will face it hand in hand.
                           
                           Our promise of forever marked the true beginning of our journey — not just as lovers, but as lifelong partners.
                        </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='story-image' src={marrigeProposal} alt="marrige-proposal.svg" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <img className='story-image' src={FirstMeet} alt="first-meet.jpg" />
                    </div>
                    <div className='md:pl-[30px] flex-1'>
                        <div className='flex flex-col justify-center w-full h-full'>
                        <h2 className='story-title'>First time we meet </h2>
                        <h3 className='text-sm sm:text-base md:text-xl text-black font-medium font-caps md:mt-2 mb-2 md:mb-3'>4 February 2025</h3>
                        <p className='text-sm sm:text-base md:text-[18px] text-gray-500 font-normal font-roboto mb-5 md:mb-0'>
                        It was the 4th of February 2025.

                        We met for the very first time — quietly, without telling anyone in our families.
                        The place was simple — Saydabad Bus Stand.
                        But the moment was anything but ordinary.
                        
                        With nervous hearts and excited eyes, we found each other through a live location and a shared feeling we both couldn’t explain. It was short, unplanned, and quiet — but something about it felt magical.
                        
                        That day, everything felt different.
                        It wasn’t just a meetup. It was the first step toward something real — something we both felt deep inside, even if we didn’t say it out loud.
                        
                        That first look, that first smile…
                        It stayed with us, long after we walked away.
                        </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row'>
                    <div className='md:pr-[30px] flex-1'>
                        <div className='flex flex-col justify-center w-full h-full items-start md:items-end'>
                        <h2 className='story-title'>A Family’s Blessing</h2>
                        <h3 className='text-sm sm:text-base md:text-xl text-black font-medium font-caps md:mt-2 mb-2 md:mb-3'>2 May 2025</h3>
                        <p className='text-sm sm:text-base md:text-[18px] text-gray-500 font-normal font-roboto text-start md:text-end mb-5 md:mb-0'>
                           Our wedding came as a surprise during an urgent trip to a village with my family. Though everything happened suddenly and without much planning, it was filled with deep love and wholehearted support from both our families. Their blessings became the foundation that gave us strength and hope to start this new chapter together.
                           
                           As we begin our life side by side, I pray that every day is filled with happiness, peace, and endless love. I want my dear wife to know that
                           I love you 💙 — today, tomorrow, always and Forever.
                           
                           May our hearts remain forever connected, and may our journey be blessed with joy, understanding, and beautiful memories that last a lifetime. Together, we will build a life full of laughter, support, and unwavering love that grows stronger with each passing day.
                        </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='story-image' src={Engegment} alt="engagement.jpg" /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story