import { createContext } from "react";

const LikesCache = createContext<{cache: number[], setCache: (val: number[]) => void}>({cache: [], setCache: (val: number[]) => {}});

export default LikesCache;
