import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CodeBlock = ({ code, language = 'css' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="code-preview-box">
      <button 
        onClick={handleCopy}
        className="copy-btn"
        style={{ zIndex: 30 }}
      >
        {copied ? (
          <>
            <Check size={12} className="text-emerald-400" />
            <span style={{ color: '#34d399' }}>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={12} />
            <span>Copy</span>
          </>
        )}
      </button>

      <pre style={{ margin: 0, overflowX: 'auto', paddingRight: '60px' }}>
        <code style={{ color: '#e4e4e7', fontSize: '0.8rem', lineHeight: '1.5' }}>
          {code}
        </code>
      </pre>
      
      <style>{`
        .text-emerald-400 { color: #34d399; }
      `}</style>
    </div>
  );
};

export default CodeBlock;
