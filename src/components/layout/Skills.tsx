import Skill2 from '@/components/sections/SkillsSections/Skill2';
import Skill1 from '@/components/sections/SkillsSections/Skill1';
import Skill3 from '@/components/sections/SkillsSections/Skill3';

export default function Skills() {
    return (
        <div id="skills" className="skills-wrapper flex w-auto justify-center items-center max-sm:ml-3 max-sm:mr-3">
            <div className="container flex h-screen justify-center items-center max-sm:h-fit">
                <div className="skills-block flex justify-center w-full h-5/6 gap-5 max-sm:flex-col">
                    <div className="flex flex-col gap-5 w-1/4 max-sm:w-full">
                        <div className="flex w-full h-1/6 font-bold text-3xl text-gray-700 bg-white rounded-xl p-7 items-center justify-center select-none 2xl:text-4xl ">
                            MY SKILLS
                        </div>
                        <Skill1 />
                    </div>
                    <div className="flex flex-col gap-5 w-3/4 h-full max-sm:w-full">
                        <div className="flex gap-5 h-1/2">
                            <Skill2 />
                            <div className="w-1/2 h-full 2xl:text-xl bg-white rounded-xl p-10 hover:shadow-2xl transition duration-500 max-sm:hidden">
                                These skills I have learned over four years of university and several months of
                                internships at companies. To provide the best user experience, I constantly update
                                myself with knowledge of new technologies and utilize tools that support interface
                                design and effects creation, such as Bootstrap or Tailwind CSS, as well as tools for
                                creating stunning animations using GSAP. These are tools I genuinely enjoy and find
                                incredibly helpful in my work.
                            </div>
                        </div>
                        <Skill3 />
                    </div>
                </div>
            </div>
        </div>
    );
}
