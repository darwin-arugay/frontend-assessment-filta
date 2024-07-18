# Frontend Assessment (ReactJS + TS) - Exercise 2

# Project Documentation

### Table of Contents

1. [Introduction]
2. [Project structure]
3. [How to setup project]
4. Component overview
5. Usage

---

### 1. Introduction

This project was created using Vite with ReactJS + TypeScript. For more information, you can refer to the [Vite documentation](https://vitejs.dev/guide/). The package manager used is Yarn. Before proceeding, ensure you have [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) and [Nodejs](https://nodejs.org/en/download/package-manager) installed on you machine. If they are not installed, please do so.

### 2. Project structure

```src/
├── assets/
│   └── icons/
│       └── caret.svg
├── components/
│   ├── Accordion/
│   │   ├── index.tsx
│   │   ├── Panel.tsx
│   │   └── Panel.scss
│   └── Tabs/
│       ├── TabContext.tsx
│       ├── List.tsx
│       ├── TabPanel.tsx
│       ├── Tab/
│       │   ├── index.tsx
│       │   └── Tab.scss
│       └── index.tsx
├── common/
│   └── types.ts
└── App.tsx
```

### 3. How to setup the project

1. Run this command to install the project package dependencies:

- ```ssh
  yarn install
  ```

2. After successful installation, you can run the project with this command:

- ```ssh
  yarn dev
  ```

3. Open the project by clicking this link [http://localhost:5173/](http://localhost:5173/) in your favorite browser or the link in the terminal.

### 4. Components Overview

#### Accordion

- Accordion/index.tsx
  - Manages state for active panels and renders AccordionPanel components.
- Accordion/Panel.tsx
  - Renders individual accordion panels with expand/collapse functionality.
- Accordion/Panel.scss
  - Contains styles for the accordion panel.

---

#### Tabs

- Tabs/TabContext.tsx
  - Provides context for tab management.
- Tabs/List.tsx
  - Renders the list of tabs.
- Tabs/TabPanel.tsx
  - Renders the content of the active tab.
- Tabs/Tab/index.tsx
  - Represents an individual tab.
- Tabs/Tab/Tab.scss
  - Contains styles for the tab.

---

### 5. Usage

#### Accordion

```jsx
import Accordion from "./components/Accordion";

const data = [
  { id: 1, title: "Panel 1", content: "Content 1" },
  { id: 2, title: "Panel 2", content: "Content 2" },
];

const App = () => {
  return <Accordion data={data} initialValue={null} />;
};

export default App;
```

### Tabs

```jsx
import Tabs from "./components/Tabs";

const { TabContext, TabList, TabPanel, Tab } = Tabs;

const App = () => {
  return (
    <TabContext initialValue="tab1">
      <TabList>
        <Tab title="Tab 1" value="tab1" />
        <Tab title="Tab 2" value="tab2" />
      </TabList>
      <TabPanel value="tab1">Content 1</TabPanel>
      <TabPanel value="tab2">Content 2</TabPanel>
    </TabContext>
  );
};

export default App;
```

### 6. Styling Guidelines

- Casing: Use kebab-case for CSS classes.
- BEM Syntax: Follow BEM (Block Element Modifier) for custom CSS classes.
- Tailwind: Use Tailwind CSS for utility classes.
- CSS/SCSS: Use CSS/SCSS for reusable component styles.

### 7. Example Usage

#### Accordion

The `Accordion` component takes `data` and `initialValue` as props. The data should be an array of objects with `id`, `title`, `disabled`, and `content` properties. The `initialValue` sets the initially active panel.

#### Tabs

The `Tabs` components include `TabContext`, `TabList`, `TabPanel`, and `Tab`. These components work together to create a tabbed interface. `TabContext` provides context, `TabList` renders the tab, `TabPanel` renders the content, and `Tab` represents an individual tab.

---

### Tada! That's it. Enjoy.
