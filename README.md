# Nexum UI

Nexum UI is a small, reusable component library for building consistent and elegant user interfaces in React applications. This library provides a set of commonly used, pre-styled components designed to be highly flexible and customizable. Built with Styled Components, Nexum UI enables you to easily maintain styling consistency across your app while keeping the UI code clean and modular.

**Key Features**

- **Reusable Components**: A collection of essential UI components that can be used throughout your application to create a cohesive user experience.
- **Built for React**: Designed specifically for React applications, providing an intuitive API for fast integration.
- **Styled Components**: Uses Styled Components for scoped, customizable styling, so each component can be easily themed and modified.
- **Lightweight & Modular**: Only includes the essential components, keeping your bundle size small.

## Installation

You can install Nexum UI via npm:

```bash
npm install nexum-ui
```

or with Yarn:

```bash
yarn add nexum-ui
```

## Usage

Start by importing the components you need into your React project:

```javascript
import { Button, Input, Modal } from "nexum-ui";

function App() {
  return (
    <div>
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      <Input placeholder="Enter your name" />
      <Modal isOpen={true} title="Hello, Nexum UI">
        <p>This is a modal component from Nexum UI!</p>
      </Modal>
    </div>
  );
}
```

## Customization

Each component is styled using Styled Components, allowing for easy customization through props or by extending styles. Nexum UI also supports theming, so you can define a theme for your entire application to maintain a consistent look and feel.

## Documentation

For a complete list of components, properties, and usage examples, please refer to the documentation.
