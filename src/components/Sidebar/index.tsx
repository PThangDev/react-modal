import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  fullSize?: boolean;
  onClose: () => void;
}
const options = {
  left: {
    hidden: {
      x: "-110%",
      opacity: 0.5,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      y: "-100% + 20px",
      opacity: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  },
  right: {
    hidden: {
      x: "100%",
      opacity: 0.5,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100%",
      opacity: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  },
  top: {
    hidden: {
      x: "-100%",
      opacity: 0.5,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  },
  bottom: {
    hidden: {
      x: "-100%",
      opacity: 0.5,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  },
};

const Sidebar: FC<Props> = ({
  isOpen = false,
  children,
  position = "left",
  fullSize = false,
  onClose,
}) => {
  return createPortal(
    <>
      <motion.aside
        className={`sidebar ${position ? position : ""} ${
          fullSize ? "sidebar-full-size" : ""
        }`}
        animate={isOpen ? options[position].visible : options[position].hidden}
      >
        <span className="sidebar-btn-close" onClick={onClose}></span>
        {children}
      </motion.aside>
      {isOpen && (
        <motion.div className="overlay" onClick={onClose}></motion.div>
      )}
    </>,
    document.querySelector("body") as HTMLBodyElement
  );
};
export default Sidebar;
