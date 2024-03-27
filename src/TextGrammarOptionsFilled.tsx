import type { SVGProps } from "react";

export function TextGrammarOptionsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.853 13.147a.5.5 0 0 1 0 .707l-4 3.996a.5.5 0 0 1-.706-.707l3.999-3.997a.5.5 0 0 1 .707 0zm-2.475.353L7.876 15H2.75a.75.75 0 0 1 0-1.5h6.628zM14 7a.5.5 0 0 1 .48.358l.016.08l.098.792a2.5 2.5 0 0 0 2.007 2.15l.169.026l.791.098a.5.5 0 0 1 .081.975l-.08.017l-.793.098A2.5 2.5 0 0 0 14.62 13.6l-.026.168l-.098.792a.5.5 0 0 1-.975.081l-.017-.08l-.098-.792a2.5 2.5 0 0 0-2.007-2.15l-.168-.026l-.792-.098a.5.5 0 0 1-.081-.975l.08-.017l.792-.098A2.5 2.5 0 0 0 13.38 8.4l.026-.169l.098-.791A.5.5 0 0 1 14 7zm-4.9 3.5a1.497 1.497 0 0 0 .189 1.381l.094.119H2.75a.75.75 0 0 1-.102-1.493l.102-.007H9.1zm2.15-3a.75.75 0 0 1 .102 1.493L11.25 9h-8.5a.75.75 0 0 1-.102-1.493L2.75 7.5h8.5zm6-3a.75.75 0 0 1 .102 1.493L17.25 6H2.75a.75.75 0 0 1-.102-1.493L2.75 4.5h14.5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default TextGrammarOptionsFilled;
