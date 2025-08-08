export default function About() {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-[10px] p-4 mt-4">
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-[22px] font-bold text-[#181818] mb-0">
              Rambler Lake Side House
            </h2>
            <span className="bg-[#E8FFF3] text-[#4CD964] px-4 py-1 rounded-full text-[13px] font-medium">
              Occupied
            </span>
          </div>
          <p className="text-[14px] text-[#5B5B5B] mt-1 mb-0">
            640 Crooks Crest, East Christybury 76373
          </p>
        </div>
        <button className="bg-[#F6F6F6] text-[#DC1D00] font-medium rounded-full px-6 py-2 text-[14px]">
          Block Property
        </button>
      </div>
      <div className="   grid grid-cols-2 gap-2">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
          alt="Small 2"
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          alt="Small 3"
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
          alt="Small 1"
          className="w-full h-[200px] object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
          alt="Small 1"
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>
      <div className="pt-2">
        <p className="font-semibold text-[16px] text-[#181818] mb-1">
          About Property
        </p>
        <p className="text-[14px] text-[#5B5B5B]">
          Diam sit aliquet nisl morbi orci dignissim nec elementum. Nulla arcu
          sagittis senectus dui. Donec scelerisque massa diam facilisis quis
          turpis viverra facilisi orci.
        </p>
      </div>
    </div>
  );
}
