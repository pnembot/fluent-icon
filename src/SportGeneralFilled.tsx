import type { SVGProps } from "react";

export function SportGeneralFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M16.582 4.125c.338.4.616.833.834 1.288l-.002.001a2.001 2.001 0 0 1-2.43.31l1.598-1.599z"
          fill="currentColor"
        />
        <path
          d="M15.875 3.418l-1.598 1.598a2 2 0 0 1 .309-2.43l.001-.001a5.97 5.97 0 0 1 1.288.833z"
          fill="currentColor"
        />
        <path
          d="M16.92 11.435a6.006 6.006 0 0 0 .867-5.024a3.002 3.002 0 0 1-3.525.035L13.096 7.61l3.825 3.824z"
          fill="currentColor"
        />
        <path
          d="M13.555 5.738a3.002 3.002 0 0 1 .035-3.525a6.006 6.006 0 0 0-5.025.867l3.824 3.824l1.166-1.166z"
          fill="currentColor"
        />
        <path
          d="M7.793 3.722l-.035.035a5.973 5.973 0 0 0-1.521 2.571c.461.141.938.306 1.412.496c1.035.416 2.136.985 3.049 1.771l.984-.984l-3.889-3.889z"
          fill="currentColor"
        />
        <path
          d="M13.688 13.759a5.973 5.973 0 0 0 2.555-1.516l.035-.036l-3.889-3.889l-.981.981c.81.925 1.389 2.047 1.807 3.1c.181.457.338.916.473 1.36z"
          fill="currentColor"
        />
        <path
          d="M13.248 16.328a1.7 1.7 0 0 1-2.105 1.654c-1.755-.395-4.532-1.235-6.189-2.892c-1.653-1.653-2.507-4.441-2.913-6.208a1.84 1.84 0 0 1-.047-.415a1.703 1.703 0 0 1 2.084-1.66c.912.191 2.067.491 3.199.945c1.126.452 2.261 1.07 3.104 1.912c.844.844 1.458 1.98 1.904 3.104c.449 1.13.74 2.282.925 3.19c.026.125.038.249.038.37zm-6.394-5.181a.5.5 0 0 0-.707.707l2 2a.5.5 0 1 0 .707-.707l-2-2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default SportGeneralFilled;
