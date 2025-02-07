import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Home() {
  return (
    <div className="main-container">
            <div className="header-container">
              <div className="header-text text-lg">Messages</div>
              <div className="header-icon">
                <span className="icon-filter"></span>
              </div>
            </div>
            <div className="search-input">
            <Input
        type="text"
        placeholder="Search..."
        value=""
        
        className="border border-gray-300 rounded-lg shadow-sm"
      />
            </div>
    </div>
  );
}
