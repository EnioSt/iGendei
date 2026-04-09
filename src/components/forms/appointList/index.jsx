const AppointList = ({ name, hour, appoint, status }) => {
  const formatName = (fullName) => {
    const parts = fullName.trim().split(" ");
    if (parts.length <= 2) return fullName;
    return `${parts[0]} ${parts[parts.length - 1]}`;
  };

  const statusColors = {
    Confirmado: "text-(--card) bg-(--bg-span-confirmado)",
    Pendente: "text-(--card-pendente) bg-(--bg-span-pendente)",
    Cancelado: "text-(--card-cancelado) bg-(--bg-span-cancelado)",
  };

  return (
    <div className="grid grid-cols-3 items-center gap-2">
      <h3
        className="text-(--foreground) font-(--weight-semibold) 
                     text-xs md:text-sm truncate"
      >
        {formatName(name)}
      </h3>
      <p className="text-xs md:text-sm font-(--weight-regular) text-(--foreground-subtle)">
        {hour}-{appoint}
      </p>
      {/* <span className="font-(--weight-bold) text-[10px] text-(--card) bg-(--bg-span) py-1 px-2 rounded-2xl">
        ◉ {status}
      </span> */}
      <span
        className={`font-(--weight-bold) text-[10px] py-1 px-2 rounded-2xl text-center 
        ${statusColors[status] || "bg-gray-500 text-white"}`}
      >
        ◉ {status}
      </span>
    </div>
  );
};

export default AppointList;
