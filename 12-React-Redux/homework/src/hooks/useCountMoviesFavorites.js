import {useSelector} from "react-redux";

export function useCountMoviesFavorites () {
    const favorites = useSelector((state) => state.moviesFavourites);
    return {countFav: favorites?.length || 0}
}