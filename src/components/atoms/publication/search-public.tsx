import { Input } from '@/components/ui/input'
import { usePublicationProvider } from '@/hook/hook-publication'
import { cn } from '@/lib/utils'

interface SearchPublicProps {
  className?: string
}

/**
 * A component that renders a search input field for publications.
 * It uses the publication context to manage the search state.
 *
 * @param {SearchPublicProps} param0 - The properties for the component.
 * @param {string} [param0.className] - Optional additional class names for styling.
 *
 * @returns {JSX.Element} The search input field element.
 */
function SearchPublic({ className = '' }: SearchPublicProps) {
  const { search, setSearch } = usePublicationProvider()
  return (
    <Input
      placeholder='Buscar publicaciones...'
      className={cn('', className)}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export { SearchPublic }
