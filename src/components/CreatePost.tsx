import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          userId: 1, 
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage('✅ Post created successfully!');
        setTitle(''); 
      } else {
        setMessage('❌ Something went wrong.');
      }
    } catch (error) {
      setMessage('⚠️ Network error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create New Post</h2>
        <p style={styles.subtitle}>Share your thoughts with the world</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Post Title</label>
            <input
              type="text"
              placeholder="What's on your mind?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              style={styles.input}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            style={{ 
              ...styles.button, 
              backgroundColor: loading ? '#a0aec0' : '#4a90e2',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? (
              <span style={styles.loaderText}>Submitting...</span>
            ) : 'Publish Post'}
          </button>
        </form>

        {message && (
          <div style={{
            ...styles.alert,
            backgroundColor: message.includes('✅') ? '#f0fff4' : '#fff5f5',
            color: message.includes('✅') ? '#2f855a' : '#c53030',
            borderColor: message.includes('✅') ? '#c6f6d5' : '#fed7d7'
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

// CSS in JS Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7fafc',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '450px',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '24px',
    color: '#2d3748',
    textAlign: 'center',
  },
  subtitle: {
    margin: '0 0 24px 0',
    fontSize: '14px',
    color: '#718096',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#4a5568',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '16px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  loaderText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  alert: {
    marginTop: '20px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid',
    textAlign: 'center',
    fontSize: '14px',
  }
};

export default CreatePost;