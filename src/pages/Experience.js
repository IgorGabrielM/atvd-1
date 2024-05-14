export function Experience() {
    return (
        <div className='w-full h-fit flex justify-center'>
            <div className='w-2/3 bg-slate-50 p-5 shadow-lg rounded-b-lg border'>
                <h1 className='font-bold text-2xl mb-2'>Exepricia de trabalho</h1>

                <div className="flex gap-4">
                    <div className="w-1/3 p-3 border flex flex-col gap-2 rounded-lg shadow-md bg-white">
                        <div>
                            <span className="font-bold">Empresa:</span>
                            <span>Ekaizen digital</span>
                        </div>
                        <div>
                            <span className="font-bold">Cargo:</span>
                            <span>Estágio</span>
                        </div>
                        <div>
                            <span className="font-bold">Duração:</span>
                            <span>JUL-2021 -  DEZ-2022</span>
                        </div>
                    </div>
                    <div className="w-1/3 p-3 border flex flex-col gap-2 rounded-lg shadow-md bg-white">
                        <div>
                            <span className="font-bold">Empresa:</span>
                            <span>Ekaizen digital</span>
                        </div>
                        <div>
                            <span className="font-bold">Cargo:</span>
                            <span>Desenvolvedor junior</span>
                        </div>
                        <div>
                            <span className="font-bold">Duração:</span>
                            <span>JUL-2021 -  DEZ-2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}