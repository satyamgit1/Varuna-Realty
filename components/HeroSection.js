// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// const HeroSection = () => (
//   <section className="relative h-screen">
//     {/* Dark overlay */}
//     <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//     {/* Swiper Carousel */}
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={0}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
//       loop
//       className="h-full"
//     >
//       {/* Slide 1 */}
//       <SwiperSlide>
//         <div
//           className="bg-cover bg-center h-screen"
//           style={{ backgroundImage: 'url("/hero.png")' }}
//         >
//           <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//             {/* Title */}
//             <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight opacity-0 animate-fadeInUp">
//               Find Your Dream Home with Varuna Realty
//             </h1>
//             {/* Subtitle */}
//             <p className="text-primary text-lg md:text-xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300">
//               Explore the best residential and commercial properties in Naigaon, Vasai, Palghar, and surrounding regions.
//             </p>
//             {/* Call-to-action button */}
//             <Link
//               href="/properties"
//               className="mt-8 bg-primary text-background px-8 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-300 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 2 */}
//       <SwiperSlide>
//         <div
//           className="bg-cover bg-center h-screen"
//           style={{ backgroundImage: 'url("/hero2.png")' }}
//         >
//           <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//             <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
//               Discover Luxury Homes
//             </h1>
//             <p className="text-primary text-lg md:text-xl mt-4 max-w-2xl">
//               Find premium homes in the heart of the city with all the amenities.
//             </p>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Add more slides as necessary */}
//     </Swiper>
//   </section>
// );

// export default HeroSection;


// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// const HeroSection = () => (
//   <section className="relative h-screen">
//     {/* Dark overlay */}
//     <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//     {/* Swiper Carousel */}
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={0}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
//       loop
//       className="h-full"
//     >
//       {/* Slide 1 */}
//       <SwiperSlide>
//         <div className="relative h-screen">
//           <video
//             className="absolute inset-0 object-cover w-full h-full"
//             src="/video1.mp4" // Path to your video file
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//             {/* Title */}
//             <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight opacity-0 animate-fadeInUp">
//               Find Your Dream Home with Varuna Realty
//             </h1>
//             {/* Subtitle */}
//             <p className="text-primary text-lg md:text-xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300">
//               Explore the best residential and commercial properties in Naigaon, Vasai, Palghar, and surrounding regions.
//             </p>
//             {/* Call-to-action button */}
//             <Link
//               href="/properties"
//               className="mt-8 bg-primary text-background px-8 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-300 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 2 */}
//       <SwiperSlide>
//         <div className="relative h-screen">
//           <video
//             className="absolute inset-0 object-cover w-full h-full"
//             src="/video2.mp4" // Path to your second video file
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//             <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
//               Discover Luxury Homes
//             </h1>
//             <p className="text-primary text-lg md:text-xl mt-4 max-w-2xl">
//               Find premium homes in the heart of the city with all the amenities.
//             </p>
//           </div>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="relative h-screen">
//           <video
//             className="absolute inset-0 object-cover w-full h-full"
//             src="/video4.mp4" // Path to your second video file
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//             <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
//               Discover Luxury Homes
//             </h1>
//             <p className="text-primary text-lg md:text-xl mt-4 max-w-2xl">
//               Find premium homes in the heart of the city with all the amenities.
//             </p>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Add more slides as necessary */}
//     </Swiper>
//   </section>
// );

// export default HeroSection;


