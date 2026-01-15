import { UploadCloud } from 'lucide-react';

import {
  FormSection,
  UploadArea
} from './styles';


export default function Form2({ height }) {
  return (
    <FormSection>
      <h3>Documentos</h3>
      <p>Anexe sua comprovação de vínculo</p>

      <UploadArea>
        <div className="upload-box">
          <div className="icon-circle">
            <UploadCloud size={32} color="#a0aec0" />
          </div>
          <span className="main-text">
            comprovante de vínculo institucional
          </span>
          <span className="sub-text">
            Formatos aceitos: PDF, PNG ou JPG (máx. 5 MB)
          </span>
          <input type="file" hidden id="fileUpload" />
          <label htmlFor="fileUpload" className="overlay-label" />
        </div>
      </UploadArea>
    </FormSection>
  );
}
