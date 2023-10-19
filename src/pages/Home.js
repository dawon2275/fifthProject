import React, {useEffect } from 'react'
import Banner from '../components/Banner'
import { MovieAction } from '../redux/actions/MovieAction';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';



const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=> state.movie)
  console.log("home",popularMovies)


  useEffect(()=> {
    dispatch(MovieAction.getMovies());
  },[]);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div Banner movie={popularMovies.results[0]}>
      <Banner/>
        {<div className='contents'>
          <h2 className='mainTitle'>추천 해외 드라마</h2>
          <h2 className='secTitle' >이번주 인기 신작을 만나보세요!</h2>
          <MovieSlide movie={popularMovies}/>
          <h2 className='secTitle'>개봉관 TOP 10</h2>
          <MovieSlide movie={topRatedMovies}/>
          <h2>Upcoming Movise</h2>
          <MovieSlide movie={upcomingMovies}/>
        </div>}
    </div>
  )
}

export default Home