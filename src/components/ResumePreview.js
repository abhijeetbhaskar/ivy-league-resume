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
import { formatDuration } from "../utils/formatDuration";
import { renderProficiency } from "../utils/proficiency";
import Styles from "../resumePreview.module.css";
import { formatString } from "../utils/formatString";

const ResumePreview = ({ data }) => (
  <div className={`resume-preview ${Styles.resumePreview}`}>
    {data.header && (
      <div className={Styles.headerStyle}>
        <div className={Styles.headerNameStyle}>{data.header.name}</div>
        <div className={Styles.headerRoleStyle}>{data.header.role}</div>
        <div className={Styles.contactInfoStyle}>
          <div className={Styles.contactInfoItemStyle}>{data.header.phone}</div>
          <div className={Styles.contactInfoSeparatorStyle}>•</div>
          <div className={Styles.contactInfoItemStyle}>{data.header.email}</div>
          <div className={Styles.contactInfoSeparatorStyle}>•</div>
          {data.header.linkedin && (
            <>
              <div className={Styles.contactInfoItemStyle}>
                LinkedIn/{data.header.linkedin}
              </div>
              <div className={Styles.contactInfoSeparatorStyle}>•</div>
            </>
          )}
          {data.header.customField && (
            <>
              <div className={Styles.contactInfoItemStyle}>
                {data.header.customField}
              </div>
              <div className={Styles.contactInfoSeparatorStyle}>•</div>
            </>
          )}
          <div className={Styles.contactInfoItemStyle}>
            {data.header.address}
          </div>
        </div>
      </div>
    )}
    {data.profileSummary && (
      <div className={Styles.summaryStyle}>
        <div className={Styles.sectionTitleStyle}>
          <FontAwesomeIcon icon={faLaptopCode} /> Summary
        </div>
        <div className={Styles.itemDescriptionStyle}>{data.profileSummary}</div>
      </div>
    )}
    {data.skills[0] && (
      <div className={Styles.skillsStyle}>
        <div className={Styles.sectionTitleStyle}>
          <FontAwesomeIcon icon={faScrewdriverWrench} /> Skills
        </div>
        {data.skills.map((group, index) => (
          <div key={index} className={Styles.skillGroupStyle}>
            <div className={Styles.itemTitleStyle}>{group.groupName} – </div>
            <div className={Styles.itemDescriptionStyle}>
              {formatString(group.skills)}
            </div>
          </div>
        ))}
      </div>
    )}
    {data.experience[0] && (
      <div className={Styles.experienceStyle}>
        <div className={Styles.sectionTitleStyle}>
          <FontAwesomeIcon icon={faBriefcase} /> Experience
        </div>
        {data.experience.map((exp, index) => (
          <div key={index} className={Styles.experienceItemStyle}>
            <div className={Styles.experienceItemDetails}>
              <div className={Styles.itemTitleStyle}>{exp.title}</div>
              <div className={Styles.itemSubtitleStyle}>{exp.company}</div>
              {exp.description && (
                <div className={Styles.itemDescriptionStyle}>
                  {exp.description.includes("\n") ? (
                    <ul>
                      {exp.description.split("\n").map((line, i) => (
                        <li key={i}>➢ {line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              )}
            </div>
            <div className={Styles.tableLeftStyle}>
              <div className={Styles.itemSubtitleStyle}>{exp.location}</div>
              <div className={Styles.itemSubtitleStyle}>
                {formatDuration(exp.duration)}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    {data.education[0] && (
      <div className={Styles.educationStyle}>
        <div className={Styles.sectionTitleStyle}>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </div>
        {data.education.map((edu, index) => (
          <div key={index} className={Styles.educationItemStyle}>
            <div>
              <div className={Styles.itemTitleStyle}>{edu.degree}</div>
              <div className={Styles.itemSubtitleStyle}>{edu.institution}</div>
              {edu.achievement && (
                <div className={Styles.itemDescriptionStyle}>
                  {edu.achievement.includes("\n") ? (
                    <ul>
                      {edu.achievement.split("\n").map((line, i) => (
                        <li key={i}>➢ {line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{edu.achievement}</p>
                  )}
                </div>
              )}
            </div>
            <div className={Styles.tableLeftStyle}>
              <div className={Styles.itemSubtitleStyle}>{edu.grade}</div>
              <div className={Styles.itemSubtitleStyle}>
                {formatDuration(edu.duration)}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    {data.certifications[0] && (
      <div className={Styles.educationStyle}>
        <div className={Styles.sectionTitleStyle}>
          <FontAwesomeIcon icon={faCertificate} /> Courses & Certifications
        </div>
        {data.certifications.map((cert, index) => (
          <div key={index} className={Styles.certificateListStyle}>
            ➢<div className={Styles.itemTitleStyle}>{cert.name}</div>–
            <div className={Styles.itemSubtitleStyle}>{cert.institution}</div>
            <div className={Styles.itemSubtitleStyle}>{cert.year}</div>
          </div>
        ))}
      </div>
    )}
    {data.awards[0] && (
      <>
        <div className={Styles.sectionTitleStyle}>
          <FontAwesomeIcon icon={faAward} /> Awards and Achievements
        </div>
        <div className={Styles.awardsLanguagesStyle}>
          {data.awards.map((award, index) => (
            <div key={index} className={Styles.awardsLanguagesItemStyle}>
              <div className={Styles.itemTitleStyle}>{award.name}</div>
              <div className={Styles.itemSubtitleStyle}>
                {award.institution}
              </div>
              <div className={Styles.itemSubtitleStyle}>{award.year}</div>
            </div>
          ))}
        </div>
      </>
    )}
    {data.languages[0] && (
      <>
        <div className={Styles.sectionTitleStyle}>
          <FontAwesomeIcon icon={faLanguage} /> Languages
        </div>
        <div className={Styles.awardsLanguagesStyle}>
          {data.languages.map((lang, index) => (
            <div key={index} className={Styles.awardsLanguagesItemStyle}>
              <div className={Styles.itemTitleStyle}>
                {lang.language} {lang.proficiency}{" "}
                {renderProficiency(lang.proficiency)}
              </div>
            </div>
          ))}
        </div>
      </>
    )}
    <div className={Styles.logoMark}>
      Created at - abhijeetbhaskar.github.io/ivy-league-resume
    </div>
  </div>
);

export default ResumePreview;
