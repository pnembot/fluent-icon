import type { SVGProps } from "react";

export function PeopleAudience(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.987 2.99a2.227 2.227 0 1 1 0 4.454a2.227 2.227 0 0 1 0-4.455Zm0 1a1.227 1.227 0 1 0 0 2.454a1.227 1.227 0 0 0 0-2.455ZM3.016 11.5a.5.5 0 1 1-1 0V9.014a1 1 0 0 1 .883-.993l.117-.007h2.757a1.987 1.987 0 0 0-.26.82l-.008.18h-2.49V11.5Zm14.474.5a.5.5 0 0 0 .5-.5V9.014l-.007-.116a1 1 0 0 0-.993-.884h-2.784c.146.253.24.543.262.851l.005.15h2.517V11.5a.5.5 0 0 0 .5.5Zm-5.016-3.986a1 1 0 0 1 .993.884l.006.116V11.5a.5.5 0 1 1-1 0V9.014H7.505V11.5a.5.5 0 1 1-1 0V9.014a1 1 0 0 1 .883-.993l.117-.007h4.968Zm4.414-2.483a1.913 1.913 0 1 0-3.827 0a1.913 1.913 0 0 0 3.827 0Zm-2.827 0a.913.913 0 1 1 1.827 0a.913.913 0 0 1-1.827 0ZM5.016 3.617a1.913 1.913 0 1 1 0 3.827a1.913 1.913 0 0 1 0-3.827Zm0 1a.913.913 0 1 0 0 1.827a.913.913 0 0 0 0-1.827ZM2.5 13a.5.5 0 0 0-.5.5v1A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-.5-.5h-15Zm.5 1.5V14h14v.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5Z"
      />
    </svg>
  );
}
export default PeopleAudience;
