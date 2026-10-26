import { useState, useEffect, useRef } from "react";
import "./Certification.css";
import ten from "../../assets/images/10ThMarksSheet.jpg";
import ten2 from "../../assets/images/12ThMarksSheet.jpg";
import hcltech from "../../assets/images/HclTech.jpg";

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      id: "edu-10th",
      image: ten,
      name: "Secondary School Examination (Class 10)",
      description:
        "Bihar School Examination Board, Patna – Secondary School Examination 2021 (Annual). School: High School Masaurha, Patna. Aggregate: 316/500 (1st Division).",
      other: {
        board: "Bihar School Examination Board",
        year: 2021,
        rollNo: "2100095",
        regNo: "71237-00065-20",
        result: "1st Division",
        subjects: [
          "Hindi",
          "Sanskrit",
          "Mathematics",
          "Science",
          "Social Science",
          "English",
        ],
      },
    },
    {
      id: "edu-12th",
      image: ten2,
      name: "Intermediate Examination (Class 12) – Science",
      description:
        "Bihar School Examination Board, Patna – Intermediate Annual Examination 2023. College: M.D. College, Naubatpur, Patna. Faculty: Science. Aggregate: 300 (1st Division).",
      other: {
        board: "Bihar School Examination Board",
        year: 2023,
        rollNo: "23010151",
        regNo: "R-170400147-21",
        result: "1st Division",
        subjects: ["English", "Hindi", "Physics", "Chemistry", "Mathematics"],
      },
    },
    {
      id: "cert-young-turks-2026",
      image: hcltech,
      name: "Naukri Campus Young Turks 2026 – Certificate of Participation",
      description:
        "Certificate of Participation awarded by HCLTech for exemplary participation in Naukri Campus Young Turks 2026, India's largest skill contest.",
      other: {
        certificateId: "6acf48e496ebe313e740c135",
        issuedBy: "HCLTech / Naukri Campus",
        date: "19th Oct 2026",
        signedBy: "Senior Vice President, Naukri Campus",
      },
    },
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className={`certifications-section ${isVisible ? "visible" : ""}`}
    >
      <div className="certifications-container">
        <div className="certifications-header">
          <p className="cert-label">MY ACHIEVEMENTS</p>
          <h2>
            Certifications<span>.</span>
          </h2>
          <p className="cert-subtitle">
            Academic records and professional certifications that validate my
            skills and knowledge.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.id}>
              {/* Image */}
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.name} className="cert-image" />
              </div>

              {/* Title & Description */}
              <div className="cert-content">
                <h3 className="cert-title">{cert.name}</h3>
                <p className="cert-description">{cert.description}</p>

                {/* Extra Details */}
                <div className="cert-details">
                  {cert.other.year && (
                    <p>
                      <strong>Year:</strong> {cert.other.year}
                    </p>
                  )}
                  {cert.other.board && (
                    <p>
                      <strong>Board:</strong> {cert.other.board}
                    </p>
                  )}
                  {cert.other.result && (
                    <p>
                      <strong>Result:</strong> {cert.other.result}
                    </p>
                  )}
                  {cert.other.issuedBy && (
                    <p>
                      <strong>Issued By:</strong> {cert.other.issuedBy}
                    </p>
                  )}
                  {cert.other.date && (
                    <p>
                      <strong>Date:</strong> {cert.other.date}
                    </p>
                  )}
                  {cert.other.certificateId && (
                    <p>
                      <strong>Certificate ID:</strong>{" "}
                      {cert.other.certificateId}
                    </p>
                  )}
                  {cert.other.rollNo && (
                    <p>
                      <strong>Roll No:</strong> {cert.other.rollNo}
                    </p>
                  )}
                </div>

                {/* Subjects (if available) */}
                {cert.other.subjects && (
                  <div className="cert-subjects">
                    <strong>Subjects:</strong>
                    <div className="subjects-list">
                      {cert.other.subjects.map((sub, index) => (
                        <span key={index} className="subject-tag">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
