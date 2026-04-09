const AppointList = ({ name, hour, appoint, status }) => {
  return (
    <div className="flex justify-between">
      <h3 className="text-(--foreground) text-sm font-(--weight-semibold)">
        {name}
      </h3>
      <p>
        {hour}-{appoint}
      </p>
      <span>{status}</span>
    </div>
  );
};

export default AppointList;
