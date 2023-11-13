import scope from "./../img/icons/scope.svg"
import friendly from "./../img/icons/friendly.svg"
import joystic from "./../img/icons/joystic.svg"
import twitch from "./../img/icons/twitch.svg"
function About() {
    return (
        <div class="about">
            <div class="container">
                <div class="about-card">
                    <img src={scope} alt="картинка" class="about-img" />
                    <p class="about-text">Регулярные турниры и тренировки</p>
                </div>
                <div class="about-card">
                    <img src={friendly} alt="картинка" class="about-img" />
                    <p class="about-text">Дружелюбное комьюнити</p>
                </div>
                <div class="about-card">
                    <img src={joystic} alt="картинка" class="about-img" />
                    <p class="about-text">Популярные дисциплины</p>
                </div>
                <div class="about-card">
                    <img src={twitch} alt="картинка" class="about-img" />
                    <p class="about-text">Бесплатное оборудование для стримов</p>
                </div>
            </div>
        </div>
    )
}
export default About