import React, { useState } from "react";
import { useNavigate,  } from "react-router-dom";
import NotFound from "../Layout/NotFound";
import { deleteCard } from "../utils/api";

export default function CardList({ cards }) {
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
                  <button
                    className="btn btn-secondary mr-2"
                    type="button"
                    onClick={() => history.push(`/decks/${deck.id}/cards/${card.id}/edit`)}
                  >
                    <i className="fa-solid fa-pencil"></i> Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleDelete(card.id)}
                  >
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