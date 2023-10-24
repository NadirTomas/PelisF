const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "00659ebd39f8ae16afb48997785c57cb",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;