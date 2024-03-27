import type { SVGProps } from "react";

export function HeartPulseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.388 4.29a4.302 4.302 0 0 0-6.127-.016a4.398 4.398 0 0 0-.94 4.737C2.379 9.004 2.439 9 2.5 9h2.308L6.12 5.913a1.5 1.5 0 0 1 2.765.01l1.383 3.319l.96-1.537a1.5 1.5 0 0 1 2.4-.193L14.932 9H17.5c.069 0 .136.005.202.014a4.416 4.416 0 0 0-.978-4.702a4.305 4.305 0 0 0-6.135-.015l-.596.603l-.605-.61Zm.166 12.513L4.799 12H5.8a1.5 1.5 0 0 0 1.38-.913l.306-.72l1.13 2.71a1.5 1.5 0 0 0 2.656.218l1.43-2.287l.42.48A1.5 1.5 0 0 0 14.25 12h1.004l-4.758 4.803a.662.662 0 0 1-.942 0ZM7.962 6.308a.5.5 0 0 0-.922-.004L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.304l1.235-2.907l2.043 4.903a.5.5 0 0 0 .886.073l2.143-3.429l1.307 1.493a.5.5 0 0 0 .376.171h3.25a.5.5 0 0 0 0-1h-3.023l-1.6-1.83a.5.5 0 0 0-.801.065l-1.987 3.179l-2.127-5.106Z"
      />
    </svg>
  );
}
export default HeartPulseFilled;
