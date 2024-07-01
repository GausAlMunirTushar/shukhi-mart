import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import OfferList from "@/components/OfferList";
import ProductList from "@/components/ProductList";
import Image from "next/image";
const product1 = [
  {
    id: 1,
    stock: 30,
    title: "Stylish Women PU Embroidered Handbag",
    image: "/images/watch.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 2,
    stock: 30,
    title: "Lenovo Yoga Slim 6 13th Gen Intel Evo Core i5",
    image: "/images/laptop.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 3,
    stock: 30,
    title: "MZ M423SP Dynamic Thunder Sound 2400mAh",
    image: "/images/thunder.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 4,
    stock: 30,
    title: "BOSS Stone 350 10 W Bluetooth Speaker",
    image: "/images/speaker.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 5,
    stock: 30,
    title: "boAt Rockerz 370 Bluetooth Headset",
    image: "/images/headphone.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
];
const product2 = [
  {
    id: 1,
    stock: 30,
    title: "Stylish Women PU Embroidered Handbag",
    image: "/images/black-bag.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 2,
    stock: 30,
    title: "Stylish Women PU Embroidered Handbag",
    image: "/images/yellow-bag.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 3,
    stock: 30,
    title: "StudioX Charcoal Natural  for oil control Face Wash",
    image: "/images/headphone.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 4,
    stock: 30,
    title: "BOSS Stone 350 10 W Bluetooth Speaker",
    image: "/images/speaker.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 5,
    stock: 30,
    title: "MZ M423SP Dynamic Thunder Sound 2400mAh",
    image: "/images/thunder.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
];
const product3 = [
  {
    id: 1,
    stock: 30,
    title: "Stylish Women PU Embroidered Handbag",
    image: "/images/black-bag.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 2,
    stock: 30,
    title: "Stylish Women PU Embroidered Handbag",
    image: "/images/yellow-bag.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 3,
    stock: 30,
    title: "StudioX Charcoal Natural  for oil control Face Wash",
    image: "/images/headphone.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 4,
    stock: 30,
    title: "BOSS Stone 350 10 W Bluetooth Speaker",
    image: "/images/speaker.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  },
  {
    id: 2,
    stock: 30,
    title: "Stylish Women PU Embroidered Handbag",
    image: "/images/yellow-bag.png",
    price: 1500,
    discountPrice: 2000,
    discount: 20,
  }
];
export default function Home() {
  return (
    <div className="container mx-auto max-width:xl">
      <Navbar />
      <OfferList productInfo={product3} />
      <ProductList title="Featured Deal" productInfo={product1} />
      <Categories />
      <ProductList title="Latest Products" productInfo={product2} />
      <Footer />
    </div>
  );
}
