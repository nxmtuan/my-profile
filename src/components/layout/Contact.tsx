import { Typewriter } from 'react-simple-typewriter';
import ContactForm from '../sections/ContactSection/ContactForm';
import SocialLink from '../sections/ContactSection/SocialLink';

export default function Contact() {
    return (
        <section id="contact" className="flex gap-10 justify-center items-center py-20 max-sm:px-4">
            <div className="flex w-full gap-10 z-[2] max-sm:flex-col max-sm:gap-20">
                <div className="flex flex-col gap-10 w-[45%] max-sm:w-full">
                    <div className="flex flex-col gap-2">
                        <span className="font-code font-black text-5xl text-white max-sm:text-4xl">Contact me</span>
                        <span className="font-code font-light text-base text-white max-sm:text-xs">
                            <Typewriter
                                words={['Have something to discuss? Send me a message.']}
                                loop
                                cursor
                                cursorStyle="|"
                                cursorBlinking={false}
                                typeSpeed={70}
                                deleteSpeed={20}
                            />
                        </span>
                    </div>
                    <ContactForm />
                </div>
                <div className="flex w-[10%] justify-center items-center font-code font-bold text-white text-4xl max-sm:hidden">
                    OR
                </div>
                <div className="flex flex-col gap-10 w-[45%] max-sm:w-full">
                    <div className="flex flex-col gap-2">
                        <span className="font-code font-black text-5xl text-white mb-10 max-sm:text-4xl max-sm:mb-5">
                            Connect with me
                        </span>
                        <SocialLink />
                    </div>
                </div>
            </div>
        </section>
    );
}
