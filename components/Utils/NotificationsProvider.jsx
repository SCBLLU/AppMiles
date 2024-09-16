import React, { createContext, useState, useContext } from "react";

const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(true);

  const toggleNotifications = () => setNotifications((prev) => !prev);

  return (
    <NotificationsContext.Provider
      value={{ notifications, toggleNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationsContext);
