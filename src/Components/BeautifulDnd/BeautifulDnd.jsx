/*
    Install package:
    npm install react-beautiful-dnd

    !Important: delete <React.StrictMode> from 'index.js' file

    <DragDropcontext> - wrapper of all dnd items
    <Droppable> - area in which it is possible to drag and drop items
    <Draggable> - item to drag

    <DragDropcontext /> will accept as prop callback (mostly 'onDragEnd'), how drag and drop should be maintained

    <Droppable /> and <Draggable /> components accepts only custom componnets as children.
    
    <Droppable /> must accept 'droppableId' (mostly just a string with id like in HTML) 
    
    <Draggable /> component's props must accept 'key' (if rendered in list-like form), 'index' (normaly just index of that item in array)
        and 'draggableId' it MUST be a string (mostly just id of that item)

    <Draggable /> component's child must take in props 'provided' and must render <div> (or other HTML container), that will take ref = {provided.innerRef}
        that container also must accept props {...provoded.draggableProps} and {...provoded.dragHandleProps}

    <Droppable /> componnet's child must take in props 'provided' and must render container (for example <div> element),
        that container must take in props {...provided.droppableProps} and ref = {provided.innerRef}. It must have such children:
        list of <Draggable /> components and
        {provoded.placeholder} component
*/

import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import {useState} from "react";

const team_data = [
    {id : 1, name : "first"},
    {id : 2, name : "second"},
    {id : 3, name : "third"},
    {id : 4, name : "fourth"},
    {id : 5, name : "fifth"}
]

export default function () {
    const [items, setItems] = useState(team_data);
    const draggableStyle = {"width": 300, "height": 50, "border" : "2px solid black", "background": "#aaf7"}
    const droppableStyle = {"background": "#ada"};

    const dataMap = items.map((el, i) => {
        return (
            <Draggable key = {el.id} draggableId = {el.id.toString()} index = {i}>
                {provoded => {
                    return (
                        <div
                            {...provoded.draggableProps}
                            {...provoded.dragHandleProps}
                            ref = {provoded.innerRef}
                        >
                            <div style = {draggableStyle}>
                                <p>{el.name}</p>
                            </div>
                        </div>
                    )
                }}
            </Draggable>
        )
    })

    const handleOnDragEnd = res => {
        console.log("Handle");
        const itemsCopy = [...items];
        const [reorderedItem] = itemsCopy.splice(res.source.index, 1);

        itemsCopy.splice(res.destination.index, 0, reorderedItem);
        setItems(itemsCopy);
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="items">
                    {provided => {
                        return (
                            <div
                                style = {droppableStyle}
                                {...provided.droppableProps}
                                ref = {provided.innerRef}
                            >
                                {dataMap}
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
            </DragDropContext>
        </div>
    )
}