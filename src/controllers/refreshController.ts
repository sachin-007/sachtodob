import { Request, Response } from 'express';
import axios from 'axios';

let intervalId: NodeJS.Timeout | null = null; // Variable to store the interval ID

// This function will make the request to the /refresh route itself every 2 minutes
const callRefreshRoute = async () => {
  try {
    await axios.get("https://sachtodob.onrender.com/api/refresh"); // Replace with your URL
    console.log("Refresh route called successfully");
  } catch (error) {
    console.error("Error calling refresh route:", (error as Error).message);
  }
};

// This function is executed when the /refresh route is hit
export const refresh = (req: Request, res: Response): void => {
  try {
    if (!intervalId) {
      intervalId = setInterval(callRefreshRoute, 120000); // 2 minutes = 120000 ms
    }
    res.status(200).json({
      message: "Background task started, calling the /refresh route every 2 minutes.",
    });
  } catch (error) {
    console.error("Error in refresh route:", (error as Error).message);
    res.status(500).json({ error: "Internal server error" });
  }
};
