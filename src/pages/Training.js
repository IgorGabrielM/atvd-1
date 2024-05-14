export function Training() {
    return (
        <div className='w-full h-fit flex justify-center'>
            <div className='w-2/3 bg-slate-50 p-5 shadow-lg rounded-b-lg border'>
                <h1 className='font-bold text-2xl mb-2'>Formação</h1>
                <div className="flex gap-4">
                    <div className="w-1/3 p-3 border flex flex-col gap-2 rounded-lg shadow-md bg-white">
                        <div>
                            <span className="font-bold">Nível: </span>
                            <span>Técnico</span>
                        </div>
                        <div>
                            <span className="font-bold">Curso: </span>
                            <span>Informatica</span>
                        </div>
                        <div>
                            <span className="font-bold">Instituição: </span>
                            <span>FIEC</span>
                        </div>
                        <div>
                            <span className="font-bold">Duração: </span>
                            <span>JUL-2021 -  DEZ-2022</span>
                        </div>
                    </div>

                    <div className="w-1/3 p-3 border flex flex-col gap-2 rounded-lg shadow-md bg-white">
                        <div>
                            <span className="font-bold">Nível: </span>
                            <span>Técnologo</span>
                        </div>
                        <div>
                            <span className="font-bold">Curso: </span>
                            <span>Sistemas para internet</span>
                        </div>
                        <div>
                            <span className="font-bold">Instituição: </span>
                            <span>FIAP</span>
                        </div>
                        <div>
                            <span className="font-bold">Duração: </span>
                            <span>JUL-2023 -  JUL-2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}