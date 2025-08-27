"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArticleItem } from "../../../../components/articleList/ArticleItem";
import { IArticle } from "../../../../models/interfaces/article";
import { useSlidesCount } from "../helpers/useSlidesCount";

export default function ArticleCarousel({ data }: { data: IArticle[] }) {
  if (!data || data.length === 0) return null;
  const count = useSlidesCount();

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={count}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      centeredSlides={count <= 1}
      spaceBetween={20}
    >
      {data.map((el) => (
        <SwiperSlide key={el.id}>
          <ArticleItem {...el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
