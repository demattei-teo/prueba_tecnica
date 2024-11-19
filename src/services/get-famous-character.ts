async function getFamousCharacter(characterIds: number[]) {
  const url = `${import.meta.env.VITE_API_URL}character/${characterIds.join(',')}`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export { getFamousCharacter }
