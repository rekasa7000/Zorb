/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AuthImport } from "./routes/_auth";
import { Route as RootRouteImport } from "./routes/_root/route";
import { Route as IndexImport } from "./routes/index";
import { Route as RootSettingsImport } from "./routes/_root/settings";
import { Route as RootProfileImport } from "./routes/_root/profile";
import { Route as AuthSignupImport } from "./routes/_auth/signup";
import { Route as AuthSigninImport } from "./routes/_auth/signin";

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: "/_auth",
  getParentRoute: () => rootRoute,
} as any);

const RootRouteRoute = RootRouteImport.update({
  id: "/_root",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const RootSettingsRoute = RootSettingsImport.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => RootRouteRoute,
} as any);

const RootProfileRoute = RootProfileImport.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => RootRouteRoute,
} as any);

const AuthSignupRoute = AuthSignupImport.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => AuthRoute,
} as any);

const AuthSigninRoute = AuthSigninImport.update({
  id: "/signin",
  path: "/signin",
  getParentRoute: () => AuthRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/_root": {
      id: "/_root";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof RootRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/_auth": {
      id: "/_auth";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthImport;
      parentRoute: typeof rootRoute;
    };
    "/_auth/signin": {
      id: "/_auth/signin";
      path: "/signin";
      fullPath: "/signin";
      preLoaderRoute: typeof AuthSigninImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/signup": {
      id: "/_auth/signup";
      path: "/signup";
      fullPath: "/signup";
      preLoaderRoute: typeof AuthSignupImport;
      parentRoute: typeof AuthImport;
    };
    "/_root/profile": {
      id: "/_root/profile";
      path: "/profile";
      fullPath: "/profile";
      preLoaderRoute: typeof RootProfileImport;
      parentRoute: typeof RootRouteImport;
    };
    "/_root/settings": {
      id: "/_root/settings";
      path: "/settings";
      fullPath: "/settings";
      preLoaderRoute: typeof RootSettingsImport;
      parentRoute: typeof RootRouteImport;
    };
  }
}

// Create and export the route tree

interface RootRouteRouteChildren {
  RootProfileRoute: typeof RootProfileRoute;
  RootSettingsRoute: typeof RootSettingsRoute;
}

const RootRouteRouteChildren: RootRouteRouteChildren = {
  RootProfileRoute: RootProfileRoute,
  RootSettingsRoute: RootSettingsRoute,
};

const RootRouteRouteWithChildren = RootRouteRoute._addFileChildren(RootRouteRouteChildren);

interface AuthRouteChildren {
  AuthSigninRoute: typeof AuthSigninRoute;
  AuthSignupRoute: typeof AuthSignupRoute;
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthSigninRoute: AuthSigninRoute,
  AuthSignupRoute: AuthSignupRoute,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "": typeof AuthRouteWithChildren;
  "/signin": typeof AuthSigninRoute;
  "/signup": typeof AuthSignupRoute;
  "/profile": typeof RootProfileRoute;
  "/settings": typeof RootSettingsRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "": typeof AuthRouteWithChildren;
  "/signin": typeof AuthSigninRoute;
  "/signup": typeof AuthSignupRoute;
  "/profile": typeof RootProfileRoute;
  "/settings": typeof RootSettingsRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/_root": typeof RootRouteRouteWithChildren;
  "/_auth": typeof AuthRouteWithChildren;
  "/_auth/signin": typeof AuthSigninRoute;
  "/_auth/signup": typeof AuthSignupRoute;
  "/_root/profile": typeof RootProfileRoute;
  "/_root/settings": typeof RootSettingsRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "" | "/signin" | "/signup" | "/profile" | "/settings";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "" | "/signin" | "/signup" | "/profile" | "/settings";
  id: "__root__" | "/" | "/_root" | "/_auth" | "/_auth/signin" | "/_auth/signup" | "/_root/profile" | "/_root/settings";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  RootRouteRoute: typeof RootRouteRouteWithChildren;
  AuthRoute: typeof AuthRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RootRouteRoute: RootRouteRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
};

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_root",
        "/_auth"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_root": {
      "filePath": "_root/route.tsx",
      "children": [
        "/_root/profile",
        "/_root/settings"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/signin",
        "/_auth/signup"
      ]
    },
    "/_auth/signin": {
      "filePath": "_auth/signin.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.tsx",
      "parent": "/_auth"
    },
    "/_root/profile": {
      "filePath": "_root/profile.tsx",
      "parent": "/_root"
    },
    "/_root/settings": {
      "filePath": "_root/settings.tsx",
      "parent": "/_root"
    }
  }
}
ROUTE_MANIFEST_END */
