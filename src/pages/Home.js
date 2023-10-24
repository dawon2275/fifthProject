import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux';
import { MovieAction } from '../redux/actions/MovieAction';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, ontheairMovies, loading} = useSelector(state=> state.movie)
  //console.log("home",popularMovies)


  useEffect(()=> {
    dispatch(MovieAction.getMovies());
  },[]);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <Banner movie={popularMovies.results[3]}/>
        {<div className='contents'>
          <h2 className='mainTitle'>추천 해외 드라마</h2>
          <h2>인기 급상승 !</h2>
          <MovieSlide movie={popularMovies}/>
          <h2>왓챠 TOP 20 프로그램</h2>
          <MovieSlide movie={topRatedMovies}/>
          <h2>지금 방영중인 인기 콘텐츠</h2>   
          <MovieSlide movie={ontheairMovies}/>
        </div>}
    </div>
  )
}

export default Home