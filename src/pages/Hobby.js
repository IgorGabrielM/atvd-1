import { HobbyCard } from "../components/HobbyCard";

export function Hobby() {
    return (
        <div className='w-full h-screen flex justify-center bg-gray-100'>
            <div className='w-2/3 h-fit bg-slate-50 p-5 shadow-lg rounded-b-lg border'>
                <h1 className='font-bold text-2xl'>Hobby</h1>
                <div className="mt-2 grid grid-cols-2 gap-4">
                    <HobbyCard
                        title="Video game"
                        imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/36/SNES-Mod1-Console-Set.png"
                        imageAlt="Imagem de um console de video game"
                    />
                    <HobbyCard
                        title="Programação"
                        imageUrl="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"
                        imageAlt="Imagem de código"
                    />
                </div>
            </div>
        </div>
    );
}
