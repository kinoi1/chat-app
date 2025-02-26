"use client"
import "swiper/css";
import "swiper/css/bundle"; // ✅ Tambahkan ini
import Image from "next/image";
import { useState } from "react";
import "../../lib/fontawesome"; // Import konfigurasi ikon
import dynamic from "next/dynamic";
import Picker from "emoji-picker-react";

// Gunakan dynamic import untuk FontAwesomeIcon
const FontAwesomeIcon = dynamic(
  () => import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

export default function Chat() {
    const personChatWidth = 50;
    const personChatHeight = 50;
    

    const [inputStr, setInputStr] = useState("");
    const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event:any) => {
    setInputStr((prevInput) => prevInput + event.emoji);
    setShowPicker(false);

  };
return (
    <div className="root min-h-screen bg-[radial-gradient(circle_at_bottom,_rgba(124,1,246,0.6)_10%,_rgba(0,0,0,1)_20%)]">
        <div className="main-container-chat p-4  bg-semi-black">
            <div className="header-chat-section mt-4 mx-2">
                <div className="header-chat flex flex-row gap-2">
                    <div className="img-chat-container bg-user-1">
                        <Image src="/person/person-1.png" alt="" width={personChatWidth} height={personChatHeight} />
                    </div>
                    <div className="chat-text flex flex-col justify-center">
                        <span>Harper</span>
                        <span className="flex flex-row items-center justify-center gap-2"><i className="icon-ellips m-0"></i> active</span>
                    </div>
                </div>
                <div className="header-chat flex flex-row gap-x-6">
                    <div className="icon-call"></div>
                    <div className="icon-camera"></div>
                </div>
            </div>
        </div>
        <div className="calendar-section my-2">
            <span className="">today</span>
        </div>
        <div className="chat-main">
            <div className="flex flex-row gap-2">
                <div className="img-chat-container-small bg-user-1">
                    <Image src="/person/person-1.png" alt="" width={30} height={15} />
                </div>
                <div className="bg-semi-black p-2 rounded-lg mb-2">
                    Hey, whatsup?
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-gradient-purple p-2 rounded-lg mb-2">
                    Yo, ma bro
                </div>
            </div>
        </div>

        <div className="root typing-container flex justify-between fixed bottom-0">
      
            <div className="absolute bottom-[4rem]">
            {showPicker && (
                <Picker pickerStyle={{ width: "100%" }} height={450} onEmojiClick={onEmojiClick} />
            )} 
            </div>
            <div>
                <button className="icon-attachment" type="button">

                </button>

            </div>
            <div className="bg-semi-black flex flex-auto px-2 mx-2">
                <button  className="text-2xl mr-2" onClick={() => setShowPicker((val) => !val)}>
                <FontAwesomeIcon icon="smile" className="text-gray" />                </button>
                <input type="text" className="btn bg-semi-black" placeholder="ketik pesan disini..." 
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
                />
            </div>
            <div className="icon-send"></div>
        </div>
    </div>
)
}