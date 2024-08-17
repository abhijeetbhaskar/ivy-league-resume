import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faBriefcase,
  faScrewdriverWrench,
  faCertificate,
  faAward,
  faLanguage,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const sectionStyle = {
  marginBottom: "20px",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const headerNameStyle = {
  fontSize: "24px",
  fontWeight: "bold",
};

const headerRoleStyle = {
  fontSize: "18px",
  fontWeight: "normal",
};

const contactInfoStyle = {
  fontSize: "12px",
  fontWeight: "normal",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

const contactInfoItemStyle = {
  display: "flex",
  alignItems: "center",
};

const contactInfoSeparatorStyle = {
  margin: "0 5px",
};

const summaryStyle = {
  marginBottom: "20px",
  textAlign: "justify",
};

const experienceStyle = {
  marginBottom: "20px",
};

const educationStyle = {
  marginBottom: "20px",
};

const sectionTitleStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "10px",
  borderBottom: "1px solid #000",
  textAlign: "center",
};

const itemTitleStyle = {
  fontSize: "14px",
  fontWeight: "bold",
};

const itemSubtitleStyle = {
  fontSize: "12px",
  fontWeight: "normal",
};

const itemDescriptionStyle = {
  fontSize: "12px",
  fontWeight: "normal",
  textAlign: "justify",
};

const experienceItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const educationItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const tableLeftStyle = {
  textAlign: "right",
  width: "100%",
};

const skillsStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
};

const skillGroupStyle = {
  // display: "flex",
  marginBottom: "10px",
};

const certificateListStyle = {
  fontSize: "12px",
  fontWeight: "normal",
  display: "flex",
  // justifyContent: "center",
  gap: "10px",
};

const awardsLanguagesStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};

const awardsLanguagesItemStyle = {
  width: "48%",
};

