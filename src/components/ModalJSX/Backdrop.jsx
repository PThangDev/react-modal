import { motion } from "framer-motion";
import { useEffect } from "react";

const Backdrop = ({
  children,
  className = "",
  closeWhenPressEsc = true,
  style = {},
  onClick,
  onEscape,
}) => {
  useEffect(() => {
    if (closeWhenPressEsc) {
      const handleKeyDown = (e) => {
        if (e.keyCode === 27) {
          onEscape();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [closeWhenPressEsc, onClick, onEscape]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`backdrop ${Boolean(className) ? className : ""}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
export default Backdrop;
