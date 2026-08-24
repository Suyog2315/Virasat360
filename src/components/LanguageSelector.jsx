import { useState } from "react";

function LanguageSelector() {

  const [language, setLanguage] = useState("English");

  return (
    <div className="language-selector">

      <span>Language:</span>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>English</option>
        <option>ଓଡ଼ିଆ</option>
        <option>हिन्दी</option>
      </select>

    </div>
  );
}

export default LanguageSelector;