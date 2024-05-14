export function Hobby() {
    return (
        <div className='w-full h-fit flex justify-center'>
            <div className='w-2/3 bg-slate-50 p-5 shadow-lg rounded-b-lg border'>
                <h1 className='font-bold text-2xl'>Hobby</h1>
                <div className="mt-2 grid grid-cols-2 gap-4">
                    <div className="w-fit p-4 border shadow-md rounded-md">
                        <span className="font-semibold text-lg mb-2">Video game:</span>
                        <img className="w-96 rounded-lg mt-2" src="https://upload.wikimedia.org/wikipedia/commons/3/36/SNES-Mod1-Console-Set.png" alt="Imagem de um console de video game"></img>
                    </div>
                    <div className="w-fit p-4 border shadow-md rounded-md">
                        <span className="font-semibold text-lg">Programação:</span>
                        <img className="w-96 rounded-lg mt-2" src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg" alt="Imagem de código"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}