import routesFront from "../../routes/routesFront.routes";

export interface NavItems {
  id: number;
  label: string;
  link: string;
}

export const items: ReadonlyArray<NavItems> = [
  {
    id: 1,
    label: "Person",
    link: `/${routesFront.module}/${routesFront.person}`,
  },
  {
    id: 2,
    label: "Employe",
    link: `/${routesFront.module}/${routesFront.employee}`,
  },
];
