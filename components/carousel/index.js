import React, { useState } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    Image,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Hidden from "@material-ui/core/Hidden";

export function Carousel({
    items = [],
    visibleSlides = 1,
    showButton = false,
}) {
    const totalSlides = items.length;

    return totalSlides > 0 ? (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={80}
                totalSlides={totalSlides}
                visibleSlides={visibleSlides}
            >
                <div className="carousel__container">
                    <CarouseSlider items={items} />
                    {totalSlides > 1 && showButton && <CarouselButtons />}
                </div>
            </CarouselProvider>
        </>
    ) : null;
    return null
}

export function CarouselGallery({ items = [], salePercent = "" }) {
    const totalSlides = items.length;

    const [current, setCurrent] = useState(0);

    return totalSlides > 0 ? (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={75}
                totalSlides={totalSlides}
                visibleSlides={1}
                currentSlide={current}
            >
                <div className="carousel__container carousel__container_single">
                    <CarouseSlider items={items} salePercent={salePercent} />
                </div>
            </CarouselProvider>
            <br />
            {totalSlides > 1 && (
                <Hidden smDown>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={50}
                        totalSlides={totalSlides}
                        visibleSlides={totalSlides >= 3 ? 3 : totalSlides}
                        className={"carousel__previews"}
                    >
                        <div className="carousel__container">
                            <CarouseSlider
                                items={items}
                                onClick={(e) => setCurrent(e)}
                            />
                            {false && totalSlides > 3 && <CarouselButtons />}
                        </div>
                    </CarouselProvider>
                </Hidden>
            )}
        </>
    ) : null;
    return null;
}

function CarouseSlider({
    items = [],
    onClick = () => Function,
    salePercent = "",
}) {
    return (
        <Slider>
            {items.map(({ alt, src }, idx) => {
                if (src) {
                    return (
                        <Slide
                            index={idx}
                            key={`slide-image-${idx}`}
                            className={"active-image"}
                        >
                            {salePercent && (
                                <div className={"sale"}>
                                    <span>{salePercent}</span>
                                </div>
                            )}
                            <Image
                                src={src}
                                alt={alt}
                                onClick={() => onClick(idx)}
                            />
                        </Slide>
                    );
                }

                return null;
            })}
        </Slider>
    );
    return null;
}

function CarouselButtons({
    onPrevClick = () => Function,
    onNextClick = () => Function,
}) {
    return null;
    return (
        <>
            <ButtonBack
                className={"carousel__button carousel__button_back"}
                onClick={() => onPrevClick}
            ></ButtonBack>
            <ButtonNext
                className={"carousel__button carousel__button_next"}
                onClick={() => onNextClick}
            ></ButtonNext>
        </>
    );
}
