import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string
}

type getUsersResponse = {
  totalCount: number;
  users: User[]

}

export async function getUsers(page: number): Promise<getUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {users, totalCount};
}

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery( ["users", page], () => getUsers(page), {
      staleTime: 1000 * 60 * 10, //10 min
      ...options,
    }
  ) as UseQueryResult<getUsersResponse, unknown>;
}
