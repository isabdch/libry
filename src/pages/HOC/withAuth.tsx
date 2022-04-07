import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useUpdate } from "react-use";

export function withAuth(WrappedComponent: React.ComponentType<{}>) {
  // eslint-disable-next-line react/display-name
  return (props: {}) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = localStorage.getItem("user-accessToken");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
}

export function useMounted() {
  const mounted = useRef(false);
  const update = useUpdate();

  useEffect(() => {
    if (mounted.current == false) {
      mounted.current = true;
      update();
    }
  }, [update]);

  return mounted.current;
}
