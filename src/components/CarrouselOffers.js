import React from "react";
import img7 from "../assets/images/first-offer.gif";
import img8 from "../assets/images/Special Offer2.gif";

export default function CarrouselOffers() {
    return (
        <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        class="d-block w-100 carousel-img"
                        src={img7}
                        alt="first-offer"
                    />
                </div>
                <div class="carousel-item">
                    <img src={img8} class="d-block w-100" alt="Second-offer" />
                </div>
            </div>
        </div>

    );
}