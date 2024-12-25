import Skill1 from '@/components/sections/SkillsSections/Skill1';
import Skill2 from '@/components/sections/SkillsSections/Skill2';
import Skill3 from '@/components/sections/SkillsSections/Skill3';
import Skill4 from '@/components/sections/SkillsSections/Skill4';

export default function Skills() {
    return (
        <div className="skills-wrapper flex w-auto justify-center items-center">
            <div className="container flex h-screen justify-center items-center">
                <div className="skills-block grid grid-cols-2 w-full h-5/6 gap-5">
                    <Skill1 />
                    <Skill2 />
                    <Skill3 />
                    <Skill4 />
                </div>
            </div>
        </div>
    );
}
