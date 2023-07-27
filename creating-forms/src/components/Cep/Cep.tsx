import { CepStyle } from "./style";
import { useFetch } from "./useFetch";

export default function Cep() {
  const { errors, handleFormSubmit, handleSubmit, register } = useFetch();

  return (
    <CepStyle>
      <div className="container">
        <h1>CEP</h1>
        <div className="card">
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
      </div>
    </CepStyle>
  );
}
