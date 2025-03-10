export const fetchMessage = async () => {
    const res = await fetch("http://localhost:4000/");
    return res.json();
  };

  type message = {
    senderId:number,
    chatRoomId:number,
    text:string,
    imageUrl:string
};

export const sendMessage = async (message: message[]) => {

  try {
    const response = await fetch("http://localhost:4000/send-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
};
  