import { Routes } from '@/const'

const NotFound = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-red-500'>404</h1>
        <p className='mt-4 text-xl text-gray-700'>¡Uy! La página que busca no existe.</p>
        <a href={Routes.Home} className='mt-6 inline-block rounded bg-primary px-6 py-2 text-white shadow'>
          Volver a la página de inicio
        </a>
      </div>
    </div>
  )
}

export { NotFound }
