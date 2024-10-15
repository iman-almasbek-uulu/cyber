import s from './community.module.css'
const Community = () => {
    return (
        <section className={s.community}>
            <div className={s.left}></div>
            <div className={s.right}></div>
            <div className={s.block}>
                <div className={s.center}>
                    <div className={s.box}>
                    <h6 className={s.title}>community</h6>
                    <p className={s.date}>13 october</p>
                    <a href="" className={s.link}>information</a>
                    <div className={s.circle}><img src="/images/logo.svg" alt=""/></div>
                    </div>
                </div>
                <div className={s.center}>
                    <div className={s.box}>
                    <h6 className={s.title}>community</h6>
                    <p className={s.date}>13 october</p>
                    <a href="" className={s.link}>information</a>
                    <div className={s.circle}><img src="/images/logo.svg" alt=""/></div>
                    </div>
                </div>
                <div className={s.center}>
                    <div className={s.box}>
                    <h6 className={s.title}>community</h6>
                    <p className={s.date}>13 october</p>
                    <a href="" className={s.link}>information</a>
                    <div className={s.circle}><img src="/images/logo.svg" alt=""/></div>
                    </div>
                </div>

            </div>    
        </section>
    );
};

export default Community;