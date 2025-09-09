import { useState } from "react";

export default function ChatForm({ onRegister }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    job: "",
    company: "",
    country: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.name.trim()) {
      onRegister?.(userInfo);
    }
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '8px 12px',
    marginTop: '4px',
    marginBottom: '12px',
    borderRadius: '12px',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    color: '#1f2937',
    fontSize: '14px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '4px'
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = '#0369a1';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '#0284c7';
  };

  const handleFocus = (e) => {
    e.target.style.backgroundColor = '#0369a1';
  };

  const handleBlur = (e) => {
    e.target.style.backgroundColor = '#0284c7';
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="name-input" style={labelStyle}>
          Name
          <input 
            id="name-input"
          type="text"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          style={inputStyle}
            placeholder="Your name"
          />
        </label>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="job-input" style={labelStyle}>
          Job
          <input 
            id="job-input"
          type="text"
          value={userInfo.job}
          onChange={(e) => setUserInfo({ ...userInfo, job: e.target.value })}
          style={inputStyle}
            placeholder="Your job"
          />
        </label>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="company-input" style={labelStyle}>
          Company
          <input 
            id="company-input"
          type="text"
          value={userInfo.company}
          onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })}
          style={inputStyle}
            placeholder="Your company"
          />
        </label>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="country-input" style={labelStyle}>
          Country
          <input 
            id="country-input"
          type="text"
          value={userInfo.country}
          onChange={(e) => setUserInfo({ ...userInfo, country: e.target.value })}
          style={inputStyle}
            placeholder="Your country"
          />
        </label>
      </div>
      <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '16px' }}>
        If you want to use this chatbot, you need to enter your information below.
        This is only to know who wants to connect with me on this website.
        It will not be used for any commercial purpose.
      </p>
      <button 
        type="submit"
        style={{
          width: '100%',
          backgroundColor: '#0284c7',
          color: 'white',
          fontWeight: '500',
          padding: '10px 16px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px'
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Register
      </button>
    </form>
  );
}