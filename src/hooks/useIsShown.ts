import { useState } from "react";

const useIsShown = (initialState = false) => {
  const [isShown, setIsShown] = useState(initialState);

  const show = () => setIsShown(true);
  const hide = () => setIsShown(false);

  return [isShown, show, hide];
};

export default useIsShown;