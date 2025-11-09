import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';



const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            navigate(`/menu?search=${encodeURIComponent(searchQuery)}`);
        }
    }
    return(
        <form onSubmit={handleSearch} className='w-full max-w-2xl mx-auto'>
            <div className='relative'>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input type="text"
            placeholder='Search for restaurants or dishes..'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-6 text-base shadow-lg border-gray-200 focus-visible:ring-primary-500"
            />
            <Button
            type="submit"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            >
            Search
            </Button>
            </div>
        </form>
    )
}

export default SearchBar;
