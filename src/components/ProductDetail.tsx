import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  ShoppingCart, 
  Check, 
  Info, 
  FileText, 
  Monitor, 
  Smartphone, 
  Zap, 
  Cpu 
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import LemniscateBloom from './LemniscateBloom';
import { productsData, relatedProductsData } from '../data/products';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find product by slug
  const product = slug ? productsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug && !product) {
       console.warn(`Product slug "${slug}" not found.`);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-black text-[#111] mb-4 uppercase tracking-[0.2em]">Product Not Found</h1>
          <p className="text-[#999] mb-8 font-medium">The sophisticated material you are looking for is not in our current digital registry.</p>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-[#FFB800] text-[#050505] font-black uppercase tracking-widest text-xs rounded-full hover:bg-black hover:text-white transition-all shadow-xl shadow-[#FFB800]/20"
          >
            Return to Labs Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-[#FFB800]/20 selection:text-[#FFB800]">
      {/* Top Header / Breadcrumbs Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <nav className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-[#999] mb-4">
          <Link to="/" className="hover:text-[#FFB800] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="cursor-pointer hover:text-[#FFB800] transition-colors">Material Science</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#FFB800]">{product.tag}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111]">
          {product.title}
        </h1>
      </div>

      {/* Main Product Card Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="bg-gradient-to-br from-[#F8F8F8] to-[#F3F3F3] rounded-[40px] overflow-hidden border border-[#EAEAEA] shadow-sm flex flex-col lg:flex-row">
          
          {/* Left Column: Pure Loader Area */}
          <div className="lg:w-[45%] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#EAEAEA] bg-[#F9F9F9] overflow-hidden min-h-[400px]">
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="scale-100 md:scale-125">
                <LemniscateBloom />
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="lg:w-[55%] p-8 md:p-16 flex flex-col">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[10px] font-black uppercase tracking-[0.2em] text-[#FFB800] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
                Advanced Formulation
              </div>

              <h2 className="text-3xl font-extrabold text-[#111] mb-6 leading-[1.1]">
                {product.heading}
              </h2>

              <p className="text-base md:text-lg text-[#555] leading-relaxed mb-10 font-medium tracking-tight">
                {product.description}
              </p>
              
              {/* Technical Specifications Grid */}
              <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="p-4 bg-white border border-[#EAEAEA] rounded-2xl shadow-sm hover:border-[#FFB800]/30 transition-colors group">
                    <div className="text-[9px] font-black text-[#999] uppercase tracking-widest mb-1 group-hover:text-[#FFB800] transition-colors">
                      {spec.label}
                    </div>
                    <div className="text-[13px] font-extrabold text-[#111] tracking-tight">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Industrial Applications Section */}
              {product.applications && product.applications.length > 0 && (
                <div className="mb-12">
                  <label className="block text-[11px] font-black uppercase tracking-widest text-[#999] mb-6">
                    Primary Industrial Applications
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((app, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-3xl bg-white border border-[#F0F0F0] hover:border-[#FFB800]/20 transition-all group">
                        <div className="w-10 h-10 rounded-2xl bg-[#F9F9F9] flex items-center justify-center shrink-0 group-hover:bg-[#FFB800]/10 transition-colors">
                          {i % 4 === 0 && <Monitor className="w-5 h-5 text-[#AAA] group-hover:text-[#FFB800]" />}
                          {i % 4 === 1 && <Smartphone className="w-5 h-5 text-[#AAA] group-hover:text-[#FFB800]" />}
                          {i % 4 === 2 && <Zap className="w-5 h-5 text-[#AAA] group-hover:text-[#FFB800]" />}
                          {i % 4 === 3 && <Cpu className="w-5 h-5 text-[#AAA] group-hover:text-[#FFB800]" />}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[13px] font-black text-[#111] uppercase tracking-wide">{app.title}</span>
                          <span className="text-[11px] text-[#777] leading-relaxed font-medium">{app.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Material Procurement & Logistics Section - High Visibility Upgrade */}
              <div className="mb-12 relative overflow-hidden">
                {/* Visual Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FFB800] rounded-full" />
                
                <div className="pl-8 p-8 bg-[#FFB800]/5 border border-[#FFB800]/10 rounded-tr-[32px] rounded-br-[32px] shadow-sm">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#FFB800] mb-8">
                    Procurement Logic & Logistics
                  </label>
                  
                  {/* Informational Data Row (Passive) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    {/* Size Info */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#FFB800]/20 shadow-sm shrink-0">
                        <ShoppingCart className="w-5 h-5 text-[#FFB800]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-[#999] uppercase tracking-wider mb-1">Stock Portfolio</span>
                        <span className="text-[15px] font-extrabold text-[#111] tracking-tight">{product.orderSizeOption}</span>
                      </div>
                    </div>
                    
                    {/* Lead Time Info */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-[#FFB800]/20 shadow-sm shrink-0">
                        <Check className="w-5 h-5 text-[#FFB800]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-[#999] uppercase tracking-wider mb-1">Global Logistics</span>
                        <span className="text-[15px] font-extrabold text-[#111] tracking-tight">{product.logistics.split('.')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Action: Documentation */}
                  <div className="pt-6 border-t border-[#FFB800]/10">
                    <button className="flex items-center gap-3 text-[10px] font-black text-[#555] uppercase tracking-[0.25em] hover:text-[#FFB800] transition-all group">
                      <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center border border-[#EEE] group-hover:border-[#FFB800] transition-colors">
                        <FileText className="w-3.5 h-3.5" />
                      </div>
                      <span className="border-b-2 border-transparent group-hover:border-[#FFB800] pb-0.5 transition-all">
                        Access TDS / MSDS Technical Data
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Price / Quote Status */}
              <div className="mb-8 border-t border-[#EAEAEA] pt-8">
                <div className="text-4xl font-black text-[#111] leading-none mb-2 tracking-tighter">Request Quote</div>
                <div className="text-sm font-medium text-[#999]">Custom pricing based on volume for industrial grade laboratory materials.</div>
              </div>
            </div>

            {/* CTA Zone */}
            <div className="pt-2">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-w-[280px] py-5 bg-[#FFB800] text-[#050505] rounded-full font-black uppercase tracking-[0.25em] text-xs flex items-center justify-between pl-8 pr-3 shadow-xl shadow-[#FFB800]/20 hover:bg-[#E6A600] transition-colors group"
              >
                <span>Inquire Now</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#FFB800] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>
            </div>
          </div>

        </div>

        {/* Related Products Section */}
        <section className="mt-32">
          <div className="flex items-center justify-between mb-12 border-b border-[#EAEAEA] pb-8">
            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#FFB800]" />
                  <span className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.4em]">Catalog Synergy</span>
               </div>
               <h3 className="text-3xl font-black text-[#111] tracking-tighter uppercase">Related Products</h3>
               <p className="text-[11px] font-bold text-[#999] uppercase tracking-widest">Synergistic materials available in our central registry</p>
            </div>
            {/* Carousel Controls */}
            <div className="hidden md:flex gap-3">
               <button className="w-12 h-12 rounded-full border border-[#EAEAEA] flex items-center justify-center text-[#CCC] cursor-not-allowed hover:bg-[#F9F9F9] transition-all">
                  <ArrowRight className="w-5 h-5 rotate-180" />
               </button>
               <button className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-[#FFB800] hover:bg-[#FFB800] hover:text-[#111] transition-all shadow-lg shadow-black/10">
                  <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProductsData.filter(p => p.slug !== slug).slice(0, 4).map((rel) => (
              <motion.div 
                key={rel.id}
                onClick={() => navigate(`/product/${rel.slug}`)}
                whileHover={{ y: -8 }}
                className="group flex flex-col h-full bg-[#121212] border border-[#333333] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer hover:border-[#FFB800]/50 shadow-2xl shadow-black/5"
              >
                {/* Image Area - Home Style */}
                <div className="relative h-44 overflow-hidden bg-[#080808]">
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    <LemniscateBloom color="#FFB800" className="w-full h-full scale-125 group-hover:scale-150 transition-transform duration-1000" />
                  </div>
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#FFB800] px-3 py-1 rounded-sm text-[8px] font-black uppercase tracking-widest border border-[#333]">
                    {rel.tag}
                  </span>
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <span className="text-[9px] font-black text-[#666] uppercase tracking-[0.2em] mb-2">{rel.category}</span>
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-black text-white leading-tight tracking-tight group-hover:text-[#FFB800] transition-colors">
                      {rel.name}
                    </h4>
                    <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center shrink-0 group-hover:bg-[#FFB800] group-hover:border-[#FFB800] group-hover:text-[#111] transition-all">
                       <ArrowRight className="w-4 h-4 text-[#FFB800] group-hover:text-inherit" />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-[9px] font-black text-[#555] uppercase tracking-widest">
                    <span>View Datasheet</span>
                    <div className="w-4 h-px bg-[#333] group-hover:w-8 group-hover:bg-[#FFB800] transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Footer Summary */}
        <div className="mt-12 text-center">
            <p className="text-[10px] text-[#BBB] font-bold uppercase tracking-[0.5em]">
                VBFM Labs | High-End Functional Materials Division
            </p>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
