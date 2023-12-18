// components/Settings.js
import React, { useState } from 'react';

const Settings = ({ onToggleTheme, onNotificationSettings }) => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  const handleToggleTheme = () => {
    // Implement theme toggling logic
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    onToggleTheme(newTheme);
  };

  const handleNotificationSettings = () => {
    // Implement notification settings logic
    setNotifications(!notifications);
    onNotificationSettings(!notifications);
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Theme:
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </label>
      <label>
        Notifications:
        <input
          type="checkbox"
          checked={notifications}
          onChange={handleNotificationSettings}
        />
      </label>
    </div>
  );
};

export default Settings;
