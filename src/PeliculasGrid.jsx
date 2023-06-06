import peliculas from "./peliculas.json"
import { PeliculasCard } from "./PeliculasCard"

export const PeliculasGrid = () => {
    return(
        <ul className="moviesGrid">
            {peliculas.map((indicePelicula)=>(
                <PeliculasCard key={indicePelicula.id} peliculaProp={indicePelicula}/>
            ))}
        </ul>
    )
}