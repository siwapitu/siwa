const Siwa = () => {
    return (
        <div className="container mt-3">
            <h1 className="text-secondary text-center">List of Player</h1>
            <table className="table table-dark table-bordered table-hover mt-3">
                <thead>
                    <tr class="text-center">
                        <th class="align-middle" rowSpan={2}>#</th>
                        <th class="align-middle" rowSpan={2}>Name</th>
                        <th class="align-middle" rowSpan={2}>Club</th>
                        <th class="align-middle" rowSpan={2}>Position</th>
                        <th colSpan={2}>Statistic</th>
                    </tr>
                    <tr class="text-center">
                        <th>match</th>
                        <th>Goals</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">2</td>
                        <td><a href='/player/player-name' style={{textDecoration: "none"}} className="text-light">player.name</a></td>
                        <td>player.club</td>
                        <td>player.position</td>
                        <td>player.goals</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Siwa;