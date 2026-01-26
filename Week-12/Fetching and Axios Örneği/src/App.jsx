import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch ile veri çekme
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Bir hata oluştu');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch ile veri çekme
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Component yüklendiğinde kullanıcıları çek
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Fetch & Axios Örneği
      </h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button 
          onClick={fetchUsers}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Kullanıcıları Getir (Fetch)
        </button>
        <button 
          onClick={fetchPosts}
          className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition"
        >
          Postları Getir (Fetch)
        </button>
      </div>

      {loading && (
        <p className="text-center text-xl text-blue-500 my-5">
          Yükleniyor...
        </p>
      )}
      
      {error && (
        <p className="text-center text-xl text-red-500 my-5">
          Hata: {error}
        </p>
      )}

      <div className="max-w-7xl mx-auto">
        {users.length > 0 && (
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
              Kullanıcılar ({users.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {users.map(user => (
                <div 
                  key={user.id} 
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {user.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{user.email}</p>
                  <p className="text-gray-600 text-sm mb-1">{user.phone}</p>
                  <p className="text-gray-600 text-sm">{user.company.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {posts.length > 0 && (
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
              Postlar ({posts.length})
            </h2>
            <div className="flex flex-col gap-4">
              {posts.map(post => (
                <div 
                  key={post.id} 
                  className="bg-white p-5 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2 capitalize">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {post.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;