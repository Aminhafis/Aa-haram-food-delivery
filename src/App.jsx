import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/basics/Header';
import Footer from '@/components/basics/Footer';
import ProtectedRoute from '@/components/basics/ProtectedRoute';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import FoodDetail from '@/pages/FoodDetail';
import Cart from '@/pages/Cart';
import Checkout from '@/pages/Checkout';
import Auth from '@/pages/Auth';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/food/:id" element={<FoodDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/auth" element={<Auth />} />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>

            <Footer />
          </div>

          {/* Toast notifications */}
          <Toaster 
            position="top-right" 
            richColors 
            closeButton
            duration={3000}
          />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
