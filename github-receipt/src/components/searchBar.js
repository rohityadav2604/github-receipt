import { Search } from 'lucide-react';
import { useState } from 'react';

import { fetchUser } from '../service/github';

import Receipt from './Receipt';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const userDetails = await fetchUser(inputText);

      console.log("user", userDetails)
      setUserData(userDetails);
    } catch (err) {
      setError('Error fetching user data');
      setUserData(null);
    } finally {
      setLoading(false);
      setInputText('');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 max-w-md mx-auto p-4"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter GitHub username..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-blue-300"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-center mt-4">
          {error}
        </div>
      )}

      {userData && <Receipt userData={userData} />}
    </div>
  );
};

export default SearchBar;
