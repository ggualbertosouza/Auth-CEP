import { z } from "zod";

export const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Insira um CEP válido."),
      state: z.string().min(1, "Insira uma estado válida."),
      city: z.string().min(1, "Insira um cidade válida."),
      district: z.string().min(1, "Informe um bairro válido."),
      street: z.string().min(1, "Informa uma rua válida."),
      complement: z.string(),
    }),
  })
