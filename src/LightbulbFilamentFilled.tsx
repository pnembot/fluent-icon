import type { SVGProps } from "react";

export function LightbulbFilamentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.073 15l-.384 1.605c-.184.771-.865 1.33-1.67 1.39l-.144.005h-1.75c-.818 0-1.535-.516-1.776-1.262l-.038-.133L6.928 15h6.145ZM10 2c3.314 0 6 2.597 6 5.8c0 1.677-.745 3.216-2.204 4.594a.599.599 0 0 0-.145.213l-.026.081L13.311 14h-2.81V9.497a.5.5 0 1 0-1 0V14H6.688l-.313-1.311a.595.595 0 0 0-.17-.295c-1.39-1.312-2.133-2.77-2.2-4.355L4 7.8l.003-.191C4.108 4.494 6.753 2 10 2Zm-.5 4.502v1.002a.5.5 0 0 0 1 0V6.502a.5.5 0 0 0-1 0Zm3.35.941a.5.5 0 0 0-.707 0l-.708.709a.5.5 0 0 0 .707.707l.709-.709a.5.5 0 0 0 0-.707Zm-4.998 0a.5.5 0 1 0-.707.707l.708.709a.5.5 0 1 0 .707-.707l-.708-.709Z"
      />
    </svg>
  );
}
export default LightbulbFilamentFilled;
