import { z } from "zod";
import { schemaForm } from "./schema";


export type FormProps = z.infer<typeof schemaForm>

export type AddressProps = {
  uf: string;
  localidade: string;
  bairro: string;
  logradouro: string;
  complemento: string;
};
