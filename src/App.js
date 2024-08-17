import "./styles.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ProfileSummary from "./components/ProfileSummary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Language from "./components/Language";
// import Project from "./components/Project";
// import Resume from "./components/Resume";
// import SocailMedia from "./components/SocialMedia";
import ResumePreview from "./components/ResumePreview";
import PrintButton from "./components/PrintButton";

export default function App() {
  const [printing, setPrinting] = useState(false);
  const [formData, setFormData] = useState({
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
      setPrinting(false); // Reset printing state after print dialog closes
    }, 500); // Reset printing state after print dialog closes
  };

  return (
    <div className="container">
      {!printing && (
        <div>
          <h1>Resume Generator</h1>
          <div className="form">
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
            {/* <Project /> */}
            {/* <SocailMedia /> */}
            <PrintButton onClick={handlePrint} />
          </div>
          <ResumePreview data={formData} />
        </div>
      )}
      {printing && <ResumePreview data={formData} />}
    </div>
  );
}
