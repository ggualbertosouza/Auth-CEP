import { useForm } from "react-hook-form";
import { CepStyle } from "./style";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaForm = z.object({
  address: z.object({
    zipCode: z.string().min(9, "Insira um CEP válido."),
    state: z.string().min(1, "Insira uma estado válida."),
    city: z.string().min(1, "Insira um cidade válida."),
    district: z.string().min(1, "Informe um bairro válido."),
    street: z.string().min(1, "Informa uma rua válida."),
    complement: z.string(),
  }),
});

type FormProps = z.infer<typeof schemaForm>;

export default function Cep() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        zipCode: "",
        state: "",
        city: "",
        district: "",
        street: "",
        complement: "",
      },
    },
  });

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  return (
    <CepStyle>
      <div className="container">
        <h1>CEP</h1>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
          <input
            type="text"
            {...register("address.zipCode")}
            placeholder="CEP"
            maxLength={9}
          />
          {errors.address?.zipCode?.message && (
            <p>{errors.address?.zipCode?.message}</p>
          )}
          <input
            type="text"
            {...register("address.state")}
            placeholder="Estado"
          />
          {errors.address?.state?.message && (
            <p>{errors.address?.state?.message}</p>
          )}
          <input
            type="text"
            {...register("address.city")}
            placeholder="Cidade"
          />
          {errors.address?.city?.message && (
            <p>{errors.address?.city?.message}</p>
          )}
          <input
            type="text"
            {...register("address.district")}
            placeholder="Bairro"
          />
          {errors.address?.district?.message && (
            <p>{errors.address?.district?.message}</p>
          )}
          <input
            type="text"
            {...register("address.street")}
            placeholder="Rua"
          />
          {errors.address?.street?.message && (
            <p>{errors.address?.street?.message}</p>
          )}
          <input
            type="text"
            {...register("address.complement")}
            placeholder="Complemento"
          />
          {errors.address?.complement?.message && (
            <p>{errors.address?.complement?.message}</p>
          )}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </CepStyle>
  );
}
