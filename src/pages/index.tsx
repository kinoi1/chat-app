

export default function Home() {
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-text text-lg">Messages</div>
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
      <div className="active-user-container flex gap-2">
        <div className="active-user bg-user-1">
          <img src="/person/person-1.png" alt="tes" />
        </div>
        <div className="active-user bg-user-1">
          <img src="/person/person-1.png" alt="tes" />
        </div>
        <div className="active-user bg-user-1">
          <img src="/person/person-1.png" alt="tes" />
        </div>
        <div className="active-user bg-user-1">
          <img src="/person/person-1.png" alt="tes" />
        </div>
      </div>
    </div>
  );
}
