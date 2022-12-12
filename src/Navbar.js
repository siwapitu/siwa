function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
            <img src="./img/manu.png" alt="logo" style={{width: "40px"}} />  
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/home">Home</a>
                </div>
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/siwa">Player</a>
                </div>
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/about">Contact</a>
                </div><div className="navbar-nav">
                    <a className="nav-item nav-link" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;