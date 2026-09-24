import contact from "../../assets/switches/xk75-switch-contact.png";
import housingLower from "../../assets/switches/xk75-switch-housing-lower.png";
import housingUpper from "../../assets/switches/xk75-switch-housing-upper.png";
import keycap from "../../assets/switches/xk75-switch-keycap.png";
import spring from "../../assets/switches/xk75-switch-spring.png";
import stem from "../../assets/switches/xk75-switch-stem.png";
import styles from "./SwitchDiagram.module.css";

type SwitchDiagramProps = {
  className?: string;
};

const parts = [
  { id: "keycap", src: keycap, travel: true },
  { id: "housingUpper", src: housingUpper, travel: true },
  { id: "stem", src: stem, travel: true },
  { id: "spring", src: spring, travel: false },
  { id: "contact", src: contact, travel: false },
  { id: "housingLower", src: housingLower, travel: false },
] as const;

export function SwitchDiagram({ className }: SwitchDiagramProps) {
  return (
    <div
      className={[styles.diagram, className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      {parts.map((part) => (
        <img
          key={part.id}
          className={styles.part}
          src={part.src}
          alt=""
          width={1254}
          height={1254}
          data-part={part.id}
          data-travel={part.travel ? "true" : undefined}
          decoding="async"
        />
      ))}
    </div>
  );
}
