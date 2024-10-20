import { useEffect, useRef } from "react";
import { MotionTransitionProps } from "./MotionTransition.types";
import { useAnimation, useInView, motion } from "framer-motion";
import { fadeIn } from "@/utils/transitions";

export function MotionTransition(props: MotionTransitionProps) {
  const { children, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
        mainControls.start("visible")
        slideControls.start("visible")
    }
  }, [isInView])

  return (
    <section ref={ref}>
      <motion.section variants={fadeIn()}
      initial= "hidden" 
      animate={mainControls}
      exit="hidden"
      className={className}>{children}</motion.section>
    </section>
  );
}
