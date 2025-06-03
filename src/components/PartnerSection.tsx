
export const PartnerSection = () => {
  const partners = [
    "Federal Bank",
    "Catholic Syrian Bank"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted Banking Partners
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Partnered with India's leading banks to provide you with secure and reliable financial services
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white px-8 py-4 rounded-lg shadow-md">
                <span className="text-xl font-semibold text-gray-800">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
