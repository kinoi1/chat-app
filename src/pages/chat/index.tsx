"use client"
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"; // ✅ Tambahkan ini
import Image from "next/image";

export default function chat() {
    const personChatWidth = 50;
    const personChatHeight = 50;
return (
    <>
        <div className="main-container bg-[radial-gradient(circle_at_bottom,_rgba(124,1,246,0.6)_10%,_rgba(0,0,0,1)_20%)]">
            <div className="header-chat-section">
                <div className="header-chat flex flex-row">
                    <div className="img-chat-container bg-user-1">
                        <Image src="/person/person-1.png" alt="" width={personChatWidth} height={personChatHeight} />
                    </div> 
                    <div className="chat-text flex flex-col">
                        <span>Harper</span>
                        <span><i className="icon-ellips"></i> active</span>
                    </div>
                </div>
            </div>
            
        </div>
    </>
)
}