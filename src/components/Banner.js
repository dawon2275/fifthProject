import React from 'react'
import { useSelector } from 'react-redux'

const Banner = ({ movie }) => {
  const {genreList} = useSelector(state => state.movie)
    //console.log(movie)
  return (
    <div>
      <div className='leftMenu'>
        <ul>
          <li><img className='logoColor' src='img/home.png' alt='home' /><span>홈</span></li>
          <li><img className='logoColor' src='img/tv.png' alt='tv' /><span>개봉관</span></li>
          <li><img className='logoColor' src='img/webtoon.png' alt='webtoon' /><span>웹툰</span></li>
        </ul>

        <ul>
          <li><img className='logoColor' src='img/chat.png' alt='chat' /><span>파티</span></li>
          <li><img className='logoColor' src='img/search.png' alt='search' /><span>찾기</span></li>
          <li><img className='logoColor' src='img/star.png' alt='star' /><span>평가</span></li>
          <li><img className='logoColor' src='img/drawer.png' alt='drawer' /><span>보관함</span></li>
        </ul>
      </div>
      <h3 className='title'>개봉관</h3>
      <div className='tvLogo'><img src='img/tvLogo.webp'></img></div>
      <div style={{
        
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/pHpHEsBGqdRLsevBw90YNsRVAKp.jpg` + ")"}}className='banner'>

    <div className="banner-info">
        <div className="genre">
          {movie.genre_ids.map((id, idx)=>
            <span className="badge" key={idx}>
              {genreList.find(movie=> movie.id==id).name}
            </span>
          )}
        </div>

        <h1>2023년 최악의 범죄 조직이 온다!</h1>
        <h3>지금 왓챠에서만 플레이 하세요!</h3>
      </div>
    </div>
    </div>
  )
}

export default Banner