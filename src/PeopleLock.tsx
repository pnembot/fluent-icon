import type { SVGProps } from "react";

export function PeopleLock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 3.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0Zm7.5 8.716C10.234 15.31 8.927 16 6.75 16c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V12a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2v.084c0 .01 0 .023-.002.04a2.512 2.512 0 0 1-.01.135l-.001.016A2 2 0 0 0 11 14v.466ZM2.5 12.06v.017l.007.083a2.948 2.948 0 0 0 .498 1.336C3.492 14.201 4.513 15 6.75 15s3.258-.799 3.745-1.503a2.946 2.946 0 0 0 .498-1.336a.899.899 0 0 0 .006-.083l.001-.017V12a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v.061ZM14.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM12 6.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Zm1.5 5.5v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default PeopleLock;
