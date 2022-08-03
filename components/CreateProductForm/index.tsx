import { useForm } from "react-hook-form";
import { validationSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import { toast, ToastContainer } from "react-toastify";
import { parse } from "node:path/win32";
type FormData = {
  name: string;
  price: number;
  amount: number;
};
function CreateProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      await api.post("/create/product", {
        name:data.name,
        price:Number(data.price),
        amount: Number(data.amount)
      });
      toast("Tudo certo", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={onSubmit}>
        <div className="flex items-start justify-between mt-5 flex-col ">
          <label htmlFor="name">Nome Produto</label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 w-full h-8 mt-2"
            {...register("name")}
          />
          <div className="text-red-500 text-left">{errors.name?.message}</div>
        </div>
        <div className=" flex items-start justify-between mt-5 flex-col">
          <label htmlFor="price">Preço</label>
          <input
            type="text"
            {...register("price")}
            id="price"
            className="bg-gray-200 w-full h-8 mt-2"
          />
          <div className="text-red-500 text-left">{errors.price?.message}</div>
        </div>

        <div className=" flex items-start justify-between flex-col mt-5">
          <label htmlFor="amount">Quantidade</label>
          <input
            type="text"
            {...register("amount")}
            id="amount"
            className="bg-gray-200 w-full h-8 mt-2"
          />
          <div className="text-red-500 text-left">{errors.amount?.message}</div>
        </div>

        <button type="submit" className="mt-5 bg-gray-200 p-2">
          Enviar
        </button>
      </form>
    </>
  );
}

export default CreateProductForm;
