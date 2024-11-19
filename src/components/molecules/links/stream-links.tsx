function StreamLinks() {
  return (
    <section className='flex flex-col w-full gap-3 bg-white p-5 rounded-lg'>
      <h2 className='text-xl font-bold'>Puedes ver Rick and Morty en:</h2>
      <ul>
        <li>
          <a className='font-semibold flex gap-4 w-full justify-between' href='https://www.netflix.com/login'>
            Netflix
            <img className='object-cover' src='/netflix_icon.png' alt='netflix logo' width='32px' height='32px' />
          </a>
        </li>
        <li>
          <a className='font-semibold flex gap-4 w-full justify-between' href='https://www.hbomax.com/login'>
            HBO Max <img className='object-cover' src='/hbo_logo_icon.png' alt='hbo logo' width='32px' height='32px' />
          </a>
        </li>
      </ul>
    </section>
  )
}

export { StreamLinks }
