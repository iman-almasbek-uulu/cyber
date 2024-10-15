import css from "./news.module.css";
function News() {
  return (
    <section className={css.news}>
    <div className="container">
      <h2 className={css.title}>Новости</h2>

      <div className={css.box}>
        <div className={css.section}>
          <div className={css.image}>
            <h4>
              Строим новый собственныq киберклуб
            </h4>
          </div>  
          <div className={css.text}>
            <p>
              Cтроим новый собственный киберклуб CuberX в жилом
              доме. Какие риски? в этом видео соознователь CuberX...
            </p>
            <div className={css.date}>
              <p>
                <i>10/15/2024</i>
              </p>
              <button>Читать далее...</button>
            </div>
          </div>
        </div>
        <div className={css.section}>
          <div className={css.image}>
            <h4>
              Строим новый собственный киберклуб
            </h4>
          </div>  
          <div className={css.text}>
            <p>
              Cтроим новый собственный киберклуб CuberX в жилом 
              доме. Какие риски? в этом видео соознователь CuberX...
            </p>
            <div className={css.date}>
              <p>
                <i>10/15/2024</i>
              </p>
              <button>Читать далее...</button>
            </div>
          </div>
        </div>
        <div className={css.section}>
          <div className={css.image}>
            <h4>
              Строим новый собственный киберклуб
            </h4>
          </div>  
          <div className={css.text}>
            <p>
              Cтроим новый собственный киберклуб CuberX в жилом
              доме. Какие риски? в этом видео соознователь CuberX...
            </p>
            <div className={css.date}>
              <p>
                <i>10/15/2024</i>
              </p>
              <button>Читать далее...</button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    </section>

  );
}

export default News;
