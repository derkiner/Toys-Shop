import React from 'react'
import '../styles/Small.scss'

const SmallSection = ({image,type,name}) => {
    return (
      <section className="second-section">
        <div className="allcart">
          <div className="cart">
            <img
              src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?cs=srgb&dl=pexels-alexander-grey-1148998.jpg&fm=jpg&_gl=1*1mviian*_ga*MTY3NzI5MDQ0MS4xNjYwMzAzMjcz*_ga_8JE65Q40S6*MTY2NzczNTE0MS4zNi4xLjE2Njc3MzU3NTguMC4wLjA."
              alt=""
            />
            <p>Vivid Kids</p>
            <h1>Authenticity matters!</h1>
          </div>

          <div className="cart">
            <img
              src="https://images.pexels.com/photos/3771605/pexels-photo-3771605.jpeg?cs=srgb&dl=pexels-anna-shvets-3771605.jpg&fm=jpg&_gl=1*17m2gwt*_ga*MTY3NzI5MDQ0MS4xNjYwMzAzMjcz*_ga_8JE65Q40S6*MTY2NzczNTE0MS4zNi4xLjE2Njc3MzU5ODguMC4wLjA."
              alt=""
            />
            <p>Curiosity & Smartness </p>
            <h1> Let them play!</h1>
          </div>

          <div className="cart">
            <img
              src="https://images.pexels.com/photos/3661267/pexels-photo-3661267.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3661267.jpg&fm=jpg&_gl=1*j2iywr*_ga*MTY3NzI5MDQ0MS4xNjYwMzAzMjcz*_ga_8JE65Q40S6*MTY2NzczNTE0MS4zNi4xLjE2Njc3MzU5MDIuMC4wLjA."
              alt=""
            />
            <p>Einstein-like Children</p>
            <h1>This is just a start!</h1>
          </div>

          <div className="cart">
            <img
              src="https://images.pexels.com/photos/3965542/pexels-photo-3965542.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-3965542.jpg&fm=jpg&_gl=1*21eyuv*_ga*MTY3NzI5MDQ0MS4xNjYwMzAzMjcz*_ga_8JE65Q40S6*MTY2NzczNTE0MS4zNi4xLjE2Njc3MzYwMzIuMC4wLjA."
              alt=""
            />
            <p>Artictic Vibes</p>
            <h1>Future Shakespeares!</h1>
          </div>
        </div>
      </section>
    );
}

export default SmallSection
