export function HobbyDetail({ title, imageUrl, imageAlt }) {
    return (
        <div className="w-fit p-4 border shadow-md rounded-md">
            <span className="font-semibold text-lg mb-2">{title}:</span>
            <img className="w-96 rounded-lg mt-2" src={imageUrl} alt={imageAlt}></img>
        </div>
    );
}
