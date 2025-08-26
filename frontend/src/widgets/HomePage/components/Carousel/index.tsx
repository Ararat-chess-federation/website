"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArticleItem } from "../../../../components/articleList/ArticleItem";
import { IArticle } from "../../../../models/interfaces/article";
import { useSlidesCount } from "../helpers/useSlidesCount";

export default function ArticleCarousel({ data }: { data: IArticle[] }) {
  if (!data || data.length === 0) return null;
  const count = useSlidesCount();

  return (
    <Swiper
      slidesPerView={count}
      autoplay
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
