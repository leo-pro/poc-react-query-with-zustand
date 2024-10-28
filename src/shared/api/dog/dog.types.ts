import { MimeType, ResponseFormatType, SizeType, SortType } from "@/shared/constants"
import { HasBreedType as HasBreedsType } from "@/shared/constants/HasBreed"

export type SearchParams = {
  size?: SizeType
  mime_types?: MimeType
  format?: ResponseFormatType
  order?: SortType
  page?: number
  limit?: number // até 25 com API-Key válida
  category_ids?: string // IDs de categoria da rota /categories
  breed_ids?: string // IDs de raça da rota /breeds
  has_breeds?: HasBreedsType // 0 or 1 - default is 0
  include_breeds?: boolean
  include_categories?: boolean
}

export interface Pagination {
  totalResults: number
  totalPages: number
  currentPage: number
  limit: number
}


export interface DogImage {
  breeds: Breed[]
  id: string
  url: string
  width: number
  height: number
}


export interface Breed {
  weight: BreedWeight
  height: BreedHeight
  id: number
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  reference_image_id: string
}

export interface BreedWeight {
  imperial: string
  metric: string
}

export interface BreedHeight {
  imperial: string
  metric: string
}

export type GetDogImagesResponse = {
  list: DogImage[]
  pagination: Pagination
}