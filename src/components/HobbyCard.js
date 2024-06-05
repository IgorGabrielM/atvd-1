import { HobbyDetail } from './HobbyDetail';

export function HobbyCard({ title, imageUrl, imageAlt }) {
    return (
        <HobbyDetail title={title} imageUrl={imageUrl} imageAlt={imageAlt} />
    );
}
