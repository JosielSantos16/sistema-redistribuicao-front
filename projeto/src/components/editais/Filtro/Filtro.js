import { useState, useEffect } from "react";
import { Search, X, RotateCcw } from "lucide-react";
import dadosEstados from "../../../data/estados.json";

import {
  FilterBar,
  FilterGrid,
  TagContainer,
  Tag,
  SuggestionsList,
} from "./styles";

const INSTITUICOES = [
  "UFOPA",
  "UFPA",
  "IFPA",
  "UFPI",
  "IFPI",
  "UFRJ",
  "UNIFESSPA",
  "UFC",
  "IFCE",
  "UFRN",
  "IFRN",
  "UFMA",
  "IFMA",
  "UFMG",
  "UNB",
];

const TAG_COLORS = {
  UFOPA: "#22c55e",
  UFPA: "#a855f7",
  IFMA: "#6366f1",
  DEFAULT: "#ff6b00",
};

export default function Filtro({ onSearch, initialUf }) {
  const getTagColor = (tagName) => TAG_COLORS[tagName] || TAG_COLORS.DEFAULT;
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [uf, setUf] = useState("");

  useEffect(() => {
    if (initialUf) {
      setUf(initialUf);
      setIsLocked(true);
    }
  }, [initialUf]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (val.length > 0) {
      const filtered = INSTITUICOES.filter(
        (i) =>
          i.toLowerCase().includes(val.toLowerCase()) &&
          !selectedTags.includes(i),
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setInputValue("");
    setSuggestions([]);
  };

  const handleClear = () => {
    setInputValue("");
    setSelectedTags([]);
    setSuggestions([]);
    setUf("");
    setIsLocked(false);
    onSearch({});
  };

  return (
    <FilterBar>
      <div className="header">Filtro de Inteligência (Opcional)</div>
      <FilterGrid>
        <div style={{ position: "relative", flex: 2 }}>
          <TagContainer>
            {selectedTags.map((tag) => (
              <Tag key={tag} bgColor={getTagColor(tag)}>
                {tag}
                <X
                  size={14}
                  onClick={() =>
                    setSelectedTags(selectedTags.filter((t) => t !== tag))
                  }
                />
              </Tag>
            ))}
            <input
              type="text"
              placeholder={
                selectedTags.length === 0 ? "Digite a Instituição..." : ""
              }
              value={inputValue}
              onChange={handleInputChange}
            />
          </TagContainer>

          {suggestions.length > 0 && (
            <SuggestionsList>
              {suggestions.map((s) => (
                <li key={s} onClick={() => addTag(s)}>
                  {s}
                </li>
              ))}
            </SuggestionsList>
          )}
        </div>

        <select 
          value={uf} 
          disabled={isLocked}
          style={{ 
            cursor: isLocked ? "not-allowed" : "pointer",
            backgroundColor: isLocked ? "#edf2f7" : "#fff",
            color: isLocked ? "#718096" : "#1a202c"
          }}
          onChange={(e) => {
            const novaUf = e.target.value;
            setUf(novaUf);
            onSearch({ tags: selectedTags, uf: novaUf });
          }}
        >
          <option value="">Brasil (Todos)</option>
          {dadosEstados.map((estado) => (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="button"
            onClick={handleClear}
            style={{
              backgroundColor: "#fff",
              color: "#4a5568",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <RotateCcw size={16} /> Limpar
          </button>

          <button onClick={() => onSearch({ tags: selectedTags, uf })}>
            <Search size={18} /> Buscar
          </button>
        </div>
      </FilterGrid>
    </FilterBar>
  );
}
