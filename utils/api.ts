export const fetchMessage = async () => {
    const res = await fetch("http://localhost:4000/");
    return res.json();
  };

export const sendMessage = async (message: string) => {
  if (!message.trim()) return;

  try {
    const response = await fetch("http://localhost:4000/send-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
    });

    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
};
  