import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faZ } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatElement from '@/components/ElementAnimation/FloatElement';

const socialLink = [
    {
        id: 1,
        title: 'LinkedIn',
        subTitle: "let's connect",
        icon: faLinkedinIn,
        url: 'https://www.linkedin.com/in/minh-tuan-nguyen-xuan',
    },
    {
        id: 2,
        title: 'Zalo',
        subTitle: 'Nguyễn Tuấn',
        icon: faZ,
        url: 'https://zalo.me/0359146876',
    },
    {
        id: 3,
        title: 'Telegram',
        subTitle: '@nx_minhtuan',
        icon: faTelegram,
        url: 'https://t.me/nx_minhtuan',
    },
    {
        id: 4,
        title: 'Github',
        subTitle: '@tuannguyen2002',
        icon: faGithub,
        url: 'https://github.com/tuannguyen2002',
    },
];

export default function SocialLink() {
    return (
        <section className="flex flex-col gap-5 justify-center">
            {socialLink.map((item) => (
                <motion.div
                    key={item.title}
                    className="group w-full py-3 p-10 cursor-pointer font-code text-center flex items-center gap-5 text-white border-b-2 border-white max-sm:px-5"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, transparent 50%, #ffffff 50%)',
                        backgroundSize: '100% 200%',
                        backgroundPosition: '100% 0%',
                    }}
                    initial={{ backgroundPosition: '100% 0%' }}
                    whileHover={{ backgroundPosition: '0% 100%' }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full gap-10 items-center"
                    >
                        <FloatElement duration={2} className="flex w-full gap-10 items-center">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full p-2 border-2 border-white group-hover:text-[#404040] group-hover:border-[#404040] hover:transition-all duration-300 max-sm:w-10 max-sm:h-10">
                                <FontAwesomeIcon icon={item.icon} className="w-10 h-10 max-sm:w-5 max-sm:h-5" />
                            </div>
                            <div className="flex flex-col gap-2 items-start group-hover:text-[#404040] hover:transition-all duration-300">
                                <span className="text-3xl font-bold">{item.title}</span>
                                <span className="text-base font-light">{item.subTitle}</span>
                            </div>
                            <div className="ml-auto w-10 h-10 p-2 rounded-full group-hover:border-2 group-hover:text-[#404040] hover:border-[#404040] hover:transition-all duration-300">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                        </FloatElement>
                    </Link>
                </motion.div>
            ))}
        </section>
    );
}
