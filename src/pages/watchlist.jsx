import PageLayout from "../components/layouts/page-layout/page-layout";

function WatchListPage({ watchlist, removeFromWatchlist }) {
  return (
    <PageLayout className="d-flex flex-column gap-4">
      <h1 className="text-center mb-4">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="text-center">
          Your watchlist is empty. Start adding some movies!
        </p>
      ) : (
        <div className="row gy-4">
          {watchlist.map((film) => (
            <div key={film.id} className="col-lg-6">
              <div className="card shadow-lg border-0 h-100">
                <div className="row g-0 align-items-center h-100">
                  <div className="col-md-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                      alt={film.title}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">{film.title}</h2>
                      <p className="text-muted small">
                        {film.overview.slice(0, 100)}...
                      </p>
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => removeFromWatchlist(film.id)}
                      >
                        Remove from Watchlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}

export default WatchListPage;
