import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const ProductsPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">Products page</h1>
      <Button>FSW 7.8</Button>
      <Input placeholder="Bora fechar esse Projeto" />
    </div>
  );
};

export default ProductsPage;
