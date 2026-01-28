// React router kütüphanesinden araçları içe aktarıyoruz
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
// Reactın temel hooklarını içe aktarıyoruz. useState değişken tanımlamak için (Örn listesi loading durumu.)
// useEffect sayfa yüklendiğinda yada birşey değiştirildiğinde kod çalıştırmak için.
import { useState, useEffect } from 'react';

// Ana App komponenti herşeyin başladığı dalga
function App() {
  return (
    // Routing sistemini başlatır tüm routerlar bunun içinde olmalı
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        {/* Navigation menüyü gösterir */}
        <Navigation />
        {/* Routes ile Tüm rotaların tanımlandığı alan başlar */}
        <Routes>
          {/* path="/": Ana sayfa adresi (örn: localhost:5173/)
          element={<Home />}: Bu adrese girildiğinde Home komponenti gösterilir */}

          <Route path="/" element={<Home />} />

          {/* localhost:3000/urunler adresine gidildiğinde
           ProductList komponenti (ürün listesi) gösterilir */}
          <Route path="/urunler" element={<ProductList />} />

          {/* :id = dinamik parametre (değişebilir)
               Örnek: /urunler/5, /urunler/123
               5 veya 123 değeri ProductDetail komponentinde kullanılabilir */}
          <Route path="/urunler/:id" element={<ProductDetail />} />

          {/* Ürün ekleme sayfası  */}
          <Route path="/urun-ekle" element={<AddProduct />} />

          {/* ürün düzenleme sayfası hangi tür id ile belirtilir.*/}
          <Route path="/urun-duzenle/:id" element={<EditProduct />} />

          {/* hiçbir rota ile eşleşmezse 404 hatası gösterir */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Navigation komponenti
function Navigation() {
  return (
    <nav style={{
      background: '#333',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '5px'
    }}>
      <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
        Ana Sayfa
      </Link>
      <Link to="/urunler" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
        Ürünler
      </Link>
      <Link to="/urun-ekle" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
        Yeni Ürün Ekle
      </Link>
    </nav>
  );
}

// Ana Sayfa
function Home() {
  return (
    <div>
      <h1>Ürün Yönetim Sistemi</h1>
      <p>Ürünleri görüntülemek, eklemek ve düzenlemek için menüyü kullanın.</p>
    </div>
  );
}

// Ürün Listesi (Fetching + Routing)
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // API'den ürünleri çek
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Ürünler yüklenemedi');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;

    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      });
      // Silinen ürünü listeden çıkar
      setProducts(products.filter(p => p.id !== id));
      alert('Ürün silindi!');
    } catch (err) {
      alert('Silme işlemi başarısız');
    }
  };

  if (loading) return <div>Ürünler yükleniyor...</div>;
  if (error) return <div style={{ color: 'red' }}>Hata: {error}</div>;

  return (
    <div>
      <h1>Ürün Listesi</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px'
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '200px', objectFit: 'contain' }}
            />
            <h3>{product.title.substring(0, 50)}...</h3>
            <p><strong>Fiyat:</strong> ${product.price}</p>
            <p><strong>Kategori:</strong> {product.category}</p>

            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => navigate(`/urunler/${product.id}`)}
                style={{ marginRight: '10px', padding: '5px 10px' }}
              >
                Detay
              </button>
              <button
                onClick={() => navigate(`/urun-duzenle/${product.id}`)}
                style={{ marginRight: '10px', padding: '5px 10px' }}
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                style={{ padding: '5px 10px', background: '#dc3545', color: 'white', border: 'none' }}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Ürün Detay Sayfası (Routing + Fetching)
function ProductDetail() {
  const { id } = useParams(); // URL'den id parametresini al
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Ürün detayı yükleniyor...</div>;
  if (!product) return <div>Ürün bulunamadı</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/urunler')} style={{ marginBottom: '20px' }}>
        ← Geri
      </button>

      <div style={{ display: 'flex', gap: '30px' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '300px', height: '400px', objectFit: 'contain' }}
        />
        <div>
          <h1>{product.title}</h1>
          <p style={{ fontSize: '24px', color: '#28a745' }}>${product.price}</p>
          <p><strong>Kategori:</strong> {product.category}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating?.rate} ({product.rating?.count} değerlendirme)</p>
          <p style={{ lineHeight: '1.6' }}>{product.description}</p>

          <button
            onClick={() => navigate(`/urun-duzenle/${product.id}`)}
            style={{ padding: '10px 20px', marginTop: '20px' }}
          >
            Ürünü Düzenle
          </button>
        </div>
      </div>
    </div>
  );
}

// Yeni Ürün Ekleme Formu (Form Handling + Routing)
function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hata varsa temizle
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Ürün adı gerekli';
    }
    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Geçerli bir fiyat girin';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Açıklama gerekli';
    }
    if (!formData.category) {
      newErrors.category = 'Kategori seçin';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price)
        })
      });

      const data = await response.json();
      console.log('Ürün eklendi:', data);

      alert('Ürün başarıyla eklendi!');
      navigate('/urunler'); // Ürün listesine yönlendir

    } catch (err) {
      alert('Ürün eklenirken hata oluştu');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Yeni Ürün Ekle</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ürün Adı:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
          {errors.title && <span style={{ color: 'red', fontSize: '14px' }}>{errors.title}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Fiyat:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
          {errors.price && <span style={{ color: 'red', fontSize: '14px' }}>{errors.price}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Kategori:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          >
            <option value="">Kategori Seçin</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span style={{ color: 'red', fontSize: '14px' }}>{errors.category}</span>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Resim URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Açıklama:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
          {errors.description && <span style={{ color: 'red', fontSize: '14px' }}>{errors.description}</span>}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: '10px 20px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              cursor: submitting ? 'not-allowed' : 'pointer'
            }}
          >
            {submitting ? 'Ekleniyor...' : 'Ürün Ekle'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/urunler')}
            style={{ padding: '10px 20px' }}
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
}

// Ürün Düzenleme Formu (Fetching + Form Handling + Routing)
function EditProduct() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  // Mevcut ürün verilerini yükle
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          title: data.title,
          price: data.price,
          description: data.description,
          image: data.image,
          category: data.category
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price)
        })
      });

      const data = await response.json();
      console.log('Ürün güncellendi:', data);

      alert('Ürün başarıyla güncellendi!');
      navigate(`/urunler/${id}`); // Ürün detay sayfasına dön

    } catch (err) {
      alert('Güncelleme sırasında hata oluştu');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Ürün yükleniyor...</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Ürün Düzenle</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ürün Adı:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Fiyat:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Kategori:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Resim URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Açıklama:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: 'white',
              border: 'none',
              cursor: submitting ? 'not-allowed' : 'pointer'
            }}
          >
            {submitting ? 'Güncelleniyor...' : 'Güncelle'}
          </button>

          <button
            type="button"
            onClick={() => navigate(`/urunler/${id}`)}
            style={{ padding: '10px 20px' }}
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
}

// 404 Sayfası
function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil.</p>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px' }}>
        Ana Sayfaya Dön
      </button>
    </div>
  );
}

export default App;