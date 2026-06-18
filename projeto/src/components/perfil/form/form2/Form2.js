import React, { useState } from "react";
import { UploadCloud, FileCheck, X, AlertTriangle } from "lucide-react";
import { FormSection, UploadArea } from "./styles";

export default function Form2({ data, setData }) {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError(""); 

    if (!file) return;

    const isPDF = file.type === "application/pdf" || file.name.toLowerCase().endsWith('.pdf');
    
    if (!isPDF) {
      setError("Documento inválido! O comprovante deve ser obrigatoriamente um arquivo PDF.");
      e.target.value = ""; 
      setFileName("");
      setData((prev) => ({ ...prev, comprovante: null }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Arquivo muito grande! O limite para o PDF é de 5MB.");
      e.target.value = "";
      setFileName("");
      setData((prev) => ({ ...prev, comprovante: null }));
      return;
    }

    setFileName(file.name);
    setData((prev) => ({ ...prev, comprovante: file }));
  };

  const removeFile = (e) => {
    e.preventDefault();
    setFileName("");
    setData((prev) => ({ ...prev, comprovante: null }));
    setError("");
    
    const fileInput = document.getElementById('fileUpload');
    if (fileInput) fileInput.value = "";
  };

  return (
    <FormSection>
      <h3>Documentos</h3>
      <p>Anexe sua comprovação de vínculo (Portaria, Declaração ou Contracheque)</p>

      {error && (
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: '8px', 
          color: '#E53E3E', backgroundColor: '#FFF5F5', 
          padding: '12px', borderRadius: '8px', marginBottom: '16px', 
          border: '1px solid #FC8181', fontSize: '14px' 
        }}>
          <AlertTriangle size={20} />
          {error}
        </div>
      )}

      <UploadArea>
        <div className={`upload-box ${fileName ? "has-file" : ""} ${error ? "has-error" : ""}`}>
          <div className="icon-circle">
            {fileName ? (
              <FileCheck size={32} color="#48BB78" />
            ) : (
              <UploadCloud size={32} color={error ? "#E53E3E" : "#a0aec0"} />
            )}
          </div>
          
          <span className="main-text">
            {fileName ? fileName : "Clique para selecionar o PDF"}
          </span>
          
          <span className="sub-text">
            {fileName ? "Documento pronto para envio" : "Apenas arquivos .PDF (máx. 5 MB)"}
          </span>

          <input 
            type="file" 
            hidden 
            id="fileUpload" 
            accept="application/pdf"  
            onChange={handleFileChange}
          />

          {!fileName ? (
            <label htmlFor="fileUpload" className="overlay-label" />
          ) : (
            <button 
              onClick={removeFile}
              style={{
                marginTop: '15px', padding: '6px 12px', borderRadius: '4px',
                backgroundColor: '#E53E3E', color: 'white', border: 'none',
                cursor: 'pointer', fontSize: '12px', zIndex: 10
              }}
            >
              Remover PDF
            </button>
          )}
        </div>
      </UploadArea>
    </FormSection>
  );
}