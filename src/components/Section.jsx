import React from "react";

const Section = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="Card-Container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Title</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            numquam est maxime nemo nam. Facilis quo dolores delectus. Ipsam
            maiores illum vel ab architecto adipisci!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Title</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            numquam est maxime nemo nam. Facilis quo dolores delectus. Ipsam
            maiores illum vel ab architecto adipisci!
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Title</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            numquam est maxime nemo nam. Facilis quo dolores delectus. Ipsam
            maiores illum vel ab architecto adipisci!
          </p>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-700 text-lg font-medium">
        section
      </div>
    </div>
  );
};

export default Section;
