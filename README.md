# Project Contents

This is a React project that uses the react-dnd library to implement drag-and-drop functionality between two drop zones. The left drop zone contains a list of items that can be dragged and dropped to the right drop zone. Each item in the drop zones has at least one input such as text, dropdown, or checkbox, and when an item is dragged from one zone to the other, the input values are preserved. The project uses TypeScript and is styled using TailwindCSS and DaisyUI. Once the user has finished making changes, they can click a "Save" button to enter the items in the right drop zone into a table below the drop zones. The table displays the values of the input fields in each item, along with a unique identifier for each item. The project also includes error handling using the react-toastify library.

# Instalation

- after cloning the project

1. open terminal

   2. cd ./drop-it-in

      3. npm i

         4.npm run dev

## public

- [vite.svg](public/vite.svg)

## src

- [App.tsx](src/App.tsx)
- [index.css](src/index.css)
- [main.tsx](src/main.tsx)
- [vite-env.d.ts](src/vite-env.d.ts)

### assets

- [react.svg](src/assets/react.svg)

### types

- [collection.ts](src/types/collection.ts)
- [dataTypes.ts](src/types//dataTypes.ts)

### components

- [Header.tsx](src/components/Header.tsx)
- [Layout.tsx](src/components/Layout.tsx)

---Layout.tsx---

    The component is using several other components, imported from various files, to render the UI. These components include Text, Input, CheckBox, Image, RightArea, LeftArea, Table, and Exclamation.

    The component has several state variables defined using the useState hook. These variables include disable, inputValue, checkboxValue, collections, leftArea, and rightArea.

    The collections state variable is an array of objects, where each object represents a   drag-and-drop item that can be used to build the UI. Each object has an id property and a component property. The id property is a unique identifier for the item, while the component property is a React component that represents the drag-and-drop item.

    The leftArea and rightArea state variables are arrays that represent the left and right sides of the UI, respectively. When an item is dragged from the collections array and dropped onto the UI, it is moved from the collections array to either the leftArea or rightArea array.

    The component renders the UI using JSX. The UI consists of three main parts: the list of draggable items, the left area of the UI, and the right area of the UI. The list of draggable items is an array of components, each representing a drag-and-drop item. The left and right areas of the UI are represented by the LeftArea and RightArea components, respectively.

    At the bottom of the component, there is a button that is initially enabled. When all drag-and-drop items have been moved from the collections array to either the leftArea or rightArea arrays, the button is disabled, and a message is displayed asking the user to list all items. Once the button is clicked, a table is displayed showing the items that have been moved to the right area of the .

---

- [LeftArea.tsx](src/components/LeftArea.tsx)

--LeftArea--

    This is a React component called LeftArea that renders a drop area for draggable elements.

    The component receives several props of type dataTypes that include an array of collections, an inputValue, a checkboxValue, and functions to update these values and the leftArea and rightArea arrays.

    The LeftArea component uses the useDrop hook from the react-dnd library to create a drop zone for draggable elements of types "text", "image", "input", or "checkbox". When an item is dropped, the DropFc function is called to handle it.

    The DropFc function filters the collections array to find the dropped element and then checks whether it is an input or checkbox component to add it to the leftArea array or move it between the leftArea and rightArea arrays. It also checks if the element already exists in the leftArea to prevent duplicating items. If any of these conditions are met, a toast notification is displayed to the user.

    The LeftArea component renders the items in the leftArea array and displays a smiley or angry face emoji depending on whether or not the drop area is being hovered over. It also displays a counter for the number of items in the leftArea and another emoji indicating if there is enough space in the rightArea array for more items.

---

- [RightArea.tsx](src/components/RightArea.tsx)

--RightArea.tsx--

    This is a React component named LeftArea. It receives props of type dataTypes which includes collections, inputValue, checkboxValue, setInputValue, setCheckboxValue, setCollections, rightArea, setRightArea, leftArea, and setLeftArea.

    The component uses the useDrop hook from react-dnd to allow dropping of items with accepted types of "text", "image", "input", and "checkbox". When an item is dropped, the DropFc function is called to handle the item's placement in the component's leftArea, rightArea, or collections state depending on its type and id.

    The controleInput_Check function is used to add an Input or CheckBox component to leftArea based on the item's type. The function also assigns an id to the component which is used to track the component's position in the array.

    The leftArea state is used to store an array of components. If leftArea has items, the component maps through the array to render each component. Otherwise, it renders an emoji based on the isOver variable returned by the useDrop hook.

    Finally, the component renders an emoji and counter based on the number of items in leftArea and rightArea.

---

- [Table.tsx](src/components/Table.tsx)

## component / fragments

- [CheckBox.tsx](src/component/fragments/CheckBox.tsx)
- [Icons.tsx](src/component/fragments/Icons.tsx)
- [Image.tsx](src/component/fragments/Image.tsx)
- [Input.tsx](src/component/fragments/Input.tsx)
- [Text.tsx](src/component/fragments/Text.tsx)