const ResumePreview = ({ data }) => (
  <div
    className="resume-preview"
    style={{
      padding: "20px",
      width: "auto",
      margin: "20px auto",
      fontFamily: "Georgia, serif",
    }}
  >
    {data.header && (
      <div style={headerStyle}>
        <div style={headerNameStyle}>{data.header.name}</div>
        <div style={headerRoleStyle}>{data.header.role}</div>
        <div style={contactInfoStyle}>
          <div style={contactInfoItemStyle}>{data.header.phone}</div>
          <div style={contactInfoSeparatorStyle}>•</div>
          <div style={contactInfoItemStyle}>{data.header.email}</div>
          <div style={contactInfoSeparatorStyle}>•</div>
          {data.header.linkedin && (
            <>
              <div style={contactInfoItemStyle}>
                LinkedIn/{data.header.linkedin}
              </div>
              <div style={contactInfoSeparatorStyle}>•</div>
            </>
          )}
          {data.header.altNum && (
            <>
              <div style={contactInfoItemStyle}>{data.header.altNum}</div>
              <div style={contactInfoSeparatorStyle}>•</div>
            </>
          )}
          <div style={contactInfoItemStyle}>{data.header.address}</div>
        </div>
      </div>
    )}
    {data.profileSummary && (
      <div style={summaryStyle}>
        <div style={sectionTitleStyle}>
          <FontAwesomeIcon icon={faLaptopCode} /> Summary
        </div>
        <div style={itemDescriptionStyle}>{data.profileSummary}</div>
      </div>
    )}
    {data.skills[0] && (
      <div style={skillsStyle}>
        <div style={sectionTitleStyle}>
          <FontAwesomeIcon icon={faScrewdriverWrench} /> Skills
        </div>
        {data.skills.map((group, index) => (
          <div key={index} style={skillGroupStyle}>
            <div style={itemTitleStyle}>{group.groupName}</div>
            <div style={itemDescriptionStyle}>{group.skills}</div>
          </div>
        ))}
      </div>
    )}
    {data.experience[0] && (
      <div style={experienceStyle}>
        <div style={sectionTitleStyle}>
          <FontAwesomeIcon icon={faBriefcase} /> Experience
        </div>
        {data.experience.map((exp, index) => (
          <div key={index} style={experienceItemStyle}>
            <div>
              <div style={itemTitleStyle}>{exp.title}</div>
              <div style={itemSubtitleStyle}>{exp.company}</div>
              {exp.description && (
                <div style={itemDescriptionStyle}>{exp.description}</div>
              )}
            </div>
            <div style={tableLeftStyle}>
              <div style={itemSubtitleStyle}>{exp.location}</div>
              <div style={itemSubtitleStyle}>{exp.duration}</div>
            </div>
          </div>
        ))}
      </div>
    )}
    {data.education[0] && (
      <div style={educationStyle}>
        <div style={sectionTitleStyle}>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </div>
        {data.education.map((edu, index) => (
          <div key={index} style={educationItemStyle}>
            <div>
              <div style={itemTitleStyle}>{edu.degree}</div>
              <div style={itemSubtitleStyle}>{edu.institution}</div>
              {edu.achievement && (
                <div style={itemDescriptionStyle}>{edu.achievement}</div>
              )}
            </div>
            <div style={tableLeftStyle}>
              <div style={itemSubtitleStyle}>{edu.grade}</div>
              <div style={itemSubtitleStyle}>{edu.duration}</div>
            </div>
          </div>
        ))}
      </div>
    )}
    {data.certifications[0] && (
      <div style={educationStyle}>
        <div style={sectionTitleStyle}>
          <FontAwesomeIcon icon={faCertificate} /> Courses & Certifications
        </div>
        {data.certifications.map((cert, index) => (
          <div key={index} style={certificateListStyle}>
            ➢<div style={itemTitleStyle}>{cert.name}</div>–
            <div style={itemSubtitleStyle}>{cert.institution}</div>
            <div style={itemSubtitleStyle}>{cert.year}</div>
          </div>
        ))}
      </div>
    )}
    {data.awards[0] && (
      <>
        <div style={sectionTitleStyle}>
          <FontAwesomeIcon icon={faAward} /> Awards and Achievements
        </div>
        <div style={awardsLanguagesStyle}>
          {data.awards.map((award, index) => (
            <div key={index} style={awardsLanguagesItemStyle}>
              <div style={itemTitleStyle}>{award.name}</div>
              <div style={itemSubtitleStyle}>{award.institution}</div>
              <div style={itemSubtitleStyle}>{award.year}</div>
            </div>
          ))}
        </div>
      </>
    )}
    {data.languages[0] && (
      <>
        <div style={sectionTitleStyle}>
          <FontAwesomeIcon icon={faLanguage} /> Languages
        </div>
        <div style={awardsLanguagesStyle}>
          {data.languages.map((lang, index) => (
            <div key={index} style={awardsLanguagesItemStyle}>
              <div style={itemTitleStyle}>{lang.language}</div>
              <div style={itemSubtitleStyle}>{lang.proficiency}</div>
            </div>
          ))}
        </div>
      </>
    )}
    {/* {data.socialMedia && (
      <div style={awardsLanguagesStyle}>
        {data.socialMedia.map((social, index) => (
          <div key={index} style={awardsLanguagesItemStyle}>
            <div style={itemTitleStyle}>{social.platform}</div>
            <div style={itemSubtitleStyle}>{social.link}</div>
          </div>
        ))}
      </div>
    )} */}
    {data.interests && (
      <div style={educationStyle}>
        <div style={sectionTitleStyle}>Interests & Hobbies</div>
        {data.interests.map((interest, index) => (
          <div key={index} style={sectionStyle}>
            <div style={itemTitleStyle}>{interest.name}</div>
            <div style={itemDescriptionStyle}>{interest.description}</div>
          </div>
        ))}
      </div>
    )}
    <div style={{ textAlign: "center", marginTop: "20px", fontSize: "10px" }}>
      Created at - abhijeetbhaskar.github.io/ivy-league-resume
    </div>
  </div>
);

export default ResumePreview;
