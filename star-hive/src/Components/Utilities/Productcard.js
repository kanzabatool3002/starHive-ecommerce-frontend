// // import React, { useRef, useState } from 'react';
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// // import './style.css';
// // // import './s'
// // // import required modules
// // import { Pagination, Navigation } from 'swiper/modules';

// // export default function Card() {
// //     const [swiperRef, setSwiperRef] = useState(null);

// //     // let appendNumber = 4;
// //     // let prependNumber = 1;

// //     // const prepend2 = () => {
// //     //     swiperRef.prependSlide([
// //     //         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
// //     //         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
// //     //     ]);
// //     // };

// //     // const prepend = () => {
// //     //     swiperRef.prependSlide(
// //     //         '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
// //     //     );
// //     // };

// //     // const append = () => {
// //     //     swiperRef.appendSlide(
// //     //         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
// //     //     );
// //     // };

// //     // const append2 = () => {
// //     //     swiperRef.appendSlide([
// //     //         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
// //     //         '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
// //     //     ]);
// //     // };

// //     return (
// //         <>
// //             <Swiper
// //                 // onSwiper={setSwiperRef}
// //                 slidesPerView={3}
// //                 // centeredSlides={true}
// //                 spaceBetween={60}
// //                 pagination={{
// //                     type: 'fraction',
// //                 }}
// //                 navigation={true}
// //                 modules={[Pagination, Navigation]}
// //                 className="mySwiper"
// //             >
// //                 <SwiperSlide>Slide 1</SwiperSlide>
// //                 <SwiperSlide>Slide 2</SwiperSlide>
// //                 <SwiperSlide>Slide 3</SwiperSlide>
// //                 <SwiperSlide>Slide 4</SwiperSlide>
// //                 <SwiperSlide>Slide 4</SwiperSlide>
// //             </Swiper>

// //             {/* <p className="append-buttons">
// //                 <button onClick={() => prepend2()} className="prepend-2-slides">
// //                     Prepend 2 Slides
// //                 </button>
// //                 <button onClick={() => prepend()} className="prepend-slide">
// //                     Prepend Slide
// //                 </button>
// //                 <button onClick={() => append()} className="append-slide">
// //                     Append Slide
// //                 </button>
// //                 <button onClick={() => append2()} className="append-2-slides">
// //                     Append 2 Slides
// //                 </button>
// //             </p> */}
// //         </>
// //     );
// // }





// import React from "react";
// import { Card, Button } from "react-bootstrap";

// export default function Product(props) {
//     let {
//         imgSrc,
//         price, title } = props.data;
//     return (
//         <Card className="p-0 overflow-hidden h-100 shadow">
//             <div className="overflow-hidden p-0 rounded bg-light text-center">
//                 <Card.Header className="text-center">
//                     <Card.Img variant="top" src={imgSrc} alt={title} className="w-50"></Card.Img>
//                 </Card.Header>
//                 <Card.Body className="text-center">
//                     <Card.Title className="display-6">{price}</Card.Title>
//                     <Card.Title>{title}</Card.Title>
//                 </Card.Body>
//                 <Card.Footer className="d-grid gap-2">
//                     <Button className="W-100 rounded-O" variant="success" size="lg">
//                         Add to Cart
//                     </Button>
//                 </Card.Footer>
//             </div>
//         </Card>
//     );
// }









import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Product(props) {
    let { imgSrc, price, title } = props.data;
    return (
        <Card className="p-0  h-100 shadow">
            <div className=" p-0 rounded bg-light text-center">
                <Card.Header className="text-center">
                    <Card.Img variant="top" src={imgSrc} alt={title} className="w-50"></Card.Img>
                </Card.Header>
                <Card.Body className="text-center">
                    <Card.Title className="display-6">{price}</Card.Title>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Footer className="d-grid gap-2">
                    <Button className="W-100 rounded-O" size="lg">
                        Add to Cart
                    </Button>
                </Card.Footer>
            </div>
        </Card>
    );
}
