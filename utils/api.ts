export const fetchMessage = async () => {
    const res = await fetch("http://localhost:4000/");
    return res.json();
  };
  