import Image from 'next/image';

export default function ImageBanner() {
  return (
    <section className="w-full">
      <div className="w-full">
        {/* Desktop: Wide Image */}
        <div className="hidden md:block relative w-full h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600&h=500&fit=crop"
            alt="Banner"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Mobile: Square Image */}
        <div className="md:hidden relative w-full aspect-square overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=800&fit=crop"
            alt="Banner"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
