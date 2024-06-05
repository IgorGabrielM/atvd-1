import { ExperienceDetail } from './ExperienceDetail';

export function ExperienceCard({ company, position, duration }) {
    return (
        <div className="w-1/3 p-3 border flex flex-col gap-2 rounded-lg shadow-md bg-white">
            <ExperienceDetail label="Empresa" value={company} />
            <ExperienceDetail label="Cargo" value={position} />
            <ExperienceDetail label="Duração" value={duration} />
        </div>
    );
}
