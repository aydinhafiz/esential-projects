import hero from "../images-react/illustration-hero.svg"
import rectangle from "../images-react/Rectangle.png"
function Content() {
  return (
    <div class="content">
      <div class="informations">
        <div class="title">
          <h2>A Simple Bookmark Manager</h2>
          <p class="description">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div class="get-it-buttons">
          <button class="onChrome">Get it on Chrome</button>
          <button class="onFirefox">Get it on Firefox</button>
        </div>
      </div>
      <div class="tablet-img">
        <img class="tablet" src={hero} alt="" />
        <img class="Rectangle" src={rectangle} alt="" />
      </div>
    </div>
  );
}

export default Content