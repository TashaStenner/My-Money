import React, { useEffect } from "react";
import { redirectTo } from "@reach/router";

const PrivateRoutes = (props) => {
  const { user, children } = props;

  useEffect(() => {
    if (!user) {
      redirectTo("/");
    }
  });

  return <>{children}</>;
};

export default PrivateRoutes;
