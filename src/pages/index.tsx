"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"; // ✅ Tambahkan ini
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchMessage } from "../../utils/api";

type dataChat = {
  id: number;
  name: string;
  unread: number;
};

export default function Home() {
  
  const personWidth = 107;
  const personHeight = 107;
  const personChatWidth = 50;
  const personChatHeight = 50;

  const dataChat: dataChat[] = [
    { id: 1, name: "alex", unread: 1 },
    { id: 2, name: "mary", unread: 4 },
    { id: 3, name: "peter", unread: 0 },
    { id: 4, name: "kim", unread: 4 },
    { id: 5, name: "ben", unread: 0 },
  ];

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then((data:{message:string}) => setMessage(data.message));
  }, []);
  console.log(message);
  return (
    <>
    <div className="main-container bg-[radial-gradient(circle_at_bottom,_rgba(124,1,246,0.6)_10%,_rgba(0,0,0,1)_20%)]">
      <div className="header-container">
        <div className="header-text text-2xl">Messages</div>
        <div className="header-icon">
          <span className="icon-filter"></span>
        </div>
      </div>
      
      <div className="search-container">
        <input type="text" name="search" className="bg-search search-input text-xl" placeholder="Search...." />
        <i className="icon-search input"></i>
      </div>
      <div className="active-container mt-4">
        <span className="text-base font-bold text-white inline-flex items-center">Currently Active <i className="icon-ellips"></i></span>
      </div>
      <Swiper className="active-user-container" spaceBetween={5} slidesPerView={4} allowTouchMove={true}>
      <div className="active-user-container flex gap-2">
        <SwiperSlide>
          <div className="flex flex-col">
            <div className="active-user bg-user-1">
              <Image src="/person/person-1.png" alt="tes" width={personWidth} height={personHeight} />
            </div>
            <span className="flex justify-center active-user-text text-xl">Person 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className="active-user bg-user-1">
              <Image src="/person/person-1.png" alt="tes" width={personWidth} height={personHeight} />
            </div>
            <span className="flex justify-center active-user-text text-xl">Person 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className="active-user bg-user-1">
              <Image src="/person/person-1.png" alt="tes" width={personWidth} height={personHeight} />
            </div>
            <span className="flex justify-center active-user-text text-xl">Person 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className="active-user bg-user-1">
              <Image src="/person/person-1.png" alt="tes" width={personWidth} height={personHeight} />
            </div>
            <span className="flex justify-center active-user-text text-xl">Person 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className="active-user bg-user-1">
              <Image src="/person/person-1.png" alt="tes" width={personWidth} height={personHeight} />
            </div>
            <span className="flex justify-center active-user-text text-xl">Person 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className="active-user bg-user-1">
              <Image src="/person/person-1.png" alt="tes" width={personWidth} height={personHeight} />
            </div>
            <span className="flex justify-center active-user-text text-xl">Person 1</span>
          </div>
        </SwiperSlide>
      </div>
      </Swiper>

      <div className="active-container my-4">
        <span className="text-base font-bold text-white inline-flex items-center">
          Recents <i className=" ml-1 icon-clock"></i>
        </span>
      </div>

      <div className="chat-section">
      {dataChat.map((data) => (
      <Link href="/chat" key={data.id} className="chat-container gap-2">
          <div className="img-chat-container bg-user-1">
            <Image src="/person/person-1.png" alt="" width={personChatWidth} height={personChatHeight} />
          </div>
          <div className="flex flex-row flex-auto">
            <div className="flex flex-col flex-auto justify-evenly">
              <span>{data.name}</span>
              <span>Hey, whats up</span>
            </div>
            <div className="flex flex-col justify-evenly">
              <span className="text-purple font-semibold">4 min</span>
              <span className="flex justify-end"> <span className="bg-purple aspect-square unread">{data.unread}</span></span>
            </div>
          </div>
      </Link>
      ))}
      </div>
      
    </div>
    <div className="root fixed flex bottom-0 left-0 right-0 mx-auto z-2">
        <div className="menu bg-semi-black flex-auto flex-row flex justify-between px-6 py-4 mx-4 mb-2">
          <div className="icon-chat"></div>
          <div className="icon-call"></div>
          <div className="icon-camera"></div>
          <div className="icon-setting"></div>
        </div>
      </div>
    </>
  );
}
