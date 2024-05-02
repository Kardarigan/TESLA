const Ham_Submenu = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div>{item.label}</div>
      ))}
    </div>
  );
};

export default Ham_Submenu;
