// Tabs.js
import React, { useState } from 'react';

const Tabs = ({ tabs, content }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {content.find(c => c.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
