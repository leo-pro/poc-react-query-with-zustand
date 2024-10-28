import { getDogImages } from "@/shared/api"
import { Size } from "@/shared/constants"
import { HasBreeds } from "@/shared/constants/HasBreed"
import { useQuery } from "@tanstack/react-query"
import { Skeleton } from "./ui/Skeleton/Skeleton"
import { Pagination } from "@/shared/ui"
import { ExclamationTriangleIcon } from "@heroicons/react/16/solid"
import { useState } from "react"

export const Gallery = () => {
  const [page, setPage] = useState(1)

  const {data, error, isLoading} = useQuery({ queryKey: ['dogImages', page], queryFn: () => getDogImages({ size: Size.THUMB, limit: 42, has_breeds: HasBreeds.TRUE, page}) })
  
  const handleReload = () => {
    window.location.reload()
  }

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const {totalPages} = data?.pagination || {totalPages:1}

  return(
    <>
      {isLoading && <Skeleton/>}

      {error && (
        <div className="w-full flex flex-col items-center justify-center text-center gap-2">
          <ExclamationTriangleIcon className="size-32 fill-slate-700"/>
          <h1 className="text-2xl text-slate-700">Não foi possível encontrar nenhum resultado.</h1>
          <p className="text-xl text-slate-500">Atualize os filtros ou recarregue a página</p>
          <button className="btn btn-ghost" onClick={handleReload}>Recarregar</button>
        </div>
      )}

      {data?.list && (
        <>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 px-16 sm:px-0">
          {data?.list.map((dog) => (
            <div className="card shadow-xl" key={dog.id}>
              <figure>
                <img
                  src={dog.url}
                  alt={dog.breeds.map(({name}) => name)[0]} 
                  title={dog.breeds.map(({name}) => name)[0]}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{dog.breeds.map(({name}) => name)}</h2>
                <p>{dog.breeds.map(({breed_group}) => breed_group)}</p>
                <div className="card-actions">
                  {
                    dog.breeds.map(({temperament}) => temperament?.split(',').map((temp_label) => (
                      <div key={temp_label} className="badge badge-outline">{temp_label}</div>
                    )))
                  }
                </div>
              </div>
            </div>))
          }
          </div>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange}/>
        </>
      )} 
    </>
  )
}