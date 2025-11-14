import Card from "./Card";

export default function BrandsGrid() {
  const brands = [
    {
      name: "Nike",
      tagline: "Just Do It",
      image: "https://dummyimage.com/300x200/aaa/000",
    },
    {
      name: "Adidas",
      tagline: "Impossible is Nothing",
      image: "https://dummyimage.com/300x200/999/000",
    },
    {
      name: "Puma",
      tagline: "Forever Faster",
      image: "https://dummyimage.com/300x200/888/000",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {brands.map((brand, i) => (
        <Card
          key={i}
          image={brand.image}
          title={brand.name}
          subtitle={brand.tagline}
        />
      ))}
    </div>
  );
}
