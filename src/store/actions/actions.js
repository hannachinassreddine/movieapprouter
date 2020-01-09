import {ADD_MOVIE,EDIT_MOVIE,SEARCH_MOVIE,REMOVE_MOVIE} from './actionstype'



export const add_movie=payload=>{
    return(
        {type:ADD_MOVIE,payload}
    )
}
export const edit_movie=payload=>{
    return(
        {type:EDIT_MOVIE,payload}
    )
}
export const search_movie=payload=>{
    return(
        {type:SEARCH_MOVIE,payload}
    )
}
export const remove_movie=payload=>{
    return(
        {type:REMOVE_MOVIE,payload}
    )
}