export function ExperienceDetail({ label, value }) {
    return (
        <div>
            <span className="font-bold">{label}:</span>
            <span>{value}</span>
        </div>
    );
}
