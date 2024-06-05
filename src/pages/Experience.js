import { ExperienceCard } from "../components/ExperienceCard";

export function Experience() {
    return (
        <div className='w-full h-screen flex justify-center bg-gray-100'>
            <div className='w-2/3 h-fit bg-slate-50 p-5 shadow-lg rounded-b-lg border'>
                <h1 className='font-bold text-2xl mb-2'>Experiência de trabalho</h1>

                <div className="flex gap-4">
                    <ExperienceCard
                        company="Ekaizen digital"
                        position="Estágio"
                        duration="JUL-2021 - DEZ-2022"
                    />
                    <ExperienceCard
                        company="Ekaizen digital"
                        position="Desenvolvedor junior"
                        duration="JUL-2021 - DEZ-2022"
                    />
                </div>
            </div>
        </div>
    );
}