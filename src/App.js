import "./App.css";
import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import ProfileSummary from "./components/ProfileSummary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Language from "./components/Language";
import ResumePreview from "./components/ResumePreview";
import PrintButton from "./components/PrintButton";
import { DATA } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faCloudArrowUp,
  faEraser,
  faEye,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [printing, setPrinting] = useState(false);
  const [formData, setFormData] = useState(DATA);
  const [isPreview, setIsPreview] = useState(false);

  const clearData = () => {
    setFormData({
      header: {},
      profileSummary: "",
      experience: [],
      skills: [],
      certifications: [],
      awards: [],
      education: [],
      languages: [],
      socialMedia: {},
      projects: [],
    });

    // Reset file input by manually clearing its value
    document.querySelector('input[type="file"]').value = null;
  };

  const handleChange = (section, data) => {
    setFormData({
      ...formData,
      [section]: data,
    });
  };

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 500); // Reset printing state after print dialog closes
  };

  const importFormData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Ensure the file is JSON
    if (file.type !== "application/json") {
      alert("Please upload a JSON file.");
      return;
    }

    // Read and parse the JSON file
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        setFormData(json);
      } catch (error) {
        alert("Error parsing JSON file.");
      }
    };
    reader.readAsText(file);
  };

  const exportFormData = () => {
    const json = JSON.stringify(formData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "myIvyLeagueResume.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      {!printing && (
        <div>
          <h1>Resume Generator</h1>
          <h4>Generate Ivy League style resume!</h4>

          {!isPreview ? (
            <div className="main">
              <div className="form">
                <div className="homeButtons">
                  <button onClick={clearData}>
                    <FontAwesomeIcon icon={faEraser} /> Clear All Data
                  </button>
                  <input type="file" accept=".json" onChange={importFormData} />
                  <button
                    onClick={() =>
                      document.querySelector('input[type="file"]').click()
                    }
                  >
                    <FontAwesomeIcon icon={faCloudArrowDown} /> Import Your Data
                  </button>
                </div>
                <Header
                  data={formData.header}
                  onChange={(data) => handleChange("header", data)}
                />
                <ProfileSummary
                  data={formData.profileSummary}
                  onChange={(data) => handleChange("profileSummary", data)}
                />
                <Experience
                  data={formData.experience}
                  onChange={(data) => handleChange("experience", data)}
                />
                <Skills
                  data={formData.skills}
                  onChange={(data) => handleChange("skills", data)}
                />
                <Certifications
                  data={formData.certifications}
                  onChange={(data) => handleChange("certifications", data)}
                />
                <Awards
                  data={formData.awards}
                  onChange={(data) => handleChange("awards", data)}
                />
                <Education
                  data={formData.education}
                  onChange={(data) => handleChange("education", data)}
                />
                <Language
                  data={formData.languages}
                  onChange={(data) => handleChange("languages", data)}
                />
                <PrintButton onClick={handlePrint} />
                <div className="homeButtons">
                  <button onClick={exportFormData}>
                    <FontAwesomeIcon icon={faCloudArrowUp} /> Export Your Data
                  </button>
                  <button
                    className="isPreviewBtn"
                    onClick={() => setIsPreview(!isPreview)}
                  >
                    {isPreview ? (
                      <div>
                        <FontAwesomeIcon icon={faPen} /> Modify
                      </div>
                    ) : (
                      <div>
                        <FontAwesomeIcon icon={faEye} /> Full Screen Preview
                      </div>
                    )}
                  </button>
                </div>
              </div>
              <div className="preview">
                <div className="pages">
                  <ResumePreview data={formData} />
                </div>
              </div>
            </div>
          ) : (
            <div className="main">
              <div className="mPreview">
                <div className="alert mobile">
                  The resume preview may not fit to screen on mobile view, but
                  it'll be good while rendering it for download.
                </div>
                <div className="pages">
                  <ResumePreview data={formData} />
                </div>
              </div>
              <div className="sticky-buttons">
                <PrintButton onClick={handlePrint} />
                <div className="homeButtons">
                  <button onClick={exportFormData}>
                    <FontAwesomeIcon icon={faCloudArrowUp} /> Export Your Data
                  </button>
                  <button onClick={() => setIsPreview(!isPreview)}>
                    <FontAwesomeIcon icon={faPen} /> Modify
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {printing && <ResumePreview data={formData} />}
    </div>
  );
}
