import { useState } from 'react';

export function AboutYou() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setAddress(data);
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    } else {
      console.error('CEP must have 8 characters');
    }
  };

  return (
    <div className='w-full h-screen flex justify-center bg-gray-100'>
      <div className='w-2/3 h-fit bg-slate-50 p-5 shadow-lg rounded-b-lg border'>
        <h1 className='font-bold text-2xl'>Sobre você</h1>
        <div className='mt-2 flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <span className='font-bold'>Nome:</span>
              <span>Igor G. M. Ramos</span>
            </div>

            <div className='flex gap-2'>
              <span className='font-bold'>Data de nascimento:</span>
              <span>26/01/2005</span>
            </div>
          </div>

          <div className='flex gap-2'>
            <span className='font-bold'>Bio:</span>
            <span>Atualmente cursando sistemas para internet (2º semestre)</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cep" className='font-bold'>Cep</label>
              <input className='border rounded-lg mx-2' name="cep" value={cep} onChange={handleCepChange} />
              <div className='w-fit px-4 my-2 bg-sky-500 text-white font-bold shadow-md rounded-lg'>
                <button type="submit">Atribuir</button>
              </div>
            </div>
          </form>
        </div>

        {address && (
          <div>
            <h2 className='font-bold text-xl mt-4'>Endereço</h2>
            <div className='grid grid-cols-2 gap-2 mt-2'>
              <p><span className='font-bold'>CEP: </span> {address.cep}</p>
              <p> <span className='font-bold'>Logradouro: </span>{address.logradouro}</p>
              <p><span className='font-bold'>Bairro: </span>{address.bairro}</p>
              <p><span className='font-bold'>Cidade: </span> {address.localidade}</p>
              <p><span className='font-bold'>Estado: </span> {address.uf}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
