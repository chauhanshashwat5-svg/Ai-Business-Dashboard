import { useNavigate } from "react-router-dom";

import Topbar from "./components/Topbar";
import Greeting from "./components/Greeting";
import CommandBar from "./components/CommandBar";
import SuggestionChips from "./components/SuggestionChips";
import QuickAccessGrid from "./components/QuickAccessGrid";
import RecentActivity from "./components/RecentActivity";

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleSubmit = (query) => {
    console.log("Search/ask submitted:", query);
  };

  const handleChipClick = (chip) => {
    console.log("Chip clicked:", chip);
  };

  const handleCardClick = (item) => {
    if (item.key === "dashboard") {
      navigate("/dashboard");
      return;
    }
    console.log("Navigate to:", item.title);
  };

  const handleRecentClick = (item) => {
    console.log("Open recent item:", item.name);
  };

  return (
    <div className="welcome-screen">
      <Topbar userInitial="S" />

      <div className="main">
        <Greeting name="Shashwat" />

        <CommandBar onSubmit={handleSubmit} />

        <SuggestionChips onChipClick={handleChipClick} />

        <QuickAccessGrid onCardClick={handleCardClick} />

        <RecentActivity onItemClick={handleRecentClick} />
      </div>
    </div>
  );
}

export default WelcomeScreen;