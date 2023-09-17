import React from "react";

export const name = "Manoj";
const surname = "Tamang";
const nationality = "Nepalese";

const ImportExport = () => {
  return <div>This is from default export.</div>;
};

const ExportFunction = () => {
  return <div>This is from ExportFunction.</div>;
};

export { surname, nationality, ExportFunction };
export default ImportExport;
