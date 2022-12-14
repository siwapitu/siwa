const Home = () => {
    document.title = `SIWA`
    return (

        <div className="container">
            <div id="demo" class="carousel slide" data-ride="carousel">

                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./img/la.jpg" alt="Los Angeles" />
                    </div>
                    <div class="carousel-item">
                        <img src="./img/chicago.jpg" alt="Chicago" />
                    </div>
                    <div class="carousel-item">
                        <img src="./img/ny.jpg" alt="New York" />
                    </div>
                </div>

                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>

            </div>
        </div>
    )
}

export default Home;