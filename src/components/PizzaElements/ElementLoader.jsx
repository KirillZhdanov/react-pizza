import React from "react";
import ContentLoader from "react-content-loader";

export default function ElementLoader() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="131" cy="131" r="119" />
      <rect x="0" y="268" rx="5" ry="5" width="280" height="26" />
      <rect x="0" y="307" rx="5" ry="5" width="280" height="84" />
      <rect x="0" y="414" rx="5" ry="5" width="100" height="31" />
      <rect x="199" y="449" rx="0" ry="0" width="13" height="0" />
      <rect x="137" y="408" rx="18" ry="18" width="140" height="43" />
    </ContentLoader>
  );
}
