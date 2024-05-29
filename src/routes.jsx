import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Inicio",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Contacto",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Nosotros",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
