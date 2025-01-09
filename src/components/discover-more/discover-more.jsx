const DiscoverMore = () => {
  const cards = [
    {
      title: "All About the 2025 Oscars",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbyDz-PIn6v-7gp5n59ywPp1c2sX7xx0-cw&s/300x150",
      link: "https://www.oscars.org/",
    },
    {
      title: "Don't Miss the Golden Globes Winners",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/677b6b049c109025a370751a/82nd-Annual-Golden-Globe-Awards---Press-Room/0x0.jpg?format=jpg&crop=2524,1421,x288,y70,safe&width=960/300x150",
      link: "https://goldenglobes.com/live-coverage/",
    },
    {
      title: "Verified Trending Movies",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9DdUVbvODXJy_PuRY-jrfvmInROU6KUjZg&s/300x150",
      link: "https://editorial.rottentomatoes.com/guide/new-verified-hot-movies/",
    },
    {
      title: "The Most Anticipated Horror Releases",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTIWbiXtQOa89he7Srwxe07EVO9bW4a7S3Lfmoau373Mu95lTzy3taYSbW0xQ_RAAU9s&usqp=CAU/300x150",
      link: "https://www.imdb.com/video/vi2750466329/?listId=ls053181649&ref_=hm_hp_v_4",
    },
  ];

  return (
    <div className="container mt-5">
      <hr className="my-4" />
      <h2 className="mb-4">Discover More</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={card.title}
                />
              </a>
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMore;
