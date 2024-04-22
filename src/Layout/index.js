import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "../Components/CreateDeck";
import Home from "../Components/Home";
import Study from "../Components/Study";
import ViewDeck from "../Components/ViewDeck";
import EditDeck from "../Components/EditDeck";
import EditCard from "../Components/EditCard";
import AddCard from "../Components/AddCard";


function Layout() {
    return (
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/decks/new" element={<CreateDeck />} />
            <Route path="/decks/:deckId" element={<ViewDeck />} />
            <Route path="/decks/:deckId/edit" element={<EditDeck />} />
            <Route path="/decks/:deckId/study" element={<Study />} />
            <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
            <Route path="/decks/:deckId/cards/:cardId/edit" element={<EditCard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }
  
  
  export default Layout;
