import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function useModalClose() {
  const navigate = useNavigate(); // useNavigate is alternative for useHistory from v5

  // handleClick срабатывает при клике за пределами эл-та
  function handleClick(event: MouseEvent) {
    if (event.target instanceof Node && !ref.current?.contains(event.target)) {
      navigate("/");
    }
  }
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return [ref];
}
