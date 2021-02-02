const api_key="a7e9b9d243c474acdb5a1d036ec54f5f";

const end_points={
    trending_now : '/trending/all/week?api_key='+ api_key,
    netflix_originals : '/discover/tv?api_key=' + api_key,
    action : `/discover/movie?api_key=${api_key}&with_genres=28`,
    comedy : `/discover/movie?api_key=${api_key}&with_genres=35`,
    horror : `/discover/movie?api_key=${api_key}&with_genres=27`,
    romance : `/discover/movie?api_key=${api_key}&with_genres=10749`,
    doc : `/discover/movie?api_key=${api_key}&with_genres=99`
}

export default end_points