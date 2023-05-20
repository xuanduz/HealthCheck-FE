import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { defaultPageInfo } from "../../types.data";

export const clinicAtom = atomFamily({
  key: "clinicAtom",
  default: (params: any) => ({ ...params }),
});

export const clinicSelector = selector({
  key: "clinicPatientSelector",
  get: async ({ get }) => {
    let query = get(clinicAtom(defaultPageInfo));
    let pageData = await axios.post(`${process.env.REACT_APP_API}/clinic/filter`);
    return pageData;
  },
});

// export const clinicsSelector = selector({
//   key: "clinicsSelector",
//   get: async ({ get }) => {
//     const listClinics = await axios.get(
//       `${process.env.REACT_APP_API}/clinic/all`
//     );
//     console.log(">>> check ", listClinics);
//     return listClinics;
//   },
// });

// export const specialtiesSelector = selector({
//   key: "specialtiesSelector",
//   get: async ({ get }) => {
//     const listSpecialties = await axios.get(
//       `${process.env.REACT_APP_API}/specialty/all`
//     );
//     console.log(">>> check ", listSpecialties);
//     return listSpecialties;
//   },
// });
