import { BsCalendar2Date } from "react-icons/bs";
import { formatTime12 } from "../utils/time";

export default function TopBar({
  now,
  current,
  upcomingDayName,
  todayName,
  holidayName
}) {
  const headerText = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(now);

  const noMoreToday =
    !current && upcomingDayName && upcomingDayName !== todayName;

  return (
    <div className="w-full bg-purple-400 h-full text-white px-4 py-3 flex flex-col justify-center relative">
      {/* Status Dot */}
      <div className="w-2 h-2 border-1 border-red-300 bg-red-500 rounded-full absolute top-[10px] right-[18px] z-4"></div>
      <div className="w-3 h-3 bg-red-400 rounded-full z-3 animate-ping absolute top-[8px] right-[16px]"></div>

      <div className="absolute top-2 right-4 text-[9px] bg-white px-3 py-1 font-bold text-[#000] rounded-sm">Updated Routine</div>

      {/* Date and Time */}
      <div className="text-sm opacity-90 flex items-center gap-2">
        <BsCalendar2Date /> {headerText}
      </div>

      {/* Main label area */}
      {holidayName ? (
        <div className="text-[30px] font-bold text-center pt-6 pb-2">
          🎉 HOLIDAY !!
        </div>
      ) : (
        <div className="text-xl text-center text-[25px] font-semibold pt-6 pb-2">
          {current
            ? current.type === "break"
              ? "Break Time"
              : current.subject || current.type.toUpperCase()
            : noMoreToday
            ? <div className="text-[36px] text-center text-shadow-2xs ">No Classes !!!</div>
            : <div className="text-center text-[28px] text-shadow-2xs ">No ongoing class</div>}
        </div>
      )}

      {/* Session details (only for active class on normal days) */}
      {!holidayName && current && current.type !== "break" && (
        <div className="text-xs opacity-90">
          {formatTime12(current.start)} — {formatTime12(current.end)}
          {current.code ? ` • ${current.code}` : ""}
          {current.teacher ? ` • ${current.teacher}` : ""}
          {current.room ? ` • ${current.room}` : ""}
        </div>
      )}
    </div>
  );
}
