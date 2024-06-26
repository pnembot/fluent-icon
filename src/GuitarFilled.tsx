import type { SVGProps } from "react";

export function GuitarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="m14.491 3.783l1.12-1.119a.586.586 0 0 1 .829 0l.895.895c.23.23.23.6 0 .83l-1.119 1.119l-1.725-1.725Zm-.707.707l-2.53 2.531l-.13-.13a2.126 2.126 0 0 0-3.405.553l-.339.677a.604.604 0 0 1-.66.323l-.058-.012a3.718 3.718 0 0 0-3.704 1.415a4.79 4.79 0 0 0 .445 6.262l.487.487a4.791 4.791 0 0 0 6.262.445a3.718 3.718 0 0 0 1.415-3.704l-.011-.059a.604.604 0 0 1 .322-.659l.677-.338a2.126 2.126 0 0 0 .553-3.406l-.13-.13l2.53-2.53l-1.724-1.725Zm-5.418 7.143a1.25 1.25 0 1 1 1.768-1.768a1.25 1.25 0 0 1-1.768 1.768Z"
      />
    </svg>
  );
}
export default GuitarFilled;
