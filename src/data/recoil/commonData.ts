import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const provincesSelector = selector({
  key: "provincesSelector",
  get: async ({ get }) => {
    const listProvinces = await axios.get(`${process.env.REACT_APP_API}/province/all`);
    return listProvinces;
  },
});

export const positionsSelector = selector({
  key: "positionsSelector",
  get: async ({ get }) => {
    const listPositions = await axios.get(`${process.env.REACT_APP_API}/position/all`);
    return listPositions;
  },
});

export const clinicsSelector = selector({
  key: "clinicsSelector",
  get: async ({ get }) => {
    const listClinics = await axios.get(`${process.env.REACT_APP_API}/clinic/all`);
    return listClinics;
  },
});

export const specialtiesSelector = selector({
  key: "specialtiesSelector",
  get: async ({ get }) => {
    const listSpecialties = await axios.get(`${process.env.REACT_APP_API}/specialty/all`);
    return listSpecialties;
  },
});

// const roleState = atom<string>({
//   key: "roleState",
//   default: cookies.get("role") || "",
// });

// export const roleSelector = selector({
//   key: "roleSelector",
//   get: ({ get }) => get(roleState),
//   set: ({ set }, newValue) => {
//     cookies.set("role", newValue);
//     set(roleState, newValue + "");
//   },
// });
