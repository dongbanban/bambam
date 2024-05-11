import { useEffect } from "react";
import useFirstMount from "./UseFirstMount";

const useUpdateEffect = (effect, deps) => {
  const isFirstMount = useFirstMount();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
