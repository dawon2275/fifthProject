import api from '../api';

/* 
    리덕스 미들웨어
    - 두개의 개체 사이에서 원만히 통신할 수 있도록 돕는 역할
    - 리덕스 미들웨어는 액션과 리듀서 사이의 중간자
    - [액션] - [미들웨어] - [리듀서] - [스토어]
    - 비동기 처리 작업을 간편하게 가능
*/

const API_KEY = process.env.REACT_APP_API_KEY

 function getMovies() {
    return async( dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})

            const popularMoiveApi = api.get(`/movie/popular?api_key=${API_KEY}&language=ko&page=1&region=KR&page=1`)
            const topRatedApi = api.get(`/movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=KR&page=1`)
            const ontheairApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=ko&page=1&region=KR&page=1`)

            /* 장르 정보를 요청하는 api */
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko`)

            let [popularMovies, topRatedMovies, ontheairMovies, genreList] = await Promise.all([
                popularMoiveApi, 
                topRatedApi, 
                ontheairApi,
                genreApi
            ]);
            console.log("장르리스트:", genreList)
    
            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    ontheairMovies: ontheairMovies.data,
                    genreList: genreList.data.genres
                }    
            })
            console.log(popularMovies)
            console.log(topRatedMovies)
            console.log(ontheairMovies)
        } catch(error) {
            //에러 핸들링하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"})
        }
    }
    
 }

 export const MovieAction = {
    getMovies,
 }