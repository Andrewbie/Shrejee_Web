import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function ScrollingProducts() {
  const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
  let images: string[] = [];
  
  try {
    if (fs.existsSync(productsDir)) {
      const files = fs.readdirSync(productsDir);
      images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
    }
  } catch (error) {
    console.error("Error reading products directory:", error);
  }

  if (images.length === 0) {
    return null;
  }

  // Duplicate the images array to create a seamless scrolling effect
  const scrollingImages = [...images, ...images, ...images];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <div className="section-label mb-2">Our Portfolio</div>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900">Featured Products</h2>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="ticker-track flex gap-6 px-3">
          {scrollingImages.map((img, idx) => (
            <div 
              key={`${img}-${idx}`} 
              className="relative w-64 h-64 shrink-0 rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 card-hover"
            >
              <Image
                src={`/images/products/${img}`}
                alt={`Product ${idx}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
