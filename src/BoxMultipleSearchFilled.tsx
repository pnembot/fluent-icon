import type { SVGProps } from "react";

export function BoxMultipleSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.423 2.378a3 3 0 0 1 2.154 0l3.461 1.331c.58.223.962.78.962 1.4v7.78a1.5 1.5 0 0 1-.017.22a4.5 4.5 0 0 0-4.24-4.104a2.499 2.499 0 0 0-1.346-1.23l-3.461-1.33A4 4 0 0 0 7 6.208v-1.1a1.5 1.5 0 0 1 .962-1.4l3.46-1.331ZM16.09 4.82a.5.5 0 0 0-.646-.288l-2.766 1.064a.5.5 0 0 1-.359 0L9.554 4.532a.5.5 0 0 0-.359.934l2.766 1.063a1.5 1.5 0 0 0 1.077 0l2.766-1.063a.5.5 0 0 0 .287-.646ZM12.6 9.09a1.498 1.498 0 0 0-.561-.381L8.577 7.378a3 3 0 0 0-2.154 0L2.962 8.709a1.5 1.5 0 0 0-.962 1.4v4.78a1.5 1.5 0 0 0 .962 1.4l3.46 1.331a3 3 0 0 0 2.155 0l1.944-.748A4.489 4.489 0 0 1 9 13.5c0-.741.18-1.44.496-2.057L8 12.018v2.49a.5.5 0 0 1-1 0v-2.49l-2.805-1.079a.5.5 0 1 1 .36-.933L7.5 11.139l2.945-1.133a.498.498 0 0 1 .253-.028a4.482 4.482 0 0 1 1.902-.889Zm3.704 6.505a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 0 0 .708-.706l-2.55-2.55ZM16 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
}
export default BoxMultipleSearchFilled;
