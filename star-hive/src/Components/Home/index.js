import "./style.css";

import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok, FaFacebookF } from 'react-icons/fa';
import React from 'react';

// import { useRef, useState 




import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination, Navigation, } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import Product from "./Product";
import Product from "../Utilities/Productcard";
import Product2 from '../assets/blushon.png';
import Product3 from '../assets/nailpolish.png';





function Form() {


    const [swiperRef, setSwiperRef] = useState(null);

    const products = [
        {
            id: 0,
            title: "Cosmetic",
            price: 'RS 600',
            imgSrc: Product3
        },
        {
            id: 1,
            title: "Cosmetic",
            price: 'Rs 400',
            imgSrc: Product2
        },
        {
            id: 2,
            title: "Cosmetic",
            price: 'Rs 600',
            imgSrc: Product3
        },
        {
            id: 3,
            title: "Cosmetic",
            price: 'Rs 400',
            imgSrc: Product2
        },
        {
            id: 4,
            title: "Cosmetic",
            price: 'Rs 600',
            imgSrc: Product3
        },
        {
            id: 5,
            title: "Cosmetic",
            price: 'Rs 400',
            imgSrc: Product2
        },
        {
            id: 6,
            title: "Cosmetic",
            price: 'Rs 400',
            imgSrc: Product2
        },
        {
            id: 7,
            title: "Cosmetic",
            price: 'Rs 400',
            imgSrc: Product3
        },
        {
            id: 8,
            title: "Cosmetic",
            price: 'Rs 400',
            imgSrc: Product2
        }
    ];





    return (
        <div className="main">
            {/* <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> */}
            <div id="top">
                <div id="navigationBar">
                    <div id="logo">
                        <img src={require("./logo.png")} />
                    </div>
                    <div id="nav">
                        <div className="dropdown">
                            <a href="#" className="dropbtn">Make Up</a>
                            {/* <div class="dropdown-content">
                                <div className="con1">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="dropdown">
                            <a href="#" className="dropbtn">Skin</a>
                            {/* <div class="dropdown-content">
                                <div className="con1">
                                    <a href="#">kanza 1</a>
                                    <a href="#">kanza 2</a>
                                    <a href="#">kanza 3</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="dropdown">
                            <a href="#" className="dropbtn">For girls</a>
                            {/* <div class="dropdown-content">
                                <div className="con1">
                                    <a href="#">kanza 1</a>
                                    <a href="#">kanza 2</a>
                                    <a href="#">kanza 3</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="dropdown">
                            <a href="#" className="dropbtn">Discover</a>
                            {/* <div class="dropdown-content">
                                <div className="con1">
                                    <a href="#">kanza 1</a>
                                    <a href="#">kanza 2</a>
                                    <a href="#">kanza 3</a>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="dropdown">
                            <a href="#" className="dropbtn">Accessories</a>
                            <div class="dropdown-content">
                                <div className="con1">
                                    <a href="#">kanza 1</a>
                                    <a href="#">kanza 2</a>
                                    <a href="#">kanza 3</a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="dropbtn">tech</a>
                            <div class="dropdown-content">
                                <div className="con1">
                                    <a href="#">kanza 1</a>
                                    <a href="#">kanza 2</a>
                                    <a href="#">kanza 3</a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a href="#" className="dropbtn">travel</a>
                            <div class="dropdown-content">
                                <div className="con1">
                                    <a href="#">kanza 1</a>
                                    <a href="#">kanza 2</a>
                                    <a href="#">kanza 3</a>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div id="icon">
                        <div className="iconnav">
                            <a href="#instagram">
                                <AiOutlineSearch id='search' />
                            </a>

                            <a href="#facebook">
                                <AiOutlineShoppingCart id='face' />
                            </a>
                            <a href="#heart">
                                <AiOutlineHeart id='face' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="leftbanner">
                        <h3>JUST IN</h3>
                        <h1>LIP OIL</h1>
                        <p>Our best Selling Lip Oil ia now available in 6 Fruity flavour</p>
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="bannerCard">
                    <div className="Leftbannercard"></div>
                    <div className="Middlebannercard">
                        <div className="textMBC">
                            <h1>HYDRATES AND SOFTEN LIPS</h1>
                            <p>the non-sticky, smooth formula leaves lips looking naturally fuller and contains <br /> coconut oil, raspberry & passion fruit seed oils.</p>
                            <button>Shop now</button>
                        </div>
                    </div>
                    <div className="rightbannercard"></div>
                </div>
                <div className="banner2">
                    <div className="righttbanner2">
                        <h3>NEW</h3>
                        <h1>GLOSS DRIP</h1>
                        <p>sheer, juicy color leaves lips with long-lasting shine and a glossy, wet lip look.</p>
                        <p>available in 3 new shades exclusive to <b>StarHivecosmetics.com</b></p>
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="banner3">
                    <div className="leftbanner3"></div>
                    <div className="rightbanner3">
                        <div className="contentbanner3">
                            <h2>StarHive's</h2>
                            <h2>wet lip look</h2>
                            <p>featuring new fall in love gloss drip and <br />the new classic matte palette. </p>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="middle">



                <div className="middlecard p-5 ">
                    {/* <div className="navbtn"> */}
                    <Swiper
                        freeMode={true}
                        // grabCursor={true}
                        modules={[FreeMode,
                            // Autoplay, Pagination, 
                            Navigation]}
                        className={"mySwiper"}
                        slidesPerView={3}
                        // pagination={{ clickable: true }}
                        spaceBetween={30}
                        navigation={true}
                        // loop={true}

                        onSwiper={setSwiperRef}

                        // autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                        }}
                    >
                        {products.map(prod => (
                            <SwiperSlide key={prod.id} className="py-5">
                                <Product data={prod} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* </div> */}
                </div>
                <div className="bannerCard2">
                    <div className="Leftbannercard2">
                        <div className="mainRBC2">
                            <h1><b> OIL LIPS</b></h1>
                            <button>Shop now</button>
                        </div>
                    </div>
                    <div className="Middlebannercard2">
                        <div className="mainRBC2">
                            <h1><b>CLEANSERS</b></h1>
                            <button>Shop now</button>
                        </div>
                    </div>
                    <div className="rightbannercard2">
                        <div className="mainRBC2">
                            <h1><b>BODY AND BATH</b></h1>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>





                <div className=" p-5 ">
                    <h1>StarHive SKIN BEST SELLERS</h1>
                    {/* <div className="navbtn"> */}
                    <Swiper
                        freeMode={true}
                        // grabCursor={true}
                        modules={[FreeMode,
                            // Autoplay, Pagination, 
                            Navigation]}
                        className={"mySwiper"}
                        slidesPerView={3}
                        // pagination={{ clickable: true }}
                        spaceBetween={30}
                        navigation={true}
                        // loop={true}

                        onSwiper={setSwiperRef}

                        // autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                        }}
                    >
                        {products.map(prod => (
                            <SwiperSlide key={prod.id} className="py-5">
                                <Product data={prod} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* </div> */}
                </div>

            </div>
            <div id="bottom">
                <div className="bottombanner">
                    <div className="leftBB">

                        <h1>VIRTUAL TRY ON</h1>
                        <p>Discover your next makeup look..</p>
                        <button>try on now</button>
                    </div>
                </div>
                <div className="mainBB2">
                    <h1>SHOP BY BRAND</h1>
                    <div className="bannerbottom2">

                        <div className="Leftbannerbottom2">
                            <div className="mainRBB2">
                                <h1>OIL LIPS</h1>
                                <button>Shop now</button>
                            </div>
                        </div>
                        <div className="Middlebannerbottom2">
                            <div className="mainRBB2">
                                <h1>OIL LIPS</h1>
                                <button>Shop now</button>
                            </div>
                        </div>
                        <div className="rightbannerbottom2">
                            <div className="mainRBB2">
                                <h1>OIL LIPS</h1>
                                <button>Shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer1">
                    <div>
                        <h3>Sign Up for Updates:</h3>
                        <input type="text" placeholder="Email Address" />&emsp;&emsp;
                        <button>Submit</button>
                        <p>by signing up you agree to our <a href="#" target="_blank" >terms</a>.
                        </p>
                    </div>
                </div>
                <div className="footer2">
                    <div>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><BsInstagram /></a>
                        <a href="#"><BsTwitter /></a>
                        <a href="#"><FaTiktok /></a>

                    </div>
                </div>
                <div className="footer3">
                    <div>
                        <a href="#">contact us</a>
                        <a href="#">faq</a>
                        <a href="#">shopping</a>
                        <a href="#">order tracking</a>

                    </div>
                </div>
                <div className="footer4">
                    <div>
                        <a href="#">privacy policy</a>
                        <a href="#">terms</a>
                        <a href="#">accessibility</a>
                        <a href="#">set my cookies choice</a>
                        <a href="#">cookie policy</a>

                    </div>
                    <p>© 2023 coty operations</p>
                </div>
            </footer>
        </div>
    );
}

export default Form;

