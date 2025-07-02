const CardList = ({ data }) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {data.map((item, index) => (
                <div Key={item.id || index} className="col">
                    <div className="card h-100">
                        <img
                            src={
                                item.poster ||
                                (item.poster_path && `https://image.tmdb.org/t/p/w500${item.poster_path}`) || 
                                'https://via.placeholder.com/500x750?text=No+Image'
                            }
                            className ="card-img-top"
                            alt={item.title || item.name || 'Sin título'}
                            />
                        <div className="card-body">
                            <h5 className="card-title">{item.title || item.name || 'Sin nombre'}</h5>
                            <p className="card-text">
                                {item.species?.name || item.race || item.status || ''}
                            </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;