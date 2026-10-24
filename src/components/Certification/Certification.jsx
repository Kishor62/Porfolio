import { useState, useEffect, useRef } from "react";
import "./Certification.css";
import HclTech from "../../assets/images/participationHclTech.pdf"

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
      { threshold: 0.2 }
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
      id: 1,
      title: "HCLTch",
      organization: "Nucori",
      date: "May 2025",
      credentialId: "ABC123XYZ",
      link: "HclTech", // apna link daalo
    },
    {
      id: 2,
      title: "Meta Front-End Developer Certificate",
      organization: "Meta",
      date: "March 2025",
      credentialId: "DEF456UVW",
      link: "https://www.coursera.org/account/accomplishments/...",
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "January 2025",
      credentialId: "AWS-123456",
      link: "https://www.credly.com/badges/...",
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
            Professional certifications that validate my skills and knowledge.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.id}>
              <div className="cert-top">
                <span className="cert-org">{cert.organization}</span>
                <h3>{cert.title}</h3>
              </div>

              <div className="cert-info">
                <p>
                  <strong>Issued:</strong> {cert.date}
                </p>
                {cert.credentialId && (
                  <p>
                    <strong>Credential ID:</strong> {cert.credentialId}
                  </p>
                )}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                View Certificate <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;