// import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// const HeroSection = () => (
//   <section className="relative h-screen">
//     {/* Dark overlay */}
//     <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//     {/* Swiper Carousel */}
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={0}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
//       loop
//       className="h-full"
//     >
//       {/* Slide 1 */}
//       <SwiperSlide>
//         <div className="relative h-screen">
//           <video
//             className="absolute inset-0 object-cover w-full h-full"
//             controls
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src="/video1.m3u8" type="application/x-mpegURL" /> {/* HLS Streaming */}
//             <source src="/video1.mp4" type="video/mp4" /> {/* Fallback for browsers not supporting HLS */}
//           </video>
//           <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//             {/* Title */}
//             <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight opacity-0 animate-fadeInUp tracking-wide drop-shadow-lg">
//               Find Your Dream Home with <span className="text-yellow-400">Varuna Realty</span>
//             </h1>
//             {/* Subtitle */}
//             <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300 tracking-wide drop-shadow-lg">
//               Explore the best residential and commercial properties in Naigaon, Vasai, Palghar, and surrounding regions.
//             </p>
//             {/* Call-to-action button */}
//             <Link
//               href="/properties"
//               className="mt-8 bg-yellow-400 text-white px-10 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-500 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500 shadow-lg"
//             >
//               Explore
//             </Link>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 2 */}
//       <SwiperSlide>
//         <div className="relative h-screen">
//           <video
//             className="absolute inset-0 object-cover w-full h-full"
//             controls
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src="/video2.m3u8" type="application/x-mpegURL" /> {/* HLS Streaming */}
//             <source src="/video2.mp4" type="video/mp4" /> {/* Fallback for browsers not supporting HLS */}
//           </video>
//           <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
//             <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight opacity-0 animate-fadeInUp tracking-wide drop-shadow-lg">
//               Discover <span className="text-yellow-400">Luxury Homes</span>
//             </h1>
//             <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300 tracking-wide drop-shadow-lg">
//               Find premium homes in the heart of the city with all the amenities.
//             </p>
//             <Link
//               href="/luxury-homes"
//               className="mt-8 bg-yellow-400 text-white px-10 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-500 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500 shadow-lg"
//             >
//               View Homes
//             </Link>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Add more slides as necessary */}
//     </Swiper>
//   </section>
// );

// export default HeroSection;





import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const HeroSection = () => (
  <section className="relative h-screen">
    {/* Swiper Carousel */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
      loop
      className="h-full relative"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-screen">
          {/* Video Container with Overlay */}
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 object-cover w-full h-full"
              controls={false}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video1.m3u8" type="application/x-mpegURL" /> {/* HLS Streaming */}
              <source src="/video1.mp4" type="video/mp4" /> {/* Fallback for browsers not supporting HLS */}
            </video>
            {/* Dark Overlay (Only for Video) */}
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darken the video with opacity */}
          </div>

          {/* Text Content */}
          <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight opacity-0 animate-fadeInUp tracking-wide drop-shadow-lg">
              Find Your Dream Home with <span className="text-yellow-400">Varuna Realty</span>
            </h1>
            {/* Subtitle */}
            <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300 tracking-wide drop-shadow-lg">
              Explore the best residential and commercial properties in Naigaon, Vasai, Palghar, and surrounding regions.
            </p>
            {/* Call-to-action button */}
            <Link
              href="/properties"
              className="mt-8 bg-yellow-400 text-white px-10 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-500 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500 shadow-lg"
            >
              Explore
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-screen">
          {/* Video Container with Overlay */}
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 object-cover w-full h-full"
              controls={false}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video2.m3u8" type="application/x-mpegURL" /> {/* HLS Streaming */}
              <source src="/video2.mp4" type="video/mp4" /> {/* Fallback for browsers not supporting HLS */}
            </video>
            {/* Dark Overlay (Only for Video) */}
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darken the video with opacity */}
          </div>

          {/* Text Content */}
          <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight opacity-0 animate-fadeInUp tracking-wide drop-shadow-lg">
              Discover <span className="text-yellow-400">Luxury Homes</span>
            </h1>
            <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300 tracking-wide drop-shadow-lg">
              Find premium homes in the heart of the city with all the amenities.
            </p>
            <Link
              href="/luxury-homes"
              className="mt-8 bg-yellow-400 text-white px-10 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-500 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500 shadow-lg"
            >
              View Homes
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-screen">
          {/* Video Container with Overlay */}
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 object-cover w-full h-full"
              controls={false}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/video2.m3u8" type="application/x-mpegURL" /> {/* HLS Streaming */}
              <source src="/video4.mp4" type="video/mp4" /> {/* Fallback for browsers not supporting HLS */}
            </video>
            {/* Dark Overlay (Only for Video) */}
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darken the video with opacity */}
          </div>

          {/* Text Content */}
          <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center items-center h-full">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight opacity-0 animate-fadeInUp tracking-wide drop-shadow-lg">
              Discover <span className="text-yellow-400">Luxury Homes</span>
            </h1>
            <p className="text-white text-xl md:text-2xl mt-4 max-w-2xl opacity-0 animate-fadeInUp delay-300 tracking-wide drop-shadow-lg">
              Find premium homes in the heart of the city with all the amenities.
            </p>
            <Link
              href="/luxury-homes"
              className="mt-8 bg-yellow-400 text-white px-10 py-4 rounded-full text-lg font-semibold transform transition duration-500 hover:bg-yellow-500 hover:-translate-y-2 opacity-0 animate-fadeInUp delay-500 shadow-lg"
            >
              View Homes
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Add more slides as necessary */}
    </Swiper>
  </section>
);

export default HeroSection;
