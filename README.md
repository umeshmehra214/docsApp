
# 📄 Docs UI – Interactive Document Cards with Drag & Drop (React + Framer Motion)

This is a beautifully designed React-based UI that displays interactive document cards with drag-and-drop capabilities using **Framer Motion**. Each card represents a document file with metadata like file size, download status, and tag info, all styled with Tailwind CSS.

---

## 🚀 Features

- 🖱️ **Draggable Cards** using Framer Motion
- 📄 **Card Details** like description, file size, and actions (download/close)
- 🎨 Smooth, modern UI with Tailwind CSS
- 🔗 Reusable component structure (`Background`, `Foreground`, `Card`)
- 📱 Fully responsive layout

---

## 📁 Folder Structure

```
your-project/
│
├── src/
│   ├── components/
│   │   ├── Background.jsx
│   │   ├── Foreground.jsx
│   │   └── Card.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── tailwind.config.js
```

---

## 🧠 How It Works

1. **`Background.jsx`**  
   Renders a static background layer with centered heading text for "Documents" and "Docs." using absolute positioning.

2. **`Foreground.jsx`**  
   Contains the document card data and renders multiple draggable `Card` components. The drag constraints are controlled using a `ref` to prevent cards from going out of bounds.

3. **`Card.jsx`**  
   A reusable, animated card component. Each card includes:
   - File icon
   - Description
   - File size
   - Action icon (download or close)
   - Optional tag (like "Download Now", "Upload") with color-coded background

---

## 🛠️ Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- 🎞️ Framer Motion
- 🎨 React Icons

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/docs-ui.git
cd docs-ui
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** or **yarn** installed.

```bash
npm install
# or
yarn install
```

### 3. Run the App Locally

```bash
npm run dev
# or
yarn dev
```

The app will start on `http://localhost:5173` (or whatever Vite shows).

---

## 📸 Preview

> Screenshot or live demo link here (optional)

---

## 🧪 Customize the Cards

You can modify the `data` array inside `Foreground.jsx` to add more cards or change the descriptions, tags, and file info.

```js
{
  desc: "Your document description...",
  fileSize: ".5mb",
  close: false,
  tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
}
```

---

## 🙌 Acknowledgements

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📃 License

This project is open-source and free to use for educational and personal purposes.

---

## 👨‍💻 Author

Created with 💙 by [Umesh Mehra](https://github.com/your-username)
