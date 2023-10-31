import { useEffect, useState } from "react";

export default function useFakeApiCallDelay(time: number = 1000) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, time)
  }, [])

  return { isLoading };
}