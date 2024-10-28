import api from "@/shared/configs/axios"
import {  GetDogImagesResponse, SearchParams } from "./dog.types"

export const getDogImages = async (searchParams?: SearchParams):Promise<GetDogImagesResponse> => {
  const searchParamsString = new URLSearchParams()

  for(const key in searchParams) {
    if(!searchParams[key as keyof SearchParams]) continue
    searchParamsString.append(key, searchParams[key as keyof SearchParams] as string)
  }

  const {data, headers} = await api.get("/images/search",{ params: searchParamsString })

  const totalResults = Number(headers["pagination-count"])
  const currentPage = Number(headers["pagination-page"])// API starts at 0
  const limit = Number(headers["pagination-limit"])

  const totalPages = Math.ceil(totalResults / limit)

  return {
    list: data,
    pagination: {
      totalResults,
      totalPages,
      currentPage: currentPage + 1, // Frontend starts at 1
      limit
    }
  }
}