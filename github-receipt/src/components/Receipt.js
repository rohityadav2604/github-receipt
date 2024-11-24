import { Code, GitFork, Star, UserPlus, Users } from 'lucide-react';

const Receipt = ({ userData }) => {
  if (!userData) return null;

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg font-mono mt-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">GITHUB RECEIPT</h1>
        <p className="text-sm">{new Date().toLocaleDateString()}</p>
        <p className="text-sm">ORDER #{Math.floor(Math.random() * 10000)}</p>
      </div>

      <div className="mb-6">
        <p className="font-bold">CUSTOMER: {userData.name || userData.login}</p>
        <p className="text-gray-600">@{userData.login}</p>
      </div>

      <div className="border-t border-b border-dashed border-gray-300 py-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Code className="w-4 h-4 mr-2" />
            <span>REPOSITORIES</span>
          </div>
          <span>{userData.public_repos}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-2" />
            <span>STARS EARNED</span>
          </div>
          <span>{userData.public_repos}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <GitFork className="w-4 h-4 mr-2" />
            <span>REPO FORKS</span>
          </div>
          <span>{userData.public_gists}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            <span>FOLLOWERS</span>
          </div>
          <span>{userData.followers}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UserPlus className="w-4 h-4 mr-2" />
            <span>FOLLOWING</span>
          </div>
          <span>{userData.following}</span>
        </div>
      </div>

      <div className="text-center text-sm mt-8">
        <p>Served by: Grace Hopper</p>
        <p>{new Date().toLocaleTimeString()}</p>
        <div className="mt-4">
          <p className="font-bold">COUPON CODE: {Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
          <p>Save for your next commit!</p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
