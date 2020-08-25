import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             className="home__image"
             alt="banner"
            />
            <div className="home__row">
                <Product
                    id="0001"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={10.49}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
                />
                <Product
                    id="0002"
                    title="Don't Make Me Think, Revisited : A Common Sense Approach to Web & Mobile Usability (3rd Edition)"
                    price={12.84}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Z7OB85fFL._SX385_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="0003"
                    title="The Design of Everyday Things: Revised and Expanded Edition"
                    price={11.29}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81zpLhP1gWL._AC_UY218_.jpg"
                />
                <Product
                    id="0004"
                    title="Hamilton Beach Breakfast Sandwich Maker, Silver (25475A) "
                    price={24.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41N8AxIJq4L._AC_SY200_.jpg"
                />
                <Product
                    id="0005"
                    title="Artist's Loft Acrylic Paint Value Pack 36 Piece"
                    price={25.35}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61GEW-MekwL._AC_UL480_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="0006"
                    title="FLY2SKY 28pcs Mochi Squishy Toys Mini Squishies Kawaii Animal Squishys Party Favors Easter Egg Fillers Easter Gifts for Kids Unicorn Cat Panda Animal Squeeze Toy Stress Relief Toy Class Prize, Random "
                    price={8.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61ZA1VRxLOL._AC_UL480_QL65_.jpg"
                />
                <Product
                    id="0007"
                    title="Oxford Spiral Notebooks, 1 Subject, College Ruled Paper, Durable Plastic Cover, 100 Sheets, Divider Pocket, 3 per Pack (10390) "
                    price={9.89}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41OJa46VMDL._AC_US327_QL65_.jpg"
                />   
            </div>
        </div>
    )
}

export default Home