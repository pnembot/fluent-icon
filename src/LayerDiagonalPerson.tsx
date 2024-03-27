import type { SVGProps } from "react";

export function LayerDiagonalPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.815 3.036a.5.5 0 0 1 .684.464v.302l.998-.395a1.5 1.5 0 0 0-2.05-1.301L3.579 4.43A2.5 2.5 0 0 0 2 6.754v5.743a1.5 1.5 0 0 0 2 1.414v-1.075l-.316.126A.5.5 0 0 1 3 12.497V6.754a1.5 1.5 0 0 1 .948-1.394l5.867-2.324Zm3 2a.5.5 0 0 1 .684.465v.498l1-.396v-.102a1.5 1.5 0 0 0-2.052-1.395l-6.183 2.45A2 2 0 0 0 5 8.414v6.082a1.5 1.5 0 0 0 2.053 1.395L8 15.516V14.44l-1.316.522A.5.5 0 0 1 6 14.497V8.415a1 1 0 0 1 .632-.93l6.183-2.449ZM17 7.5a.5.5 0 0 0-.684-.465l-6 2.376a.5.5 0 0 0-.316.465V16.5a.5.5 0 0 0 .684.464l.333-.131a3.2 3.2 0 0 0 .257.973l-.222.088A1.5 1.5 0 0 1 9 16.5V9.876a1.5 1.5 0 0 1 .948-1.394l6-2.377A1.5 1.5 0 0 1 18 7.5v2.84a3.015 3.015 0 0 0-1-.94V7.5Zm.5 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default LayerDiagonalPerson;
