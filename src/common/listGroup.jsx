import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <div>
      <ul className="list-group">
        {items.map((genre) => (
          <li
            key={genre[valueProperty]}
            className={
              selectedItem === genre
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(genre)}
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
