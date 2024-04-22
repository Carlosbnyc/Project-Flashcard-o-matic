import React, { useState } from "react";
import { Link, useNavigate, useMatch, useParams } from "react-router-dom";
import NotFound from "../Layout/NotFound";
import { deleteCard, readDeck } from "../utils/api";

export default function CardList({ cards }) {

    const { deckId } = useParams();
    const [deck, setDeck] = useState({ cards: [] });
  const history = useNavigate();
  const [error, setError] = useState([]);

  async function handleDelete(id) {
    const abortCon = new AbortController();
    try {
      const result = window.confirm(
        "Delete this card?\n\n\nYou will not be able to recover it."
      );
      if (result) {
        await deleteCard(id, abortCon.signal);
        window.location.reload();
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError((currErr) => [...currErr, err]);
      }
    }
    return () => abortCon.abort();
  }

  if (error[0]) return <NotFound />;


  return (
    cards && (
      <div className="d-flex flex-column">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-body  d-flex">
              <div className="card-text w-50 m-2">
                <p>{card.front}</p>
              </div>
              <div className="card-text w-50 m-2">
                <p>{card.back}</p>
                <div className="d-flex justify-content-end">
                <Link to={`/decks/${deck.id}/cards/${card.id}/edit`} className="btn btn-secondary">View</Link>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleDelete(card.id)}
                  > Delete
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}