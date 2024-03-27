import type { SVGProps } from "react";

export function DocumentVb(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="m9.65 1.44l2.91 2.91c.28.28.44.67.44 1.06V13c0 1.1-.9 2-2 2H8.75c.14-.19.26-.4.34-.63c.045-.108.074-.224.101-.334L9.2 14H11c.55 0 1-.45 1-1V6H9.5C8.67 6 8 5.33 8 4.5V2H5c-.55 0-1 .45-1 1v6c-.22 0-.42.05-.62.13c-.14.07-.27.15-.38.27V3c0-1.1.9-2 2-2h3.59c.39 0 .78.16 1.06.44ZM9 4.5c0 .28.22.5.5.5h2.29L9 2.21V4.5Zm-1.004 7.1a1.495 1.495 0 0 1-.269.762l.001.001a1.493 1.493 0 0 1 .43 1.659a1.508 1.508 0 0 1-1.408.979H5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.496 1.496 0 0 1 1.33.808c.127.243.184.517.166.791ZM6.5 11H6v1h.5a.5.5 0 1 0 0-1ZM6 14h.75a.5.5 0 1 0 0-1H6v1Zm-3.032.676l1.5-4a.501.501 0 0 0-.937-.352L2.5 13.076l-1.032-2.752a.502.502 0 0 0-.923-.03a.498.498 0 0 0-.012.382l1.5 4A.493.493 0 0 0 2.5 15a.5.5 0 0 0 .468-.324Z"
      />
    </svg>
  );
}
export default DocumentVb;
