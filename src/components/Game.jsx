import dota2 from "./../img/dota2.jpg"
import csgo from "./../img/csgo.jpg"
import apex from "./../img/apex.jpg"
function Game() {
    return (
        <div class="game">
            <div class="container game-container">
                <h2 class="title">Во что мы Играем</h2>
                <div class="game-card">
                    <h3 class="game-title">CS:GO</h3>
                    <hr class="game-hr" />
                    <p class="game-text">Известный онлайн шутер от 1-го лица.Наш клан имеет несколько серверов и кланового тренера по CS.А еще мы даем скины</p>
                </div>
                <div class="game-img">
                    <img src={csgo} alt="" />
                </div>
                <div class="game-img">
                    <img src={dota2} alt="" />
                </div>
                <div class="game-card">
                    <h3 class="game-title">Dota2</h3>
                    <hr class="game-hr" />
                    <p class="game-text">Моба номер 1 в мире.Для соклановцев доступны гайды на персонажей и различные внутриигровые вещи</p>
                </div>

                <div class="game-card">
                    <h3 class="game-title">Apex legends</h3>
                    <hr class="game-hr" />
                    <p class="game-text">Одна их лучших королевских битв.Наш клан всегда в топ 3</p>
                </div>
                <div class="game-img">
                    <img src={apex} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Game