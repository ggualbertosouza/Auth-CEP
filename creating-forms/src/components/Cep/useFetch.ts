import { FormProps, useForm } from "react-hook-form";
import { schemaForm } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { AddressProps } from "./types";

export const useFetch = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
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

  const zipCode = watch("address.zipCode");

  const handleFormSubmit = (data: FormProps) => {
    alert({data});
  };

  const setData = useCallback(
    (data: AddressProps) => {
      setValue("address.city", data.localidade);
      setValue("address.street", data.logradouro);
      setValue("address.state", data.uf);
      setValue("address.district", data.bairro);
      setValue("address.complement", data.complemento);
    },
    [setValue]
  );

  const fetchAdress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      setData(data);
    },
    [setData]
  );

  useEffect(() => {
    setValue("address.zipCode", zipCode);

    if (zipCode.length != 9) return;

    fetchAdress(zipCode);
    console.log();
  }, [fetchAdress, setValue, zipCode]);

  return {
    errors,
    register,
    handleSubmit,
    handleFormSubmit,
  };
};
