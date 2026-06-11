// hooks/useAttendance.js
"use client";

import { useState, useEffect, useMemo } from "react";

export function useAttendance() {
  // Get today's date as key for localStorage
  const getDateKey = () => new Date().toISOString().split("T")[0];

  // Load attendance from localStorage
  const [attendanceData, setAttendanceData] = useState(() => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem("attendance_data");
    return stored ? JSON.parse(stored) : {};
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("attendance_data", JSON.stringify(attendanceData));
    }
  }, [attendanceData]);

  // Mark attendance for a specific session
  const markAttendance = (day, sessionIndex, sessionSubject, status) => {
    const dateKey = getDateKey();
    setAttendanceData((prev) => {
      const newData = { ...prev };
      if (!newData[dateKey]) newData[dateKey] = {};
      if (!newData[dateKey][day]) newData[dateKey][day] = {};
      
      newData[dateKey][day][sessionIndex] = {
        status: status, // "present" or null
        timestamp: new Date().toISOString(),
        subject: sessionSubject,
      };
      
      return newData;
    });
  };

  // Get attendance status for a session (for today's date)
  const getStatus = (day, sessionIndex) => {
    const dateKey = getDateKey();
    return attendanceData[dateKey]?.[day]?.[sessionIndex]?.status || null;
  };

  // Calculate total attendance count for a specific subject (across ALL dates)
  // This is now properly computed from all stored data
  const getSubjectAttendanceCount = useMemo(() => {
    return (subject) => {
      let count = 0;
      
      // Loop through all dates in attendance data
      Object.values(attendanceData).forEach((dayData) => {
        // Loop through all days in each date
        Object.values(dayData).forEach((sessionsObj) => {
          // Loop through all sessions in each day
          Object.values(sessionsObj).forEach((session) => {
            if (
              session &&
              session.status === "present" &&
              session.subject === subject
            ) {
              count++;
            }
          });
        });
      });
      
      return count;
    };
  }, [attendanceData]);

  return { 
    markAttendance, 
    getStatus, 
    getSubjectAttendanceCount, 
    attendanceData 
  };
}