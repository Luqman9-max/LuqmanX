import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div style={{
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #262626'
  }}>
    <h1 style={{ 
      color: '#f97316', 
      fontSize: '24px', 
      fontWeight: 'bold', 
      marginBottom: '24px',
      borderBottom: '1px solid #262626',
      paddingBottom: '16px'
    }}>
      New Message from LuqmanX
    </h1>
    
    <div style={{ marginBottom: '20px' }}>
      <p style={{ color: '#a3a3a3', fontSize: '14px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>From</p>
      <p style={{ fontSize: '18px', fontWeight: '500' }}>{name} ({email})</p>
    </div>
    
    <div style={{ marginBottom: '20px' }}>
      <p style={{ color: '#a3a3a3', fontSize: '14px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</p>
      <p style={{ fontSize: '18px', fontWeight: '500' }}>{subject}</p>
    </div>
    
    <div style={{ 
      backgroundColor: '#171717', 
      padding: '24px', 
      borderRadius: '8px', 
      border: '1px solid #262626',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.6'
    }}>
      <p style={{ color: '#a3a3a3', fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message Content</p>
      <div style={{ fontSize: '16px', color: '#e5e5e5' }}>{message}</div>
    </div>
    
    <div style={{ 
      marginTop: '40px', 
      paddingTop: '20px', 
      borderTop: '1px solid #262626',
      textAlign: 'center',
      fontSize: '12px',
      color: '#525252'
    }}>
      <p>© {new Date().getFullYear()} LuqmanX Personal Portfolio. This was sent via the website contact form.</p>
    </div>
  </div>
);
