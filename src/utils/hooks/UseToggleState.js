import { useCallback, useState } from "react";

const useToggleState = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggle = useCallback(() => setState((c) => !c), []);

  return [state, toggle];
};

export default useToggleState;
