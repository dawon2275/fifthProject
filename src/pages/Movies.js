import React from 'react'


const Movies = () => {
    const Rest_api_key='c878b55d4fc1d6605ffb419c0caabb99' //REST API KEY
    const redirect_uri = 'http://localhost:3000/movies' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(

    <>
      <div className='login'>
        <h2>
          <img className='whatcha' width={400}  src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd05ded51-54bf-4174-8b7e-e021c6eb6b5a%2FWATCHA_LOGO.svg&blockId=400d70c6-5698-4877-9ddf-83be123fb341" alt="logo" ></img></h2>
          <input type='text' placeholder='아이디 또는 이메일을 입력하세요.'></input>
          <input type='text' placeholder='패스워드를 입력하세요.'></input>
        
        
        <button onClick={handleLogin}>
          <img src='img/kakao.png'></img>
        </button>
        <button >신규가입</button>
      </div>
    </>
    )
  
}


export default Movies
