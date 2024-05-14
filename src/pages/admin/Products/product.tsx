import ProductTable from "../../../tables/Admin/Products";

const ProductPage = () => {
  return (
    <>
      <div className="flex flex-col text-justify gap-4">
        <h2 className="font-medium text-primary text-xl">Suppliers List</h2>
        <div className="flex flex-col">
          <h3 className="text-[#010508] font-medium text-lg">10 total suppliers</h3>
        </div>
      </div>
      {/* Table */}
      <ProductTable />
    </>
  );
};

export default ProductPage;