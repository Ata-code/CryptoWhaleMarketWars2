import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

createRoot(document.getElementById("root")!).render(<App />);
