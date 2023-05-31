// Import the AddProductModal and ProductList components
import { useEffect } from "react";
import AddProductModal from "@/components/AddProductModal";
import ProductList from "@/components/ProductList";
import SearchProduct from "@/components/SearchProduct";

// Export the Home component
export default function Home() {
  useEffect(() => {
    localStorage.getItem("name_search") ||
      (localStorage.getItem("location_search") && localStorage.clear());
  }, []);

  return (
    <div>
      <SearchProduct />
      <AddProductModal />
      <ProductList />
    </div>
  );
}
