import React from 'react';

interface Category {
  name: string;
  itemCount: number;
  imageSrc: string;
}

const categories: Category[] = [
  { name: "Women's", itemCount: 23, imageSrc: 'https://media.vogue.mx/photos/6262a0226891521b4ddb205a/2:3/w_1920,c_limit/sustainable1404_E_W_VOGUE_IMAGE_12_CMYK.jpg' },
  { name: "Men's", itemCount: 9, imageSrc: 'https://i.pinimg.com/564x/1a/9c/41/1a9c4167edc3b27d10ff4010ecf31fe7.jpg' },
  { name: "Jewelry", itemCount: 31, imageSrc: 'https://assets.vogue.com/photos/63c9aa2d3cfdf376930a36ee/master/w_1600,c_limit/Moda_Jade%202%20.jpeg' },
  { name: "Sneakers", itemCount: 21, imageSrc: 'https://images.vs-static.com/qcuGQsKZp6aNO3o-MeNA2uGooBc=/0x159:1008x915/750x0/New_Balance_550s_442357b6fd/New_Balance_550s_442357b6fd.png' },
  { name: "Bags", itemCount: 5, imageSrc: 'https://assets.vogue.in/photos/63ef5aa09238109c471cac43/2:3/w_1920,c_limit/Vogue%20titan%20irth%201_1.jpg' },
  { name: "Glasses", itemCount: 14, imageSrc: 'https://www.hola.com/horizon/square/4a6b65a9031d-vogue-t.jpg?im=Resize=(2500),type=downsize' },
];

const CategoryList: React.FC = () => {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Season Collection</h2>
          <a href="#" className="text-sm text-gray-600 hover:underline flex items-center">
            View all categories <span className="ml-1">&#8594;</span>
          </a>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={category.imageSrc} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-medium">{category.name}</h3>
              <p className="text-gray-500">{category.itemCount} items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;