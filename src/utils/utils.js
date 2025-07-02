export const getImageUrl = (size = 'w342', path) => {
  if (!path) return `https://picsum.photos/${size === 'w342' ? '342/513' : '780/439'}?random`;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const adaptRickToMovie = (item) => {
  return {
    id: item.id,
    title: item.name,
    description: `Status: ${item.status} - Species: ${item.species}`,
    duration: '20 min',
    releaseDate: '2023',
    rating: 4,
    genre: item.gender || '🧬',
    poster: item.image,
    backdrop: item.image,
    showTimes: ['1:00 PM', '4:00 PM', '8:00 PM'],
  };
};

export const adaptItem = (item, baseUrl = '') => {
  if (baseUrl.includes('rickandmorty')) return adaptRickToMovie(item);
};