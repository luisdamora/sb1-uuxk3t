import useDebounce from "@/hooks/useDebounce.ts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export interface IGenerarHashBody {
  i: string;
  m: number;
}

export const apiGenerarHash = async (
  params: IGenerarHashBody,
): Promise<Response> => {
  const response = await fetch("/api/gen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
};

export const useGenerarHash = (par: IGenerarHashBody) =>
  useQuery({
    queryKey: ["generarHash"],
    queryFn: () => apiGenerarHash(par),
  });

export const useDebounceGenerarHash = (
  initialParams: IGenerarHashBody,
  delay: number = 300,
) => {
  const [params, setParams] = useState<IGenerarHashBody>(initialParams);
  const debouncedParams = useDebounce(params, delay);

  const { data, isLoading, error } = useQuery({
    queryKey: ["generarHash", debouncedParams],
    queryFn: () => apiGenerarHash(debouncedParams),
    enabled: !!debouncedParams.i && !!debouncedParams.m,
  });

  return { data, isLoading, error, setParams };
};
