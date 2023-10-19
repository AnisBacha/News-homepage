const OtherArticles = () => {
    return (
        <section className='main__other'>
            <article>
                <img src={require('./images/image-retro-pcs.jpg')} alt='retro'/>
                <div>
                    <h2><span>01</span>Reviving Retro PCs</h2>
                    <p>What happens what old PCs are given modern upgrades?</p>
                </div>
            </article>
            <article>
                <img src={require('./images/image-top-laptops.jpg')} alt='top-laptops'/>
                <div>
                    <h2><span>02</span>Top 10 Laptops of 2022</h2>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </article>
            <article>
                <img src={require('./images/image-gaming-growth.jpg')} alt='gaming-growth'/>
                <div>
                    <h2><span>03</span>The Growth of Gaming</h2>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </article>
        </section>
    )
}

export default OtherArticles