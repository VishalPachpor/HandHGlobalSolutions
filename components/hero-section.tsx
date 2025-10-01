export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-gray-900/80 to-gray-900/60">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/professional-business-people-in-modern-office-sett.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">
              {" "}
              Empowering Growth, Ensuring Success
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
