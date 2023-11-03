const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "d9f5aeafdb73c67c649d861f2986d584",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;