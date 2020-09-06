import React, { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { UserContext } from "../UserContext";

const DragPreference = ({ isGroup, idx }) => {
  const {
    collegeData,
    setCollegeData,
    individualData,
    setIndividualData,
  } = useContext(UserContext);
  const preferenceList = isGroup
    ? collegeData[idx].preference
    : individualData[idx].preference;

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    padding: grid,
    overflow: "auto",
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newPreferenceList = reorder(
      preferenceList,
      result.source.index,
      result.destination.index
    );
    if (isGroup) {
      const newCollegeData = collegeData.map((item) => {
        if (item.idx === idx) {
          const updatedItem = {
            ...item,
            preference: newPreferenceList,
          };
          return updatedItem;
        }

        return item;
      });
      setCollegeData(newCollegeData);
    } else {
      const newIndividualData = individualData.map((item) => {
        if (item.idx === idx) {
          const updatedItem = {
            ...item,
            preference: newPreferenceList,
          };
          return updatedItem;
        }

        return item;
      });
      setIndividualData(newIndividualData);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {preferenceList.map((item, index) => {
              return (
                <Draggable key={item} draggableId={`${item}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {isGroup
                        ? individualData[item].name
                        : collegeData[item].name}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragPreference;
