import React from 'react';
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5000/";
export const socket = io.connect(ENDPOINT);
export const SocketContext = React.createContext();
