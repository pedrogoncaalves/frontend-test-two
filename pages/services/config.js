
export const apiKey = '109f03afaddf6f94afd50d8945d2c275';

export const countries = [
    'br',
    'us',
    'gb',
    'de'
]


export const renderNews = async (apiKey, countries) => {
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=${countries}&limit=100`)
    return response
}