/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ShowroomList } from './pages/ShowroomList';
import { ProductDetail } from './pages/ProductDetail';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans flex flex-col selection:bg-slate-200 selection:text-slate-900 bg-[#fbfaf8]">
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/showroom" element={<ShowroomList />} />
            <Route path="/showroom/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
