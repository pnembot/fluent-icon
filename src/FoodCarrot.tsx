import type { SVGProps } from "react";

export function FoodCarrot(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.854 2.854a.5.5 0 0 0-.707-.708L14 5.292V2.5a.5.5 0 0 0-1 0v2.877c-1.579-.786-3.59-.34-4.64 1.206l-6.087 8.946c-.428.63-.346 1.47.196 2.007c.55.544 1.415.619 2.053.178l8.93-6.184A3.57 3.57 0 0 0 14.628 7H17.5a.5.5 0 0 0 0-1h-2.793l3.146-3.146Zm-8.66 4.284c.922-1.355 2.865-1.541 4.032-.386a2.58 2.58 0 0 1-.35 3.963l-8.93 6.184a.602.602 0 0 1-.766-.066a.586.586 0 0 1-.073-.748l6.087-8.947Z"
      />
    </svg>
  );
}
export default FoodCarrot;
